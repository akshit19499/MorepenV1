import { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { heroSlides } from "../../content/home.js";
import { prefersReducedMotion, toRoute } from "../../lib/links.js";
import { Eyebrow, GoLink, Photo } from "../ui/index.js";

const ROTATE_MS = 4000;
const SWIPE_MIN_PX = 70;

// Home hero carousel. Rotates every 4 s, pauses while hovered or focused,
// skips ticks while the tab is hidden, honours reduced-motion and supports
// horizontal touch swipes, exactly as the prototype's setupHero/setHero.
export function HeroCarousel() {
  const [index, setIndex] = useState(0);
  const [status, setStatus] = useState("");
  const timerRef = useRef(null);
  const touchStart = useRef(null);
  const count = heroSlides.length;
  const slide = heroSlides[index];

  const stop = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  const start = useCallback(() => {
    if (timerRef.current || prefersReducedMotion()) return;
    timerRef.current = setInterval(() => {
      if (document.hidden) return;
      setIndex((current) => (current + 1) % count);
    }, ROTATE_MS);
  }, [count]);

  // Manual selection (swipe): announce the slide and restart the rotation.
  const select = useCallback(
    (next) => {
      stop();
      const target = (next + count) % count;
      setIndex(target);
      setStatus(`${heroSlides[target].label}, slide ${target + 1} of ${count}`);
      start();
    },
    [count, start, stop]
  );

  useEffect(() => {
    start();
    return stop;
  }, [start, stop]);

  const onTouchStart = (event) => {
    touchStart.current = { x: event.touches[0].clientX, y: event.touches[0].clientY };
  };

  const onTouchEnd = (event) => {
    const origin = touchStart.current;
    if (!origin) return;
    const dx = event.changedTouches[0].clientX - origin.x;
    const dy = event.changedTouches[0].clientY - origin.y;
    if (Math.abs(dx) > SWIPE_MIN_PX && Math.abs(dx) > Math.abs(dy) * 1.5) select(index + (dx < 0 ? 1 : -1));
    touchStart.current = null;
  };

  return (
    <section
      className="home-hero business-carousel carousel-minimal"
      id="business-carousel"
      aria-label="Morepen corporate highlights"
      aria-roledescription="carousel"
      onMouseEnter={stop}
      onMouseLeave={start}
      onFocus={stop}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) start();
      }}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <div id="hero-panel" role="group" aria-roledescription="slide" aria-label={`${index + 1} of ${count}: ${slide.label}`}>
        <div className="wrap hero-grid" data-active-slide={slide.id}>
          <div className="hero-copy">
            <Eyebrow>{slide.kicker}</Eyebrow>
            <h1>
              {slide.title.line}
              <br />
              {slide.title.prefix}
              <span className="accent">{slide.title.accent}</span>
            </h1>
            <p className="lead">{slide.text}</p>
            <div className="buttons">
              <GoLink to={slide.primary.to}>{slide.primary.label}</GoLink>
              <GoLink to={slide.secondary.to} className="btn outline">
                {slide.secondary.label}
              </GoLink>
            </div>
            <p className="tagline">
              Building today. <strong>Transforming tomorrow.</strong>
            </p>
          </div>
          <div className="hero-visual">
            <Photo file={slide.image} alt={slide.alt} eager />
            <Link className="hero-image-caption" to={toRoute(slide.captionRoute)}>
              <div>
                <small>MOREPEN / {slide.captionLabel}</small>
                <strong>{slide.caption}</strong>
              </div>
              <span className="circle" aria-hidden="true">
                ↗
              </span>
            </Link>
          </div>
        </div>
      </div>
      <span className="sr-only" id="hero-status" role="status" aria-live="polite" aria-atomic="true">
        {status}
      </span>
    </section>
  );
}
