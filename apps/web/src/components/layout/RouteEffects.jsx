import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

// Mirrors the prototype router: every navigation starts at the top of the
// page and moves focus to the main landmark (except on first load).
export function RouteEffects() {
  const location = useLocation();
  const firstRender = useRef(true);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
    if (!firstRender.current) {
      document.getElementById("main-content")?.focus({ preventScroll: true });
    }
    firstRender.current = false;
  }, [location.pathname, location.search]);

  return null;
}
