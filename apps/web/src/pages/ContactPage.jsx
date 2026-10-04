import { useLocation } from "react-router-dom";
import { ContactDetails, EnquiryForm } from "../components/contact/index.js";
import { PageHero } from "../components/sections/index.js";

export function ContactPage() {
  const location = useLocation();
  return (
    <>
      <PageHero
        label="Partner with Morepen"
        title={["A conversation today.", "A partnership tomorrow."]}
        text="Tell us what you are looking to develop, manufacture or source. Keep the first introduction non-confidential."
        simple
      />
      <section className="section">
        <div className="wrap contact-grid">
          <ContactDetails />
          {/* A new ?service / ?product query starts a fresh form, as the prototype re-rendered the page. */}
          <EnquiryForm key={location.search} />
        </div>
      </section>
    </>
  );
}
