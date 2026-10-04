import { manufacturingProofs } from "../../content/home.js";
import { Eyebrow, GoLink, Photo } from "../ui/index.js";

// "Manufacturing & supply" band with the installed-capacity figure and facility photo.
export function ManufacturingHome() {
  return (
    <section className="manufacturing-home" aria-labelledby="manufacturing-home-title">
      <div className="wrap">
        <div className="manufacturing-home-grid">
          <div className="manufacturing-home-copy">
            <Eyebrow>Manufacturing & supply</Eyebrow>
            <h2 id="manufacturing-home-title">
              Scale backed by process
              <br />
              depth and execution.
            </h2>
            <div className="manufacturing-capacity">
              <strong>614</strong>
              <span>KL installed API / CDMO reactor capacity</span>
            </div>
            <p>
              Morepen's manufacturing network in Himachal Pradesh supports small-molecule APIs and CDMO programs for
              domestic and international customers. Expansion is being phased alongside customer demand, utilities,
              finishing areas, laboratories and environmental systems.
            </p>
            <div className="manufacturing-proof-grid">
              {manufacturingProofs.map((proof) => (
                <article className="manufacturing-proof" key={proof.title}>
                  <h3>{proof.title}</h3>
                  <p>{proof.text}</p>
                </article>
              ))}
            </div>
            <GoLink to="manufacturing">Explore manufacturing</GoLink>
          </div>
          <div className="manufacturing-home-image v23-facility">
            <Photo file="masulkhana-facility-v23.jpg" alt="Morepen manufacturing facility aerial view in Himachal Pradesh" />
          </div>
        </div>
      </div>
    </section>
  );
}
