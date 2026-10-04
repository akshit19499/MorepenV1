import { useState } from "react";
import { news, newsTypes } from "@morepen/shared";
import { NewsCard } from "./NewsCard.jsx";

// Filter chips plus the announcement grid; "All" shows every public item.
export function NewsFeed() {
  const [filter, setFilter] = useState(newsTypes[0]);
  const items = news.filter((item) => filter === "All" || item.type === filter);

  return (
    <section className="section">
      <div className="wrap">
        <div className="filters" role="group" aria-label="Filter news">
          {newsTypes.map((type) => {
            const active = type === filter;
            return (
              <button
                className={`filter${active ? " active" : ""}`}
                data-news-filter={type}
                aria-pressed={active}
                type="button"
                onClick={() => setFilter(type)}
                key={type}
              >
                {type}
              </button>
            );
          })}
        </div>
        <div className="three-grid" id="news-grid">
          {items.length ? (
            items.map((item) => <NewsCard item={item} key={item.id} />)
          ) : (
            <p className="empty" role="status">
              No published updates in this selection yet. Choose another category or view the official newsroom.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
