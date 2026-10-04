import { PlantGrid, QualityEvidenceBand } from "../components/manufacturing/index.js";
import {
  CtaSection,
  EditorialImage,
  PageHero,
  RoadmapGrid,
  SectionHeading,
  SectionIntro
} from "../components/sections/index.js";
import { Eyebrow, GoLink } from "../components/ui/index.js";
import { manufacturingRoadmap } from "../content/manufacturing.js";

export function ManufacturingPage() {
  return (
    <>
      <PageHero
        label="Manufacturing & quality"
        title={["Chemistry at scale.", "Infrastructure with purpose."]}
        text="A 614 KL API and CDMO manufacturing platform, with the technical detail to support a focused qualification discussion."
        img="baddi-aerial-2026.jpg"
        alt="Morepen Baddi campus"
        action={<GoLink to="contact?service=Manufacturing">Discuss manufacturing fit</GoLink>}
      />
      <section className="section">
        <div className="wrap">
          <SectionHeading
            kicker="Manufacturing network"
            title={
              <>
                Two sites.
                <br />
                Clear capabilities.
              </>
            }
          >
            <p>
              Current plant capabilities are presented for technical orientation. Equipment availability, campaign fit and
              site suitability are assessed for each program.
            </p>
          </SectionHeading>
          <PlantGrid />
          <p className="small-note">
            Current installed figures are shown for technical orientation. MSL and SRP terminology should be expanded in
            the production website after engineering approval. Equipment scopes are different and should not be combined
            as reactor capacity.
          </p>
        </div>
      </section>
      <section className="section pale">
        <div className="wrap split">
          <EditorialImage file="scale-up-2026.jpg" alt="Morepen process equipment" />
          <div>
            <Eyebrow>Scale-up is a connected discipline</Eyebrow>
            <h2>Beyond reactor volume.</h2>
            <p>
              Process equipment, utilities, finishing areas, quality-control infrastructure and environmental systems
              support the manufacturing program.
            </p>
            <p>
              Discuss equipment fit, process requirements, technical transfer and quality responsibilities before a
              campaign is committed.
            </p>
            <GoLink to="cdmo/scale-up">Scale-up & technology transfer</GoLink>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          <SectionHeading
            kicker="The expansion roadmap"
            title={
              <>
                Current scale.
                <br />
                Future milestones.
              </>
            }
          >
            <p>Later milestones remain forward-looking, subject to customer programs, execution and regulatory readiness.</p>
          </SectionHeading>
          <RoadmapGrid items={manufacturingRoadmap} />
          <p className="small-note">
            Roadmap: September 2026 AGM address. Future milestones are not commissioned or uncommitted capacity.
          </p>
        </div>
      </section>
      <QualityEvidenceBand />
      <SectionIntro
        kicker="Responsible operations"
        title={
          <>
            Infrastructure for
            <br />
            business continuity.
          </>
        }
        tone="ice"
      >
        <p>
          Water treatment and reuse, solar initiatives, cleaner energy and responsible waste management support the
          operating platform.
        </p>
        <GoLink to="sustainability" className="text-link">
          Responsible manufacturing
        </GoLink>
      </SectionIntro>
      <CtaSection />
    </>
  );
}
