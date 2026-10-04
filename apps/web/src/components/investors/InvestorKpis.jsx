import { financialHighlights, investorPresentations } from "@morepen/shared";
import { FinancialCards, SectionHeading } from "../sections/index.js";
import { ExtLink } from "../ui/index.js";
import { SelectedPublication } from "./SelectedPublication.jsx";

const highlights = financialHighlights.map((item) => ({ value: item.value, title: item.label, text: item.detail }));
const latestPresentation = investorPresentations[0];

// Q1 FY27 headline figures (investorKpisV36 in the prototype).
export function InvestorKpis() {
  return (
    <section className="section investor-kpi-section-v36 investor-q1-highlights-v53">
      <div className="wrap">
        <SelectedPublication />
        <SectionHeading
          kicker="Q1 FY27 performance"
          title={
            <>
              Recent performance.
              <br />
              At a glance.
            </>
          }
        >
          <div>
            <p>
              Headline achievements from the Q1 FY27 investor presentation. INR-million values are rounded to whole
              numbers; percentages retain their reported precision.
            </p>
            <ExtLink href={latestPresentation.url}>Open Q1 FY27 presentation</ExtLink>
          </div>
        </SectionHeading>
        <FinancialCards items={highlights} className="investor-achievement-grid-v53" textClassName="achievement-copy-v53" />
        <p className="investor-rounding-note-v34">
          All INR-million figures are presented as rounded whole numbers. Percentages retain their reported precision.
        </p>
      </div>
    </section>
  );
}
