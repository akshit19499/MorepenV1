import { Fragment } from "react";
import { plants } from "@morepen/shared";
import { plantSpecRows } from "../../content/manufacturing.js";

// Side-by-side plant capability cards (Baddi and MSL).
export function PlantGrid() {
  return (
    <div className="plant-grid">
      {plants.map((plant) => (
        <article className="plant-card" key={plant.id}>
          <div className="plant-top">
            <span>{plant.name}</span>
            <strong>
              {plant.capacity}
              <small> KL</small>
            </strong>
          </div>
          <h3>API / CDMO reactor capacity</h3>
          <p>{plant.blocks}</p>
          <dl>
            {plantSpecRows.map(([label, field, suffix]) => (
              <Fragment key={label}>
                <dt>{label}</dt>
                <dd>
                  {plant[field]}
                  {suffix}
                </dd>
              </Fragment>
            ))}
          </dl>
        </article>
      ))}
    </div>
  );
}
