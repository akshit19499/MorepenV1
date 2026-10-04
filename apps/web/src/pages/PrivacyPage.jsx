import { PageHero } from "../components/sections/index.js";
import { GoLink } from "../components/ui/index.js";

export function PrivacyPage() {
  return (
    <>
      <PageHero
        label="Privacy"
        title={["Privacy notice.", "Responsible handling of enquiries."]}
        text="This placeholder should be replaced with Morepen's final approved website privacy notice before launch."
        simple
      />
      <section className="section">
        <div className="wrap legal-copy">
          <h3>How enquiries are handled</h3>
          <p>
            The enquiry form processes your input in the current browser session to display a summary. It does not submit
            information to a server, store it in a database or save it in browser storage. Navigate away or reload to
            clear the form.
          </p>
          <h3>Email is a separate, deliberate step</h3>
          <p>
            Choosing "Open email draft" attempts to open your email application with the prepared text. No email is sent
            automatically. You must review the content and recipient before sending.
          </p>
          <h3>External links</h3>
          <p>
            Official Morepen documents, contact pages and other external destinations require internet access and are
            governed by those destinations' policies. This local preview has no analytics, cookies or third-party tracking
            scripts.
          </p>
          <h3>Keep it non-confidential</h3>
          <p>
            Do not enter confidential chemical structures, process information, patient information, financial documents
            or sensitive personal data.
          </p>
          <GoLink to="contact" className="text-link">
            Return to enquiries
          </GoLink>
        </div>
      </section>
    </>
  );
}
