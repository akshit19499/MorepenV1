import { externalLinks } from "@morepen/shared";
import { EditorialImage, FeatureList, PageHero, SectionHeading, SectionIntro } from "../components/sections/index.js";
import { Eyebrow, ExtLink, GoLink } from "../components/ui/index.js";
import { deviceFeatureRows, deviceProductFamilies, deviceSupport } from "../content/healthcare.js";
import { BadgedServiceGrid, BrandVisual, DeviceHighlights, HealthcareSubnav, SupportPanel } from "../components/healthcare/index.js";

export function MedicalDevicesPage() {
  return (
    <>
      <PageHero
        label="Medical Devices"
        parent
        title={["Everyday monitoring.", "Long-term relevance."]}
        text="A medical-devices business focused on blood glucose monitoring, consumables and blood pressure monitoring."
        action={
          <div className="buttons">
            <GoLink to="contact?service=Medical%20Devices">Discuss a device partnership</GoLink>
            <ExtLink href={externalLinks.devices} className="btn outline">
              Device information
            </ExtLink>
          </div>
        }
        visual={<BrandVisual kind="devices" large />}
      />
      <HealthcareSubnav />
      <DeviceHighlights />
      <SectionIntro
        kicker="Monitoring & chronic care"
        title={
          <>
            More than a device.
            <br />
            An ongoing care need.
          </>
        }
      >
        <p>
          Our medical-devices business connects monitoring products, recurring consumables and the channels that support
          their use. Its dedicated focus complements the pharmaceutical development and manufacturing platform.
        </p>
        <p>
          This page introduces the business. Product-specific specifications, instructions and support belong in the
          dedicated device information channel.
        </p>
        <p className="small-note">
          Medipath platform naming and the current legal-entity description are awaiting company-secretarial confirmation
          for publication. No ownership percentage is asserted here.
        </p>
      </SectionIntro>
      <section className="section pale">
        <div className="wrap">
          <SectionHeading
            kicker="Portfolio focus"
            title={
              <>
                Three connected
                <br />
                product families.
              </>
            }
          >
            <p>A corporate overview, not a product catalogue or a clinical recommendation.</p>
          </SectionHeading>
          <BadgedServiceGrid items={deviceProductFamilies} />
          <p className="small-note"></p>
        </div>
      </section>
      <section className="section">
        <div className="wrap split">
          <EditorialImage
            file="device-smt.jpg"
            alt="Illustrative surface-mount assembly equipment from the May 2024 investor presentation"
          >
            <p className="image-source">
              Illustrative assembly equipment from supplied materials; not evidence of a newly commissioned line.
            </p>
          </EditorialImage>
          <div>
            <Eyebrow>Beyond the product</Eyebrow>
            <h2>
              Manufacturing.
              <br />
              Quality. Continuity.
            </h2>
            <FeatureList rows={deviceFeatureRows} />
            <GoLink to="contact?service=Medical%20Devices" className="text-link">
              Contact the devices business
            </GoLink>
          </div>
        </div>
      </section>
      <section className="section dark">
        <div className="wrap split">
          <div>
            <Eyebrow>Looking ahead</Eyebrow>
            <h2>
              Connected care.
              <br />
              The next chapter.
            </h2>
            <p>
              Connected monitoring and continuous glucose monitoring form part of the future-facing story to be developed
              with the business team.
            </p>
            <span className="badge planned">Roadmap - not a commercial-availability claim</span>
          </div>
          <div className="roadmap-note">
            <h3>
              Today and tomorrow
              <br />
              must remain distinct.
            </h3>
            <p>
              Existing device information can be explored through the dedicated product channel. New products, CGM launch
              timing and market-specific availability will be published only after approval.
            </p>
            <ExtLink href={externalLinks.deviceSync}>Existing Dr. Morepen Sync information</ExtLink>
          </div>
        </div>
      </section>
      <SupportPanel items={deviceSupport} />
    </>
  );
}
