import { CtaSection, PageHero } from "../components/sections/index.js";

// TODO: port from the v58 prototype. Temporary stub so the shell builds.
export function CompanyPage() {
  return (
    <>
      <PageHero label="Company" title={["Page port in progress.", "Content follows the approved design."]} text="This page is being rebuilt from the approved prototype." img="masulkhana-facility-v23.jpg" alt="" />
      <CtaSection />
    </>
  );
}
