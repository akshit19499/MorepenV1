import { ExtLink, Photo } from "../ui/index.js";

// One dated announcement with its source document (newsCards in the prototype).
export function NewsCard({ item }) {
  return (
    <article className="news-card">
      <Photo file={item.image} alt={item.alt} className="news-photo" />
      <div className="news-meta">
        <span className="type">{item.type}</span>
        <span>{item.date}</span>
      </div>
      <h3>{item.title}</h3>
      <ExtLink href={item.url}>Read announcement</ExtLink>
    </article>
  );
}
