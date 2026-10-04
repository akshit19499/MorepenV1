import { ExtLink, GoLink, LineIcon } from "../ui/index.js";

// One evidence record: inspection, certification or recognition.
export function CredentialCard({ record, selected = false }) {
  return (
    <article className={`credential-card${selected ? " credential-selected" : ""}`} data-credential={record.id}>
      <div className="credential-top">
        <span className="credential-icon">
          <LineIcon name={record.icon} />
        </span>
        <span>{record.kind}</span>
      </div>
      <h3>{record.title}</h3>
      <p className="credential-headline">{record.headline}</p>
      <dl>
        <dt>Scope</dt>
        <dd>{record.scope}</dd>
        <dt>Date / record</dt>
        <dd>{record.date}</dd>
      </dl>
      <p>{record.body}</p>
      <span className="credential-status">{record.status}</span>
      {record.source ? (
        <ExtLink href={record.source}>{record.sourceLabel}</ExtLink>
      ) : (
        <GoLink to="contact?service=Quality" className="text-link">
          Request scope information
        </GoLink>
      )}
    </article>
  );
}
