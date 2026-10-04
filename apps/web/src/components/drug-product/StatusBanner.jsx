import { documents } from "@morepen/shared";
import { ExtLink } from "../ui/index.js";

// "Submission, not approval" status banner for the first U.S. ANDA.
export function StatusBanner() {
  return (
    <section className="section">
      <div className="wrap status-banner">
        <span className="badge">SUBMISSION - NOT APPROVAL</span>
        <h2>The status is explicit.</h2>
        <p>
          ANDA No. 221758 was submitted on 25 September 2026. The company disclosure states that submission does not
          constitute FDA acceptance for substantive review, product approval or authorisation for U.S. commercial
          supply.
        </p>
        <p>Europe, Asia and potential 505(b)(2) programs are described as future development opportunities, not existing approvals.</p>
        <ExtLink href={documents.anda}>Read the submission notes</ExtLink>
      </div>
    </section>
  );
}
