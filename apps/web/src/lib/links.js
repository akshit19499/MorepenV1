// The approved prototype addressed pages as "route?query" without a leading
// slash (for example "contact?service=CDMO"). Normalise to a browser path.
export const toRoute = (route = "") => (route.startsWith("/") ? route : `/${route}`);

export const contactRoute = (service, product) => {
  const params = new URLSearchParams();
  if (service) params.set("service", service);
  if (product) params.set("product", product);
  const query = params.toString();
  return `/contact${query ? `?${query}` : ""}`;
};

export const prefersReducedMotion = () =>
  typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export const scrollToId = (id, block = "start") => {
  document.getElementById(id)?.scrollIntoView({ behavior: prefersReducedMotion() ? "instant" : "smooth", block });
};
