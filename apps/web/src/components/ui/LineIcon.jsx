const PATHS = {
  heart: "M24 39 8 24C-4 11 13 0 24 13 35 0 52 11 40 24Z M8 24h10l4-8 5 15 4-7h10",
  metabolic: "M24 5C24 5 9 21 9 31a15 15 0 0 0 30 0C39 21 24 5 24 5Z M17 31h14 M24 24v14",
  lungs: "M22 5v17 M26 5v17 M22 18C9 10 5 25 5 35c0 7 13 8 17-1V18 M26 18c13-8 17 7 17 17 0 7-13 8-17-1V18",
  flow: "M4 13h13c12 0 4 22 18 22h9 M4 35h13c12 0 4-22 18-22h9 M40 8l5 5-5 5 M40 30l5 5-5 5",
  neural:
    "M24 24 8 10 M24 24 40 10 M24 24 8 38 M24 24 40 38 M24 24v-19 M24 24v19 M4 10a4 4 0 1 0 8 0a4 4 0 1 0-8 0 M36 10a4 4 0 1 0 8 0a4 4 0 1 0-8 0 M4 38a4 4 0 1 0 8 0a4 4 0 1 0-8 0 M36 38a4 4 0 1 0 8 0a4 4 0 1 0-8 0",
  circle: "M24 5a19 19 0 1 1-.1 0 M15 24h18 M24 15v18",
  shield: "M24 4 42 11v13c0 11-18 20-18 20S6 35 6 24V11Z M15 24l6 6 13-14",
  award: "M24 6a13 13 0 1 1-.1 0 M16 30 11 45l13-6 13 6-5-15"
};

// Thin-line pictograms used by API categories and quality credentials.
export function LineIcon({ name }) {
  return (
    <svg
      viewBox="0 0 48 48"
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d={PATHS[name] || PATHS.shield} />
    </svg>
  );
}
