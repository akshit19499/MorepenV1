import { useEffect, useRef, useState } from "react";
import { prefersReducedMotion } from "../lib/links.js";

// Animates a number from 0 to `target` once the element scrolls into view.
export function useCountUp(target, index = 0, { duration = 900, stagger = 70 } = {}) {
  const ref = useRef(null);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const element = ref.current;
    if (!element) return undefined;
    if (prefersReducedMotion() || !("IntersectionObserver" in window)) {
      setValue(target);
      return undefined;
    }
    let frame = 0;
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          obs.unobserve(entry.target);
          const start = performance.now() + index * stagger;
          const tick = (now) => {
            if (now < start) {
              frame = requestAnimationFrame(tick);
              return;
            }
            const t = Math.min(1, (now - start) / duration);
            const eased = 1 - Math.pow(1 - t, 3);
            setValue(Math.round(target * eased));
            if (t < 1) frame = requestAnimationFrame(tick);
            else setValue(target);
          };
          frame = requestAnimationFrame(tick);
        });
      },
      { threshold: 0.35 }
    );
    observer.observe(element);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [target, index, duration, stagger]);

  return [ref, value];
}
