import { Link } from "react-router-dom";

export function Section({ section }) {
  return (
    <section className="section">
      <div className="wrap section-grid">
        <div>
          <p className="eyebrow">{section.eyebrow}</p>
          <h2>{section.title}</h2>
        </div>
        <div>
          <p>{section.body}</p>
          {section.items && (
            <div className="feature-list">
              {section.items.map(([title, body]) => (
                <article key={title} className="feature-row">
                  <h3>{title}</h3>
                  <p>{body}</p>
                </article>
              ))}
            </div>
          )}
          {section.numbered && (
            <div className="numbered-grid">
              {section.numbered.map(([number, title, body]) => (
                <article key={number} className="numbered-card">
                  <span>{number}</span>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </article>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export function ProofBand() {
  return (
    <section className="proof-band">
      <div className="wrap proof-grid">
        <div>
          <strong>614 KL</strong>
          <span>Current installed API/CDMO reactor capacity</span>
        </div>
        <div>
          <strong>800 KL</strong>
          <span>Next milestone, planned</span>
        </div>
        <div>
          <strong>1000 KL</strong>
          <span>Subsequent milestone, proposed</span>
        </div>
        <div>
          <strong>1200 KL</strong>
          <span>Longer-term roadmap</span>
        </div>
      </div>
    </section>
  );
}

export function FinalCta({
  eyebrow = "Start a conversation",
  title = "Build the next program together.",
  body = "For APIs, development, analytical work or commercial manufacturing, start with a non-confidential discussion of your requirement.",
  action = "Partner with Morepen",
  to = "/contact"
} = {}) {
  return (
    <section className="final-cta">
      <div className="wrap">
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
        <p>{body}</p>
        <Link className="btn" to={to}>
          {action}
        </Link>
      </div>
    </section>
  );
}
