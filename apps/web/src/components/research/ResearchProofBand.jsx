import { rdProofItems } from "../../content/research.js";
import { EditorialImage } from "../sections/index.js";
import { Eyebrow } from "../ui/index.js";

// Research + quality + regulatory proof band with the analytical-lab photo.
export function ResearchProofBand() {
  return (
    <section className="section rd-proof-band">
      <div className="wrap rd-proof-grid">
        <div>
          <EditorialImage file="analytical-lab.jpg" alt="Morepen analytical laboratory" />
        </div>
        <div>
          <Eyebrow>Research + quality + regulatory</Eyebrow>
          <h2>
            Development discipline
            <br />
            that customers can use.
          </h2>
          <p>
            Research creates value when it can be translated into controlled processes, reproducible analytical methods,
            regulatory documentation and manufacturing execution.
          </p>
          <div className="rd-proof-list">
            {rdProofItems.map((item) => (
              <div className="rd-proof-item" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
