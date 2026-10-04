// Route table shared by the web app and the API. Paths are clean browser
// routes; the legacy prototype used the same keys behind "#/".
export const routes = [
  { path: "/", label: "Home", title: "Building today. Transforming tomorrow." },
  { path: "/company", label: "Company", title: "Company", nav: true },
  { path: "/transformation", label: "Our transformation", title: "Our transformation" },
  { path: "/api", label: "API", title: "Active pharmaceutical ingredients", nav: true },
  { path: "/cdmo", label: "CDMO", title: "CDMO & custom development", nav: true },
  { path: "/drug-product", label: "Drug Product", title: "Drug product & ANDA development" },
  { path: "/research", label: "R&D", title: "R&D & innovation", nav: true },
  { path: "/manufacturing", label: "Manufacturing", title: "Manufacturing & quality" },
  { path: "/quality", label: "Quality & accreditations", title: "Quality, accreditations & awards" },
  { path: "/sustainability", label: "Responsible manufacturing", title: "Responsible manufacturing" },
  { path: "/healthcare", label: "Healthcare Businesses", title: "Healthcare Businesses", nav: true, group: "healthcare" },
  { path: "/healthcare/medical-devices", label: "Medical Devices", title: "Medical Devices" },
  { path: "/healthcare/rx", label: "Rx & Prescription Medicines", title: "Rx & Prescription Medicines" },
  { path: "/healthcare/otc", label: "OTC & Consumer Wellness", title: "OTC & Consumer Wellness" },
  { path: "/investors", label: "Investors", title: "Investor centre", nav: true },
  { path: "/newsroom", label: "Newsroom", title: "Newsroom" },
  { path: "/careers", label: "Careers", title: "Careers" },
  { path: "/contact", label: "Contact", title: "Partner with Morepen" },
  { path: "/privacy", label: "Privacy", title: "Privacy" }
];

export const pageTitles = Object.fromEntries(routes.map((route) => [route.path, route.title]));

// Retired CDMO sub-pages still resolve to the CDMO page so old bookmarks work.
export const legacyCdmoRoutes = [
  "/cdmo/drug-substance",
  "/cdmo/analytical",
  "/cdmo/solid-state",
  "/cdmo/scale-up",
  "/cdmo/cmc",
  "/cdmo/clinical-commercial",
  "/cdmo/partnerships",
  "/cdmo/project-management"
];

export const healthcareRoutes = [
  { path: "/healthcare", label: "Overview", subnavLabel: "Healthcare overview", description: "Three businesses. Distinct roles." },
  { path: "/healthcare/medical-devices", label: "Medical Devices", subnavLabel: "Medical Devices", description: "Monitoring, consumables & chronic care" },
  { path: "/healthcare/rx", label: "Rx & Prescription Medicines", subnavLabel: "Rx & Prescription Medicines", description: "Therapy-led pharmaceutical business" },
  { path: "/healthcare/otc", label: "OTC & Consumer Wellness", subnavLabel: "OTC & Consumer Wellness", description: "Dr. Morepen brands & consumer health" }
];

export const utilityLinks = [
  { path: "/quality", label: "Quality & credentials" },
  { path: "/newsroom", label: "Newsroom" },
  { path: "/careers", label: "Careers" },
  { path: "/contact", label: "Contact" }
];

export const externalLinks = {
  investors: "https://www.morepen.com/investors",
  api: "https://www.morepen.com/api",
  research: "https://www.morepen.com/research-and-developement",
  contact: "https://www.morepen.com/contact",
  careers: "https://www.morepen.com/careers",
  adverseEvent: "https://www.morepen.com/adverseevent",
  customerSupport: "https://www.morepen.com/customersupport",
  environmental: "https://www.morepen.com/etp",
  devices: "https://devices.drmorepen.com/",
  deviceSync: "https://sync.drmorepen.com/",
  drMorepen: "https://drmorepen.com/",
  aboutUs: "https://www.morepen.com/aboutus",
  csrPolicy: "https://www.morepen.com/public/img/pdf/Corporate-Social-Responsibility-Policy.pdf",
  csrActionPlan: "https://morepen.com/public/img/pdf/FY%2025-26%20Annual%20Action%20plan_V%204.0.pdf"
};

export const footerColumns = [
  {
    heading: "Company",
    links: [
      { path: "/company", label: "Company" },
      { path: "/transformation", label: "Our transformation" },
      { path: "/sustainability", label: "Responsible manufacturing" },
      { path: "/newsroom", label: "Newsroom" },
      { path: "/careers", label: "Careers" },
      { path: "/contact", label: "Contact us" }
    ]
  },
  {
    heading: "Pharmaceutical platform",
    links: [
      { path: "/api", label: "API" },
      { path: "/cdmo", label: "CDMO" },
      { path: "/drug-product", label: "Drug Product" },
      { path: "/research", label: "R&D" },
      { path: "/manufacturing", label: "Manufacturing" },
      { path: "/quality", label: "Quality & accreditations" }
    ]
  },
  {
    heading: "Healthcare & investors",
    links: [
      { path: "/healthcare", label: "Healthcare Businesses" },
      { path: "/healthcare/medical-devices", label: "Medical Devices" },
      { path: "/healthcare/rx", label: "Rx & Prescription Medicines" },
      { path: "/healthcare/otc", label: "OTC & Consumer Wellness" },
      { path: "/investors", label: "Investors" },
      { href: externalLinks.devices, label: "Device product information" }
    ]
  }
];

export const footerUsefulLinks = [
  { href: externalLinks.investors, label: "Governance & disclosures" },
  { href: externalLinks.environmental, label: "Environmental monitoring" },
  { href: externalLinks.adverseEvent, label: "Adverse event reporting" }
];

export const socialChannels = ["LinkedIn", "Facebook", "X", "Instagram", "YouTube"];
