import { Eyebrow } from "../ui/index.js";

// Intro band: kicker + title on the left, body copy (children) on the right.
export function SectionIntro({ kicker, title, tone = "", id, children }) {
  return (
    <section className={`section${tone ? ` ${tone}` : ""}`} id={id}>
      <div className="wrap intro-grid">
        <div>
          <Eyebrow>{kicker}</Eyebrow>
          <h2>{title}</h2>
        </div>
        <div>{children}</div>
      </div>
    </section>
  );
}
