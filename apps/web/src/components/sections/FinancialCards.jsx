// Headline figure cards: { value, title, text? }[]
export function FinancialCards({ items, className = "", textClassName }) {
  return (
    <div className={`financial-cards${className ? ` ${className}` : ""}`}>
      {items.map((item) => (
        <article key={`${item.value}-${item.title}`}>
          <strong>{item.value}</strong>
          <h3>{item.title}</h3>
          {item.text && <p className={textClassName}>{item.text}</p>}
        </article>
      ))}
    </div>
  );
}
