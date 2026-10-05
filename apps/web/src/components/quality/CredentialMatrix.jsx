import { credentialLogos, credentialTextBadges } from "@morepen/shared";
import { SectionHeading } from "../sections/index.js";
import { Photo } from "../ui/index.js";

// Consolidated regulatory-credential logo matrix (v51).
export function CredentialMatrix() {
  return (
    <section className="section quality-credential-section-v51">
      <div className="wrap">
        <SectionHeading
          kicker="Global regulatory & quality credentials"
          title={
            <>
              Recognised across
              <br />
              regulated markets.
            </>
          }
        >
          <p>
            The consolidated view brings together the regulatory credentials referenced across the website and current
            company materials. Applicability remains specific to the relevant site, product, filing and validity period.
          </p>
        </SectionHeading>
        <div className="quality-logo-grid-v51">
          {credentialLogos.map((logo) =>
            logo.file ? (
              <article className="quality-logo-card-v51" key={logo.file}>
                <Photo file={logo.file} alt={`${logo.name} logo`} />
              </article>
            ) : (
              <article className="quality-logo-card-v51 text-badge" key={logo.code} aria-label={logo.name}>
                <strong>{logo.code}</strong>
                <span>{logo.label}</span>
              </article>
            )
          )}
          {credentialTextBadges.map((badge) => (
            <article className="quality-logo-card-v51 text-badge" key={badge.code}>
              <strong>{badge.code}</strong>
              <span>{badge.label}</span>
            </article>
          ))}
        </div>
        <p className="quality-credential-note-v51">
          Regulatory logos and references indicate the relevant authority or framework; they should not be read as blanket
          approval of every Morepen site or product.
        </p>
      </div>
    </section>
  );
}
