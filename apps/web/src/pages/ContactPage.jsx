import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Hero } from "../components/Hero.jsx";
import { getContactTopics, getPage, submitEnquiry } from "../data/apiClient.js";

export function ContactPage() {
  const page = getPage("/contact");
  const [searchParams] = useSearchParams();
  const [topics, setTopics] = useState([]);
  const [status, setStatus] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    topic: searchParams.get("service") || "API",
    message: searchParams.get("product")
      ? `I would like to discuss ${searchParams.get("product")}.`
      : ""
  });

  useEffect(() => {
    getContactTopics().then((data) => setTopics(data.topics));
  }, []);

  async function onSubmit(event) {
    event.preventDefault();
    setStatus("Sending...");
    try {
      await submitEnquiry(form);
      setStatus("Enquiry validated by the API. Delivery can be connected after approval.");
    } catch (error) {
      setStatus(error.message || "Could not submit enquiry.");
    }
  }

  return (
    <>
      <Hero page={page} />
      <section className="section">
        <div className="wrap contact-grid">
          <div>
            <p className="eyebrow">Non-confidential enquiry</p>
            <h2>Route the request to the right team.</h2>
            <p>
              Use this form for first contact only. Confidential program information should follow
              the appropriate agreement and approved channel.
            </p>
          </div>
          <form className="contact-form" onSubmit={onSubmit}>
            <label>
              Name
              <input
                required
                value={form.name}
                onChange={(event) => setForm({ ...form, name: event.target.value })}
              />
            </label>
            <label>
              Email
              <input
                required
                type="email"
                value={form.email}
                onChange={(event) => setForm({ ...form, email: event.target.value })}
              />
            </label>
            <label>
              Company
              <input
                value={form.company}
                onChange={(event) => setForm({ ...form, company: event.target.value })}
              />
            </label>
            <label>
              Topic
              <select
                value={form.topic}
                onChange={(event) => setForm({ ...form, topic: event.target.value })}
              >
                {topics.map((topic) => (
                  <option key={topic} value={topic}>
                    {topic}
                  </option>
                ))}
              </select>
            </label>
            <label className="full">
              Message
              <textarea
                required
                value={form.message}
                onChange={(event) => setForm({ ...form, message: event.target.value })}
              />
            </label>
            <button className="btn" type="submit">
              Submit enquiry
            </button>
            {status && <p className="form-status">{status}</p>}
          </form>
        </div>
      </section>
    </>
  );
}
