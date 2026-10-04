import { NewsFeed } from "../components/newsroom/index.js";
import { CtaSection, PageHero, SectionIntro } from "../components/sections/index.js";
import { GoLink } from "../components/ui/index.js";

export function NewsroomPage() {
  return (
    <>
      <PageHero
        label="News & announcements"
        title={["Recent milestones.", "Original disclosures."]}
        text="Corporate, financial and regulatory announcements with their dated source documents."
        simple
      />
      <NewsFeed />
      <SectionIntro
        kicker="Investor publications"
        title={
          <>
            Looking for results
            <br />
            or presentations?
          </>
        }
        tone="ice"
      >
        <p>Visit the Investor centre for the supplied releases and access to the official archive.</p>
        <GoLink to="investors">Investor centre</GoLink>
      </SectionIntro>
      <CtaSection title="Media enquiries." text="Use the published company contact directory for media enquiries." />
    </>
  );
}
