import { GoLink } from "../ui/index.js";

// Numbered three-column service tiles. Items: { title, text, to?, label? }.
export function ServiceCards({ items, className = "" }) {
  return (
    <div className={`three-grid${className ? ` ${className}` : ""}`}>
      {items.map((item, index) => (
        <article className="service-block" key={item.title}>
          <span className="num">{String(index + 1).padStart(2, "0")}</span>
          <h3>{item.title}</h3>
          <p>{item.text}</p>
          {item.to && (
            <GoLink to={item.to} className="text-link">
              {item.label || "Explore capability"}
            </GoLink>
          )}
        </article>
      ))}
    </div>
  );
}
