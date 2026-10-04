import { companyTimeline } from "@morepen/shared";
import { SectionHeading } from "../sections/index.js";

// "Our journey" milestone timeline; target of the hero's "Explore our journey" button.
export function CompanyTimeline() {
  return (
    <section className="section pale" id="company-journey">
      <div className="wrap">
        <SectionHeading
          kicker="Our journey"
          title={
            <>
              From API beginnings
              <br />
              to a global platform.
            </>
          }
        >
          <p>
            Morepen's journey shows a consistent pattern: build scientific depth, earn regulatory credibility, scale
            manufacturing and extend into new healthcare and development capabilities.
          </p>
        </SectionHeading>
        <div className="company-timeline">
          {companyTimeline.map((milestone) => (
            <article className="company-milestone" key={milestone.period}>
              <strong>{milestone.period}</strong>
              <span></span>
              <h3>{milestone.title}</h3>
              <p>{milestone.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
