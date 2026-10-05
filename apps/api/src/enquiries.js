import mongoose from "mongoose";
import { countries, enquiryDepartments, enquiryRequiredFields } from "@morepen/shared";
import { Enquiry } from "./models/Enquiry.js";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const FIELDS = ["name", "company", "country", "phone", "email", "department", "subject", "message"];

// Normalise and validate a form submission. Returns { fields } or { error, missing }.
export function validateEnquiry(body = {}) {
  const fields = Object.fromEntries(FIELDS.map((key) => [key, String(body[key] ?? "").trim()]));
  const missing = enquiryRequiredFields.filter((key) => !fields[key]);
  if (missing.length) {
    return { error: "Please complete the required fields.", missing };
  }
  if (!EMAIL_PATTERN.test(fields.email)) {
    return { error: "Please enter a valid email address.", missing: ["email"] };
  }
  if (!enquiryDepartments.includes(fields.department)) {
    return { error: "Please select a department.", missing: ["department"] };
  }
  if (!countries.includes(fields.country)) {
    return { error: "Please select a country.", missing: ["country"] };
  }
  return { fields };
}

export async function handleEnquiry(req, res) {
  // Honeypot: real visitors never fill the hidden "website" field.
  if (String(req.body?.website ?? "").trim()) {
    res.status(202).json({ ok: true, stored: false });
    return;
  }

  const result = validateEnquiry(req.body);
  if (result.error) {
    res.status(400).json({ error: result.error, missing: result.missing });
    return;
  }

  if (mongoose.connection.readyState === 1) {
    const saved = await Enquiry.create({ ...result.fields, userAgent: req.get("user-agent")?.slice(0, 300) });
    res.status(201).json({ ok: true, stored: true, id: saved._id });
    return;
  }

  console.info("[api] enquiry received; MongoDB not configured so it was not stored", {
    department: result.fields.department,
    subject: result.fields.subject,
    email: result.fields.email
  });
  res.status(202).json({ ok: true, stored: false });
}
