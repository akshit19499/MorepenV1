# Morepen Website — MERN rebuild

React + Vite frontend, Express API and a shared content package, rebuilt from the
approved design prototype (`Morepen_Website_Draft_v58.html`). The prototype stays in
the repository as the design reference only; the production site lives under `apps/`.

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
```

## Local development

Requires **Node 20.19+ or 22.12+** (Vite 7). Check with `node --version`; with nvm run `nvm use`.

```bash
npm install
npm run dev        # API on :4000 and web on :5173
npm run build      # production bundle for apps/web
npm run lint       # ESLint for apps/web
```

Set `apps/api/.env` from `apps/api/.env.example` when connecting MongoDB.

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
