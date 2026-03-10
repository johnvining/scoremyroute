export interface ScoreRequest {
  origin: string;
  destination: string;
  travelMode: "driving" | "walking" | "bicycling" | "transit";
}

export interface ScorePiece {
  id: string;
  title: string;
  composer: string;
  duration: number;
  durationText: string;
  type: string;
  period: string;
  youtubeSearch: string;
  diffSeconds: number;
  diffPercent: number;
}

export interface ScoreResponse {
  travelDuration: number;
  travelDurationText: string;
  distance: string;
  pieces: ScorePiece[];
}
