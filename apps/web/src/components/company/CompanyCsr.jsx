import { csrFocusAreas, csrLinks } from "../../content/company.js";
import { Eyebrow, ExtLink } from "../ui/index.js";

// Corporate social responsibility section.
export function CompanyCsr() {
  return (
    <section className="section csr-section" id="csr">
      <div className="wrap">
        <div className="csr-intro">
          <div>
            <Eyebrow>Corporate social responsibility</Eyebrow>
            <h2>
              Creating shared value
              <br />
              in the communities around us.
            </h2>
            <p>
              Morepen's CSR framework focuses on practical, sustained interventions in healthcare, education and skills,
              environmental stewardship and rural development.
            </p>
            <div className="csr-stat">
              <strong>INR 25 million</strong>
              <span>CSR expenditure reported for FY26</span>
            </div>
            <div className="csr-links">
              {csrLinks.map((link) => (
                <ExtLink key={link.href} href={link.href}>
                  {link.label}
                </ExtLink>
              ))}
            </div>
          </div>
          <div className="csr-focus-grid">
            {csrFocusAreas.map((area) => (
              <article className="csr-focus-card" key={area.kicker}>
                <small>{area.kicker}</small>
                <h3>{area.title}</h3>
                <p>{area.text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
