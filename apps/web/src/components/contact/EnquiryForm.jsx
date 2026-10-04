import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { businessServices, contactServices, programStages } from "@morepen/shared";
import { enquiryClosing, enquiryRecipient } from "../../content/contact.js";

const NOT_APPLICABLE = "Not applicable";

// Route note shown in place of the program-stage field for business enquiries.
function routeNote(service) {
  if (service === "Quality") {
    return "Quality documentation enquiry. Identify the relevant site, product and intended market. This prototype prepares a summary only; it does not transmit confidential information.";
  }
  return `${service} business enquiry. This demo labels the intended team but does not send or route data. Use the published support or safety channel for product concerns. Do not include patient or health data.`;
}

function initialFields(searchParams) {
  const service = searchParams.get("service");
  const product = searchParams.get("product");
  const validService = service && contactServices.includes(service) ? service : "";
  const business = businessServices.includes(validService);
  return {
    name: "",
    company: "",
    email: "",
    country: "",
    service: validService,
    stage: business ? NOT_APPLICABLE : programStages[0],
    message: product ? `API enquiry: ${product}\nIntended market: \nBroad supply requirements: ` : "",
    consent: false
  };
}

// Demonstration enquiry form: prepares a summary in the page and offers a
// mailto draft. Nothing is submitted or stored.
export function EnquiryForm() {
  const [searchParams] = useSearchParams();
  const [fields, setFields] = useState(() => initialFields(searchParams));
  const [output, setOutput] = useState(null);
  const outputRef = useRef(null);

  const business = businessServices.includes(fields.service);

  const update = (name, value) => setFields((current) => ({ ...current, [name]: value }));

  const changeService = (service) => {
    setFields((current) => ({
      ...current,
      service,
      stage: businessServices.includes(service) ? NOT_APPLICABLE : current.stage
    }));
  };

  useEffect(() => {
    if (output) outputRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
  }, [output]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const value = (key) => String(fields[key] || "").trim();
    // A disabled stage select is left out of the submitted data, as with FormData.
    const stage = business ? "" : value("stage");
    const body = `Non-confidential enquiry\n\nName: ${value("name")}\nCompany: ${value("company")}\nWork email: ${value("email")}\nCountry / region: ${value("country")}\nArea of interest: ${value("service")}\nProgram stage: ${stage}\n\nRequirement:\n${value("message")}\n\n${enquiryClosing}`;
    const subject = `Morepen enquiry - ${value("service")} - ${value("company")}`;
    setOutput({
      body,
      href: `mailto:${enquiryRecipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    });
  };

  return (
    <form id="enquiry-form" className="contact-form" onSubmit={handleSubmit}>
      <h3>Introduce your program.</h3>
      <p>
        <strong>Prototype form.</strong> Nothing is submitted or stored. Prepare a summary, then choose whether to open
        it in your own email application.
      </p>
      <div className="form-grid">
        <div className="form-field">
          <label htmlFor="name">Your name *</label>
          <input
            id="name"
            name="name"
            autoComplete="name"
            required
            maxLength={100}
            value={fields.name}
            onChange={(event) => update("name", event.target.value)}
          />
        </div>
        <div className="form-field">
          <label htmlFor="company">Company *</label>
          <input
            id="company"
            name="company"
            autoComplete="organization"
            required
            maxLength={150}
            value={fields.company}
            onChange={(event) => update("company", event.target.value)}
          />
        </div>
        <div className="form-field">
          <label htmlFor="email">Work email *</label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            maxLength={180}
            value={fields.email}
            onChange={(event) => update("email", event.target.value)}
          />
        </div>
        <div className="form-field">
          <label htmlFor="country">Country / region *</label>
          <input
            id="country"
            name="country"
            autoComplete="country-name"
            required
            maxLength={80}
            value={fields.country}
            onChange={(event) => update("country", event.target.value)}
          />
        </div>
        <div className="form-field">
          <label htmlFor="service">Area of interest *</label>
          <select id="service" name="service" required value={fields.service} onChange={(event) => changeService(event.target.value)}>
            <option value="">Select a service</option>
            {contactServices.map((service) => (
              <option key={service}>{service}</option>
            ))}
          </select>
        </div>
        <div className="form-field" id="program-stage-field" hidden={business}>
          <label htmlFor="stage">Program stage</label>
          <select id="stage" name="stage" disabled={business} value={fields.stage} onChange={(event) => update("stage", event.target.value)}>
            {programStages.map((stage) => (
              <option key={stage}>{stage}</option>
            ))}
          </select>
        </div>
        <div id="service-route-note" className="service-route-note form-field full" aria-live="polite" hidden={!business}>
          {business ? routeNote(fields.service) : ""}
        </div>
        <div className="form-field full">
          <label htmlFor="message">Brief, non-confidential requirement *</label>
          <textarea
            id="message"
            name="message"
            required
            maxLength={1800}
            placeholder="Product or service, intended market, broad timeline and support required. Do not include confidential structures or process details."
            value={fields.message}
            onChange={(event) => update("message", event.target.value)}
          ></textarea>
        </div>
        <label className="check-field">
          <input type="checkbox" required checked={fields.consent} onChange={(event) => update("consent", event.target.checked)} />
          <span>I understand this is a demonstration form and will include only non-confidential information.</span>
        </label>
      </div>
      <div className="buttons">
        {" "}
        <button className="btn" type="submit">
          Prepare enquiry{" "}
          <span className="arrow" aria-hidden="true">
            →
          </span>
        </button>
      </div>
      <p className="small-note">No attachments are accepted. No data is sent to Morepen by this form.</p>
      <div id="form-output" hidden={!output} className="form-message" aria-live="polite" ref={outputRef}>
        {output && (
          <>
            <h4>Enquiry prepared. Not sent.</h4>
            <p>
              Review the summary below. The next button opens your email application; it does not send anything
              automatically. Recipient: {enquiryRecipient}.
            </p>
            <pre>{output.body}</pre>
            <a className="btn small" href={output.href}>
              Open email draft <span aria-hidden="true">↗</span>
            </a>
          </>
        )}
      </div>
    </form>
  );
}
