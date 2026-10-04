import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { qualityFilters, qualityRecords } from "@morepen/shared";
import { CredentialCard } from "./CredentialCard.jsx";

// Filterable evidence grid. "?record=<id>" highlights the matching card, as the
// prototype did when a proof card on another page linked here.
export function CredentialEvidence() {
  const [filter, setFilter] = useState(qualityFilters[0]);
  const [searchParams] = useSearchParams();
  const selectedId = searchParams.get("record");
  const visible = qualityRecords.filter((record) => filter === "All" || record.kind === filter);

  return (
    <section className="section pale">
      <div className="wrap">
        <div className="filters" role="group" aria-label="Filter evidence">
          {qualityFilters.map((kind) => (
            <button
              key={kind}
              type="button"
              className={`filter${kind === filter ? " active" : ""}`}
              data-credential-filter={kind}
              aria-pressed={kind === filter}
              onClick={() => setFilter(kind)}
            >
              {kind}
            </button>
          ))}
        </div>
        <div className="credential-grid" id="credential-grid">
          {visible.map((record) => (
            <CredentialCard key={record.id} record={record} selected={record.id === selectedId} />
          ))}
        </div>
        <p className="small-note">
          Review build: pending records are shown to the approval team. The production feed must exclude any record without
          evidence, scope, validity and publication approval.
        </p>
      </div>
    </section>
  );
}
