import { esgRows } from "../../content/company.js";
import { EditorialImage, FeatureList } from "../sections/index.js";
import { Eyebrow, GoLink } from "../ui/index.js";

// "Responsible manufacturing" split section: solar photo + numbered ESG rows.
export function EsgSection() {
  return (
    <section className="section ice">
      <div className="wrap split">
        <EditorialImage file="solar-2026.jpg" alt="Solar panels at Morepen manufacturing operations" />
        <div>
          <Eyebrow>Responsible manufacturing</Eyebrow>
          <h2>
            ESG as resilience,
            <br />
            continuity and responsibility.
          </h2>
          <p>
            Morepen's approach links environmental performance with compliance, customer expectations and business
            continuity. During FY26, the company reported investments in zero-liquid-discharge infrastructure, renewable
            energy, cleaner fuels and resource-efficiency projects.
          </p>
          <FeatureList rows={esgRows} />
          <GoLink to="sustainability" className="text-link">
            Responsible manufacturing
          </GoLink>
        </div>
      </div>
    </section>
  );
}
