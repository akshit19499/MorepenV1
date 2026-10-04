import { CtaSection, PageHero } from "../components/sections/index.js";

// TODO: port from the v58 prototype. Temporary stub so the shell builds.
export function HomePage() {
  return (
    <>
      <PageHero label="Home" title={["Page port in progress.", "Content follows the approved design."]} text="This page is being rebuilt from the approved prototype." img="homepage-hero-api-v31.jpg" alt="" />
      <CtaSection />
    </>
  );
}
