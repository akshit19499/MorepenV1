import { annualReports, investorArchiveUrl } from "@morepen/shared";
import { SectionHeading } from "../sections/index.js";
import { ExtLink, Photo } from "../ui/index.js";

// Recent annual reports with cover thumbnails (annualReportsV35).
export function AnnualReports() {
  return (
    <section className="section pale" id="annual-reports">
      <div className="wrap">
        <SectionHeading
          kicker="Annual reports"
          title={
            <>
              Annual reporting.
              <br />
              Visual and direct.
            </>
          }
        >
          <p>
            Recent annual reports follow immediately after the latest presentations, using cover thumbnails for faster
            recognition. The historical archive can be populated dynamically.
          </p>
        </SectionHeading>
        <div className="annual-report-grid-v35">
          {annualReports.map((report) => (
            <article className="annual-report-card-v35" key={report.id}>
              <a href={report.url} target="_blank" rel="noopener">
                <div className="annual-report-thumb-v35">
                  <Photo file={report.thumbnail} alt={`${report.title} cover`} />
                </div>
                <div className="annual-report-copy-v35">
                  <small>{report.period}</small>
                  <h3>{report.title}</h3>
                  <span className="text-link">Open report ↗</span>
                </div>
              </a>
            </article>
          ))}
        </div>
        <div className="investor-section-actions-v35">
          <ExtLink href={investorArchiveUrl} className="btn outline">
            View annual-report archive
          </ExtLink>
        </div>
      </div>
    </section>
  );
}
