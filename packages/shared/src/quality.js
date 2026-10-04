// Accreditation logos in carousel order (home, company, CDMO, API bands).
export const accreditationLogos = [
  { file: "reg-health-canada-v26.png", name: "Health Canada" },
  { file: "reg-taiwan-fda-v26.png", name: "Taiwan FDA" },
  { file: "reg-who-gmp-v26.jpg", name: "WHO-GMP" },
  { file: "reg-kfda-v26.webp", name: "Korea Food and Drug Administration" },
  { file: "reg-china-nmpa-v26.png", name: "China NMPA" },
  { file: "reg-anvisa-v26.png", name: "ANVISA Brazil" },
  { file: "reg-pmda-v26.webp", name: "PMDA Japan" },
  { file: "reg-edqm-v26.png", name: "EDQM Europe" },
  { file: "reg-usfda-v26.png", name: "United States Food and Drug Administration" }
];

// Consolidated credential matrix on the Quality page.
export const credentialLogos = [
  { file: "reg-usfda-v26.png", name: "USFDA" },
  { file: "reg-edqm-v26.png", name: "EDQM" },
  { file: "reg-health-canada-v26.png", name: "Health Canada" },
  { file: "reg-taiwan-fda-v26.png", name: "Taiwan FDA" },
  { file: "reg-who-gmp-v26.jpg", name: "WHO-GMP" },
  { file: "reg-kfda-v26.webp", name: "Korea KFDS / KFDA" },
  { file: "reg-china-nmpa-v26.png", name: "China NMPA" },
  { file: "reg-anvisa-v26.png", name: "ANVISA Brazil" },
  { file: "reg-pmda-v26.webp", name: "PMDA Japan" }
];

export const credentialTextBadges = [
  { code: "EU-GMP", label: "European Union GMP" },
  { code: "TGA", label: "Australia" }
];

export const qualityFilters = ["All", "Regulatory inspections", "Certifications", "Awards & recognition"];

export const qualityRecords = [
  { id: "usfda", kind: "Regulatory inspections", title: "USFDA / Masulkhana", headline: "NIL Form 483", scope: "API manufacturing facility at Masulkhana", date: "17 April 2026", body: "The supplied exchange disclosure reports an inspection with no Form 483 observations, and the fourth consecutive NIL 483 inspection for Morepen. This is a dated inspection outcome, not a blanket product approval.", source: "/documents/2026-04-17-usfda.pdf", sourceLabel: "Read the inspection disclosure", status: "Dated company disclosure", icon: "shield" },
  { id: "international", kind: "Regulatory inspections", title: "International regulatory references", headline: "Program-specific qualification", scope: "Site, product and activity specific", date: "Current company materials", body: "Company materials reference USFDA, KFDA, EDQM, PMDA, ANVISA, EU GMP, TGA, China NMPA and WHO-GMP credentials. Applicable documentation and current scope must be established for each site and program.", source: null, sourceLabel: "Request the relevant qualification package", status: "Scope confirmation required", icon: "circle" },
  { id: "iso-systems", kind: "Certifications", title: "Management-system certificates", headline: "Evidence before badges", scope: "Site and certificate scope to be confirmed", date: "Corporate presentation references", body: "ISO 14001, ISO 45001, ISO 50001 and ISO 37301 are referenced in the corporate presentation. Issuer, validity and scope require certificate-owner approval before publication as current credentials.", source: null, sourceLabel: "Documentation review required", status: "Publication approval pending", icon: "shield" },
  { id: "iso-13485", kind: "Certifications", title: "Medical Devices / ISO 13485", headline: "Separate from API credentials", scope: "Medical-device quality systems", date: "Supplied annual-report materials", body: "ISO 13485 appears against Medical Devices in supplied materials. It is not a blanket API or CDMO certification; current validity and scope must be confirmed.", source: null, sourceLabel: "Device documentation review required", status: "Publication approval pending", icon: "shield" },
  { id: "recognition", kind: "Awards & recognition", title: "Recognition & sustainability ratings", headline: "Historical, with context", scope: "Recipient, period and evidence specific", date: "Corporate materials", body: "Corporate materials reference a 2023 workplace recognition and an EcoVadis Bronze rating. Original evidence, date, assessed entity, validity and permissions must be approved before active badges or current-rating claims appear.", source: null, sourceLabel: "Evidence and permissions required", status: "Historical source references", icon: "award" }
];
