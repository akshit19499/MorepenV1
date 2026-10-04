import { cdmoEnablingServices, cdmoServices } from "../../content/cdmo.js";
import { SectionHeading } from "../sections/index.js";

// Three scientific workstreams with composite serials, plus the enabling-service chips.
export function CdmoServices() {
  return (
    <section className="section pale">
      <div className="wrap">
        <SectionHeading
          kicker="Core service capabilities"
          title={
            <>
              Three scientific workstreams.
              <br />
              One connected program.
            </>
          }
        >
          <p>
            Key Intermediates is the lead customer-facing entry point. Drug substance/API development remains explicit
            within the service description.
          </p>
        </SectionHeading>
        <div className="three-grid cdmo-service-grid">
          {cdmoServices.map((service, index) => (
            <article className="service-block" key={service.title}>
              <span className="num num-composite">
                <span className="serial-large">{String(index + 1).padStart(2, "0")}</span>
                <small>{service.kicker}</small>
              </span>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
              <ul>
                {service.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <div className="cdmo-enabling">
          {cdmoEnablingServices.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
