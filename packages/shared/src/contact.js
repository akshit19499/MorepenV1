export const contactServices = [
  "API",
  "CDMO",
  "Drug product",
  "R&D",
  "Manufacturing",
  "Quality",
  "Medical Devices",
  "Rx",
  "OTC",
  "Investor relations",
  "Other corporate enquiry"
];

// Services that are business or corporate enquiries: the program-stage field does not apply.
export const businessServices = ["Medical Devices", "Rx", "OTC", "Quality", "Investor relations", "Other corporate enquiry"];

export const programStages = [
  "Not specified",
  "Early development",
  "Process development",
  "Technology transfer",
  "Scale-up",
  "Commercial supply",
  "Not applicable"
];

export const corporateOffice = {
  name: "Morepen Laboratories Limited",
  addressLines: ["2nd Floor, Tower C, DLF Cyber Park", "Udyog Vihar-III, Sector 20", "Gurugram, Haryana 122016, India"],
  phone: { href: "tel:+911244892000", label: "+91 124 4892000" },
  email: "corporate@morepen.com",
  cdmoEmail: "cdmo@morepen.com"
};
