import { connectedPlatformCards } from "../../content/home.js";
import { Eyebrow, GoLink } from "../ui/index.js";

// "Chemistry, compliance and scale — connected." band under the stats strip.
export function ConnectedPlatformBand() {
  return (
    <section className="connected-platform" aria-labelledby="connected-platform-title">
      <div className="wrap">
        <div className="connected-platform-intro">
          <div>
            <Eyebrow>Global pharmaceutical manufacturing</Eyebrow>
            <h2 id="connected-platform-title">
              Chemistry, compliance
              <br />
              and scale — connected.
            </h2>
          </div>
          <div className="connected-platform-copy">
            <p>
              Morepen combines more than four decades of API manufacturing experience with an expanding CDMO platform,
              drug-product development capabilities and healthcare businesses. The focus is increasingly on long-duration
              global partnerships, regulated-market execution and science-led growth.
            </p>
            <div className="connected-platform-links">
              <GoLink to="company" className="text-link">
                Discover Morepen
              </GoLink>
              <GoLink to="cdmo" className="text-link">
                Explore CDMO
              </GoLink>
            </div>
          </div>
        </div>
        <div className="connected-platform-grid">
          {connectedPlatformCards.map((card) => (
            <article className="connected-platform-card" key={card.serial}>
              <small className="number-kicker">
                <span className="serial-large">{card.serial}</span>
                <span className="serial-label">{card.label}</span>
              </small>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
