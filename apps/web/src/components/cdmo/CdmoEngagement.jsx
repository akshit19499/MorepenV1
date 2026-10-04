import { cdmoEngagementModels } from "../../content/cdmo.js";
import { SectionHeading } from "../sections/index.js";

// Flexible engagement models: four-up grid.
export function CdmoEngagement() {
  return (
    <section className="section">
      <div className="wrap">
        <SectionHeading
          kicker="Flexible engagement"
          title={
            <>
              Start where the program
              <br />
              needs support.
            </>
          }
        >
          <p>
            A project may begin as a development package, analytical assignment, technology transfer or long-term
            manufacturing requirement. Scope, governance, confidentiality and responsibilities are defined program by
            program.
          </p>
        </SectionHeading>
        <div className="four-grid cdmo-engagement">
          {cdmoEngagementModels.map((model) => (
            <article key={model.title}>
              <h3>{model.title}</h3>
              <p>{model.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
