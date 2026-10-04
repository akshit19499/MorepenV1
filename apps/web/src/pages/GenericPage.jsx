import { Hero } from "../components/Hero.jsx";
import { FinalCta, ProofBand, Section } from "../components/Sections.jsx";
import { getPage } from "../data/apiClient.js";

const capacityPages = new Set(["/cdmo", "/manufacturing"]);

export function GenericPage({ path }) {
  const page = getPage(path);

  return (
    <>
      <Hero page={page} />
      {page.sections?.map((section) => (
        <Section key={section.title} section={section} />
      ))}
      {capacityPages.has(path) && <ProofBand />}
      {path === "/privacy" ? <PrivacyBody /> : <FinalCta />}
    </>
  );
}

function PrivacyBody() {
  return (
    <section className="section">
      <div className="wrap legal-copy">
        <h2>How enquiries are handled</h2>
        <p>
          The current rebuild validates enquiry data through the local API. Persistence, CRM
          delivery, analytics and final legal copy should be connected only after approval.
        </p>
        <h2>Keep it non-confidential</h2>
        <p>
          Do not submit confidential chemical structures, process details, patient information,
          financial documents or sensitive personal data through a preview environment.
        </p>
      </div>
    </section>
  );
}
