export const investorArchiveUrl = "https://www.morepen.com/investors";

export const financialHighlights = [
  { value: "5,753", label: "Revenue / INR million", detail: "Highest-ever quarterly revenue" },
  { value: "877", label: "EBITDA / INR million", detail: "Highest-ever quarterly EBITDA - 3x YoY" },
  { value: "8,250", label: "CDMO mandate / INR million", detail: "Entered commercial supplies" },
  { value: "15.25%", label: "EBITDA margin", detail: "Blended EBITDA improves" },
  { value: "+111%", label: "Export growth", detail: "Prioritisation of customer mix" },
  { value: "19%", label: "Medical Devices growth", detail: "Maintains strong growth" }
];

export const investorPresentations = [
  { id: "q1-fy27-presentation", category: "presentation", fiscalYear: "FY27", quarter: "Q1", title: "Q1 FY27 Investor Presentation", period: "Q1 FY27", date: "August 2026", thumbnail: "investor-q1-fy27.jpg", url: "https://www.morepen.com/public/uploads/investor/Morepen6a71a8193d1fe.pdf", summary: "Commercial validation, CDMO execution and operating leverage." },
  { id: "q4-fy26-presentation", category: "presentation", fiscalYear: "FY26", quarter: "Q4", title: "Q4 & FY26 Investor Presentation", period: "FY26", date: "May 2026", thumbnail: "investor-q4-fy26.jpg", url: "https://www.morepen.com/public/uploads/media/Morepen6a16a18f98cb6.pdf", summary: "Full-year performance and the transition into commercial CDMO execution." },
  { id: "q3-fy26-presentation", category: "presentation", fiscalYear: "FY26", quarter: "Q3", title: "Q3 FY26 Investor Presentation", period: "Q3 FY26", date: "February 2026", thumbnail: "investor-q3-fy26.jpg", url: "https://www.morepen.com/public/uploads/investor/Morepen698b074839ed1.pdf", summary: "Quarterly performance, business mix and strategic progress." },
  { id: "q2-fy26-presentation", category: "presentation", fiscalYear: "FY26", quarter: "Q2", title: "Q2 FY26 Investor Presentation", period: "Q2 FY26", date: "November 2025", thumbnail: "investor-q2-fy26.jpg", url: "https://www.morepen.com/public/uploads/investor/Morepen691b11cedb1ae.pdf", summary: "Half-year performance and operating update across the platform." },
  { id: "q1-fy26-presentation", category: "presentation", fiscalYear: "FY26", quarter: "Q1", title: "Q1 FY26 Investor Presentation", period: "Q1 FY26", date: "August 2025", thumbnail: "investor-q1-fy26.jpg", url: "https://www.morepen.com/public/uploads/investor/Morepen68933011edd77.pdf", summary: "Business overview, API market context and operating performance." }
];

export const annualReports = [
  { id: "annual-report-2025-26", category: "annual-report", fiscalYear: "FY26", period: "2025–26", title: "Annual Report 2025–26", date: "2026", thumbnail: "ar-cover-2025-26.jpg", url: "https://www.morepen.com/public/uploads/media/Morepen6a96e95ce43ac.pdf" },
  { id: "annual-report-2024-25", category: "annual-report", fiscalYear: "FY25", period: "2024–25", title: "Annual Report 2024–25", date: "2025", thumbnail: "ar-cover-2024-25.jpg", url: "https://www.morepen.com/public/uploads/media/Morepen68fa5b248f741.pdf" },
  { id: "annual-report-2023-24", category: "annual-report", fiscalYear: "FY24", period: "2023–24", title: "Annual Report 2023–24", date: "2024", thumbnail: "ar-cover-2023-24.jpg", url: "https://www.morepen.com/public/uploads/investor/Morepen66d80427947b7.pdf" },
  { id: "annual-report-2022-23", category: "annual-report", fiscalYear: "FY23", period: "2022–23", title: "Annual Report 2022–23", date: "2023", thumbnail: "ar-cover-2022-23.jpg", url: "https://www.morepen.com/public/uploads/investor/Morepen64f5c61aa68db.pdf" }
];

export const investorDocuments = [
  ...investorPresentations,
  ...annualReports,
  { id: "current-investor-page", category: "archive-link", title: "Current investor page and regulatory archive", period: "Official website", date: "Live", url: investorArchiveUrl, summary: "Temporary bridge to current regulatory, compliance, governance and statutory investor information." }
];

export const disclosureSections = [
  { title: "Financial results", text: "Quarterly and annual results with year/quarter filters.", chips: ["Quarterly results", "Annual results", "Newspaper publications"] },
  { title: "Earnings calls", text: "Audio, transcripts and investor-call material organised by financial year.", chips: ["Audio recordings", "Transcripts", "Call schedules"] },
  { title: "Announcements & notices", text: "Exchange filings, shareholder notices, AGM/EGM documents and newspaper notices.", chips: ["Exchange filings", "AGM / EGM", "Shareholder notices"] },
  { title: "Shareholding pattern", text: "Quarterly shareholding statements with a simple year and quarter selector.", chips: ["Quarterly filings", "Historical periods", "QIB updates"] },
  { title: "Governance & Regulation 46", text: "Corporate-governance documents and mandatory website disclosures in one structured area.", chips: ["Policies", "Board / committees", "Reg. 46"] },
  { title: "Subsidiary financials", text: "Entity-wise annual financial statements with year filters.", chips: ["Devices", "Medipath / Rx", "Other subsidiaries"] },
  { title: "Shareholder services", text: "Dividend, IEPF, FD-holder information, KYC / nomination and special-window documents.", chips: ["Dividend / IEPF", "FD holders", "KYC / nomination"] },
  { title: "Compliance & sustainability", text: "Annual returns, secretarial compliance, BRSR, certificates and policy repositories.", chips: ["Annual return", "Secretarial compliance", "BRSR / policies"] }
];

export const investorContacts = [
  { title: "Company Secretary", name: "Vipul Kumar Srivastava", phone: { href: "tel:+911244892000", label: "0124-4892000" }, email: "corporatefinance@morepen.com" },
  { title: "Investor Relations", name: "Rajas Suri", email: "rajas.suri@morepen.com" },
  { title: "FD Related", email: "fixeddeposit@morepen.com" },
  { title: "Registrar & Share Transfer Agent", name: "MAS Services Limited", addressLines: ["T-34, 2nd Floor, Okhla Industrial Area,", "Phase-II, New Delhi-110020"], phone: { href: "tel:+911126387281", label: "011-26387281/82/83" }, email: "investor@masserv.com" },
  { title: "Nodal Officer for IEPF matters", subhead: "Chief Financial Officer", name: "Ajay Kumar Sharma", addressLines: ["2nd Floor, Tower C, DLF Cyber Park,", "Udyog Vihar", "Sector -20, Gurugram, Haryana - 122016"], phone: { href: "tel:+911244892000", label: "0124-4892000" }, email: "investors@morepen.com", iepf: true }
];
