import { deviceHighlights } from "@morepen/shared";
import { FinancialCards } from "../sections/index.js";

// Reported Medical Devices figures shown under the hero.
export function DeviceHighlights() {
  return (
    <section className="section pale">
      <div className="wrap">
        <FinancialCards items={deviceHighlights.map((item) => ({ value: item.value, title: item.label }))} />
        <p className="small-note">Company release dated 4 August 2026. Installed base and annual scale are distinct measures.</p>
      </div>
    </section>
  );
}
