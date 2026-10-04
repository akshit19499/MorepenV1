import {
  ConnectedPlatformBand,
  HeroCarousel,
  ManufacturingHome,
  PlatformSection,
  RecentUpdates,
  TransformationSpotlight
} from "../components/home/index.js";
import { HealthcareHomeBand } from "../components/healthcare/index.js";
import { CtaSection, QualityBand, StatsBand } from "../components/sections/index.js";

export function HomePage() {
  return (
    <>
      <HeroCarousel />
      <StatsBand />
      <ConnectedPlatformBand />
      <PlatformSection />
      <RecentUpdates />
      <TransformationSpotlight />
      <ManufacturingHome />
      <QualityBand />
      <HealthcareHomeBand />
      <CtaSection
        title="Build the next program together."
        text="For APIs, development, analytical work or commercial manufacturing, start with a non-confidential discussion of your requirement."
      />
    </>
  );
}
