# Morepen Website — MERN rebuild

React + Vite frontend, Express API and a shared content package, rebuilt page by page
from the approved v58 design prototype. The prototype itself is no longer in the
working tree (it remains in git history, commit `e0a3bd1`); the production site lives
under `apps/`, and the design and content rules from the handover are in
`docs/DEVELOPER_HANDOVER.md`.

## Structure

```text
apps/
  web/                     React 19 + Vite 7 + React Router 7
    public/assets/         site imagery (extracted from the approved prototype)
    public/documents/      dated company PDFs referenced by the pages
    src/
      pages/               one component per route (HomePage, CompanyPage, ...)
      components/
        layout/            utility bar, header + healthcare dropdown, footer, back-to-top
        sections/          page hero, CTA, stats band, quality band, service cards, ...
        ui/                GoLink, ExtLink, Eyebrow, Photo, LineIcon, scroll helpers
        <area>/            page-specific sections (home, company, api, cdmo, investors, ...)
      content/             static page copy that is naturally data
      hooks/               useCountUp, useDialog, usePageTitle
      lib/                 asset and link helpers
      styles/design-system/  the approved stylesheet, ported from the prototype in cascade order
      routes.jsx           route table (path → page, document title)
  api/                     Express API serving the shared content (MongoDB optional)
packages/
  shared/src/              routes, products, publications, investor documents, quality
                           records, plants, contacts, leadership — used by web and API
docs/
  DEVELOPER_HANDOVER.md    design system, content governance and migration notes
```

## Local development

Requires **Node 20.19+ or 22.12+** (Vite 7). Check with `node --version`; with nvm run `nvm use`.

```bash
npm install
npm run dev        # API on :4000 and web on :5173
npm run build      # production bundle for apps/web
npm run lint       # ESLint for apps/web
```

Set `apps/api/.env` from `apps/api/.env.example` when connecting MongoDB, and
`apps/web/.env` from `apps/web/.env.example` if the API runs anywhere other than
`http://localhost:4000`.

## Contact enquiries

The Contact page form posts to `POST /api/enquiries`. The API validates the
submission (required fields, email format, known department and country, plus a
honeypot field for bots) and stores it in the `enquiries` MongoDB collection when
`MONGODB_URI` is set; without a database it accepts the enquiry and logs it. Calls
to action elsewhere on the site link to `/contact?service=<department>` (and
`&product=<name>` from the API catalogue) to preselect the department and subject.

## Routes

`/`, `/company`, `/transformation`, `/api`, `/cdmo`, `/drug-product`, `/research`,
`/manufacturing`, `/quality`, `/sustainability`, `/healthcare`,
`/healthcare/medical-devices`, `/healthcare/rx`, `/healthcare/otc`, `/investors`,
`/newsroom`, `/careers`, `/contact`, `/privacy`. Prototype bookmarks of the form
`#/route` redirect to the clean path, and the retired `/cdmo/*` sub-pages resolve to `/cdmo`.

## Design-system CSS

`apps/web/src/styles/design-system/*.css` are contiguous slices of the prototype's
stylesheet, imported in the original order so the cascade is unchanged. Rules for markup
that the prototype never rendered were pruned. Use the prototype's class names and DOM
structure when adding sections; avoid new overrides.
