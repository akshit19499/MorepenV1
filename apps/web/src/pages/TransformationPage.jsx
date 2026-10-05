import { CtaSection, PageHero, SectionIntro, ServiceCards } from "../components/sections/index.js";
import { GoLink } from "../components/ui/index.js";

const transformations = [
  { title: "Revenue mix", text: "Build on API supply through longer-duration CDMO customer programs and deeper development relationships." },
  { title: "EBITDA profile", text: "Improve the quality of earnings through business mix, value addition and utilisation. The future trajectory remains an objective, not a guarantee." },
  { title: "Scale", text: "614 KL installed capacity provides a base for the phased 800, 1000 and 1200 KL roadmap." },
  { title: "Capability", text: "Strengthen complex chemistry, high-potency APIs, oncology and the selective development of new scientific platforms." }
];

export function TransformationPage() {
  return (
    <>
      <PageHero
        label="Our transformation"
        title={["Evolution.", "Not a departure."]}
        text="APIs remain the scientific and manufacturing foundation. Morepen is building deeper capabilities, greater scale and longer-duration customer relationships on that base."
        img="mee-plant.jpg"
        alt="Manufacturing equipment from supplied Morepen presentation"
      />
      <SectionIntro
        kicker="Morepen 2.0"
        title={
          <>
            Four connected
            <br />
            transformations.
          </>
        }
      >
        <p>The September 2026 AGM address sets out four changes: revenue mix, EBITDA profile, scale and capability.</p>
        <p>
          The business ambition is a more capable pharmaceutical manufacturing partner, supported by disciplined execution
          and investment.
        </p>
      </SectionIntro>
      <section className="section pale">
        <div className="wrap">
          <ServiceCards items={transformations} />
        </div>
      </section>
      <SectionIntro
        kicker="Current and future"
        title={
          <>
            Separate readiness
            <br />
            from ambition.
          </>
        }
      >
        <p>
          <strong>Current foundation:</strong> small molecules, process chemistry, APIs and commercial CDMO execution.
        </p>
        <p>
          <strong>Capability development:</strong> high-potency and oncology facilities are described in the AGM address;
          project-specific suitability and containment documentation need confirmation.
        </p>
        <p>
          <strong>Proposed or selective development:</strong> the Innovation Hub, peptides, oligonucleotides and
          differentiated formulation opportunities.
        </p>
        <GoLink to="research" className="text-link">
          Explore R&amp;D &amp; innovation
        </GoLink>
      </SectionIntro>
      <CtaSection />
    </>
  );
}
