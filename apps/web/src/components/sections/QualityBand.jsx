import { documents } from "@morepen/shared";
import { ExtLink, GoLink, Photo } from "../ui/index.js";
import { AccreditationCarousel } from "./AccreditationCarousel.jsx";
import { SectionHeading } from "./SectionHeading.jsx";

// Quality & regulatory compliance band shared by Home, CDMO and API pages.
export function QualityBand() {
  return (
    <section className="section ice credentials-band">
      <div className="wrap">
        <SectionHeading
          kicker="Quality & regulatory compliance"
          title={
            <>
              Global trust is earned
              <br />
              through repeatable systems.
            </>
          }
        >
          <p>
            Quality, data integrity, regulatory readiness and continuity of supply are central to long-term pharmaceutical
            partnerships.
          </p>
        </SectionHeading>
        <div className="evidence-feature regulatory-evidence">
          <div className="regulatory-logo-cell">
            <Photo file="reg-usfda-v26.png" alt="United States Food and Drug Administration logo" className="regulatory-logo" />
            <span className="evidence-number">04</span>
            <p>Consecutive USFDA inspections reported with Nil Form 483 observations</p>
          </div>
          <div>
            <span className="badge">MASULKHANA / 17 APRIL 2026</span>
            <h3>A site-specific quality milestone.</h3>
            <p>
              The April 2026 inspection at the Masulkhana API facility concluded without Form 483 observations. Morepen's
              wider regulatory footprint includes engagement across multiple regulated markets, with scope varying by site,
              product and filing.
            </p>
            <ExtLink href={documents.inspection}>Read the inspection disclosure</ExtLink>
          </div>
          <div>
            <GoLink to="quality">Quality & credentials</GoLink>
          </div>
        </div>
        <AccreditationCarousel />
      </div>
    </section>
  );
}
