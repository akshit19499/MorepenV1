import { externalLinks } from "@morepen/shared";
import { BadgedServiceGrid } from "../components/healthcare/BadgedServiceGrid.jsx";
import { BrandVisual, HealthcareSubnav } from "../components/healthcare/index.js";
import { SupportPanel } from "../components/healthcare/SupportPanel.jsx";
import { PageHero, SectionHeading, SectionIntro } from "../components/sections/index.js";
import { ExtLink, GoLink } from "../components/ui/index.js";
import { otcBrandCards, otcSupport } from "../content/healthcare.js";

export function OtcPage() {
  return (
    <>
      <PageHero
        label="OTC & Consumer Wellness"
        parent
        title={["Familiar brands.", "Everyday healthcare."]}
        text="The Dr. Morepen OTC and consumer-wellness business brings a distinct brand and channel focus to the broader healthcare story."
        action={
          <div className="buttons">
            <ExtLink href={externalLinks.drMorepen} className="btn">
              Visit Dr. Morepen
            </ExtLink>
            <GoLink to="contact?service=OTC" className="btn outline">
              Business enquiry
            </GoLink>
          </div>
        }
        visual={<BrandVisual kind="otc" large />}
      />
      <HealthcareSubnav />
      <SectionIntro
        kicker="Dr. Morepen / Consumer health"
        title={
          <>
            A clear corporate place.
            <br />A distinct consumer journey.
          </>
        }
      >
        <p>
          OTC and consumer wellness belong within our Healthcare Businesses navigation, alongside Medical Devices, Rx and
          OTC. Here, the focus is the business, its brands and its channels.
        </p>
        <p>
          Detailed product information, consumer campaigns and shopping remain on the separate Dr. Morepen destination.
          This corporate website is not an online pharmacy or a treatment guide.
        </p>
        <p className="small-note">
          This navigation group is not a statement of ownership or financial consolidation. Legal-entity wording and
          current brand classification require company and business-owner sign-off.
        </p>
      </SectionIntro>
      <section className="section pale">
        <div className="wrap">
          <SectionHeading
            kicker="Brand-led. Business-focused."
            title={
              <>
                Recognisable brands.
                <br />A dedicated platform.
              </>
            }
          >
            <p>Show the business through approved brands and real packaging, rather than generic wellness stock photography.</p>
          </SectionHeading>
          <BadgedServiceGrid items={otcBrandCards} />
          <p className="brand-review-note">
            Artwork: supplied May 2024 presentation. Not a current availability, efficacy or market-leadership claim. Brand
            assets and web-use rights remain pending approval.
          </p>
        </div>
      </section>
      <SupportPanel items={otcSupport} />
    </>
  );
}
