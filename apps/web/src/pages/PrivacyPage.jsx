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
            The enquiry form sends only the details you enter to Morepen's website service so the selected department
            can respond. Nothing is saved in your browser, and no attachments are accepted.
          </p>
          <h3>External links</h3>
          <p>
            Official Morepen documents, contact pages and other external destinations are governed by those
            destinations' policies. This website sets no analytics or marketing cookies.
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
