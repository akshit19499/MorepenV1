import { CredentialEvidence, CredentialMatrix } from "../components/quality/index.js";
import { CtaSection, PageHero, SectionIntro } from "../components/sections/index.js";
import { evidenceCategories } from "../content/quality.js";

export function QualityPage() {
  return (
    <>
      <PageHero
        label="Quality, accreditations & awards"
        title={["Technical confidence.", "Evidence with context."]}
        text="Quality systems and regulatory documentation are part of customer qualification, not decorative badges."
        img="cleanroom-2026.jpg"
        alt="Morepen manufacturing cleanroom equipment"
      />
      <SectionIntro
        kicker="Three evidence categories"
        title={
          <>
            Know what
            <br />
            each credential means.
          </>
        }
      >
        {evidenceCategories.map((category) => (
          <p key={category.term}>
            <strong>{category.term}</strong> {category.text}
          </p>
        ))}
      </SectionIntro>
      <CredentialMatrix />
      <CredentialEvidence />
      <CtaSection
        title="Request the right qualification package."
        text="Identify the site, service, product and intended market so the team can confirm the relevant documentation."
      />
    </>
  );
}
