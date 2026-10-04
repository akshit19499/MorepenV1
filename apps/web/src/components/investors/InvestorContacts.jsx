import { Fragment } from "react";
import { investorContacts } from "@morepen/shared";
import { SectionHeading } from "../sections/index.js";

function ContactCard({ contact }) {
  return (
    <article className={`investor-contact-card-v34${contact.iepf ? " iepf" : ""}`}>
      <h3>{contact.title}</h3>
      {contact.subhead && <span className="contact-subhead">{contact.subhead}</span>}
      <p>
        {contact.name && (
          <>
            <strong>{contact.name}</strong>
            <br />
          </>
        )}
        {contact.addressLines?.map((line) => (
          <Fragment key={line}>
            {line}
            <br />
          </Fragment>
        ))}
        {contact.phone && (
          <>
            <a href={contact.phone.href}>{contact.phone.label}</a>
            <br />
          </>
        )}
        <a href={`mailto:${contact.email}`}>{contact.email}</a>
      </p>
    </article>
  );
}

// Investor & shareholder contact directory.
export function InvestorContacts() {
  return (
    <section className="section investor-contacts-v34 investor-contacts-v35" id="investor-contacts">
      <div className="wrap">
        <SectionHeading
          kicker="Important contacts"
          title={
            <>
              Investor &amp; shareholder
              <br />
              contact directory.
            </>
          }
        >
          <p>Use the relevant contact below for investor, secretarial, fixed-deposit, IEPF or registrar-related matters.</p>
        </SectionHeading>
        <div className="investor-contact-grid-v34">
          {investorContacts.map((contact) => (
            <ContactCard contact={contact} key={contact.title} />
          ))}
        </div>
      </div>
    </section>
  );
}
