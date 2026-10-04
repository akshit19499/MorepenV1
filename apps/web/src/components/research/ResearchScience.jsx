import { rdMetrics, rdPrinciples } from "../../content/research.js";
import { SectionHeading } from "../sections/index.js";

// "Science at work": headline metrics and the four R&D principles.
export function ResearchScience() {
  return (
    <section className="section">
      <div className="wrap">
        <SectionHeading
          kicker="Science at work"
          title={
            <>
              Research that moves
              <br />
              towards execution.
            </>
          }
        >
          <p>
            R&amp;D is being positioned as an engine for new products, customer acquisition and higher-value development
            work—not as an isolated laboratory function.
          </p>
        </SectionHeading>
        <div className="rd-metrics">
          {rdMetrics.map((metric) => (
            <div className="rd-metric" key={metric.value}>
              <strong>{metric.value}</strong>
              <span>{metric.label}</span>
            </div>
          ))}
        </div>
        <div className="rd-principles">
          {rdPrinciples.map((principle, index) => (
            <article className="rd-principle" key={principle.title}>
              <div className="rd-principle-kicker">
                <span className="rd-principle-serial">{String(index + 1).padStart(2, "0")}</span>
              </div>
              <h3>{principle.title}</h3>
              <p>{principle.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
