import { adverseEventContact, externalLinks } from "@morepen/shared";

export function AdverseEventsNotice() {
  return (
    <aside className="contact-notice" aria-label="Adverse events and product complaints">
      <p>
        For Adverse events or product complaints, please fill{" "}
        <a href={externalLinks.adverseEvent} target="_blank" rel="noopener">
          Adverse event form
        </a>{" "}
        and email to <a href={`mailto:${adverseEventContact.email}`}>{adverseEventContact.email}</a> or contact our
        country-wise helpline numbers.
      </p>
      <p>
        US Customer Toll-Free Number: <a href={adverseEventContact.usTollFree.href}>{adverseEventContact.usTollFree.label}</a>
      </p>
    </aside>
  );
}
