// Capacity roadmap tiles: { value, label, badge, planned }[]
export function RoadmapGrid({ items }) {
  return (
    <div className="roadmap-grid">
      {items.map((item) => (
        <div key={item.value}>
          <span className={`badge${item.planned ? " planned" : ""}`}>{item.badge}</span>
          <h3>{item.value}</h3>
          <p>{item.label}</p>
        </div>
      ))}
    </div>
  );
}
