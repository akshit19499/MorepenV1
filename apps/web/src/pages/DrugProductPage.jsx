import { documents } from "@morepen/shared";
import { StatusBanner } from "../components/drug-product/index.js";
import { CtaSection, PageHero, SectionIntro, ServiceCards } from "../components/sections/index.js";
import { ExtLink, GoLink } from "../components/ui/index.js";
import { drugProductServices } from "../content/drugProduct.js";

export function DrugProductPage() {
  return (
    <>
      <PageHero
        label="Drug Product & ANDA development"
        title={["From API knowledge", "to finished-dose development."]}
        text="Formulation, analytical work, stability, regulatory batches and dossier preparation connected through a demonstrated development program."
        img="analytical-lab.jpg"
        alt="Morepen analytical laboratory"
        action={<GoLink to="contact?service=Drug%20product">Discuss a development program</GoLink>}
      />
      <SectionIntro
        kicker="A demonstrated milestone"
        title={
          <>
            The first U.S.
            <br />
            ANDA submission.
          </>
        }
      >
        <p>
          The 28 September 2026 release announces Morepen's first U.S. ANDA submission for Sitagliptin Tablets USP, in
          25 mg, 50 mg and 100 mg strengths.
        </p>
        <p>
          The program brought together formulation and scale-up, analytical methods, impurity control, stability,
          regulatory batches, bioequivalence strategy and CRO coordination.
        </p>
        <ExtLink href={documents.anda}>Read the filed announcement</ExtLink>
      </SectionIntro>
      <section className="section pale">
        <div className="wrap">
          <ServiceCards items={drugProductServices} />
        </div>
      </section>
      <StatusBanner />
      <SectionIntro
        kicker="A separate business audience"
        title={
          <>
            Drug Product
            <br />
            is not the Rx catalogue.
          </>
        }
        tone="ice"
      >
        <p>
          This page serves pharmaceutical development partners. Prescription-medicines business information has its own
          destination.
        </p>
        <GoLink to="healthcare/rx" className="text-link">
          Explore the Rx business
        </GoLink>
      </SectionIntro>
      <CtaSection />
    </>
  );
}
