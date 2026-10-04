import { disclosureSections } from "@morepen/shared";
import { SectionHeading } from "../sections/index.js";

// Proposed information architecture for the statutory library (investorDisclosuresV36).
export function InvestorDisclosures() {
  return (
    <section className="section" id="disclosure-library">
      <div className="wrap">
        <SectionHeading
          kicker="Investor information architecture"
          title={
            <>
              Everything else.
              <br />
              Compact and structured.
            </>
          }
        >
          <p>
            This is the proposed organisation for the remaining investor information. The cards demonstrate the
            navigation model only; document data can be loaded dynamically later.
          </p>
        </SectionHeading>
        <div className="investor-library-preview-v36">
          {disclosureSections.map((item, index) => (
            <article className="investor-library-card-v36" key={item.title}>
              <small>{String(index + 1).padStart(2, "0")} / DYNAMIC SECTION</small>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <div className="investor-library-chips-v36">
                {item.chips.map((chip) => (
                  <span key={chip}>{chip}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
        <div className="investor-dynamic-note-v36">
          <strong>Development note:</strong> each of these sections should be CMS-driven, with financial-year / quarter
          filters and document-type tags. No live-site archive links are shown in this preview.
        </div>
      </div>
    </section>
  );
}
