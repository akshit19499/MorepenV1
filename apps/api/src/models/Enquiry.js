import mongoose from "mongoose";

// One submission of the Contact page "Queries" form.
const enquirySchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true, maxlength: 120 },
    company: { type: String, required: true, trim: true, maxlength: 160 },
    country: { type: String, required: true, trim: true, maxlength: 80 },
    phone: { type: String, trim: true, maxlength: 40 },
    email: { type: String, required: true, trim: true, lowercase: true, maxlength: 180 },
    department: { type: String, required: true, trim: true, maxlength: 60 },
    subject: { type: String, required: true, trim: true, maxlength: 200 },
    message: { type: String, required: true, trim: true, maxlength: 4000 },
    status: { type: String, enum: ["new", "in-progress", "closed"], default: "new" },
    source: { type: String, default: "website" },
    userAgent: { type: String, maxlength: 300 }
  },
  { timestamps: true }
);

export const Enquiry = mongoose.models.Enquiry || mongoose.model("Enquiry", enquirySchema);
