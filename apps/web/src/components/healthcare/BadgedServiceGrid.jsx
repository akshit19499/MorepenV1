// Three-column service tiles labelled with a badge instead of a number.
// Items: { badge, title, text, note?, spaced? } — `spaced` reproduces the
// prototype's inline top margin on the heading.
export function BadgedServiceGrid({ items }) {
  return (
    <div className="three-grid">
      {items.map((item) => (
        <article className="service-block" key={item.title}>
          <span className="badge">{item.badge}</span>
          <h3 style={item.spaced ? { marginTop: 20 } : undefined}>{item.title}</h3>
          <p>{item.text}</p>
          {item.note && <p className="small-note">{item.note}</p>}
        </article>
      ))}
    </div>
  );
}
