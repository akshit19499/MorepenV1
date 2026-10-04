import { externalLinks } from "@morepen/shared";
import { CtaSection, PageHero, SectionIntro, ServiceCards } from "../components/sections/index.js";
import { ExtLink } from "../components/ui/index.js";

const priorities = [
  { title: "Water", text: "Treatment, reuse and supporting infrastructure." },
  { title: "Energy", text: "Solar initiatives and cleaner-energy priorities." },
  { title: "Waste & resources", text: "Responsible waste management and process choices." },
  { title: "Business continuity", text: "Infrastructure and operational risk management." },
  { title: "Customer qualification", text: "Relevant environmental and quality documentation." },
  { title: "Transparency", text: "Preserve monitoring and statutory records." }
];

export function SustainabilityPage() {
  return (
    <>
      <PageHero
        label="Responsible manufacturing"
        title={["Continuity for customers.", "Responsibility in operations."]}
        text="Environmental infrastructure, resource stewardship and quality discipline are part of the manufacturing platform."
        img="solar-2026.jpg"
        alt="Solar panels shown in Morepen Q1 FY27 presentation"
      />
      <SectionIntro
        kicker="Operating priorities"
        title={
          <>
            Responsible manufacturing.
            <br />
            Practical infrastructure.
          </>
        }
      >
        <p>
          The September 2026 management address describes a strengthened zero-liquid-discharge program at Baddi, water
          treatment and reuse, solar initiatives, cleaner energy and responsible waste management.
        </p>
        <p>The scope and performance of each site should be considered separately from the corporate narrative.</p>
      </SectionIntro>
      <section className="section pale">
        <div className="wrap">
          <ServiceCards items={priorities} />
        </div>
      </section>
      <SectionIntro
        kicker="Published records"
        title={
          <>
            Keep the evidence
            <br />
            accessible.
          </>
        }
      >
        <p>
          Historical monitoring records remain available in the existing archive while migration and completeness checks
          are undertaken.
        </p>
        <ExtLink href={externalLinks.environmental}>Environmental monitoring archive</ExtLink>
      </SectionIntro>
      <CtaSection />
    </>
  );
}
