import { NextRequest, NextResponse } from "next/server";
import { findClosestPieces } from "@/lib/classical-pieces";
import type { ScoreRequest, ScoreResponse } from "@/lib/types";

// ── Rate limiting ────────────────────────────────────────────────────────────
// In-memory store — resets on cold start (acceptable for serverless).
// For persistent rate limiting across instances, replace with Upstash Redis.
const RATE_LIMIT_MAX = 10; // requests per window
const RATE_LIMIT_WINDOW_MS = 60 * 1000; // 1 minute
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();

  // Prune expired entries to prevent unbounded growth
  for (const [key, val] of rateLimitMap) {
    if (now > val.resetAt) rateLimitMap.delete(key);
  }

  const entry = rateLimitMap.get(ip);
  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return true;
  }
  if (entry.count >= RATE_LIMIT_MAX) return false;
  entry.count++;
  return true;
}

// ── Input validation ─────────────────────────────────────────────────────────
const MAX_LOCATION_LENGTH = 500;
const VALID_MODES = ["driving", "walking", "bicycling", "transit"] as const;
type ValidMode = (typeof VALID_MODES)[number];

// ── Handler ──────────────────────────────────────────────────────────────────
export async function POST(req: NextRequest) {
  // #5 — Cross-origin protection: if Origin header is present it must match host
  const origin = req.headers.get("origin");
  const host = req.headers.get("host");
  if (origin && host) {
    try {
      if (new URL(origin).host !== host) {
        return NextResponse.json({ error: "Forbidden." }, { status: 403 });
      }
    } catch {
      return NextResponse.json({ error: "Forbidden." }, { status: 403 });
    }
  }

  // #1 — Rate limiting
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0].trim() ?? "unknown";
  if (!checkRateLimit(ip)) {
    return NextResponse.json(
      { error: "Too many requests. Please wait a moment and try again." },
      { status: 429 }
    );
  }

  // #6 — Generic error for missing key
  const apiKey = process.env.GOOGLE_MAPS_API_KEY;
  if (!apiKey) {
    console.error("GOOGLE_MAPS_API_KEY is not configured.");
    return NextResponse.json(
      { error: "Service temporarily unavailable." },
      { status: 503 }
    );
  }

  let body: ScoreRequest;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const { origin: rawOrigin, destination: rawDestination, travelMode } = body;

  // #3 — Input type + length validation
  if (
    typeof rawOrigin !== "string" ||
    typeof rawDestination !== "string" ||
    !rawOrigin.trim() ||
    !rawDestination.trim()
  ) {
    return NextResponse.json(
      { error: "origin and destination are required." },
      { status: 400 }
    );
  }
  if (
    rawOrigin.length > MAX_LOCATION_LENGTH ||
    rawDestination.length > MAX_LOCATION_LENGTH
  ) {
    return NextResponse.json(
      { error: "Location input is too long." },
      { status: 400 }
    );
  }

  // #4 — Runtime travelMode allowlist
  const mode: ValidMode = VALID_MODES.includes(travelMode as ValidMode)
    ? (travelMode as ValidMode)
    : "transit";

  const mapsUrl = new URL(
    "https://maps.googleapis.com/maps/api/directions/json"
  );
  mapsUrl.searchParams.set("origin", rawOrigin.trim());
  mapsUrl.searchParams.set("destination", rawDestination.trim());
  mapsUrl.searchParams.set("mode", mode);
  mapsUrl.searchParams.set("key", apiKey);

  let mapsData: {
    status: string;
    routes?: Array<{
      legs?: Array<{
        duration?: { value: number; text: string };
        distance?: { value: number; text: string };
      }>;
    }>;
    error_message?: string;
  };

  try {
    const mapsRes = await fetch(mapsUrl.toString(), {
      next: { revalidate: 0 },
    });
    mapsData = await mapsRes.json();
  } catch (err) {
    console.error("Google Maps fetch error:", err);
    return NextResponse.json(
      { error: "Could not calculate route. Please try again." },
      { status: 502 }
    );
  }

  // #2 — Log Maps errors server-side, return generic message to client
  if (mapsData.status !== "OK") {
    console.error(
      "Google Maps API error:",
      mapsData.status,
      mapsData.error_message
    );
    return NextResponse.json(
      {
        error:
          mapsData.status === "NOT_FOUND" || mapsData.status === "ZERO_RESULTS"
            ? "Could not find a route between those locations."
            : "Could not calculate route. Please check your locations and try again.",
      },
      { status: 422 }
    );
  }

  const leg = mapsData.routes?.[0]?.legs?.[0];
  if (!leg?.duration) {
    console.error("No duration in Maps response.");
    return NextResponse.json(
      { error: "Could not calculate route. Please try again." },
      { status: 422 }
    );
  }

  const travelSeconds = leg.duration.value;
  const travelText = leg.duration.text;
  const distanceText = leg.distance?.text ?? "";

  if (travelSeconds <= 0) {
    return NextResponse.json(
      { error: "Could not calculate route. Please try again." },
      { status: 422 }
    );
  }

  const pieces = findClosestPieces(travelSeconds, 5).map((p) => ({
    id: p.id,
    title: p.title,
    composer: p.composer,
    duration: p.duration,
    durationText: formatDuration(p.duration),
    diffSeconds: p.diffSeconds,
    diffPercent: p.diffPercent,
  }));

  const response: ScoreResponse = {
    travelDuration: travelSeconds,
    travelDurationText: travelText,
    distance: distanceText,
    pieces,
  };

  return NextResponse.json(response);
}

function formatDuration(seconds: number): string {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = seconds % 60;
  if (h > 0) return `${h}h ${m}m`;
  if (m > 0 && s > 0) return `${m}m ${s}s`;
  if (m > 0) return `${m} min`;
  return `${s}s`;
}
