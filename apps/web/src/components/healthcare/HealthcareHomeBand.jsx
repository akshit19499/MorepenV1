import { SectionHeading } from "../sections/SectionHeading.jsx";
import { GoLink } from "../ui/index.js";
import { HealthcareCards } from "./HealthcareCards.jsx";

export function HealthcareHomeBand() {
  return (
    <section className="section ice" id="healthcare-businesses">
      <div className="wrap">
        <SectionHeading
          kicker="Our healthcare businesses"
          title={
            <>
              Different needs.
              <br />
              Distinct businesses.
            </>
          }
        >
          <div>
            <p>
              Medical Devices, Rx and OTC each have a clear place in our healthcare story, alongside Morepen's
              pharmaceutical development and manufacturing platform.
            </p>
            <GoLink to="healthcare" className="text-link">
              Explore Healthcare Businesses
            </GoLink>
          </div>
        </SectionHeading>
        <HealthcareCards />
      </div>
    </section>
  );
}
