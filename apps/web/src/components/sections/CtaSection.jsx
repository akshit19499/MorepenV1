import { GoLink } from "../ui/index.js";

export function CtaSection({
  title = "Let's build your next program.",
  text = "Start a conversation about your API, development or manufacturing requirements."
}) {
  return (
    <section className="cta-section">
      <div className="wrap cta-content">
        <div>
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
        <GoLink to="contact">Talk to our team</GoLink>
      </div>
    </section>
  );
}
