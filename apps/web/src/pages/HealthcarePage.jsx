import { HealthcareCards, HealthcareSubnav } from "../components/healthcare/index.js";
import { CtaSection, PageHero, SectionHeading, SectionIntro } from "../components/sections/index.js";
import { GoLink } from "../components/ui/index.js";
import { healthcareGuide } from "../content/healthcare.js";

export function HealthcarePage() {
  return (
    <>
      <PageHero
        label="Healthcare Businesses"
        title={["Distinct businesses.", "A shared healthcare purpose."]}
        text="Explore Medical Devices, prescription medicines and OTC consumer wellness. Three distinct business stories, each with its own audience and destination."
        simple
      />
      <HealthcareSubnav />
      <section className="section">
        <div className="wrap">
          <SectionHeading
            kicker="Three healthcare businesses"
            title={
              <>
                The brands you know.
                <br />
                The businesses behind them.
              </>
            }
          >
            <p>A clear corporate overview, with separate product-information, professional and consumer journeys.</p>
          </SectionHeading>
          <HealthcareCards />
        </div>
      </section>
      <SectionIntro
        kicker="Know where to go"
        title={
          <>
            The right information.
            <br />
            In the right place.
          </>
        }
        tone="pale"
      >
        {healthcareGuide.map((item) => (
          <p key={item.term}>
            <strong>{item.term}</strong>
            {item.text}
          </p>
        ))}
        <GoLink to="drug-product" className="text-link">
          Looking for drug-product development?
        </GoLink>
      </SectionIntro>
      <CtaSection
        title="Connect with the right business."
        text="Choose Medical Devices, Rx or OTC when introducing a business enquiry."
      />
    </>
  );
}
