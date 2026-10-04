// The approved prototype addressed pages as "route?query" without a leading
// slash (for example "contact?service=CDMO"). Normalise to a browser path.
export const toRoute = (route = "") => (route.startsWith("/") ? route : `/${route}`);

export const prefersReducedMotion = () =>
  typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export const scrollToId = (id, block = "start") => {
  document.getElementById(id)?.scrollIntoView({ behavior: prefersReducedMotion() ? "instant" : "smooth", block });
};
