import { PatentGroups, ResearchFuture, ResearchProofBand, ResearchScience } from "../components/research/index.js";
import { CtaSection, PageHero } from "../components/sections/index.js";
import { GoLink } from "../components/ui/index.js";

export function ResearchPage() {
  return (
    <>
      <PageHero
        label="R&D & innovation"
        title={["Research-backed.", "Quality-driven.", "Built to keep evolving."]}
        text="Morepen connects process chemistry, analytical science, intellectual property, regulatory documentation and manufacturing readiness to create repeatable value from research."
        img="scientist-process.jpg"
        alt="Morepen scientist and process-development equipment"
        action={
          <div className="buttons">
            <GoLink to="contact?service=R%26D">Discuss a development program</GoLink>
            <GoLink to="cdmo" className="btn outline">
              Explore CDMO
            </GoLink>
          </div>
        }
      />
      <ResearchScience />
      <PatentGroups />
      <ResearchProofBand />
      <ResearchFuture />
      <CtaSection
        title="Turn science into the next program."
        text="Discuss the chemistry, analytical challenge or development objective you want to move toward scale."
      />
    </>
  );
}
