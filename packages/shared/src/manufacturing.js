export const plants = [
  { id: "baddi", name: "Baddi", capacity: 485, blocks: "P8, P9, P9A, P10, P10A, P11, P12", srp: 63, columns: 10, hydrogenation: "5.75 KL (4 KL + 1.5 KL + 0.25 KL; 3 nos.)", cryo: "100 KL", temperature: "-25 to -85 °C", cleanrooms: 17 },
  { id: "msl", name: "MSL", capacity: 129, blocks: "Unit 1, Unit 2, Pilot Plant", srp: 28, columns: 5, hydrogenation: "0", cryo: "40 KL", temperature: "-30 to -80 °C", cleanrooms: 5 }
];

export const totalCapacity = plants.reduce((sum, plant) => sum + plant.capacity, 0);

export const metrics = [
  { value: 40, suffix: "+", label: "Years of pharmaceutical experience" },
  { value: 90, suffix: "+", label: "Countries served" },
  { value: totalCapacity, suffix: " KL", label: "API / CDMO reactor capacity" },
  { value: 4, suffix: "", label: "Consecutive NIL Form 483 inspections reported" }
];

export const capacityRoadmap = [
  { value: "614 KL", label: "Installed / current capacity", badge: "INSTALLED", planned: false },
  { value: "800 KL", label: "Next milestone", badge: "PLANNED", planned: true },
  { value: "1000 KL", label: "Subsequent milestone", badge: "PROPOSED", planned: true },
  { value: "1200 KL", label: "Longer-term roadmap", badge: "ROADMAP", planned: true }
];
