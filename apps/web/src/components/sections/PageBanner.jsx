import { asset } from "../../lib/assets.js";

// Full-width banner image with the page title baked into the artwork (Contact, Investors).
// `title` is rendered visually hidden so the page still has an h1 for assistive tech.
// `focus` is the object-position used when the banner is cropped on narrow screens.
export function PageBanner({ file, alt, title, id = "page-title", focus = "center" }) {
  return (
    <section className="page-banner" aria-labelledby={id}>
      <h1 id={id} className="sr-only">
        {title}
      </h1>
      <img src={asset(file)} alt={alt} loading="eager" decoding="async" style={{ objectPosition: focus }} />
    </section>
  );
}
