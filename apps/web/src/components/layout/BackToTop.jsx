import { prefersReducedMotion } from "../../lib/links.js";

export function BackToTop() {
  return (
    <button
      className="back-top"
      aria-label="Back to top"
      title="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: prefersReducedMotion() ? "instant" : "smooth" })}
    >
      ↑
    </button>
  );
}
