import { platformServices } from "../../content/home.js";
import { SectionHeading, ServiceCards } from "../sections/index.js";
import { GoLink } from "../ui/index.js";

// "API strength. Connected capabilities." — the three pharmaceutical service tiles.
export function PlatformSection() {
  return (
    <section className="section">
      <div className="wrap">
        <SectionHeading
          kicker="Pharmaceutical development & manufacturing"
          title={
            <>
              API strength.
              <br />
              Connected capabilities.
            </>
          }
        >
          <p>
            Morepen combines established API manufacturing with expanding development, analytical, scale-up and
            commercial manufacturing capabilities for global pharmaceutical partners.
          </p>
        </SectionHeading>
        <ServiceCards items={platformServices} />
        <div className="section-tail">
          <GoLink to="api" className="text-link">
            Explore API portfolio
          </GoLink>
          <GoLink to="cdmo" className="text-link">
            Explore CDMO services
          </GoLink>
        </div>
      </div>
    </section>
  );
}
