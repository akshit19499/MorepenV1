import { externalLinks } from "@morepen/shared";

// Channels that sit outside the enquiry form (support band on the Contact page).
export const supportChannels = [
  {
    title: "Product safety and adverse events",
    text: "Do not use this prototype form for safety reporting.",
    href: externalLinks.adverseEvent,
    label: "Official adverse event reporting"
  },
  {
    title: "Device information & support",
    text: "Product information and customer support belong with the dedicated device channel.",
    href: externalLinks.devices,
    label: "Visit the devices website"
  },
  {
    title: "Consumer wellness & OTC",
    text: "Dr. Morepen consumer information and support are separate.",
    href: externalLinks.drMorepen,
    label: "Visit Dr. Morepen"
  }
];

// Copy shown by the enquiry form once a summary has been prepared.
export const enquiryRecipient = "corporate@morepen.com";
export const enquiryClosing =
  "Prepared using the Morepen website design prototype. Please route to the appropriate team.";
