import { rdFutureCards } from "../../content/research.js";
import { SectionHeading } from "../sections/index.js";

// Innovation Hub & Capability Centre: the next line of action.
export function ResearchFuture() {
  return (
    <section className="section rd-future">
      <div className="wrap">
        <SectionHeading
          kicker="Next line of action"
          title={
            <>
              Innovation Hub &amp;
              <br />
              Capability Centre.
            </>
          }
        >
          <p>
            Planned as the next step in Morepen's scientific evolution: a closer connection between development,
            analysis, pilot work, technology transfer and customer collaboration.
          </p>
        </SectionHeading>
        <div className="rd-future-grid">
          {rdFutureCards.map((card, index) => (
            <article className="rd-future-card" key={card.title}>
              <small>{String(index + 1).padStart(2, "0")}</small>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </article>
          ))}
        </div>
        <p className="rd-direction-note">
          <strong>Capability roadmap:</strong> Morepen's heritage remains small molecules and process chemistry.
          Dedicated high-potency and oncology development capability is being strengthened, while peptides, related
          technologies and selected specialty CDMO capabilities remain areas under evaluation. Future capabilities
          should be described as planned or exploratory until technically qualified and commercially ready.
        </p>
      </div>
    </section>
  );
}
