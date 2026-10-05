import { useLocation } from "react-router-dom";
import { contactOffices, contactPlants, contactUsaOffice, externalLinks, importantContacts } from "@morepen/shared";
import { AdverseEventsNotice, ContactBanner, ContactCard, QueriesForm } from "../components/contact/index.js";

export function ContactPage() {
  const location = useLocation();
  return (
    <>
      <ContactBanner />
      <section className="section contact-section">
        <div className="wrap">
          <div className="contact-card-grid">
            {contactOffices.map((card) => (
              <ContactCard key={card.id} card={card} />
            ))}
          </div>
          <p className="contact-support-link">
            For customer support Fill{" "}
            <a href={externalLinks.customerSupport} target="_blank" rel="noopener">
              Customer Support Form
            </a>
          </p>
          <h2 className="contact-section-title" id="queries">
            Queries
          </h2>
          {/* A new ?service / ?product query starts a fresh form. */}
          <QueriesForm key={location.search} />
          <AdverseEventsNotice />
          <div className="contact-card-grid">
            {contactPlants.map((card) => (
              <ContactCard key={card.id} card={card} />
            ))}
          </div>
          <div className="contact-card-grid">
            <ContactCard card={contactUsaOffice} />
            <ContactCard card={importantContacts} />
          </div>
        </div>
      </section>
    </>
  );
}
