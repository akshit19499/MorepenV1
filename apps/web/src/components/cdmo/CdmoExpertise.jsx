import { cdmoExpertiseChips } from "../../content/cdmo.js";
import { Eyebrow } from "../ui/index.js";

// Chemistry & development expertise split with the digital/AI roadmap note.
export function CdmoExpertise() {
  return (
    <section className="section">
      <div className="wrap split">
        <div>
          <Eyebrow>Chemistry &amp; development expertise</Eyebrow>
          <h2>
            Scientific depth designed
            <br />
            for scale-up.
          </h2>
          <p>
            Process chemistry, analytical science, impurity control and manufacturing knowledge are brought together
            early so development decisions consider quality, scalability and regulatory requirements.
          </p>
          <div className="chips">
            {cdmoExpertiseChips.map((chip) => (
              <span className="chip" key={chip}>
                {chip}
              </span>
            ))}
          </div>
        </div>
        <div className="roadmap-note">
          <h3>Digital and AI-enabled development</h3>
          <p>
            Digital tools and AI/ML can support route assessment, data analysis, predictive evaluation and development
            decisions. Scientific review, data governance and human accountability remain central.
          </p>
        </div>
      </div>
    </section>
  );
}
