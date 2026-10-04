import { externalLinks } from "@morepen/shared";

// Healthcare Businesses copy that is naturally data (card lists and support
// panels). Brand artwork and device highlights come from @morepen/shared.

export const healthcareGuide = [
  { term: "Medical Devices", text: " introduces the monitoring and chronic-care business; model-specific information belongs in the dedicated device channel." },
  { term: "Rx", text: " introduces the prescription-medicines business and its professional enquiry pathway." },
  { term: "OTC & Consumer Wellness", text: " introduces the Dr. Morepen consumer-health business, with detailed product information and shopping on its own website." },
  { term: "Drug Product", text: " remains separate: formulation, analytical development and regulatory work for pharmaceutical partners." }
];

// Medical Devices
export const deviceProductFamilies = [
  { badge: "MONITORING", title: "Blood glucose meters", text: "Devices for blood glucose monitoring, with detailed product information through the approved device channel.", spaced: true },
  { badge: "CONSUMABLES", title: "Blood glucose test strips", text: "Recurring consumables supporting the monitoring portfolio. Compatibility is product-specific.", spaced: true },
  { badge: "MONITORING", title: "Blood pressure monitors", text: "A dedicated monitoring category, supported by model-specific instructions and customer service.", spaced: true }
];

export const deviceFeatureRows = [
  { title: "Manufacturing & assembly", text: "The business story connects product development, assembly and quality checks." },
  { title: "Distribution & partnerships", text: "A dedicated route for institutional, channel and other business enquiries." },
  { title: "Customer information & support", text: "Clear hand-offs to the device website, without sending product concerns to the CDMO team." }
];

export const deviceSupport = [
  {
    title: "Business partnership?",
    text: "For channel, institutional or other commercial discussions.",
    links: [{ to: "contact?service=Medical%20Devices", label: "Medical Devices enquiry" }]
  },
  {
    title: "Product help or a concern?",
    text: "Use the dedicated device channel for customer support. Safety concerns should not be entered into this prototype.",
    links: [
      { href: externalLinks.devices, label: "Device information & support" },
      { href: externalLinks.adverseEvent, label: "Official safety reporting" }
    ]
  }
];

// Rx & Prescription Medicines
export const rxProfileCards = [
  { badge: "PORTFOLIO", title: "Therapy-led focus", text: "A dedicated portfolio module will present the current, approved therapy areas without mixing in consumer OTC or outdated brands.", note: "Portfolio content pending Rx review.", spaced: true },
  { badge: "PROFESSIONAL", title: "Medical & product information", text: "Factual, approved professional information, with a distinct route for medical enquiries and product-safety reporting." },
  { badge: "BUSINESS", title: "Channel relationships", text: "A focused entry point for distributors, institutions and other prescription-business partners." }
];

export const rxDistinctionCards = [
  { badge: "HEALTHCARE BUSINESS", title: "Rx & Prescription Medicines", text: "The prescription-medicines portfolio and its professional and commercial channels.", to: "contact?service=Rx", label: "Rx business enquiry" },
  { badge: "PHARMACEUTICAL PARTNER SERVICES", title: "Drug Product & ANDA", text: "Formulation, analytical development and regulatory-submission capabilities supporting partner programs.", to: "drug-product", label: "Explore development capabilities" }
];

export const rxSupport = [
  {
    title: "Talk to the Rx business.",
    text: "Introduce a professional, institutional or channel enquiry. Please do not include patient records or health data.",
    links: [{ to: "contact?service=Rx", label: "Rx enquiry" }]
  },
  {
    title: "Medical information or safety?",
    text: "Use the official published channels. Do not report an adverse event through this non-submitting prototype form.",
    links: [
      { href: externalLinks.contact, label: "Official contact directory" },
      { href: externalLinks.adverseEvent, label: "Official adverse event reporting" }
    ]
  }
];

// OTC & Consumer Wellness
export const otcBrandCards = [
  { badge: "BRANDS", title: "Established brand identities", text: "Burnol and Lemolate artwork provides the representative brand direction for this review. Current packs and the final portfolio must be approved before publication." },
  { badge: "CONSUMER WELLNESS", title: "A broader healthcare focus", text: "Introduce the approved consumer-health and wellness categories without copying product claims, promotions or the online store into this corporate page." },
  { badge: "PARTNERSHIPS", title: "Dedicated business channels", text: "A clear starting point for distribution, retail, institutional and other non-confidential business discussions." }
];

export const otcSupport = [
  {
    title: "Explore Dr. Morepen.",
    text: "Consumer information and the specialist brand experience belong on their own website.",
    links: [{ href: externalLinks.drMorepen, label: "Dr. Morepen consumer website" }]
  },
  {
    title: "Speak to the business team.",
    text: "For distribution and commercial discussions, select OTC in the enquiry form. Product concerns use a separate support or safety route.",
    links: [
      { to: "contact?service=OTC", label: "OTC business enquiry" },
      { href: externalLinks.customerSupport, label: "Customer support" },
      { href: externalLinks.adverseEvent, label: "Official safety reporting" }
    ]
  }
];
