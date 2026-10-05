// `logo: null` renders the brand name as text until a clean logo file is supplied.
// Packshots whose supplied files were corrupt are omitted until replacements arrive.
export const healthcareBrands = {
  devices: { logo: null, brand: "Dr. Morepen", label: "Medical devices", line: "MONITORING & CONSUMABLES", items: [["glucose-strips.png", "Dr. Morepen Gluco One test-strip vial, historical packaging"]] },
  rx: { logo: "morepen-logo.png", brand: "Morepen", label: "Rx & prescription medicines", line: "PRESCRIPTION BUSINESS", items: [["rx-cefopen.png", "Cefopen-CV 50 package from the May 2024 Morepen presentation"]] },
  otc: { logo: null, brand: "Dr. Morepen", label: "OTC & consumer wellness", line: "RECOGNISABLE HEALTHCARE BRANDS", items: [["otc-burnol.png", "Burnol branded packaging from the May 2024 Morepen presentation"], ["otc-lemolate.png", "Lemolate branded packaging from the May 2024 Morepen presentation"]] }
};

export const deviceHighlights = [
  { value: "20 Mn", label: "Reported meter installed base" },
  { value: "500 Mn", label: "Reported annual strip scale" },
  { value: "19%", label: "Medical Devices growth / Q1 FY27" }
];
