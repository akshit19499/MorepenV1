import {
  AnnualReports,
  InvestorContacts,
  InvestorDisclosures,
  InvestorKpis,
  InvestorPresentations
} from "../components/investors/index.js";
import { CtaSection, PageHero } from "../components/sections/index.js";

export function InvestorsPage() {
  return (
    <>
      <PageHero
        label="Investors"
        title={["Performance first.", "Documents made easy."]}
        text="Recent performance, investor presentations and annual reports come first. Statutory and shareholder information follows in a compact, structured library."
        simple
      />
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
