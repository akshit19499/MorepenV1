import { metrics } from "@morepen/shared";
import { Hero } from "../components/Hero.jsx";
import { FinalCta, Section } from "../components/Sections.jsx";
import { asset } from "../data/assets.js";
import { getPage } from "../data/apiClient.js";

export function HomePage() {
  const page = getPage("/");

  return (
    <>
      <Hero page={page} home />
      <section className="metrics-strip" aria-label="Morepen at a glance">
        <div className="wrap metrics-grid">
          {metrics.map((metric) => (
            <div className="metric" key={metric.label}>
              <strong>{metric.value}</strong>
              <span>{metric.label}</span>
            </div>
          ))}
        </div>
      </section>
      <ConnectedPlatform />
      <Section
        section={{
          eyebrow: "Pharmaceutical development & manufacturing",
          title: "API strength. Connected capabilities.",
          body: "Morepen combines established API manufacturing with expanding development, analytical, scale-up and commercial manufacturing capabilities for global pharmaceutical partners.",
          items: [
            ["Active Pharmaceutical Ingredients", "A global API platform built on process chemistry, regulated-market manufacturing and long-standing customer relationships."],
            ["CDMO & Custom Development", "End-to-end support from key intermediates and API/drug substance development through analytical work, scale-up, technology transfer and commercial supply."],
            ["Drug Product Development", "Formulation, analytical development, stability, regulatory batches and dossier support."]
          ]
        }}
      />
      <RecentUpdates />
      <TransformationSpotlight />
      <ManufacturingHome />
      <QualityBand />
      <HealthcareBand />
      <FinalCta />
    </>
  );
}

function ConnectedPlatform() {
  const cards = [
    ["01", "Science", "Deep chemistry foundation", "Established small-molecule API expertise, process development and scale-up form the scientific base for higher-value customer programs."],
    ["02", "Development", "Integrated capabilities", "Custom development, analytical work, technology transfer and selected drug-product programs connect development with manufacturing."],
    ["03", "Manufacturing", "Regulated-market execution", "Manufacturing infrastructure, quality systems and export experience support customers across regulated and emerging markets."],
    ["04", "Partnership", "Long-duration relationships", "Morepen is expanding from transaction-led supply toward recurring programs and commercial CDMO execution."]
  ];

  return (
    <section className="connected-platform">
      <div className="wrap">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Global pharmaceutical manufacturing</p>
            <h2>Chemistry, compliance and scale — connected.</h2>
          </div>
          <p>
            Morepen combines more than four decades of API manufacturing experience with an
            expanding CDMO platform, drug-product development capabilities and healthcare
            businesses.
          </p>
        </div>
        <div className="connected-grid">
          {cards.map(([number, label, title, body]) => (
            <article className="connected-card" key={number}>
              <span>{number}</span>
              <small>{label}</small>
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function RecentUpdates() {
  const updates = [
    ["Investor publication", "Q1 FY27 Investor Presentation", "Commercial validation, CDMO execution and operating leverage."],
    ["Business announcement", "CDMO commercial execution", "INR 8,250 million mandate in commercial execution."],
    ["Regulatory update", "Nil Form 483 inspection outcome", "Masulkhana API facility disclosure dated 17 April 2026."]
  ];

  return (
    <section className="recent-updates">
      <div className="wrap">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Stay informed</p>
            <h2>News & announcements</h2>
          </div>
          <p>Selected recent publications and announcements, with complete reports in the Investor centre.</p>
        </div>
        <div className="updates-grid">
          {updates.map(([kind, title, body]) => (
            <article className="update-card" key={title}>
              <span>{kind}</span>
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function TransformationSpotlight() {
  return (
    <section className="transformation-spotlight">
      <div className="wrap split-panel">
        <div>
          <p className="eyebrow">Morepen 2.0</p>
          <h2>From product supply to deeper global partnerships.</h2>
          <p>
            APIs remain Morepen's scientific and manufacturing foundation. The current growth phase
            builds on that base through commercial CDMO programs, integrated development
            capabilities and disciplined expansion of manufacturing scale.
          </p>
          <div className="spotlight-kpi">
            <strong>INR 8,250 million</strong>
            <span>CDMO mandate in commercial execution</span>
          </div>
        </div>
        <div className="matrix-grid">
          {["Revenue mix", "Capability", "Scale", "Partnership"].map((item) => (
            <article key={item}>
              <h3>{item}</h3>
              <p>Structured around customer continuity, technical depth and execution readiness.</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ManufacturingHome() {
  return (
    <section className="manufacturing-home">
      <div className="wrap split-panel">
        <div>
          <p className="eyebrow">Manufacturing & supply</p>
          <h2>Scale backed by process depth and execution.</h2>
          <div className="manufacturing-capacity">
            <strong>614</strong>
            <span>KL installed API / CDMO reactor capacity</span>
          </div>
          <p>
            Morepen's manufacturing network in Himachal Pradesh supports small-molecule APIs and
            CDMO programs for domestic and international customers.
          </p>
        </div>
        <img className="angled-image" src={asset("masulkhana-facility-v23.jpg")} alt="" />
      </div>
    </section>
  );
}

function QualityBand() {
  return (
    <section className="quality-band">
      <div className="wrap evidence-feature">
        <img src={asset("reg-usfda-v26.png")} alt="USFDA logo" />
        <div>
          <p className="eyebrow">Quality & regulatory compliance</p>
          <h2>Global trust is earned through repeatable systems.</h2>
          <p>
            The April 2026 inspection at the Masulkhana API facility concluded without Form 483
            observations. Scope remains site, product and filing specific.
          </p>
        </div>
      </div>
    </section>
  );
}

function HealthcareBand() {
  return (
    <section className="healthcare-band">
      <div className="wrap">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Healthcare Businesses</p>
            <h2>Distinct businesses. Clear journeys.</h2>
          </div>
          <p>Medical Devices, Rx and OTC keep their own audiences, claims environment and enquiry paths.</p>
        </div>
        <div className="healthcare-grid">
          {[
            ["glucose-meter.png", "Medical Devices"],
            ["rx-cefopen.png", "Rx & Prescription Medicines"],
            ["otc-burnol.png", "OTC & Consumer Wellness"]
          ].map(([image, title]) => (
            <article key={title}>
              <img src={asset(image)} alt="" />
              <h3>{title}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
