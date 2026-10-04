import { homeUpdates } from "@morepen/shared";
import { Eyebrow, GoLink } from "../ui/index.js";

const categoryLabel = (item) => {
  if (item.group === "Presentations") return "Investor publication";
  return item.type === "Financial" ? "Results announcement" : "Business announcement";
};

// "News & announcements": the three home-featured publications.
export function RecentUpdates() {
  return (
    <section className="recent-updates" id="news-announcements" aria-labelledby="updates-title">
      <div className="wrap">
        <div className="updates-heading">
          <div>
            <Eyebrow>Stay informed</Eyebrow>
            <h2 id="updates-title">News &amp; announcements</h2>
          </div>
          <div className="updates-links">
            <GoLink to="newsroom" className="text-link">
              All news
            </GoLink>
            <GoLink to="investors" className="text-link">
              Investor centre
            </GoLink>
          </div>
        </div>
        <div className="updates-grid">
          {homeUpdates.map((item) => (
            <article className="update-card" data-publication-id={item.id} key={item.id}>
              <div className="update-meta">
                <span>{categoryLabel(item)}</span>
                <span>{item.publishedAt ? <time dateTime={item.publishedAt}>{item.date}</time> : item.date}</span>
              </div>
              <h3>{item.title}</h3>
              <GoLink to={`investors?publication=${encodeURIComponent(item.id)}`} className="text-link">
                {item.group === "Presentations" ? "View investor publication" : "View announcement"}
              </GoLink>
            </article>
          ))}
        </div>
        <p className="updates-note">
          Selected recent publications · complete reports and disclosures in the Investor centre.
        </p>
      </div>
    </section>
  );
}
