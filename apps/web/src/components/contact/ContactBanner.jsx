import { asset } from "../../lib/assets.js";

// Full-width banner used on the published contact page ("We are delighted to serve / CONTACT US").
export function ContactBanner() {
  return (
    <section className="contact-banner" aria-labelledby="contact-title">
      <h1 id="contact-title" className="sr-only">
        Contact us
      </h1>
      <img src={asset("contact-banner.webp")} alt="We are delighted to serve. Contact us." loading="eager" decoding="async" />
    </section>
  );
}
