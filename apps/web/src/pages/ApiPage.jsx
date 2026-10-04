import { CtaSection, PageHero } from "../components/sections/index.js";

// TODO: port from the v58 prototype. Temporary stub so the shell builds.
export function ApiPage() {
  return (
    <>
      <PageHero label="Active pharmaceutical ingredients" title={["Page port in progress.", "Content follows the approved design."]} text="This page is being rebuilt from the approved prototype." img="scientist-process.jpg" alt="" />
      <CtaSection />
    </>
  );
}
