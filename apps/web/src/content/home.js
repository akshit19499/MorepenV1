// Static copy for the Home page, verbatim from the approved prototype (homeV11).

// Hero carousel slides. `title` renders as "line<br>prefix<span class=accent>accent</span>".
export const heroSlides = [
  {
    id: "api",
    label: "APIs",
    kicker: "Active Pharmaceutical Ingredients / Global Supply",
    title: { line: "Four decades of", prefix: "", accent: "API chemistry." },
    text: "Established process chemistry, regulated-market manufacturing and global customer relationships form the scientific and manufacturing foundation of Morepen.",
    primary: { to: "api", label: "Explore APIs" },
    secondary: { to: "manufacturing", label: "Manufacturing & quality" },
    image: "cleanroom-quality.jpg",
    alt: "Morepen API manufacturing suite",
    caption: "Chemistry built for reliable global supply.",
    captionRoute: "api",
    captionLabel: "API / GLOBAL MANUFACTURING"
  },
  {
    id: "cdmo",
    label: "CDMO",
    kicker: "Development / Scale-up / Commercial Supply",
    title: { line: "From chemistry", prefix: "to ", accent: "long-term partnership." },
    text: "Integrated development and manufacturing services connect key intermediates, API/drug substance, analytical science, drug product and commercial supply.",
    primary: { to: "cdmo", label: "Explore CDMO" },
    secondary: { to: "contact?service=CDMO", label: "Discuss a program" },
    image: "scale-up.jpg",
    alt: "Morepen scale-up and manufacturing equipment",
    caption: "Development connected to commercial execution.",
    captionRoute: "cdmo",
    captionLabel: "CDMO / DEVELOPMENT TO SUPPLY"
  },
  {
    id: "research",
    label: "R&D",
    kicker: "Process Chemistry / Analytical Science / Innovation",
    title: { line: "Science that moves", prefix: "", accent: "molecules forward." },
    text: "Process development, analytical science, impurity understanding and technology transfer support the move from laboratory work to scalable manufacturing.",
    primary: { to: "research", label: "Explore R&D" },
    secondary: { to: "drug-product", label: "Drug Product" },
    image: "analytical-lab.jpg",
    alt: "Morepen analytical laboratory",
    caption: "Scientific depth for the next generation of programs.",
    captionRoute: "research",
    captionLabel: "R&D / SCIENCE & INNOVATION"
  },
  {
    id: "investors",
    label: "Investors",
    kicker: "News / Performance / Published Record",
    title: { line: "Progress you can", prefix: "", accent: "track." },
    text: "Follow reported commercial milestones, financial performance, regulatory developments and investor publications as Morepen scales its next phase of growth.",
    primary: { to: "investors", label: "Investor centre" },
    secondary: { to: "newsroom", label: "News & announcements" },
    image: "baddi-aerial-2026.jpg",
    alt: "Morepen manufacturing facility aerial view in Himachal Pradesh",
    caption: "Strategy translated into reported progress.",
    captionRoute: "investors",
    captionLabel: "INVESTORS / NEWS & NUMBERS"
  }
];

// "Chemistry, compliance and scale — connected." cards.
export const connectedPlatformCards = [
  {
    serial: "01",
    label: "SCIENCE",
    title: "Deep chemistry foundation",
    text: "Established small-molecule API expertise, process development and scale-up form the scientific base for higher-value customer programs."
  },
  {
    serial: "02",
    label: "DEVELOPMENT",
    title: "Integrated capabilities",
    text: "Custom development, analytical work, technology transfer and selected drug-product programs connect development with manufacturing."
  },
  {
    serial: "03",
    label: "MANUFACTURING",
    title: "Regulated-market execution",
    text: "Manufacturing infrastructure, quality systems and export experience support customers across regulated and emerging markets."
  },
  {
    serial: "04",
    label: "PARTNERSHIP",
    title: "Long-duration relationships",
    text: "Morepen is expanding from transaction-led supply toward recurring programs, commercial CDMO execution and deeper global partnerships."
  }
];

// "API strength. Connected capabilities." service tiles.
export const platformServices = [
  {
    title: "Active Pharmaceutical Ingredients",
    text: "A global API platform built on process chemistry, regulated-market manufacturing and long-standing customer relationships.",
    to: "api"
  },
  {
    title: "CDMO & Custom Development",
    text: "End-to-end support from key intermediates and API/drug substance development through analytical work, scale-up, technology transfer and commercial supply.",
    to: "cdmo"
  },
  {
    title: "Drug Product Development",
    text: "Formulation, analytical development, stability, regulatory batches and dossier support, demonstrated through the company's first U.S. ANDA submission.",
    to: "drug-product"
  }
];

// Morepen 2.0 spotlight matrix.
export const transformationMatrix = [
  { title: "Revenue mix", text: "Growing contribution from longer-duration customer programs and value-added manufacturing." },
  { title: "Capability", text: "Deeper process chemistry, analytical, regulatory and finished-dosage development capabilities." },
  { title: "Scale", text: "Capacity expansion aligned with customer programs, utilities, quality systems and execution readiness." },
  { title: "Partnership", text: "Greater emphasis on customer continuity, supply reliability and multi-year global relationships." }
];

// Manufacturing & supply proof points.
export const manufacturingProofs = [
  { title: "Baddi", text: "High-volume manufacturing and expansion platform." },
  { title: "Masulkhana", text: "Established API manufacturing and regulated-market track record." },
  { title: "Process scale-up", text: "Technology transfer and manufacturing integration." },
  { title: "Supply continuity", text: "Quality, reliability and customer commitments." }
];
