import { Link } from "react-router-dom";
import { asset } from "../data/assets.js";

export function Hero({ page, home = false }) {
  return (
    <section className={home ? "home-hero" : "page-hero"}>
      <div className="wrap hero-grid">
        <div className="hero-content">
          <p className="eyebrow">{page.eyebrow}</p>
          <h1>
            {page.titleLines
              ? page.titleLines.map((line) => (
                  <span className={line.accent ? "accent" : undefined} key={line.text}>
                    {line.text}
                  </span>
                ))
              : page.title}
          </h1>
          <p className="lead">{page.lead}</p>
          {(page.cta || page.secondary) && (
            <div className="buttons">
              {page.cta && (
                <Link className="btn" to={page.cta.to}>
                  {page.cta.label}
                </Link>
              )}
              {page.secondary && (
                <Link className="btn outline" to={page.secondary.to}>
                  {page.secondary.label}
                </Link>
              )}
            </div>
          )}
        </div>
        <div className="hero-media">
          <img src={asset(page.image)} alt="" />
          {home && (
            <div className="hero-image-caption">
              <strong>Morepen Laboratories</strong>
              <small>Science-led pharmaceutical manufacturing platform</small>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
