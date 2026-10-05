// Contact page content, mirroring the published Morepen contact page.
// Rows render as "Label:" followed by lines, a phone link or an email link.

export const contactOffices = [
  {
    id: "corporate",
    title: "Corporate Office",
    rows: [
      { label: "Address", lines: ["Morepen Laboratories Ltd.,", "2nd Floor, Tower C,", "DLF Cyber Park,", "Udyog Vihar, Sector -20,", "Gurgaon - 122016"] },
      { label: "Contacts", phone: { href: "tel:+911244892000", label: "+91 124-4892000" } },
      { label: "Email", email: "corporate@morepen.com" }
    ]
  },
  {
    id: "registered",
    title: "Registered Office",
    rows: [
      { label: "Address", lines: ["Morepen Village", "Nalagarh Road,", "Near Baddi, Distt. Solan", "Himachal Pradesh - 173220"] },
      { label: "Email", email: "plants@morepen.com" }
    ]
  }
];

export const contactPlants = [
  { id: "musalkhanna", title: "Musalkhanna Plant", rows: [{ label: "Contact", text: "91-01792 - 233283 TO 233288" }] },
  { id: "baddi", title: "Baddi Plant", rows: [{ label: "Contact", text: "91-01795 - 276201 TO 276203" }] }
];

export const contactUsaOffice = {
  id: "usa",
  title: "USA Office",
  rows: [
    { label: "Address", lines: ["666 Plainsboro Road,", "Suite 215, Plainsboro", "New Jersey - 08536"] },
    { label: "Contacts", phone: { href: "tel:+16097166300", label: "609 716 6300" } },
    { label: "Email", email: "ussales@morepen.com" }
  ]
};

export const importantContacts = {
  id: "important",
  title: "Important Contacts",
  rows: [
    { label: "Careers", email: "humanresource@morepen.com" },
    { label: "HomeHealth Devices", email: "devices.customercare@morepen.com" },
    { label: "Finance", email: "corporatefinance@morepen.com" }
  ]
};

export const adverseEventContact = {
  email: "pv@morepen.com",
  usTollFree: { href: "tel:+18445245035", label: "+1 844-524-5035" }
};

// Departments offered by the "Queries" form. Calls to action across the site
// pass ?service=<department> so the right one is preselected.
export const enquiryDepartments = [
  "Customer Support",
  "Business Enquiry",
  "API",
  "CDMO",
  "Drug Product",
  "R&D",
  "Manufacturing",
  "Quality",
  "Medical Devices",
  "Rx",
  "OTC",
  "Investor Relations",
  "Careers",
  "Media"
];

export const enquiryRequiredFields = ["name", "company", "country", "email", "department", "subject", "message"];

export const corporateOffice = {
  name: "Morepen Laboratories Limited",
  addressLines: ["2nd Floor, Tower C, DLF Cyber Park", "Udyog Vihar-III, Sector 20", "Gurugram, Haryana 122016, India"],
  phone: { href: "tel:+911244892000", label: "+91 124 4892000" },
  email: "corporate@morepen.com",
  cdmoEmail: "cdmo@morepen.com"
};
