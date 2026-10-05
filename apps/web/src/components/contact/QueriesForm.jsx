import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { countries, defaultCountry, enquiryDepartments, externalLinks } from "@morepen/shared";
import { submitEnquiry } from "../../lib/api.js";

const EMPTY = {
  name: "",
  company: "",
  country: defaultCountry,
  phone: "",
  email: "",
  department: enquiryDepartments[0],
  subject: "",
  message: "",
  website: "" // honeypot, never shown
};

// Site-wide calls to action pass ?service=<department>; match it case-insensitively.
function departmentFromQuery(value) {
  if (!value) return null;
  const wanted = value.trim().toLowerCase();
  return enquiryDepartments.find((name) => name.toLowerCase() === wanted) || null;
}

function initialValues(params) {
  const department = departmentFromQuery(params.get("service"));
  const product = params.get("product");
  return {
    ...EMPTY,
    department: department || EMPTY.department,
    subject: product ? `API enquiry: ${product}` : ""
  };
}

export function QueriesForm() {
  const [params] = useSearchParams();
  const [values, setValues] = useState(() => initialValues(params));
  const [robotChecked, setRobotChecked] = useState(false);
  const [status, setStatus] = useState({ state: "idle" });

  const update = (field) => (event) => setValues((current) => ({ ...current, [field]: event.target.value }));

  async function onSubmit(event) {
    event.preventDefault();
    setStatus({ state: "sending" });
    try {
      const result = await submitEnquiry(values);
      setStatus({ state: "sent", stored: result.stored });
      setValues(initialValues(params));
      setRobotChecked(false);
    } catch (error) {
      setStatus({ state: "error", message: error.message });
    }
  }

  const sending = status.state === "sending";

  return (
    <form className="queries-form" onSubmit={onSubmit}>
      <div className="queries-grid">
        <div className="form-field qf-name">
          <label htmlFor="enquiry-name">Name*</label>
          <input id="enquiry-name" name="name" placeholder="Type your Name" autoComplete="name" required maxLength={120} value={values.name} onChange={update("name")} />
        </div>
        <div className="form-field qf-department">
          <label htmlFor="enquiry-department">Select Department*</label>
          <select id="enquiry-department" name="department" required value={values.department} onChange={update("department")}>
            {enquiryDepartments.map((name) => (
              <option key={name} value={name}>
                {name}
              </option>
            ))}
          </select>
        </div>
        <div className="form-field qf-company">
          <label htmlFor="enquiry-company">Company Name*</label>
          <input id="enquiry-company" name="company" placeholder="Type your Company name" autoComplete="organization" required maxLength={160} value={values.company} onChange={update("company")} />
        </div>
        <div className="form-field qf-subject">
          <label htmlFor="enquiry-subject">Subject*</label>
          <input id="enquiry-subject" name="subject" placeholder="Type your subject" required maxLength={200} value={values.subject} onChange={update("subject")} />
        </div>
        <div className="form-field qf-country">
          <label htmlFor="enquiry-country">Country*</label>
          <select id="enquiry-country" name="country" required value={values.country} onChange={update("country")}>
            {countries.map((name) => (
              <option key={name} value={name}>
                {name}
              </option>
            ))}
          </select>
        </div>
        <div className="form-field qf-message">
          <label htmlFor="enquiry-message">Your Message*</label>
          <textarea id="enquiry-message" name="message" placeholder="Type your message" required maxLength={4000} value={values.message} onChange={update("message")} />
        </div>
        <div className="form-field qf-phone">
          <label htmlFor="enquiry-phone">Contact No.</label>
          <input id="enquiry-phone" name="phone" type="tel" placeholder="Type your contact number" autoComplete="tel" maxLength={40} value={values.phone} onChange={update("phone")} />
        </div>
        <div className="form-field qf-email">
          <label htmlFor="enquiry-email">Email ID*</label>
          <input id="enquiry-email" name="email" type="email" placeholder="Type your email address" autoComplete="email" required maxLength={180} value={values.email} onChange={update("email")} />
        </div>
        <p className="contact-support-link qf-grievance">
          For any grievance fill{" "}
          <a href={externalLinks.grievance} target="_blank" rel="noopener">
            Grievance Redressal Form
          </a>
        </p>
        <div className="queries-actions qf-actions">
          <label className="captcha-box">
            <input type="checkbox" required checked={robotChecked} onChange={(event) => setRobotChecked(event.target.checked)} />
            <span>I'm not a robot</span>
          </label>
          <button className="btn queries-submit" type="submit" disabled={sending}>
            {sending ? "SENDING…" : "SUBMIT"}
          </button>
        </div>
        <input type="text" name="website" tabIndex={-1} autoComplete="off" value={values.website} onChange={update("website")} className="honeypot" aria-hidden="true" />
      </div>
      {status.state === "sent" && (
        <p className="form-status success" role="status">
          Thank you. Your enquiry has been received and will be routed to the {values.department} team.
        </p>
      )}
      {status.state === "error" && (
        <p className="form-status error" role="alert">
          {status.message || "We could not send your enquiry. Please try again or email corporate@morepen.com."}
        </p>
      )}
    </form>
  );
}
