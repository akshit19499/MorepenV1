import { BackToTop } from "./BackToTop.jsx";
import { RouteEffects } from "./RouteEffects.jsx";
import { SiteFooter } from "./SiteFooter.jsx";
import { SiteHeader } from "./SiteHeader.jsx";
import { SkipLink } from "./SkipLink.jsx";
import { UtilityBar } from "./UtilityBar.jsx";

export function SiteLayout({ children }) {
  return (
    <>
      <RouteEffects />
      <SkipLink />
      <UtilityBar />
      <SiteHeader />
      <main id="main-content" tabIndex={-1}>
        {children}
      </main>
      <SiteFooter />
      <BackToTop />
    </>
  );
}
