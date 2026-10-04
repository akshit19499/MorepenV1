import {
  CompanyCredentials,
  CompanyCsr,
  CompanyLeadership,
  CompanyPillars,
  CompanyTimeline,
  CorporatePortfolio,
  EsgSection
} from "../components/company/index.js";
import { CtaSection, PageHero, StatsBand } from "../components/sections/index.js";
import { GoLink, ScrollButton } from "../components/ui/index.js";

export function CompanyPage() {
  return (
    <>
      <PageHero
        label="Company"
        title={[
          "Four decades of chemistry.",
          <span className="accent" key="accent">
            Building the next generation
          </span>,
          "of global partnerships."
        ]}
        text="Founded in 1984, Morepen has grown from an API manufacturing base in Himachal Pradesh into a diversified pharmaceutical and healthcare platform. The next chapter builds on that foundation through deeper development, manufacturing and chronic-care capabilities."
        img="masulkhana-facility-v23.jpg"
        alt="Morepen manufacturing facility aerial view in Himachal Pradesh"
        action={
          <div className="buttons">
            <ScrollButton target="company-journey">
              Explore our journey <span aria-hidden="true">→</span>
            </ScrollButton>
            <GoLink to="quality" className="btn outline">
              Quality & regulatory
            </GoLink>
          </div>
        }
      />
      <StatsBand />
      <CompanyPillars />
      <CompanyTimeline />
      <CompanyCredentials />
      <EsgSection />
      <CorporatePortfolio />
      <CompanyCsr />
      <CompanyLeadership />
      <CtaSection
        title="Building today. Transforming tomorrow."
        text="A four-decade foundation, an established global API business, a commercially validated CDMO entry and a clear roadmap for scale and capability."
      />
    </>
  );
}
