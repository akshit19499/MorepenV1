import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { apiListUrl } from "@morepen/shared";
import { Hero } from "../components/Hero.jsx";
import { FinalCta, Section } from "../components/Sections.jsx";
import { getPage, getProducts } from "../data/apiClient.js";

export function ApiPage() {
  const page = getPage("/api");
  const [category, setCategory] = useState("All");
  const [query, setQuery] = useState("");
  const [catalogue, setCatalogue] = useState({ categories: [], products: [], total: 0 });

  useEffect(() => {
    const controller = new AbortController();
    getProducts({ category, q: query }).then(setCatalogue).catch(() => {});
    return () => controller.abort();
  }, [category, query]);

  const categoryTabs = useMemo(
    () => [{ name: "All", description: "Complete published portfolio view" }, ...catalogue.categories],
    [catalogue.categories]
  );

  return (
    <>
      <Hero page={page} />
      <section className="api-proof-line">
        <div className="wrap">
          <span><strong>Chemistry-led</strong> Process development &amp; scale-up</span>
          <span><strong>Regulatory depth</strong> DMFs, CEPs &amp; technical documentation</span>
          <span><strong>Manufacturing scale</strong> 614 KL installed API / CDMO reactor capacity</span>
        </div>
      </section>
      <section className="section pale api-collection" id="api-collection">
        <div className="wrap">
          <div className="section-heading">
            <div>
              <p className="eyebrow">The API collection</p>
              <h2>Explore the portfolio.</h2>
            </div>
            <p>
              Search directly or refine by therapeutic area. Current forms, specifications, filing
              status and commercial availability are confirmed program by program.
            </p>
          </div>
          <div className="api-explorer-shell">
            <div className="api-explorer-top">
              <div>
                <h3>Search the API collection</h3>
                <p>A compact discovery layer for Morepen's published small-molecule API portfolio.</p>
              </div>
              <div className="api-explorer-actions">
                <a className="btn" href={apiListUrl} target="_blank" rel="noreferrer">
                  View complete API list
                </a>
                <Link className="btn outline" to="/contact?service=API">
                  API enquiry
                </Link>
              </div>
            </div>
            <div className="api-category-nav" role="group" aria-label="Filter API collection">
              {categoryTabs.map((item) => (
                <button
                  className={item.name === category ? "active api-category-tab" : "api-category-tab"}
                  key={item.name}
                  type="button"
                  aria-pressed={item.name === category}
                  onClick={() => setCategory(item.name)}
                >
                  <span className="api-category-icon" aria-hidden="true">{item.name === "All" ? "◇" : "○"}</span>
                  <span className="api-category-label">{item.name === "All" ? "All APIs" : item.name}</span>
                  <span className="api-category-count">
                    {item.name === "All" ? `${catalogue.products.length} molecules` : item.description}
                  </span>
                </button>
              ))}
            </div>
            <div className="api-compact-tools">
              <label>
                <span className="sr-only">Search API, therapy or form</span>
                <input
                  type="search"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Search API, therapy or form"
                />
              </label>
              <span role="status">{catalogue.total} molecules</span>
            </div>
            <div className="api-results-bar">
              <span>Technical information on request</span>
            </div>
            <div className="molecule-grid">
              {catalogue.products.map((product) => (
                <article className="molecule-card" key={product.name}>
                  <div className="molecule-card-top">
                    <span className="molecule-category">{product.category}</span>
                    <span className="molecule-mark">API</span>
                  </div>
                  <h3>{product.name}</h3>
                  <p className="molecule-therapy">{product.therapy}</p>
                  <div className="molecule-forms">
                    {(product.forms || []).map((form) => (
                      <span key={form}>{form}</span>
                    ))}
                  </div>
                  <div className="molecule-card-actions">
                    <Link className="product-enquire" to={`/contact?service=API&product=${encodeURIComponent(product.name)}`}>
                      Enquire
                    </Link>
                  </div>
                </article>
              ))}
            </div>
            <div className="portfolio-footnote">
              <strong>Published portfolio reference.</strong> The production website should replace
              this link with the latest approved controlled API list. Applicable patent and
              territory restrictions remain relevant.
            </div>
          </div>
        </div>
      </section>
      <Section
        section={{
          eyebrow: "Manufacturing & R&D backbone",
          title: "Knowledge behind every requirement.",
          body: "API performance depends on process understanding, analytical control, regulatory documentation and dependable plant execution.",
          numbered: [
            ["01", "Process R&D", "Route development, impurity understanding and technology transfer."],
            ["02", "Analytical development", "Methods, stability and characterisation connected to the intended market."],
            ["03", "Commercial manufacturing", "Baddi and Masulkhana provide the base for API and CDMO execution."]
          ]
        }}
      />
      <FinalCta />
    </>
  );
}
