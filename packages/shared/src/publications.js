// Dated company publications. Source documents are served from the web app's
// /documents folder (extracted from the approved prototype) until the CMS feed exists.
export const documents = {
  inspection: "/documents/2026-04-17-usfda.pdf",
  results: "/documents/2026-08-04-results.pdf",
  anda: "/documents/2026-09-28-anda.pdf"
};

export const publications = [
  { id: "anda-submission", group: "Announcements", type: "Regulatory", date: "28 SEP 2026", sortDate: "2026-09-28", publishedAt: "2026-09-28", title: "First U.S. ANDA submission expands integrated development", description: "Connecting API knowledge with finished-dose development and regulatory filing.", url: documents.anda, status: "public", homeFeatured: true, homeOrder: 1, image: "analytical-lab.jpg", alt: "Laboratory photograph supplied in Morepen Q1 FY27 presentation", news: true },
  { id: "q1-fy27-results", group: "Financial results", type: "Financial", date: "04 AUG 2026", sortDate: "2026-08-04", publishedAt: "2026-08-04", title: "Q1 FY27: commercial execution and record quarterly results", description: "Revenue of INR 5,753 million and EBITDA of INR 877 million reported for Q1 FY27.", url: documents.results, status: "public", homeFeatured: true, homeOrder: 2, image: "baddi-aerial-2026.jpg", alt: "Morepen Baddi campus photograph", news: true },
  { id: "usfda-april-2026", group: "Announcements", type: "Quality", date: "17 APR 2026", sortDate: "2026-04-17", publishedAt: "2026-04-17", title: "Masulkhana inspection completed with NIL Form 483", description: "Company reports its fourth consecutive NIL 483 inspection outcome.", url: documents.inspection, status: "public", homeFeatured: true, homeOrder: 3, image: "development-lab.jpg", alt: "Morepen manufacturing equipment from supplied company materials", news: true },
  { id: "presentation-archive", group: "Presentations", type: "Archive", date: "OFFICIAL ARCHIVE", title: "Quarterly investor presentations", description: "Open the official repository for released presentations and reporting periods.", url: "https://www.morepen.com/investors", status: "archive" },
  { id: "annual-archive", group: "Annual reports", type: "Archive", date: "OFFICIAL ARCHIVE", title: "Annual reports and audited accounts", description: "Full-year reports, financial statements and supporting disclosures.", url: "https://www.morepen.com/investors", status: "archive" },
  { id: "governance-archive", group: "Governance", type: "Archive", date: "OFFICIAL ARCHIVE", title: "Governance and statutory disclosures", description: "Exchange disclosures, shareholding and governance records.", url: "https://www.morepen.com/investors", status: "archive" }
];

export const news = publications
  .filter((item) => item.status === "public" && item.news)
  .sort((a, b) => b.sortDate.localeCompare(a.sortDate));

export const newsTypes = ["All", "Regulatory", "Financial", "Quality"];

export const homeUpdates = publications
  .filter((item) => item.status === "public" && item.homeFeatured)
  .sort((a, b) => a.homeOrder - b.homeOrder)
  .slice(0, 3);
