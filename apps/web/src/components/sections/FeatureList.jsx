// Numbered rows: { title, text }[]
export function FeatureList({ rows }) {
  return (
    <div className="feature-list">
      {rows.map((row, index) => (
        <div className="feature-row" key={row.title}>
          <span className="num">{String(index + 1).padStart(2, "0")}</span>
          <div>
            <h4>{row.title}</h4>
            <p>{row.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
