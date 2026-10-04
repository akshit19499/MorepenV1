import { transformationMatrix } from "../../content/home.js";
import { Eyebrow, GoLink } from "../ui/index.js";

// Morepen 2.0 dark spotlight band.
export function TransformationSpotlight() {
  return (
    <section className="section dark transformation-spotlight" id="morepen-2-0">
      <div className="wrap">
        <div className="split">
          <div>
            <Eyebrow as="div">Morepen 2.0</Eyebrow>
            <h2>
              From product supply to
              <br />
              deeper global partnerships.
            </h2>
            <p className="transformation-lead">
              APIs remain Morepen's scientific and manufacturing foundation. The current growth phase builds on that base
              through commercial CDMO programs, integrated development capabilities and disciplined expansion of
              manufacturing scale.
            </p>
            <div className="transformation-kpi">
              <strong>INR 8,250 million</strong>
              <div className="transformation-kpi-copy">
                <p>CDMO mandate in commercial execution</p>
                <p>INR 580 million commercial dispatches reported in Q1 FY27</p>
              </div>
            </div>
            <div className="transformation-actions">
              <GoLink to="cdmo">Explore CDMO</GoLink>
              <GoLink to="investors" className="btn outline">
                Investor centre
              </GoLink>
            </div>
          </div>
          <div className="transformation-matrix">
            {transformationMatrix.map((cell) => (
              <article className="transformation-cell" key={cell.title}>
                <h3>{cell.title}</h3>
                <p>{cell.text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
