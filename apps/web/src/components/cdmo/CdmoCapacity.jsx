import { capacityRoadmap } from "@morepen/shared";
import { cdmoCapacityCards } from "../../content/cdmo.js";
import { FinancialCards, RoadmapGrid, SectionHeading } from "../sections/index.js";

// Dark manufacturing-platform band: installed capacity by site.
export function CdmoCapacity() {
  return (
    <section className="section dark">
      <div className="wrap">
        <SectionHeading
          kicker="Manufacturing platform"
          title={
            <>
              Development connected
              <br />
              to commercial-scale infrastructure.
            </>
          }
        >
          <p>
            Current installed capacity is presented separately from future expansion so customers can distinguish
            today's platform from the roadmap ahead.
          </p>
        </SectionHeading>
        <FinancialCards items={cdmoCapacityCards} className="cdmo-capacity-cards" />
      </div>
    </section>
  );
}

// Expansion roadmap tiles (614 → 800 → 1000 → 1200 KL).
export function CdmoExpansionRoadmap() {
  return (
    <section className="section cdmo-expansion-roadmap">
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
        <RoadmapGrid items={capacityRoadmap} />
        <p className="small-note">
          Roadmap: September 2026 AGM address. Future milestones are forward-looking and subject to customer programs,
          execution, regulatory readiness and formal commissioning.
        </p>
      </div>
    </section>
  );
}
