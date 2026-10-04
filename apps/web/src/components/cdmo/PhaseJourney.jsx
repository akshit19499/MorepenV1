import { cdmoPhases } from "../../content/cdmo.js";
import { SectionHeading } from "../sections/index.js";

// Phase-appropriate solutions map (pre-clinical to commercial).
export function PhaseJourney() {
  return (
    <section className="section cdmo-phase-v29">
      <div className="wrap">
        <SectionHeading
          kicker="Phase-appropriate solutions"
          title={
            <>
              Across the drug
              <br />
              development cycle.
            </>
          }
        >
          <p>
            Support from early development through late development and commercial supply, with the workplan defined
            for each program.
          </p>
        </SectionHeading>
        <div className="phase-map">
          {cdmoPhases.map((phase) => (
            <article className="phase-card" key={phase.number}>
              <span>{phase.number}</span>
              <h3>{phase.title}</h3>
              <p>{phase.text}</p>
              <b aria-hidden="true">→</b>
            </article>
          ))}
        </div>
        <p className="small-note">
          This development-cycle framework illustrates potential service scope. Activities, deliverables and regulatory
          responsibilities are agreed program by program.
        </p>
      </div>
    </section>
  );
}
