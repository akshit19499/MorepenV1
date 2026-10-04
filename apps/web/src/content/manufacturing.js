// Manufacturing page copy that is naturally data. Plant figures come from
// @morepen/shared (plants); these are the page-specific labels and tiles.

// Rows of the plant specification list: [label, plant field, suffix].
export const plantSpecRows = [
  ["SRP capacity", "srp", " KL"],
  ["Distillation columns", "columns", ""],
  ["Hydrogenation reaction volume", "hydrogenation", ""],
  ["Cryogenic reaction volume", "cryo", ""],
  ["Cryogenic temperature", "temperature", ""],
  ["Cleanroom areas, including powder processing", "cleanrooms", ""]
];

// The Manufacturing page labels every forward milestone "ROADMAP" (unlike the
// capacityRoadmap tiles used elsewhere) and calls the first tile the brochure figure.
export const manufacturingRoadmap = [
  { value: "614 KL", label: "Installed / current brochure", badge: "INSTALLED", planned: false },
  { value: "800 KL", label: "Next milestone", badge: "ROADMAP", planned: true },
  { value: "1000 KL", label: "Subsequent milestone", badge: "ROADMAP", planned: true },
  { value: "1200 KL", label: "Longer-term roadmap", badge: "ROADMAP", planned: true }
];
