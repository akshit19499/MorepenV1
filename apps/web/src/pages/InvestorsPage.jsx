import {
  AnnualReports,
  InvestorContacts,
  InvestorDisclosures,
  InvestorKpis,
  InvestorPresentations
} from "../components/investors/index.js";
import { CtaSection, PageBanner } from "../components/sections/index.js";

export function InvestorsPage() {
  return (
    <>
      <PageBanner file="investor-banner.webp" alt="Get in touch with us. Investor Center." title="Investor centre" />
      <InvestorKpis />
      <InvestorPresentations />
      <AnnualReports />
      <InvestorDisclosures />
      <InvestorContacts />
      <CtaSection
        title="Stay close to the published record."
        text="Recent presentations and annual reports lead the experience; all other investor information remains clearly organised behind them."
      />
    </>
  );
}
