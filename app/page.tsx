"use client";

import { useState, useRef } from "react";
import type { ScoreResponse, ScorePiece } from "@/lib/types";

type TravelMode = "driving" | "walking" | "bicycling" | "transit";

const TRAVEL_MODES: { value: TravelMode; label: string; emoji: string; duration: string; word: string }[] = [
  { value: "transit",   label: "Transit",  emoji: "🚌", duration: "2.5s", word: "Bus"  },
  { value: "driving",   label: "Driving",  emoji: "🚗", duration: "1.5s", word: "Auto" },
  { value: "walking",   label: "Walking",  emoji: "🚶", duration: "6s",   word: "Fuß"  },
  { value: "bicycling", label: "Cycling",  emoji: "🚲", duration: "3.5s", word: "Rad"  },
];

function PieceCard({ piece, rank }: { piece: ScorePiece; rank: number }) {
  const isExact = piece.diffPercent <= 2;

  return (
    <div className="flex items-start justify-between gap-4 border-b border-stone-300 py-3">
      <div className="min-w-0">
        <p className="text-xs text-stone-400">{piece.composer}</p>
        <p className="text-sm text-stone-900 leading-snug">{piece.title}</p>
      </div>
      <div className="text-right shrink-0 flex items-baseline gap-2">
        <span className="text-xs text-stone-400 italic">
          {isExact ? "exact" : `±${piece.diffPercent}%`}
        </span>
        <span className="text-sm tabular-nums text-stone-900">
          {piece.durationText}
        </span>
      </div>
    </div>
  );
}

export default function Home() {
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [travelMode, setTravelMode] = useState<TravelMode>("transit");
  const [emojiKey, setEmojiKey] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<ScoreResponse | null>(null);
  const resultsRef = useRef<HTMLDivElement>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!origin.trim() || !destination.trim()) return;

    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const res = await fetch("/api/score", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ origin, destination, travelMode }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Something went wrong. Please try again.");
      } else {
        setResult(data);
        setTimeout(() => {
          resultsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      }
    } catch {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {/* Header — full width so emoji travels edge to edge */}
      <header className="relative border-b border-stone-900 text-center overflow-x-hidden">
        <div className="max-w-2xl mx-auto px-6 pt-16 pb-10">
          <h1 className="text-4xl text-stone-900 tracking-tight leading-none">
            {TRAVEL_MODES.find(m => m.value === travelMode)!.word} und Reu
          </h1>
          <p className="text-sm text-stone-500 mt-2">
            Find a score for your trip.
          </p>
        </div>

        {emojiKey > 0 && (() => {
          const mode = TRAVEL_MODES.find(m => m.value === travelMode)!;
          return (
            <div
              key={emojiKey}
              className="absolute left-0 text-2xl pointer-events-none animate-travel"
              style={{ bottom: 0, animationDuration: mode.duration }}
            >
              {mode.emoji}
            </div>
          );
        })()}
      </header>

      <main className="max-w-2xl mx-auto px-6">

      {/* Form */}
      <section className="py-10">
        <form onSubmit={handleSubmit}>

          {/* From / To */}
          <div className="mb-8">
            <div className="flex items-end gap-4 mb-5">
              <div className="flex-1">
                <input
                  type="text"
                  value={origin}
                  onChange={(e) => setOrigin(e.target.value)}
                  placeholder="origin"
                  required
                  className="w-full bg-transparent border-0 border-b border-stone-400 pb-1 text-stone-900 placeholder-stone-300 focus:border-stone-900 focus:outline-none transition-colors text-base"
                />
              </div>
              <div className="text-stone-400 pb-1 text-base leading-none">→</div>
              <div className="flex-1">
                <input
                  type="text"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  placeholder="destination"
                  required
                  className="w-full bg-transparent border-0 border-b border-stone-400 pb-1 text-stone-900 placeholder-stone-300 focus:border-stone-900 focus:outline-none transition-colors text-base"
                />
              </div>
            </div>
          </div>

          {/* Mode + Submit on one line */}
          <div className="flex items-center justify-between">
            <div className="flex gap-5">
              {TRAVEL_MODES.map((mode) => (
                <button
                  key={mode.value}
                  type="button"
                  onClick={() => { setTravelMode(mode.value); setEmojiKey(k => k + 1); }}
                  className={`text-sm transition-colors pb-0.5 ${
                    travelMode === mode.value
                      ? "text-stone-900 border-b border-stone-900"
                      : "text-stone-400 hover:text-stone-600"
                  }`}
                >
                  {mode.label}
                </button>
              ))}
            </div>

            <button
              type="submit"
              disabled={loading || !origin.trim() || !destination.trim()}
              className="text-sm text-stone-900 hover:italic disabled:text-stone-300 disabled:cursor-not-allowed transition-all"
            >
              {loading ? "Searching…" : "Go!"}
            </button>
          </div>
        </form>
      </section>

      {/* Error */}
      {error && (
        <p className="text-sm text-red-500 italic mb-8">{error}</p>
      )}

      {/* Results */}
      {result && !loading && (
        <section ref={resultsRef} className="pb-24">

          {/* Journey summary */}
          <div className="mb-8">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-stone-600 italic text-sm">
                  {origin} to {destination}
                </p>
                {result.distance && (
                  <p className="text-xs text-stone-400 mt-0.5">{result.distance}</p>
                )}
              </div>
              <p className="text-5xl text-stone-900 leading-none tabular-nums">
                {result.travelDurationText}
              </p>
            </div>
          </div>

          {/* Pieces */}
          <div className="border-t border-stone-300">
            {result.pieces.map((piece, i) => (
              <PieceCard key={piece.id} piece={piece} rank={i} />
            ))}
          </div>

        </section>
      )}

    </main>

    <footer className="fixed bottom-0 left-0 right-0 border-t border-stone-200 bg-[#f7f5f2] py-3 text-center">
      <p className="text-xs text-stone-400">
        Created (but why?) by{" "}
        <a
          href="https://jvining.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-stone-600 hover:text-stone-900 transition-colors"
        >
          John Vining
        </a>
      </p>
    </footer>
    </>
  );
}
