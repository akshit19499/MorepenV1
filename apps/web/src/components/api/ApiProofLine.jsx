import { apiProofPoints } from "../../content/api.js";

// Three-point proof strip under the API hero.
export function ApiProofLine() {
  return (
    <section className="api-proof-line api-v43-proof">
      <div className="wrap">
        {apiProofPoints.map((point) => (
          <span key={point.title}>
            <strong>{point.title}</strong> {point.text}
          </span>
        ))}
      </div>
    </section>
  );
}
