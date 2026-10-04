import { useState } from "react";
import { apiListUrl, filterProducts } from "@morepen/shared";
import { apiPageSize } from "../../content/api.js";
import { SectionHeading } from "../sections/index.js";
import { ExtLink, GoLink } from "../ui/index.js";
import { ApiCategoryNav } from "./ApiCategoryNav.jsx";
import { ProductCard } from "./ProductCard.jsx";

// The "#api-collection" explorer: category tabs, search, sort, paged grid and empty state.
export function ApiExplorer({ onOpenProduct }) {
  const [filter, setFilter] = useState("All");
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState("featured");
  const [limit, setLimit] = useState(apiPageSize);

  const list = filterProducts({ category: filter, query, sort });
  const shown = list.slice(0, limit);

  const selectFilter = (name) => {
    setFilter(name);
    setLimit(apiPageSize);
  };
  const changeQuery = (event) => {
    setQuery(event.target.value);
    setLimit(apiPageSize);
  };
  const changeSort = (event) => {
    setSort(event.target.value);
    setLimit(apiPageSize);
  };
  const reset = () => {
    setFilter("All");
    setQuery("");
    setSort("featured");
    setLimit(apiPageSize);
  };

  return (
    <section className="section pale api-collection" id="api-collection">
      <div className="wrap">
        <SectionHeading
          kicker="The API collection"
          title={filter === "All" ? "Explore the portfolio." : filter}
          id="api-results-heading"
        >
          <p>
            Search directly or refine by therapeutic area. Current forms, specifications, filing status and commercial
            availability are confirmed program by program.
          </p>
        </SectionHeading>
        <div className="api-explorer-shell api-v43-explorer">
          <div className="api-explorer-top">
            <div>
              <h3>Search the API collection</h3>
              <p>A compact discovery layer for Morepen's published small-molecule API portfolio.</p>
            </div>
            <div className="api-explorer-actions">
              <ExtLink href={apiListUrl} className="btn">
                View complete API list
              </ExtLink>
              <GoLink to="contact?service=API" className="btn outline">
                API enquiry
              </GoLink>
            </div>
          </div>
          <ApiCategoryNav active={filter} onSelect={selectFilter} />
          <div className="api-compact-tools">
            <div className="search-box">
              <span className="search-icon" aria-hidden="true">
                ⌕
              </span>
              <input
                id="api-search"
                type="search"
                placeholder="Search API, therapy or form"
                aria-label="Search API, therapeutic area or form"
                value={query}
                onChange={changeQuery}
              />
            </div>
            <label className="api-sort">
              {"Sort by "}
              <select id="api-sort" value={sort} onChange={changeSort}>
                <option value="featured">Portfolio order</option>
                <option value="az">Name: A to Z</option>
              </select>
            </label>
          </div>
          <div className="api-results-bar">
            <span id="api-count" role="status" aria-live="polite">
              {list.length
                ? `Showing ${shown.length} of ${list.length} matching molecule families`
                : "No matching molecules in this selected portfolio"}
            </span>
            <span>Technical information on request</span>
          </div>
          <div id="api-grid" className="molecule-grid">
            {shown.length ? (
              shown.map((product) => <ProductCard key={product.id} product={product} onDetail={onOpenProduct} />)
            ) : (
              <div className="api-empty">
                <h3>No matching molecules.</h3>
                <p>Try another spelling, reset the filters or ask our team about your requirement.</p>
                <button className="btn outline" type="button" data-api-reset="" onClick={reset}>
                  Reset filters
                </button>
                <GoLink to="contact?service=API" className="text-link">
                  Ask the API team
                </GoLink>
              </div>
            )}
          </div>
          <div className="api-load-wrap">
            <button
              className="btn outline"
              type="button"
              id="api-load-more"
              data-api-more=""
              hidden={shown.length >= list.length}
              onClick={() => setLimit((current) => current + apiPageSize)}
            >
              Show more APIs <span aria-hidden="true">+</span>
            </button>
          </div>
          <div className="portfolio-footnote">
            <strong>Published portfolio reference.</strong> The production website should replace this link with the
            latest approved controlled API list. Applicable patent and territory restrictions remain relevant.
          </div>
        </div>
      </div>
    </section>
  );
}
