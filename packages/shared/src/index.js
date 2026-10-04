export const routes = [
  { path: "/", label: "Home", nav: false },
  { path: "/company", label: "Company", nav: true },
  { path: "/api", label: "API", nav: true },
  { path: "/cdmo", label: "CDMO", nav: true },
  { path: "/research", label: "R&D", nav: true },
  { path: "/healthcare", label: "Healthcare Businesses", nav: true },
  { path: "/investors", label: "Investors", nav: true },
  { path: "/drug-product", label: "Drug Product", utility: true },
  { path: "/manufacturing", label: "Manufacturing", utility: true },
  { path: "/quality", label: "Quality & Accreditations", utility: true },
  { path: "/newsroom", label: "Newsroom", utility: true },
  { path: "/careers", label: "Careers", utility: true },
  { path: "/contact", label: "Contact", utility: true },
  { path: "/privacy", label: "Privacy", utility: true }
];

export const healthcareRoutes = [
  { path: "/healthcare", label: "Overview" },
  { path: "/healthcare/medical-devices", label: "Medical Devices" },
  { path: "/healthcare/rx", label: "Rx & Prescription Medicines" },
  { path: "/healthcare/otc", label: "OTC & Consumer Wellness" }
];

export const metrics = [
  { value: "40+", label: "Years of pharmaceutical experience" },
  { value: "90+", label: "Countries served" },
  { value: "614 KL", label: "API / CDMO reactor capacity" },
  { value: "4", label: "Consecutive NIL Form 483 inspections reported" }
];

export const pages = {
  "/": {
    eyebrow: "Morepen Laboratories Limited",
    title: "Building today. Transforming tomorrow.",
    lead: "A science-led pharmaceutical platform connecting API expertise, CDMO execution, drug-product development and healthcare businesses.",
    image: "homepage-hero-api-v31.jpg",
    cta: { label: "Explore API portfolio", to: "/api" },
    secondary: { label: "Discuss a program", to: "/contact" },
    sections: [
      {
        eyebrow: "The pharmaceutical platform",
        title: "API strength. Connected development.",
        body: "Morepen's API foundation supports three connected service families for pharmaceutical development and manufacturing partners.",
        items: [
          ["API platform", "Small-molecule API chemistry, regulatory documentation and dependable manufacturing."],
          ["CDMO", "Phase-appropriate development, analytical science, scale-up and commercial supply."],
          ["Drug Product", "Formulation, analytical development, stability programs and ANDA capability."]
        ]
      }
    ]
  },
  "/company": {
    eyebrow: "Company",
    title: "Four decades of chemistry. Building the next generation of global partnerships.",
    titleLines: [
      { text: "Four decades of" },
      { text: "chemistry." },
      { text: "Building the next", accent: true },
      { text: "generation", accent: true },
      { text: "of global", accent: true },
      { text: "partnerships.", accent: true }
    ],
    lead: "Founded in 1984, Morepen has grown from an API manufacturing base in Himachal Pradesh into a diversified pharmaceutical and healthcare platform. The next chapter builds on that foundation through deeper development, manufacturing and chronic-care capabilities.",
    image: "masulkhana-facility-v23.jpg",
    cta: { label: "Explore our journey", to: "/company#company-journey" },
    secondary: { label: "Quality & regulatory", to: "/quality" },
    sections: [
      {
        eyebrow: "The company today",
        title: "A manufacturing foundation. A broader future.",
        body: "The transformation is the next stage of a business built on chemistry, manufacturing experience, regulatory discipline and service to healthcare.",
        numbered: [
          ["01", "API foundation", "APIs remain the scientific and manufacturing base of the company."],
          ["02", "CDMO growth", "Long-duration development and manufacturing programs deepen customer relationships."],
          ["03", "Scale and execution", "Current installed API/CDMO reactor capacity is 614 KL."],
          ["04", "Capability building", "Complex chemistry, analytical science and drug-product development are being strengthened."]
        ]
      }
    ]
  },
  "/api": {
    eyebrow: "Active pharmaceutical ingredients",
    title: "Deep chemistry. A global API platform.",
    lead: "Explore Morepen APIs by therapeutic area, then connect with the team on molecule, specification and documentation requirements.",
    image: "scientist-process.jpg"
  },
  "/cdmo": {
    eyebrow: "CDMO & custom development",
    title: "From key intermediates to commercial supply.",
    lead: "Chemistry, analytical science, scale-up, drug-product development, quality systems and manufacturing come together in one phase-appropriate platform.",
    image: "cdmo-hero-facility-v32.jpg",
    sections: [
      {
        eyebrow: "Core service capabilities",
        title: "Three scientific workstreams. One connected program.",
        body: "Key Intermediates is the lead customer-facing entry point. Drug substance/API development remains explicit within the service description.",
        items: [
          ["Key Intermediates & API Development", "Custom synthesis, API development, process optimisation, scale-up and technology transfer."],
          ["Drug Product Development", "Pre-formulation, formulation development, clinical-supply support, stability and dossier integration."],
          ["Analytical & Solid-State Services", "Method development, impurity characterisation, solid-state work and stability support."]
        ]
      }
    ]
  },
  "/drug-product": {
    eyebrow: "Drug Product & ANDA",
    title: "Formulation capability connected to chemistry.",
    lead: "Drug-product development extends Morepen's API platform into selected finished-dosage and regulated-market programs.",
    image: "development-lab.jpg"
  },
  "/research": {
    eyebrow: "R&D & innovation",
    title: "Research-backed. Quality-driven. Built to keep evolving.",
    lead: "Process chemistry, analytical science, intellectual property, regulatory documentation and manufacturing readiness create repeatable value from research.",
    image: "scientist-process.jpg",
    sections: [
      {
        eyebrow: "Science at work",
        title: "Research that moves towards execution.",
        body: "R&D is being positioned as an engine for new products, customer acquisition and higher-value development work.",
        numbered: [
          ["01", "Process chemistry", "Route development, impurity control, yield improvement and scale-aware chemistry."],
          ["02", "Analytical science", "Methods, impurity characterisation, stability and development documentation."],
          ["03", "Quality by development", "Quality, compliance and repeatability are designed before transfer into manufacturing."],
          ["04", "Continuous development", "New molecules, international filings and formulation-development programs keep the pipeline active."]
        ]
      }
    ]
  },
  "/manufacturing": {
    eyebrow: "Manufacturing",
    title: "Two sites. Current scale. Future milestones.",
    lead: "Baddi and Masulkhana provide the manufacturing base for API and CDMO execution, with installed API/CDMO reactor capacity of 614 KL.",
    image: "baddi-aerial-2026.jpg"
  },
  "/quality": {
    eyebrow: "Quality, regulatory & accreditations",
    title: "Global trust is earned through repeatable systems.",
    lead: "Quality, data integrity, regulatory readiness and continuity of supply are central to long-term pharmaceutical partnerships.",
    image: "cleanroom-2026.jpg"
  },
  "/healthcare": {
    eyebrow: "Healthcare Businesses",
    title: "Distinct healthcare businesses. One clear corporate view.",
    lead: "Medical Devices, Rx and OTC each have their own audiences, claims environment and enquiry routes.",
    image: "glucose-meter.png"
  },
  "/healthcare/medical-devices": {
    eyebrow: "Medical Devices",
    title: "Connected care devices with a dedicated business focus.",
    lead: "A corporate view of the Medical Devices business, separate from pharmaceutical partner services.",
    image: "bp-monitor.png"
  },
  "/healthcare/rx": {
    eyebrow: "Rx & Prescription Medicines",
    title: "Prescription medicines. A dedicated business.",
    lead: "A professional, therapy-led view of the Rx business, separate from drug-product development services.",
    image: "rx-cefopen.png"
  },
  "/healthcare/otc": {
    eyebrow: "OTC & Consumer Wellness",
    title: "Familiar brands. Everyday healthcare.",
    lead: "The Dr. Morepen OTC and consumer-wellness business brings a distinct brand and channel focus.",
    image: "otc-burnol.png"
  },
  "/investors": {
    eyebrow: "Investors",
    title: "Performance first. Documents made easy.",
    lead: "Recent performance, investor presentations and annual reports come first. Statutory and shareholder information follows in a compact, structured library.",
    image: "investor-q1-fy27-v36.svg"
  },
  "/newsroom": {
    eyebrow: "Newsroom",
    title: "Company updates and selected announcements.",
    lead: "Recent announcements and investor publications, structured for the production content model.",
    image: "ar-cover-2025-26.jpg"
  },
  "/careers": {
    eyebrow: "Careers",
    title: "Build science, manufacturing and healthcare capability.",
    lead: "A place for future career content across R&D, quality, manufacturing, commercial and corporate roles.",
    image: "team.jpg"
  },
  "/contact": {
    eyebrow: "Partner with Morepen",
    title: "Start with a non-confidential conversation.",
    lead: "Share the development stage, chemistry, product, target scale and regulatory market so the right team can respond.",
    image: "laboratory.jpg"
  },
  "/privacy": {
    eyebrow: "Privacy",
    title: "Privacy notice. Responsible handling of enquiries.",
    lead: "This placeholder should be replaced with Morepen's final approved website privacy notice before launch.",
    image: "campus-wide.jpg"
  }
};

export const apiListUrl = "https://www.morepen.com/public/img/pdf/API-Product-List-October-2023.pdf";

export const apiCategories = [
  { name: "Diabetes", tag: "METABOLIC HEALTH", description: "Gliptins and gliflozins", icon: "metabolic" },
  { name: "Cardiovascular", tag: "CARDIOVASCULAR", description: "Lipid and blood-pressure therapies", icon: "heart" },
  { name: "Allergy & Respiratory", tag: "ALLERGY & RESPIRATORY", description: "Antihistaminic and respiratory APIs", icon: "lungs" },
  { name: "Anticoagulants", tag: "ANTICOAGULANTS", description: "A portfolio of anticoagulant APIs", icon: "flow" },
  { name: "CNS", tag: "CENTRAL NERVOUS SYSTEM", description: "Selected neuropsychiatric APIs", icon: "neural" },
  { name: "Gastrointestinal", tag: "GASTROINTESTINAL", description: "Selected gastrointestinal APIs", icon: "circle" }
];

export const products = [
  { id: "loratadine", name: "Loratadine", category: "Allergy & Respiratory", forms: ["USP / EP / IP"], therapy: "Antihistaminic" },
  { id: "desloratadine", name: "Desloratadine", category: "Allergy & Respiratory", forms: ["USP / EP / BP / ICH"], therapy: "Antihistaminic" },
  { id: "fexofenadine", name: "Fexofenadine Hydrochloride", category: "Allergy & Respiratory", forms: ["USP / EP / JP / IP"], therapy: "Antihistaminic" },
  { id: "montelukast", name: "Montelukast Sodium", category: "Allergy & Respiratory", forms: ["USP / EP / ICH / JP / IP"], therapy: "Anti-asthmatic" },
  { id: "atorvastatin", name: "Atorvastatin Calcium", category: "Cardiovascular", forms: ["Crystalline trihydrate", "Amorphous"], therapy: "Anti-lipemic" },
  { id: "rosuvastatin", name: "Rosuvastatin Calcium", category: "Cardiovascular", forms: ["Crystalline", "Amorphous"], therapy: "Anti-lipemic" },
  { id: "olmesartan", name: "Olmesartan Medoxomil", category: "Cardiovascular", forms: ["USP / EP / JP / IP"], therapy: "Anti-hypertensive" },
  { id: "sitagliptin", name: "Sitagliptin Phosphate", category: "Diabetes", forms: ["Monohydrate", "Anhydrous"], therapy: "Anti-diabetic" },
  { id: "saxagliptin", name: "Saxagliptin Hydrochloride", category: "Diabetes", forms: ["Hydrochloride", "Hydrochloride dihydrate"], therapy: "Anti-diabetic" },
  { id: "linagliptin", name: "Linagliptin", category: "Diabetes", forms: ["Linagliptin", "Form C"], therapy: "Anti-diabetic" },
  { id: "dapagliflozin", name: "Dapagliflozin", category: "Diabetes", forms: ["Amorphous", "Propanediol"], therapy: "Anti-diabetic" },
  { id: "empagliflozin", name: "Empagliflozin", category: "Diabetes", forms: ["ICH / IH"], therapy: "Anti-diabetic" },
  { id: "ertugliflozin", name: "Ertugliflozin L-Pyroglutamate", category: "Diabetes", forms: ["ICH / IH"], therapy: "Anti-diabetic" },
  { id: "apixaban", name: "Apixaban", category: "Anticoagulants", forms: ["Apixaban", "Amorphous"], therapy: "Anti-coagulant" },
  { id: "edoxaban", name: "Edoxaban Tosylate", category: "Anticoagulants", forms: ["ICH / IH"], therapy: "Anti-coagulant" },
  { id: "rivaroxaban", name: "Rivaroxaban", category: "Anticoagulants", forms: ["ICH / EP / USP / IH"], therapy: "Anti-coagulant" },
  { id: "vortioxetine", name: "Vortioxetine Hydrobromide", category: "CNS", forms: ["ICH / IH"], therapy: "Anti-depressant" },
  { id: "vonoprazan", name: "Vonoprazan Fumarate", category: "Gastrointestinal", forms: ["ICH / IH"], therapy: "Anti-ulcerative" }
];

export const financialHighlights = [
  { value: "5,753", label: "Revenue / INR million", detail: "Highest-ever quarterly revenue" },
  { value: "877", label: "EBITDA / INR million", detail: "Highest-ever quarterly EBITDA - 3x YoY" },
  { value: "8,250", label: "CDMO mandate / INR million", detail: "Entered commercial supplies" },
  { value: "15.25%", label: "EBITDA margin", detail: "Blended EBITDA improves" },
  { value: "+111%", label: "Export growth", detail: "Prioritisation of customer mix" },
  { value: "19%", label: "Medical Devices growth", detail: "Maintains strong growth" }
];

export const investorDocuments = [
  {
    id: "q1-fy27-presentation",
    category: "presentation",
    fiscalYear: "FY27",
    quarter: "Q1",
    title: "Q1 FY27 Investor Presentation",
    period: "Q1 FY27",
    date: "August 2026",
    thumbnail: "investor-q1-fy27-v36.svg",
    url: "https://www.morepen.com/public/uploads/investor/Morepen6a71a8193d1fe.pdf",
    summary: "Commercial validation, CDMO execution and operating leverage.",
    featured: true
  },
  {
    id: "q4-fy26-presentation",
    category: "presentation",
    fiscalYear: "FY26",
    quarter: "Q4",
    title: "Q4 & FY26 Investor Presentation",
    period: "FY26",
    date: "May 2026",
    thumbnail: "investor-q4-fy26-v36.svg",
    url: "https://www.morepen.com/public/uploads/media/Morepen6a16a18f98cb6.pdf",
    summary: "Full-year performance and the transition into commercial CDMO execution.",
    featured: true
  },
  {
    id: "q3-fy26-presentation",
    category: "presentation",
    fiscalYear: "FY26",
    quarter: "Q3",
    title: "Q3 FY26 Investor Presentation",
    period: "Q3 FY26",
    date: "February 2026",
    thumbnail: "investor-q3-fy26-v36.svg",
    url: "https://www.morepen.com/public/uploads/investor/Morepen698b074839ed1.pdf",
    summary: "Quarterly performance, business mix and strategic progress.",
    featured: true
  },
  {
    id: "q2-fy26-presentation",
    category: "presentation",
    fiscalYear: "FY26",
    quarter: "Q2",
    title: "Q2 FY26 Investor Presentation",
    period: "Q2 FY26",
    date: "November 2025",
    thumbnail: "investor-q2-fy26-v36.svg",
    url: "https://www.morepen.com/public/uploads/investor/Morepen691b11cedb1ae.pdf",
    summary: "Half-year performance and operating update across the platform.",
    featured: true
  },
  {
    id: "q1-fy26-presentation",
    category: "presentation",
    fiscalYear: "FY26",
    quarter: "Q1",
    title: "Q1 FY26 Investor Presentation",
    period: "Q1 FY26",
    date: "August 2025",
    thumbnail: "investor-q1-fy26-v36.svg",
    url: "https://www.morepen.com/public/uploads/investor/Morepen68933011edd77.pdf",
    summary: "Business overview, API market context and operating performance.",
    featured: true
  },
  {
    id: "annual-report-2025-26",
    category: "annual-report",
    fiscalYear: "FY26",
    title: "Annual Report 2025-26",
    period: "2025-26",
    date: "2026",
    thumbnail: "ar-cover-2025-26.jpg",
    url: "https://www.morepen.com/public/uploads/media/Morepen6a96e95ce43ac.pdf",
    featured: true
  },
  {
    id: "annual-report-2024-25",
    category: "annual-report",
    fiscalYear: "FY25",
    title: "Annual Report 2024-25",
    period: "2024-25",
    date: "2025",
    thumbnail: "ar-cover-2024-25.jpg",
    url: "https://www.morepen.com/public/uploads/media/Morepen68fa5b248f741.pdf",
    featured: true
  },
  {
    id: "annual-report-2023-24",
    category: "annual-report",
    fiscalYear: "FY24",
    title: "Annual Report 2023-24",
    period: "2023-24",
    date: "2024",
    thumbnail: "ar-cover-2023-24.jpg",
    url: "https://www.morepen.com/public/uploads/investor/Morepen66d80427947b7.pdf",
    featured: true
  },
  {
    id: "annual-report-2022-23",
    category: "annual-report",
    fiscalYear: "FY23",
    title: "Annual Report 2022-23",
    period: "2022-23",
    date: "2023",
    thumbnail: "ar-cover-2022-23.jpg",
    url: "https://www.morepen.com/public/uploads/investor/Morepen64f5c61aa68db.pdf",
    featured: true
  },
  {
    id: "current-investor-page",
    category: "archive-link",
    title: "Current investor page and regulatory archive",
    period: "Official website",
    date: "Live",
    url: "https://www.morepen.com/investors",
    summary: "Temporary bridge to current regulatory, compliance, governance and statutory investor information."
  }
];

export const publications = [
  { id: "q1-fy27", group: "Presentations", date: "August 2026", title: "Q1 FY27 Investor Presentation", image: "investor-q1-fy27-v36.svg", url: "https://www.morepen.com/public/uploads/investor/Morepen6a71a8193d1fe.pdf" },
  { id: "usfda-april-2026", group: "Announcements", date: "17 April 2026", title: "Masulkhana API facility inspection concluded with Nil Form 483 observations", image: "reg-usfda-v26.png" },
  { id: "cdmo-mandate", group: "Announcements", date: "4 August 2026", title: "CDMO commercial execution and operating update", image: "ar-cover-2025-26.jpg" }
];

export const contactTopics = [
  "API",
  "CDMO",
  "Drug Product",
  "R&D",
  "Medical Devices",
  "Rx",
  "OTC",
  "Investor Relations",
  "Careers"
];
