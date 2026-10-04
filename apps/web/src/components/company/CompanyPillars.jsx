import { companyPillars } from "../../content/company.js";
import { SectionHeading } from "../sections/index.js";

// "The company today": four numbered pillars.
export function CompanyPillars() {
  return (
    <section className="section">
      <div className="wrap">
        <SectionHeading
          kicker="The company today"
          title={
            <>
              A manufacturing foundation.
              <br />A broader future.
            </>
          }
        >
          <p>
            Morepen's transformation is not a departure from its roots. It is the next stage of a business built on
            chemistry, manufacturing experience, regulatory discipline and service to healthcare.
          </p>
        </SectionHeading>
        <div className="company-pillars">
          {companyPillars.map((pillar) => (
            <article key={pillar.number}>
              <span>{pillar.number}</span>
              <h3>{pillar.title}</h3>
              <p>{pillar.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
