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
        label="Investor centre"
        title={["Investor Centre.", "Performance, presentations and reports."]}
        text="The latest quarterly performance, investor presentations and annual reports come first. Statutory disclosures and shareholder information follow in a structured library."
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
