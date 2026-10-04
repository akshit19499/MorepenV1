import { apiBackboneRows } from "../../content/api.js";
import { EditorialImage, FeatureList } from "../sections/index.js";
import { Eyebrow, GoLink } from "../ui/index.js";

// Editorial split: analytical-lab photo beside the manufacturing & R&D backbone list.
export function ApiBackbone() {
  return (
    <section className="section pale">
      <div className="wrap split">
        <EditorialImage file="analytical-lab.jpg" alt="Morepen analytical laboratory" />
        <div>
          <Eyebrow>Manufacturing &amp; R&amp;D backbone</Eyebrow>
          <h2>
            Knowledge behind
            <br />
            <span className="accent">every requirement.</span>
          </h2>
          <p>
            API performance depends on process understanding, analytical control, regulatory documentation and
            dependable plant execution.
          </p>
          <FeatureList rows={apiBackboneRows} />
          <div className="buttons">
            <GoLink to="research" className="btn outline">
              Explore R&amp;D
            </GoLink>
            <GoLink to="manufacturing" className="text-link">
              Explore manufacturing
            </GoLink>
          </div>
        </div>
      </div>
    </section>
  );
}
