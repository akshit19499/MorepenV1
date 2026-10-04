import { documents } from "@morepen/shared";
import { SectionHeading } from "../sections/index.js";
import { ExtLink, GoLink } from "../ui/index.js";

// Quality & regulatory evidence band on the Manufacturing page (the V7 band,
// without the accreditation carousel used by QualityBand).
export function QualityEvidenceBand() {
  return (
    <section className="section ice credentials-band">
      <div className="wrap">
        <SectionHeading
          kicker="Quality & regulatory evidence"
          title={
            <>
              Confidence is built
              <br />
              in the details.
            </>
          }
        >
          <p>Inspection outcomes, certifications and awards have different meanings. The evidence and scope stay visible.</p>
        </SectionHeading>
        <div className="evidence-feature">
          <div>
            <span className="evidence-number">04</span>
            <p>
              Consecutive NIL Form 483
              <br />
              inspections reported
            </p>
          </div>
          <div>
            <span className="badge">MASULKHANA / 17 APRIL 2026</span>
            <h3>
              A dated, site-specific
              <br />
              quality milestone.
            </h3>
            <p>The latest disclosed inspection concluded without Form 483 observations.</p>
            <ExtLink href={documents.inspection}>Read the inspection disclosure</ExtLink>
          </div>
          <div>
            <GoLink to="quality">Quality & credentials</GoLink>
          </div>
        </div>
      </div>
    </section>
  );
}
