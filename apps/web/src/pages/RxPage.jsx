import { PageHero, SectionHeading, SectionIntro } from "../components/sections/index.js";
import { GoLink } from "../components/ui/index.js";
import { rxDistinctionCards, rxProfileCards, rxSupport } from "../content/healthcare.js";
import { BadgedServiceGrid, BrandVisual, HealthcareSubnav, SupportPanel } from "../components/healthcare/index.js";

export function RxPage() {
  return (
    <>
      <PageHero
        label="Rx & Prescription Medicines"
        parent
        title={["Prescription medicines.", "A dedicated business."]}
        text="A professional, therapy-led view of the Rx business, separate from Morepen's drug-product development services for pharmaceutical partners."
        action={
          <div className="buttons">
            <GoLink to="contact?service=Rx">Contact the Rx business</GoLink>
            <GoLink to="drug-product" className="btn outline">
              Looking for development services?
            </GoLink>
          </div>
        }
        visual={<BrandVisual kind="rx" large />}
      />
      <HealthcareSubnav />
      <SectionIntro
        kicker="A professional business perspective"
        title={
          <>
            A place for Rx.
            <br />A clear role for the visitor.
          </>
        }
      >
        <p>
          This section introduces the prescription-medicines business and routes professional enquiries to the
          appropriate team.
        </p>
        <p>
          It is not a treatment guide, a consumer pharmacy or a substitute for prescribing information. Product-specific
          content will require medical and regulatory review before publication.
        </p>
        <p className="small-note">
          The current Rx entity wording, therapy coverage and brand portfolio are awaiting business and
          company-secretarial sign-off. Historical packshots are used only to review the brand-led design; they are not a
          current portfolio or availability claim.
        </p>
      </SectionIntro>
      <section className="section pale">
        <div className="wrap">
          <SectionHeading
            kicker="Rx business profile"
            title={
              <>
                Present the business.
                <br />
                Keep the detail approved.
              </>
            }
          >
            <p>A structured place for the approved portfolio, professional engagement and access channels.</p>
          </SectionHeading>
          <BadgedServiceGrid items={rxProfileCards} />
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          <SectionHeading
            kicker="An important distinction"
            title={
              <>
                Rx is not the same
                <br />
                as Drug Product development.
              </>
            }
          />
          <div className="portfolio-grid distinction-grid">
            {rxDistinctionCards.map((card) => (
              <article key={card.title}>
                <span className="badge">{card.badge}</span>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
                <GoLink to={card.to} className="text-link">
                  {card.label}
                </GoLink>
              </article>
            ))}
          </div>
          <p className="small-note">
            An ANDA submission is not approval. Development capabilities do not establish authorization for a particular
            product or market.
          </p>
        </div>
      </section>
      <SupportPanel items={rxSupport} tone="ice" />
    </>
  );
}
