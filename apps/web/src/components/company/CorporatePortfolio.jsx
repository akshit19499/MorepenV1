import { portfolioCards } from "../../content/company.js";
import { SectionHeading } from "../sections/index.js";
import { GoLink } from "../ui/index.js";

// "One corporate view. Distinct business stories." — the two-column business map.
export function CorporatePortfolio() {
  return (
    <section className="section ice portfolio-map">
      <div className="wrap">
        <SectionHeading
          kicker="A clear business architecture"
          title={
            <>
              One corporate view.
              <br />
              Distinct business stories.
            </>
          }
        >
          <p>
            Our website makes each business easy to find, without confusing pharmaceutical partner services with
            healthcare products.
          </p>
        </SectionHeading>
        <div className="portfolio-grid">
          {portfolioCards.map((card) => (
            <article key={card.badge}>
              <span className="badge">{card.badge}</span>
              <h3>
                {card.title[0]}
                <br />
                {card.title[1]}
              </h3>
              <p>{card.text}</p>
              <div className="portfolio-links">
                {card.links.map((link) => (
                  <GoLink key={link.to} to={link.to} className="text-link">
                    {link.label}
                  </GoLink>
                ))}
              </div>
            </article>
          ))}
        </div>
        <p className="small-note">
          This is a website navigation structure, not a legal-entity or financial-consolidation chart. Current corporate
          relationships must be confirmed against the latest approved disclosures.
        </p>
      </div>
    </section>
  );
}
