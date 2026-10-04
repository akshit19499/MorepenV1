import {
  CdmoCapacity,
  CdmoEngagement,
  CdmoExpansionRoadmap,
  CdmoExpertise,
  CdmoLifecycle,
  CdmoServices,
  PhaseJourney
} from "../components/cdmo/index.js";
import { CtaSection, PageHero, QualityBand } from "../components/sections/index.js";
import { GoLink } from "../components/ui/index.js";

export function CdmoPage() {
  return (
    <>
      <PageHero
        label="CDMO & custom development"
        title={["From key intermediates", "to commercial supply."]}
        text="Morepen brings chemistry, analytical science, scale-up, drug-product development, quality systems and manufacturing together in one phase-appropriate development and supply platform."
        img="cdmo-hero-facility-v32.jpg"
        alt="Morepen CDMO manufacturing facility"
        action={
          <div className="buttons">
            <GoLink to="contact?service=CDMO">Discuss your program</GoLink>
            <GoLink to="manufacturing" className="btn outline">
              Manufacturing platform
            </GoLink>
          </div>
        }
      />
      <CdmoLifecycle />
      <CdmoServices />
      <PhaseJourney />
      <CdmoExpertise />
      <CdmoCapacity />
      <CdmoExpansionRoadmap />
      <QualityBand />
      <CdmoEngagement />
      <CtaSection
        title="Discuss your molecule or manufacturing program."
        text="Share the development stage, chemistry, target scale and regulatory market. Confidential information follows the appropriate agreement."
      />
    </>
  );
}
