import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Hero } from "../components/Hero.jsx";
import { FinalCta } from "../components/Sections.jsx";
import { asset } from "../data/assets.js";
import { getFinancialHighlights, getInvestorDocuments, getPage } from "../data/apiClient.js";

const disclosureCards = [
  ["Financial results", "Quarterly and annual results with year/quarter filters.", ["Quarterly results", "Annual results", "Newspaper publications"]],
  ["Earnings calls", "Audio, transcripts and investor-call material organised by financial year.", ["Audio recordings", "Transcripts", "Call schedules"]],
  ["Announcements & notices", "Exchange filings, shareholder notices, AGM/EGM documents and newspaper notices.", ["Exchange filings", "AGM / EGM", "Shareholder notices"]],
  ["Shareholding pattern", "Quarterly shareholding statements with a simple year and quarter selector.", ["Quarterly filings", "Historical periods", "QIB updates"]],
  ["Governance & Regulation 46", "Corporate-governance documents and mandatory website disclosures in one structured area.", ["Policies", "Board / committees", "Reg. 46"]],
  ["Subsidiary financials", "Entity-wise annual financial statements with year filters.", ["Devices", "Medipath / Rx", "Other subsidiaries"]],
  ["Shareholder services", "Dividend, IEPF, FD-holder information, KYC / nomination and special-window documents.", ["Dividend / IEPF", "FD holders", "KYC / nomination"]],
  ["Compliance & sustainability", "Annual returns, secretarial compliance, BRSR, certificates and policy repositories.", ["Annual return", "Secretarial compliance", "BRSR / policies"]]
];

export function InvestorsPage() {
  const page = getPage("/investors");
  const [highlights, setHighlights] = useState([]);
  const [documents, setDocuments] = useState([]);

  useEffect(() => {
    getFinancialHighlights().then((data) => setHighlights(data.highlights));
    getInvestorDocuments().then((data) => setDocuments(data.documents));
  }, []);

  const presentations = useMemo(
    () => documents.filter((document) => document.category === "presentation").slice(0, 5),
    [documents]
  );
  const annualReports = useMemo(
    () => documents.filter((document) => document.category === "annual-report").slice(0, 4),
    [documents]
  );
  const archiveLink = documents.find((document) => document.category === "archive-link");

  return (
    <>
      <Hero page={page} simple />
      <section className="section investor-kpi-section">
        <div className="wrap">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Q1 FY27 performance</p>
              <h2>Recent performance.<br />At a glance.</h2>
            </div>
            <div>
              <p>
                Headline achievements from the Q1 FY27 investor presentation. INR-million values
                are rounded to whole numbers; percentages retain their reported precision.
              </p>
              {presentations[0] && (
                <a className="text-link" href={presentations[0].url} target="_blank" rel="noreferrer">
                  Open Q1 FY27 presentation
                </a>
              )}
            </div>
          </div>
          <div className="financial-cards">
            {highlights.map((item) => (
              <article key={item.label}>
                <strong>{item.value}</strong>
                <h3>{item.label}</h3>
                <p>{item.detail}</p>
              </article>
            ))}
          </div>
          <p className="small-note">All INR-million figures are presented as rounded whole numbers. Percentages retain their reported precision.</p>
        </div>
      </section>
      <section className="section" id="investor-presentations">
        <div className="wrap">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Investor presentations</p>
              <h2>The latest five.<br />Easy to scan.</h2>
            </div>
            <p>
              Recent presentations are loaded through the API and shown as visual 16:9 cards, newest first.
            </p>
          </div>
          <div className="investor-presentation-grid">
            {presentations.map((document) => (
              <a className="investor-presentation-card" href={document.url} target="_blank" rel="noreferrer" key={document.id}>
                <div className="investor-presentation-thumb">
                  <img src={asset(document.thumbnail)} alt="" />
                </div>
                <div className="investor-presentation-copy">
                  <small>{document.period}</small>
                  <h3>{document.title}</h3>
                  <p>{document.summary}</p>
                  <span className="text-link">Open presentation</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
      <section className="section pale" id="annual-reports">
        <div className="wrap">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Annual reports</p>
              <h2>Annual reporting.<br />Visual and direct.</h2>
            </div>
            <p>
              Recent annual reports use cover thumbnails for faster recognition. Historical archive
              records can be managed from the same investor document data.
            </p>
          </div>
          <div className="annual-report-grid">
            {annualReports.map((document) => (
              <article className="annual-report-card" key={document.id}>
                <a href={document.url} target="_blank" rel="noreferrer">
                  <div className="annual-report-thumb">
                    <img src={asset(document.thumbnail)} alt="" />
                  </div>
                  <div className="annual-report-copy">
                    <small>{document.period}</small>
                    <h3>{document.title}</h3>
                    <span className="text-link">Open report</span>
                  </div>
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section" id="disclosure-library">
        <div className="wrap">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Investor information architecture</p>
              <h2>Everything else.<br />Compact and structured.</h2>
            </div>
            <div>
              <p>
                Regulatory and compliance data can stay bridged to the current official investor page
                while the full document CMS is completed.
              </p>
              {archiveLink && (
                <a className="btn outline" href={archiveLink.url} target="_blank" rel="noreferrer">
                  Current investor archive
                </a>
              )}
            </div>
          </div>
          <div className="investor-library-grid">
            {disclosureCards.map(([title, body, chips], index) => (
              <article className="investor-library-card" key={title}>
                <small>{String(index + 1).padStart(2, "0")} / DYNAMIC SECTION</small>
                <h3>{title}</h3>
                <p>{body}</p>
                <div>
                  {chips.map((chip) => (
                    <span key={chip}>{chip}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <InvestorContacts />
      <FinalCta />
    </>
  );
}

function InvestorContacts() {
  return (
    <section className="section investor-contacts" id="investor-contacts">
      <div className="wrap">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Important contacts</p>
            <h2>Investor & shareholder<br />contact directory.</h2>
          </div>
          <p>Use the relevant contact below for investor, secretarial, fixed-deposit, IEPF or registrar-related matters.</p>
        </div>
        <div className="investor-contact-grid">
          <ContactCard title="Company Secretary">
            <strong>Vipul Kumar Srivastava</strong><br />
            <a href="tel:+911244892000">0124-4892000</a><br />
            <a href="mailto:corporatefinance@morepen.com">corporatefinance@morepen.com</a>
          </ContactCard>
          <ContactCard title="Investor Relations">
            <strong>Rajas Suri</strong><br />
            <a href="mailto:rajas.suri@morepen.com">rajas.suri@morepen.com</a>
          </ContactCard>
          <ContactCard title="FD Related">
            <a href="mailto:fixeddeposit@morepen.com">fixeddeposit@morepen.com</a>
          </ContactCard>
          <ContactCard title="Registrar & Share Transfer Agent">
            <strong>MAS Services Limited</strong><br />
            T-34, 2nd Floor, Okhla Industrial Area,<br />
            Phase-II, New Delhi-110020<br />
            <a href="tel:+911126387281">011-26387281/82/83</a><br />
            <a href="mailto:investor@masserv.com">investor@masserv.com</a>
          </ContactCard>
          <ContactCard title="Nodal Officer for IEPF matters">
            <strong>Ajay Kumar Sharma</strong><br />
            2nd Floor, Tower C, DLF Cyber Park,<br />
            Udyog Vihar, Sector -20, Gurugram, Haryana - 122016<br />
            <a href="tel:+911244892000">0124-4892000</a><br />
            <a href="mailto:investors@morepen.com">investors@morepen.com</a>
          </ContactCard>
        </div>
        <div className="buttons">
          <Link className="btn" to="/contact?service=Investor%20Relations">Investor enquiry</Link>
        </div>
      </div>
    </section>
  );
}

function ContactCard({ title, children }) {
  return (
    <article className="investor-contact-card">
      <h3>{title}</h3>
      <p>{children}</p>
    </article>
  );
}
