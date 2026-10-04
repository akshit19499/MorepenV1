import { indiaPatents, internationalPatents } from "../../content/research.js";
import { SectionHeading } from "../sections/index.js";

const tags = (list) => (
  <div className="patent-tags">
    {list.map((item) => (
      <span key={item}>{item}</span>
    ))}
  </div>
);

// Patents & intellectual property: international families and Indian grants.
export function PatentGroups() {
  return (
    <section className="section pale">
      <div className="wrap">
        <SectionHeading
          kicker="Patents & intellectual property"
          title={
            <>
              IP built around
              <br />
              process understanding.
            </>
          }
        >
          <p>
            Morepen's current AGM narrative reports 175 patent filings. The long-running R&amp;D portfolio includes
            patent families across key APIs, polymorphs and process improvements.
          </p>
        </SectionHeading>
        <div className="patent-groups">
          <article className="patent-panel">
            <h3>Selected international patent families</h3>
            {tags(internationalPatents)}
            <p className="small-note" style={{ marginTop: 16 }}>
              Published R&amp;D materials reference filings or grants across markets including the U.S., Canada, Europe,
              Russia, South Africa, Australia, Japan and India depending on the patent family.
            </p>
          </article>
          <article className="patent-panel">
            <h3>Selected patents granted in India</h3>
            {tags(indiaPatents)}
          </article>
        </div>
      </div>
    </section>
  );
}
