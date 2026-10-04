import { Link } from "react-router-dom";
import { useEffect, useMemo, useRef, useState } from "react";
import { metrics } from "@morepen/shared";
import { Hero } from "../components/Hero.jsx";
import { FinalCta } from "../components/Sections.jsx";
import { asset } from "../data/assets.js";
import { getPage } from "../data/apiClient.js";

const pillars = [
  ["01", "API foundation", "APIs remain the scientific and manufacturing base of the company and a major contributor to global supply."],
  ["02", "CDMO growth", "Long-duration development and manufacturing programs are deepening customer relationships and expanding the role of the platform."],
  ["03", "Scale & execution", "Installed API/CDMO reactor capacity has reached 614 KL, with further phases planned against customer programs and regulatory readiness."],
  ["04", "Capability building", "Morepen is strengthening complex chemistry, analytical science, drug-product development and future technology platforms."]
];

const milestones = [
  ["1984-85", "The beginning", "API production starts at Masulkhana, establishing Morepen's manufacturing roots."],
  ["1992", "Public markets", "IPO and listing on Indian stock exchanges broaden the company's access to capital."],
  ["1996-99", "Scale & regulated markets", "Finished-dosage production expands and Loratadine at Masulkhana marks an important USFDA milestone."],
  ["2001-04", "Broader healthcare", "Dr. Morepen is launched and Montelukast production adds another significant API franchise."],
  ["2010-18", "Regulatory depth", "Further USFDA and international milestones extend Morepen's regulated-market presence."],
  ["2021-24", "Global approvals broaden", "USFDA, PMDA and ANVISA milestones strengthen international customer confidence."],
  ["2025", "Finished dosage in the U.S.", "An OTC formulation launch in the U.S. extends the product journey."],
  ["2026", "Commercial CDMO & integrated development", "Commercial CDMO supplies commence, installed API/CDMO reactor capacity reaches 614 KL and the first U.S. ANDA is submitted."]
];

const accreditationLogos = [
  ["reg-health-canada-v26.png", "Health Canada"],
  ["reg-taiwan-fda-v26.png", "Taiwan FDA"],
  ["reg-who-gmp-v26.jpg", "WHO-GMP"],
  ["reg-kfda-v26.webp", "Korea Food and Drug Administration"],
  ["reg-china-nmpa-v26.png", "China NMPA"],
  ["reg-anvisa-v26.png", "ANVISA Brazil"],
  ["reg-pmda-v26.webp", "PMDA Japan"],
  ["reg-edqm-v26.png", "EDQM Europe"],
  ["reg-usfda-v26.png", "United States Food and Drug Administration"]
];

export function CompanyPage() {
  const page = getPage("/company");

  return (
    <>
      <Hero page={page} />
      <section className="metrics-strip" aria-label="Morepen at a glance">
        <div className="wrap metrics-grid">
          {metrics.map((metric) => (
            <div className="metric" key={metric.label}>
              <CountUpMetric value={metric.value} />
              <span>{metric.label}</span>
            </div>
          ))}
        </div>
        <p className="wrap metrics-note">
          Current installed API/CDMO reactor capacity: 614 KL. Inspection milestone: company disclosure dated 17 April 2026. Site-specific qualification applies.
        </p>
      </section>
      <section className="section">
        <div className="wrap">
          <div className="section-heading">
            <div>
              <p className="eyebrow">The company today</p>
              <h2>A manufacturing foundation.<br />A broader future.</h2>
            </div>
            <p>
              Morepen's transformation is not a departure from its roots. It is the next stage of a
              business built on chemistry, manufacturing experience, regulatory discipline and
              service to healthcare.
            </p>
          </div>
          <div className="company-pillars">
            {pillars.map(([number, title, body]) => (
              <article key={number}>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section pale" id="company-journey">
        <div className="wrap">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Our journey</p>
              <h2>From API beginnings<br />to a global platform.</h2>
            </div>
            <p>
              Morepen's journey shows a consistent pattern: build scientific depth, earn regulatory
              credibility, scale manufacturing and extend into new healthcare and development capabilities.
            </p>
          </div>
          <div className="company-timeline">
            {milestones.map(([year, title, body]) => (
              <article className="company-milestone" key={year}>
                <strong>{year}</strong>
                <span />
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section" id="credentials">
        <div className="wrap">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Global quality & regulatory credentials</p>
              <h2>Regulatory credibility<br />built over time.</h2>
            </div>
            <p>
              Morepen's manufacturing and quality systems support customers across regulated markets.
              Regulatory approvals, inspections and registrations remain specific to the applicable
              site, product and filing.
            </p>
          </div>
          <div className="accreditation-carousel" aria-label="Global regulatory and quality credentials">
            <div className="accreditation-viewport">
              <div className="accreditation-track">
                {[...accreditationLogos, ...accreditationLogos].map(([image, label], index) => (
                  <article key={`${image}-${index}`}>
                    <img src={asset(image)} alt={`${label} logo`} />
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section pale">
        <div className="wrap split">
          <div className="editorial-image short">
            <img src={asset("solar-2026.jpg")} alt="Solar panels at Morepen manufacturing operations" />
          </div>
          <div>
            <p className="eyebrow">Responsible manufacturing</p>
            <h2>ESG as resilience,<br />continuity and responsibility.</h2>
            <p>
              Morepen's approach links environmental performance with compliance, customer expectations
              and business continuity. During FY26, the company reported investments in zero-liquid-discharge
              infrastructure, renewable energy, cleaner fuels and resource-efficiency projects.
            </p>
            <div className="feature-list compact-feature-list">
              {[
                ["01", "Zero Liquid Discharge / MEE", "Multiple-effect evaporator infrastructure supports water treatment, reuse and zero-liquid-discharge objectives at manufacturing operations."],
                ["02", "Solar energy", "A 1.1 MW solar plant was commissioned in December 2025, with further renewable-energy initiatives under evaluation."],
                ["03", "Cleaner fuels", "LPG boiler conversion and a Parali-based biomass boiler form part of the company's lower-emission manufacturing program."],
                ["04", "Business continuity", "Environmental systems, safe operations, quality discipline and resilient infrastructure are treated as part of dependable global supply."]
              ].map(([number, title, body]) => (
                <article className="feature-row" key={number}>
                  <span className="num">{number}</span>
                  <div>
                    <h3>{title}</h3>
                    <p>{body}</p>
                  </div>
                </article>
              ))}
            </div>
            <Link className="text-link" to="/manufacturing">Responsible manufacturing</Link>
          </div>
        </div>
      </section>
      <PortfolioMap />
      <CsrSection />
      <LeadershipSection />
      <FinalCta
        eyebrow="Partner with Morepen"
        title="Start with the right business team."
        body="For APIs, CDMO, drug-product development, healthcare businesses or investor enquiries, send a short non-confidential note and we will route it to the relevant team."
        action="Open contact form"
        to="/contact"
      />
    </>
  );
}

function CountUpMetric({ value }) {
  const ref = useRef(null);
  const hasAnimated = useRef(false);
  const [count, setCount] = useState(0);
  const parsed = useMemo(() => {
    const match = String(value).match(/^(\d+(?:\.\d+)?)(.*)$/);
    return {
      target: match ? Number(match[1]) : 0,
      suffix: match ? match[2] : "",
      fallback: String(value)
    };
  }, [value]);

  useEffect(() => {
    const node = ref.current;
    if (!node || hasAnimated.current) return undefined;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion || !("IntersectionObserver" in window)) {
      setCount(parsed.target);
      hasAnimated.current = true;
      return undefined;
    }

    let frame = 0;
    const duration = 1200;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        hasAnimated.current = true;
        const start = performance.now();
        const tick = (now) => {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setCount(Math.round(parsed.target * eased));
          if (progress < 1) {
            frame = requestAnimationFrame(tick);
          }
        };
        frame = requestAnimationFrame(tick);
        observer.disconnect();
      },
      { threshold: 0.35 }
    );

    observer.observe(node);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [parsed.target]);

  return (
    <strong ref={ref}>
      {parsed.target ? `${count}${parsed.suffix}` : parsed.fallback}
    </strong>
  );
}

function PortfolioMap() {
  return (
    <section className="section portfolio-map">
      <div className="wrap">
        <div className="section-heading">
          <div>
            <p className="eyebrow">A clear business architecture</p>
            <h2>One corporate view.<br />Distinct business stories.</h2>
          </div>
          <p>Our website makes each business easy to find, without confusing pharmaceutical partner services with healthcare products.</p>
        </div>
        <div className="portfolio-grid">
          <article>
            <span className="badge">LEAD TRANSFORMATION PLATFORM</span>
            <h3>Pharmaceutical development<br />& manufacturing</h3>
            <p>API expertise, CDMO partnerships and drug-product development, supported by science, quality and manufacturing.</p>
            <div className="portfolio-links">
              <Link className="text-link" to="/api">APIs</Link>
              <Link className="text-link" to="/cdmo">CDMO</Link>
              <Link className="text-link" to="/drug-product">Drug Product</Link>
            </div>
          </article>
          <article>
            <span className="badge">DEDICATED BUSINESS VISIBILITY</span>
            <h3>Healthcare<br />Businesses</h3>
            <p>Medical Devices, Rx and OTC retain their own identities, audiences and enquiry routes.</p>
            <div className="portfolio-links">
              <Link className="text-link" to="/healthcare/medical-devices">Medical Devices</Link>
              <Link className="text-link" to="/healthcare/rx">Rx & Prescription Medicines</Link>
              <Link className="text-link" to="/healthcare/otc">OTC & Consumer Wellness</Link>
            </div>
          </article>
        </div>
        <p className="small-note">This is a website navigation structure, not a legal-entity or financial-consolidation chart.</p>
      </div>
    </section>
  );
}

function CsrSection() {
  const focus = [
    ["01 / Healthcare", "Preventive healthcare & access", "Charitable dispensary support, medical camps, health screening drives and awareness programs designed to improve community health and access."],
    ["02 / Education & skills", "Learning and livelihoods", "Scholarships, educational infrastructure and vocational training aimed at improving learning opportunities and employable skills."],
    ["03 / Environment", "Natural-resource stewardship", "Community initiatives around environmental awareness, biodiversity, water conservation and sustainable land management."],
    ["04 / Rural development", "Stronger local ecosystems", "Infrastructure enhancement and livelihood-generation initiatives intended to improve quality of life and economic resilience in rural communities."]
  ];

  return (
    <section className="section csr-section" id="csr">
      <div className="wrap csr-intro">
        <div>
          <p className="eyebrow">Corporate social responsibility</p>
          <h2>Creating shared value<br />in the communities around us.</h2>
          <p>Morepen's CSR framework focuses on practical, sustained interventions in healthcare, education and skills, environmental stewardship and rural development.</p>
          <div className="csr-stat">
            <strong>INR 25 million</strong>
            <span>CSR expenditure reported for FY26</span>
          </div>
        </div>
        <div className="csr-focus-grid">
          {focus.map(([kicker, title, body]) => (
            <article className="csr-focus-card" key={kicker}>
              <small>{kicker}</small>
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function LeadershipSection() {
  return (
    <section className="section leadership-section" id="leadership">
      <div className="wrap leadership-layout">
        <div>
          <p className="eyebrow">Leadership</p>
          <h2>Continuity.<br />Accountability.</h2>
          <p>Executive leadership is presented upfront, while the wider Board, management team and committee structure remain available through governance disclosures.</p>
          <a className="text-link" href="https://www.morepen.com/investors" target="_blank" rel="noreferrer">Governance disclosures</a>
        </div>
        <div className="leadership-people">
          {[
            ["https://www.morepen.com/public/img/mr%20sushil%20suri.jpg", "Mr. Sushil Suri", "Chairman & Managing Director"],
            ["https://www.morepen.com/public/img/Mr.%20Sanjay%20Suri.jpg", "Mr. Sanjay Suri", "Managing Director"]
          ].map(([image, name, title]) => (
            <article className="leadership-person" key={name}>
              <img src={image.startsWith("http") ? image : asset(image)} alt={name} />
              <div>
                <h3>{name}</h3>
                <p>{title}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
