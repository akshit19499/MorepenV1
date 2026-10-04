import { AccreditationCarousel, SectionHeading } from "../sections/index.js";

// "Global quality & regulatory credentials" with the accreditation logo carousel.
export function CompanyCredentials() {
  return (
    <section className="section" id="credentials">
      <div className="wrap">
        <SectionHeading
          kicker="Global quality & regulatory credentials"
          title={
            <>
              Regulatory credibility
              <br />
              built over time.
            </>
          }
        >
          <p>
            Morepen's manufacturing and quality systems support customers across regulated markets. Regulatory approvals,
            inspections and registrations remain specific to the applicable site, product and filing.
          </p>
        </SectionHeading>
        <AccreditationCarousel />
      </div>
    </section>
  );
}
