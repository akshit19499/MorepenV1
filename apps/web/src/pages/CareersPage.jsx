import { externalLinks } from "@morepen/shared";
import { CtaSection, PageHero } from "../components/sections/index.js";
import { Eyebrow, ExtLink } from "../components/ui/index.js";

const disciplines = [
  { title: <>Research &amp; development</>, text: "Process chemistry, analytical science and drug-product development." },
  { title: <>Manufacturing &amp; engineering</>, text: "Process execution, plant infrastructure and operational improvement." },
  { title: <>Quality &amp; regulatory</>, text: "Documentation, testing, quality systems and regulatory coordination." }
];

export function CareersPage() {
  return (
    <>
      <PageHero
        label="Careers at Morepen"
        title={["Build what", "comes next."]}
        text="Bring your curiosity, technical expertise and commitment to quality to an evolving pharmaceutical platform."
        img="team.jpg"
        alt="Team photograph in Morepen annual-report artwork"
        action={
          <div className="buttons">
            <ExtLink href={externalLinks.careers} className="btn">
              Current careers channel
            </ExtLink>
          </div>
        }
      />
      <section className="section">
        <div className="wrap intro-grid">
          <div>
            <Eyebrow>People behind the platform</Eyebrow>
            <h2>
              The next chapter
              <br />
              needs new thinking.
            </h2>
          </div>
          <div>
            <p>
              Science, manufacturing and quality come together through people. The shift toward broader development and
              customer programs creates a need for collaboration across disciplines.
            </p>
            <p>
              This careers page is a design concept. It does not list or imply current vacancies. Use Morepen's official
              careers channel for available opportunities and application details.
            </p>
          </div>
        </div>
      </section>
      <section className="section pale">
        <div className="wrap">
          <div className="three-grid">
            {disciplines.map((item, index) => (
              <div className="principle" key={index}>
                <small>DISCIPLINE {String(index + 1).padStart(2, "0")}</small>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CtaSection
        title="Find your place in the next chapter."
        text="Visit the official careers channel for current opportunities and application instructions."
      />
    </>
  );
}
