import { apiListUrl, apiSupportCards } from "@morepen/shared";
import { SectionHeading } from "../sections/index.js";
import { ExtLink, GoLink } from "../ui/index.js";

// Dossiers, combinations, intermediates and regulatory-package support cards.
export function ApiSupport() {
  return (
    <section className="section">
      <div className="wrap">
        <SectionHeading kicker="Documentation & portfolio support" title="Beyond individual APIs.">
          <p>
            Morepen's API platform also includes dossier support, combinations, intermediates and market-specific
            regulatory packages that support customer development and market-entry programs.
          </p>
        </SectionHeading>
        <div className="api-support-grid api-v43-support-grid">
          {apiSupportCards.map((card) => (
            <article className="api-support-card" key={card.title}>
              <strong>{card.value}</strong>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </article>
          ))}
        </div>
        <div className="api-support-actions-v29">
          <div>
            <h3>Need the complete published portfolio?</h3>
            <p>
              Open the complete API product list, then contact the API team to confirm current specifications,
              documentation, territory and supply availability.
            </p>
          </div>
          <div className="buttons">
            <ExtLink href={apiListUrl} className="btn">
              View complete API list
            </ExtLink>
            <GoLink to="contact?service=API" className="btn outline">
              API enquiry
            </GoLink>
          </div>
        </div>
      </div>
    </section>
  );
}
