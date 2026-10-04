import { externalLinks } from "@morepen/shared";

// Static copy for the Company page, verbatim from the approved prototype (companyV11).

export const companyPillars = [
  {
    number: "01",
    title: "API foundation",
    text: "APIs remain the scientific and manufacturing base of the company and a major contributor to global supply."
  },
  {
    number: "02",
    title: "CDMO growth",
    text: "Long-duration development and manufacturing programs are deepening customer relationships and expanding the role of the platform."
  },
  {
    number: "03",
    title: "Scale & execution",
    text: "Installed API/CDMO reactor capacity has reached 614 KL, with further phases planned against customer programs and regulatory readiness."
  },
  {
    number: "04",
    title: "Capability building",
    text: "Morepen is strengthening complex chemistry, analytical science, drug-product development and future technology platforms."
  }
];

export const esgRows = [
  {
    title: "Zero Liquid Discharge / MEE",
    text: "Multiple-effect evaporator infrastructure supports water treatment, reuse and zero-liquid-discharge objectives at manufacturing operations."
  },
  {
    title: "Solar energy",
    text: "A 1.1 MW solar plant was commissioned in December 2025, with further renewable-energy initiatives under evaluation."
  },
  {
    title: "Cleaner fuels",
    text: "LPG boiler conversion and a Parali-based biomass boiler form part of the company's lower-emission manufacturing program."
  },
  {
    title: "Business continuity",
    text: "Environmental systems, safe operations, quality discipline and resilient infrastructure are treated as part of dependable global supply."
  }
];

// "One corporate view. Distinct business stories." cards. `title` is two lines.
export const portfolioCards = [
  {
    badge: "LEAD TRANSFORMATION PLATFORM",
    title: ["Pharmaceutical development", "& manufacturing"],
    text: "API expertise, CDMO partnerships and drug-product development, supported by science, quality and manufacturing.",
    links: [
      { to: "api", label: "APIs" },
      { to: "cdmo", label: "CDMO" },
      { to: "drug-product", label: "Drug Product" }
    ]
  },
  {
    badge: "DEDICATED BUSINESS VISIBILITY",
    title: ["Healthcare", "Businesses"],
    text: "Medical Devices, Rx and OTC retain their own identities, audiences and enquiry routes.",
    links: [
      { to: "healthcare/medical-devices", label: "Medical Devices" },
      { to: "healthcare/rx", label: "Rx & Prescription Medicines" },
      { to: "healthcare/otc", label: "OTC & Consumer Wellness" }
    ]
  }
];

export const csrLinks = [
  { href: externalLinks.csrPolicy, label: "CSR Policy" },
  { href: externalLinks.csrActionPlan, label: "FY26 Annual Action Plan" },
  { href: externalLinks.aboutUs, label: "CSR disclosures" }
];

export const csrFocusAreas = [
  {
    kicker: "01 / Healthcare",
    title: "Preventive healthcare & access",
    text: "Charitable dispensary support, medical camps, health screening drives and awareness programs designed to improve community health and access."
  },
  {
    kicker: "02 / Education & skills",
    title: "Learning and livelihoods",
    text: "Scholarships, educational infrastructure and vocational training aimed at improving learning opportunities and employable skills."
  },
  {
    kicker: "03 / Environment",
    title: "Natural-resource stewardship",
    text: "Community initiatives around environmental awareness, biodiversity, water conservation and sustainable land management."
  },
  {
    kicker: "04 / Rural development",
    title: "Stronger local ecosystems",
    text: "Infrastructure enhancement and livelihood-generation initiatives intended to improve quality of life and economic resilience in rural communities."
  }
];
