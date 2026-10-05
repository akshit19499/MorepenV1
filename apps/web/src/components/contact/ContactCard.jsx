import { Fragment } from "react";

function RowValue({ row }) {
  if (row.lines) {
    return row.lines.map((line, index) => (
      <Fragment key={line}>
        {index > 0 && <br />}
        {line}
      </Fragment>
    ));
  }
  if (row.phone) return <a href={row.phone.href}>{row.phone.label}</a>;
  if (row.email) return <a href={`mailto:${row.email}`}>{row.email}</a>;
  return row.text;
}

// Titled block of "Label: value" rows (offices, plants, important contacts).
export function ContactCard({ card }) {
  return (
    <article className="contact-card" id={`contact-${card.id}`}>
      <h2>{card.title}</h2>
      <dl className="contact-rows">
        {card.rows.map((row) => (
          <div className="contact-row" key={row.label}>
            <dt>{row.label}:</dt>
            <dd>
              <RowValue row={row} />
            </dd>
          </div>
        ))}
      </dl>
    </article>
  );
}
