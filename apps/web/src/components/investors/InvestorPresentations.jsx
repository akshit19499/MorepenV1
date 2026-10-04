import { investorArchiveUrl, investorPresentations } from "@morepen/shared";
import { SectionHeading } from "../sections/index.js";
import { ExtLink, Photo } from "../ui/index.js";

// The latest five decks as 16:9 thumbnail cards (investorPresentationSectionV36).
export function InvestorPresentations() {
  return (
    <section className="section" id="investor-presentations">
      <div className="wrap">
        <SectionHeading
          kicker="Investor presentations"
          title={
            <>
              The latest five.
              <br />
              Easy to scan.
            </>
          }
        >
          <p>
            Recent presentations are shown as visual 16:9 cards, with the newest deck first. The production website can
            populate this grid dynamically from the investor document CMS.
          </p>
        </SectionHeading>
        <div className="investor-presentation-grid-v36">
          {investorPresentations.map((deck) => (
            <a className="investor-presentation-thumb-card-v36" href={deck.url} target="_blank" rel="noopener" key={deck.id}>
              <div className="investor-presentation-thumb-v36">
                <Photo file={deck.thumbnail} alt={`${deck.title} thumbnail`} />
              </div>
              <div className="investor-presentation-copy-v36">
                <small>{deck.period}</small>
                <h3>{deck.title}</h3>
                <p>{deck.summary}</p>
                <span className="text-link">Open presentation ↗</span>
              </div>
            </a>
          ))}
        </div>
        <div className="investor-presentation-actions-v36">
          <ExtLink href={investorArchiveUrl} className="btn outline" aria-label="Presentation archive preview">
            View presentation archive
          </ExtLink>
        </div>
      </div>
    </section>
  );
}
