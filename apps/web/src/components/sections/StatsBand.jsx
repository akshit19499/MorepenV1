import { metrics } from "@morepen/shared";
import { useCountUp } from "../../hooks/useCountUp.js";

function StatCounter({ metric, index }) {
  const [ref, value] = useCountUp(metric.value, index);
  return (
    <div className="stat">
      <strong className="stat-counter" data-count={metric.value} data-suffix={metric.suffix} ref={ref}>
        <span className="counter-number">{value}</span>
        <span className="counter-suffix">{metric.suffix}</span>
      </strong>
      <small>{metric.label}</small>
    </div>
  );
}

// Key-figure strip under the Home and Company heroes, with animated counters.
export function StatsBand() {
  return (
    <section className="stats">
      <div className="wrap">
        <div className="stats-grid">
          {metrics.map((metric, index) => (
            <StatCounter key={metric.label} metric={metric} index={index} />
          ))}
        </div>
        <p className="stat-note">
          Current installed API/CDMO reactor capacity: 614 KL. Inspection milestone: company disclosure dated 17 April 2026.
          Site-specific qualification applies.
        </p>
      </div>
    </section>
  );
}
