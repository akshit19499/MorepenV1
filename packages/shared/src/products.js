export const apiListUrl = "https://www.morepen.com/public/img/pdf/API-Product-List-October-2023.pdf";

export const apiCategories = [
  { name: "Diabetes", tag: "METABOLIC HEALTH", description: "Gliptins and gliflozins", icon: "metabolic" },
  { name: "Cardiovascular", tag: "CARDIOVASCULAR", description: "Lipid and blood-pressure therapies", icon: "heart" },
  { name: "Allergy & Respiratory", tag: "ALLERGY & RESPIRATORY", description: "Antihistaminic and respiratory APIs", icon: "lungs" },
  { name: "Anticoagulants", tag: "ANTICOAGULANTS", description: "A portfolio of anticoagulant APIs", icon: "flow" },
  { name: "CNS", tag: "CENTRAL NERVOUS SYSTEM", description: "Selected neuropsychiatric APIs", icon: "neural" },
  { name: "Gastrointestinal", tag: "GASTROINTESTINAL", description: "Selected gastrointestinal APIs", icon: "circle" }
];

const source = "https://www.morepen.com/api";
const reviewed = "2026-10-01";

export const products = [
  { id: "loratadine", name: "Loratadine", category: "Allergy & Respiratory", forms: ["USP / EP / IP"], therapy: "Antihistaminic", source, reviewed },
  { id: "desloratadine", name: "Desloratadine", category: "Allergy & Respiratory", forms: ["USP / EP / BP / ICH"], therapy: "Antihistaminic", source, reviewed },
  { id: "fexofenadine", name: "Fexofenadine Hydrochloride", category: "Allergy & Respiratory", forms: ["USP / EP / JP / IP"], therapy: "Antihistaminic", source, reviewed },
  { id: "montelukast", name: "Montelukast Sodium", category: "Allergy & Respiratory", forms: ["USP / EP / ICH / JP / IP"], therapy: "Anti-asthmatic", source, reviewed },
  { id: "atorvastatin", name: "Atorvastatin Calcium", category: "Cardiovascular", forms: ["Crystalline trihydrate", "Amorphous"], therapy: "Anti-lipemic", source, reviewed },
  { id: "rosuvastatin", name: "Rosuvastatin Calcium", category: "Cardiovascular", forms: ["Crystalline", "Amorphous"], therapy: "Anti-lipemic", source, reviewed },
  { id: "olmesartan", name: "Olmesartan Medoxomil", category: "Cardiovascular", forms: ["USP / EP / JP / IP"], therapy: "Anti-hypertensive", source, reviewed },
  { id: "sitagliptin", name: "Sitagliptin Phosphate", category: "Diabetes", forms: ["Monohydrate", "Anhydrous"], therapy: "Anti-diabetic", source, reviewed },
  { id: "saxagliptin", name: "Saxagliptin Hydrochloride", category: "Diabetes", forms: ["Hydrochloride", "Hydrochloride dihydrate"], therapy: "Anti-diabetic", source, reviewed },
  { id: "linagliptin", name: "Linagliptin", category: "Diabetes", forms: ["Linagliptin", "Form C"], therapy: "Anti-diabetic", source, reviewed },
  { id: "dapagliflozin", name: "Dapagliflozin", category: "Diabetes", forms: ["Amorphous", "Propanediol"], therapy: "Anti-diabetic", source, reviewed },
  { id: "empagliflozin", name: "Empagliflozin", category: "Diabetes", forms: ["ICH / IH"], therapy: "Anti-diabetic", source, reviewed },
  { id: "ertugliflozin", name: "Ertugliflozin L-Pyroglutamate", category: "Diabetes", forms: ["ICH / IH"], therapy: "Anti-diabetic", source, reviewed },
  { id: "apixaban", name: "Apixaban", category: "Anticoagulants", forms: ["Apixaban", "Amorphous"], therapy: "Anti-coagulant", source, reviewed },
  { id: "edoxaban", name: "Edoxaban Tosylate", category: "Anticoagulants", forms: ["ICH / IH"], therapy: "Anti-coagulant", source, reviewed },
  { id: "rivaroxaban", name: "Rivaroxaban", category: "Anticoagulants", forms: ["ICH / EP / USP / IH"], therapy: "Anti-coagulant", source, reviewed },
  { id: "vortioxetine", name: "Vortioxetine Hydrobromide", category: "CNS", forms: ["ICH / IH"], therapy: "Anti-depressant", source, reviewed },
  { id: "vonoprazan", name: "Vonoprazan Fumarate", category: "Gastrointestinal", forms: ["ICH / IH"], therapy: "Anti-ulcerative", source, reviewed }
];

export const apiSupportCards = [
  { value: "12+", title: "Dossiers", text: "Selected finished-dose dossiers in eCTD format to support customer product launches and documentation continuity." },
  { value: "100+", title: "Combinations", text: "Published combinations around established API families, supporting broader development discussions." },
  { value: "25+", title: "Key intermediates", text: "Intermediate chemistry supporting selected API programs, subject to patent, market and supply conditions." },
  { value: "DMF / CEP", title: "Regulatory packages", text: "Market-specific DMFs, CEPs and technical packages across regulated and international markets." }
];


export function filterProducts({ category = "All", query = "", sort = "featured" } = {}) {
  const needle = String(query).trim().toLowerCase();
  let list = products.filter(
    (product) =>
      (category === "All" || product.category === category) &&
      (!needle ||
        [product.name, product.category, product.therapy, ...product.forms]
          .join(" ")
          .toLowerCase()
          .includes(needle))
  );
  if (sort === "az") list = list.slice().sort((a, b) => a.name.localeCompare(b.name));
  return list;
}
