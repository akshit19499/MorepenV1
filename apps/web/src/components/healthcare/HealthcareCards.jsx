import { Eyebrow, GoLink } from "../ui/index.js";
import { BrandVisual } from "./BrandVisual.jsx";

const cards = [
  {
    kind: "devices",
    kicker: "01 / Medical Devices",
    title: (
      <>
        Everyday monitoring.
        <br />A recognisable brand.
      </>
    ),
    text: "Dr. Morepen blood glucose meters, strips and blood pressure monitors, with a dedicated chronic-care business focus.",
    to: "healthcare/medical-devices",
    action: "Explore Medical Devices"
  },
  {
    kind: "rx",
    kicker: "02 / Rx & Prescription Medicines",
    title: (
      <>
        Prescription medicines.
        <br />A dedicated business.
      </>
    ),
    text: "Morepen prescription brands, professional engagement and channel relationships, distinct from partner development services.",
    to: "healthcare/rx",
    action: "Explore Rx"
  },
  {
    kind: "otc",
    kicker: "03 / OTC & Consumer Wellness",
    title: (
      <>
        Familiar brands.
        <br />
        Everyday healthcare.
      </>
    ),
    text: "A corporate introduction to the Dr. Morepen OTC and consumer-wellness business, with a dedicated consumer destination.",
    to: "healthcare/otc",
    action: "Explore OTC"
  }
];

// The three healthcare business cards, used on Home and the Healthcare overview.
export function HealthcareCards() {
  return (
    <>
      <div className="healthcare-cards">
        {cards.map((card) => (
          <article className="healthcare-card" key={card.kind}>
            <BrandVisual kind={card.kind} />
            <div className="healthcare-card-copy">
              <Eyebrow>{card.kicker}</Eyebrow>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
              <GoLink to={card.to} className="text-link">
                {card.action}
              </GoLink>
            </div>
          </article>
        ))}
      </div>
      <p className="brand-review-note">
        Representative branded artwork from supplied presentations. Current packs, device models and web-use permissions
        require approval before launch.
      </p>
    </>
  );
}
