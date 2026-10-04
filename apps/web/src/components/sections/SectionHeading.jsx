import { Eyebrow } from "../ui/index.js";

// Two-column section heading: kicker + title on the left, supporting copy on the right.
export function SectionHeading({ kicker, title, id, children }) {
  return (
    <div className="section-heading">
      <div>
        <Eyebrow>{kicker}</Eyebrow>
        <h2 id={id}>{title}</h2>
      </div>
      {children}
    </div>
  );
}
