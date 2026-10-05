import { useRef } from "react";
import { accreditationLogos } from "@morepen/shared";
import { Photo } from "../ui/index.js";

// Continuously scrolling strip of regulatory logos. The track is duplicated so
// the CSS keyframe loop is seamless; arrows nudge the viewport and pause briefly.
export function AccreditationCarousel() {
  const stripRef = useRef(null);

  const nudge = (direction) => {
    const strip = stripRef.current;
    const track = strip?.querySelector(".accreditation-track-v26");
    const viewport = strip?.querySelector(".accreditation-viewport-v26");
    if (!track || !viewport) return;
    track.style.animationPlayState = "paused";
    viewport.scrollBy({ left: direction * 220, behavior: "smooth" });
    window.setTimeout(() => {
      track.style.animationPlayState = "running";
    }, 1200);
  };

  const cards = (suffix) =>
    accreditationLogos.map((logo) =>
      logo.file ? (
        <article className="accreditation-card-v26" key={`${logo.file}-${suffix}`}>
          <Photo file={logo.file} alt={`${logo.name} logo`} />
        </article>
      ) : (
        <article className="accreditation-card-v26 text-badge" key={`${logo.code}-${suffix}`} aria-label={logo.name}>
          <strong>{logo.code}</strong>
          <span>{logo.label}</span>
        </article>
      )
    );

  return (
    <div className="accreditation-strip-v26" aria-label="Global regulatory and quality credentials" ref={stripRef}>
      <button className="accreditation-arrow-v26" type="button" aria-label="Previous credentials" onClick={() => nudge(-1)}>
        ←
      </button>
      <div className="accreditation-viewport-v26">
        <div className="accreditation-track-v26">
          {cards("a")}
          {cards("b")}
        </div>
      </div>
      <button className="accreditation-arrow-v26" type="button" aria-label="Next credentials" onClick={() => nudge(1)}>
        →
      </button>
      <div className="accreditation-dots-v26" aria-hidden="true">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}
