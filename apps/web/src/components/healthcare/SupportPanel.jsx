import { ExtLink, GoLink } from "../ui/index.js";

// Closing enquiry / support panel of each healthcare business page. It is the
// page's last section, so it carries the `page-end-panel` class the prototype
// router added at runtime. Items: { title, text, links: [{ to | href, label }] }.
export function SupportPanel({ items, tone = "" }) {
  return (
    <section className={`section${tone ? ` ${tone}` : ""} page-end-panel`}>
      <div className="wrap support-grid">
        {items.map((item) => (
          <article key={item.title}>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
            {item.links.map((link) =>
              link.href ? (
                <ExtLink key={link.label} href={link.href}>
                  {link.label}
                </ExtLink>
              ) : (
                <GoLink key={link.label} to={link.to} className="text-link">
                  {link.label}
                </GoLink>
              )
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
