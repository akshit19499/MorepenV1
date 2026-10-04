import { cdmoLifecycle } from "../../content/cdmo.js";
import { SectionHeading } from "../sections/index.js";

// Five-stage development lifecycle strip.
export function CdmoLifecycle() {
  return (
    <section className="section">
      <div className="wrap">
        <SectionHeading
          kicker="End-to-end development"
          title={
            <>
              One partner across
              <br />
              the development lifecycle.
            </>
          }
        >
          <p>
            Programs can begin with a route, key intermediate, API/drug substance challenge, analytical question,
            formulation requirement or technology transfer and progress toward clinical or commercial supply.
          </p>
        </SectionHeading>
        <div className="cdmo-lifecycle">
          {cdmoLifecycle.map((stage, index) => (
            <article key={stage.title}>
              <span>{`0${index + 1}`}</span>
              <small>{stage.stage}</small>
              <h3>{stage.title}</h3>
              <p>{stage.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
