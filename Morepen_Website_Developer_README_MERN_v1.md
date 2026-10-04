# Morepen Laboratories Website - Development README

**Purpose:** Technical, product, content and design handover for converting the current self-contained HTML prototype into a production MERN-stack website.

**Current design/content baseline:** `Morepen_Website_Draft_v43.html`

**Prototype route style:** hash routing, for example `#/api`

**Target production route style:** clean browser routes, for example `/api`

**Intended users of this file:** UI/UX designers, frontend developers, backend developers, QA, DevOps, content administrators, and AI coding agents such as Codex or Claude Code.

---

## 1. Executive summary

The new Morepen website is a corporate pharmaceutical website, not a consumer-brand website. Its primary job is to communicate Morepen Laboratories as a science-led pharmaceutical manufacturing platform built on four decades of API experience and now expanding into CDMO, drug-product development, R&D, manufacturing scale and long-duration global partnerships.

The website must remain minimalist, professional and credible, but should not feel clinical, dated or visually monotonous. The approved design direction uses:

- a predominantly white canvas;
- Morepen blue as the structural colour;
- sky blue/cyan as the selective accent colour;
- smoke grey for supporting copy, separators and occasional section contrast;
- no black as a primary brand colour;
- no gradients on primary buttons;
- asymmetric/slanted image geometry as a restrained signature device;
- people and real manufacturing photography to humanise the technical story;
- large editorial typography with selected words highlighted in sky blue;
- clean cards with a solid sky-blue vertical left band where cards need stronger separation;
- larger numerical serial labels on numbered cards;
- white footer with smoke-grey text and separators.

The prototype contains the complete information architecture and much of the approved content, but it is **not** intended to be ported line-for-line into React. It is a review prototype that accumulated multiple design iterations in one file. Production development should preserve its approved content, route structure and interaction intent while rebuilding the code cleanly as reusable React components.

---

## 2. What is authoritative vs. what is only a prototype

### 2.1 Authoritative for migration

Treat the following as the current baseline unless a later approved content revision explicitly supersedes it:

1. Page architecture and route coverage in v43.
2. Current page copy and section order.
3. API page content and interaction restored in v43.
4. CDMO lifecycle, phase-appropriate solutions and expansion roadmap.
5. Investor page hierarchy: recent numbers, recent presentations, annual reports, then compact/dynamic disclosure areas.
6. Company leadership treatment and governance access model.
7. Global accreditation logo carousel and regulatory-context disclaimers.
8. White-first modern design system described in this README.
9. Current social and footer information.
10. Current Morepen manufacturing and facility photography selected during review.

### 2.2 Prototype-only implementation details

Do **not** reproduce the following implementation patterns in production:

- one 15 MB self-contained HTML file;
- base64/data-URI embedded images and PDFs;
- hash-router-only navigation;
- repeated CSS overrides from dozens of review versions;
- page functions returning long HTML template strings;
- hardcoded investor documents, product data and media in the page bundle;
- standalone HTML launcher files per route;
- internal review labels such as “DESIGN DRAFT”, “prototype privacy”, or “sources” on the public production site;
- any broken/dead route carried over from an old footer or intermediate version.

The production React app should be a clean rebuild using the prototype as the visual/content specification.

---

## 3. Production technology direction - MERN

Recommended stack:

### Frontend

- React 18+
- Vite for build tooling
- React Router for client-side routing
- JavaScript ES2022+ as requested; TypeScript is optional but recommended if the team is comfortable with it
- CSS Modules, SCSS Modules, or a small design-system stylesheet. Avoid importing a large UI framework unless there is a specific need.
- Fetch/Axios for API requests
- React Helmet Async (or equivalent) for per-page SEO metadata

### Backend

- Node.js LTS
- Express.js
- Mongoose
- MongoDB Atlas or managed MongoDB
- REST API initially; GraphQL is unnecessary unless requirements change materially

### Media/file storage

Do not store large PDFs/images as MongoDB base64.

Use one of:

- AWS S3 + CloudFront;
- Cloudinary;
- Azure Blob Storage;
- another approved object-storage/CDN solution.

Store only metadata and URLs in MongoDB.

### Deployment

Possible production pattern:

- React app: Vercel, Netlify, AWS CloudFront/S3, or same Node deployment if operationally preferred.
- Express API: Render, Railway, AWS ECS/Fargate, Azure App Service, or internal company infrastructure.
- MongoDB: Atlas/private approved database environment.
- CDN in front of large media/PDF assets.

Keep deployment choices independent from component architecture.

---

## 4. Proposed repository structure

```text
morepen-website/
├── README.md
├── package.json
├── apps/
│   ├── web/
│   │   ├── package.json
│   │   ├── vite.config.js
│   │   ├── public/
│   │   │   ├── favicon/
│   │   │   └── static/
│   │   └── src/
│   │       ├── app/
│   │       │   ├── App.jsx
│   │       │   ├── router.jsx
│   │       │   └── providers.jsx
│   │       ├── components/
│   │       │   ├── layout/
│   │       │   ├── navigation/
│   │       │   ├── buttons/
│   │       │   ├── cards/
│   │       │   ├── hero/
│   │       │   ├── media/
│   │       │   ├── forms/
│   │       │   ├── investor/
│   │       │   ├── api/
│   │       │   ├── cdmo/
│   │       │   └── shared/
│   │       ├── pages/
│   │       │   ├── Home/
│   │       │   ├── Company/
│   │       │   ├── API/
│   │       │   ├── CDMO/
│   │       │   ├── DrugProduct/
│   │       │   ├── Research/
│   │       │   ├── Manufacturing/
│   │       │   ├── Quality/
│   │       │   ├── Healthcare/
│   │       │   ├── Investors/
│   │       │   ├── Newsroom/
│   │       │   ├── Careers/
│   │       │   └── Contact/
│   │       ├── services/
│   │       │   ├── apiClient.js
│   │       │   ├── investorService.js
│   │       │   ├── productService.js
│   │       │   ├── mediaService.js
│   │       │   └── contentService.js
│   │       ├── hooks/
│   │       ├── utils/
│   │       ├── styles/
│   │       │   ├── tokens.css
│   │       │   ├── globals.css
│   │       │   ├── typography.css
│   │       │   └── utilities.css
│   │       └── assets/
│   └── api/
│       ├── package.json
│       └── src/
│           ├── server.js
│           ├── app.js
│           ├── config/
│           ├── routes/
│           ├── controllers/
│           ├── services/
│           ├── models/
│           ├── middleware/
│           ├── validators/
│           └── utils/
├── packages/
│   └── shared/
│       ├── constants/
│       ├── schemas/
│       └── utils/
├── scripts/
│   ├── import-seed-content.js
│   ├── generate-thumbnails.js
│   └── validate-links.js
└── docs/
    ├── content-model.md
    ├── design-system.md
    ├── route-map.md
    └── deployment.md
```

A monorepo is recommended because frontend and backend will share route constants, validation rules, document categories and data contracts. A single-repository setup is also easier for Codex/Claude Code because changes can be traced across UI, API and schemas in one place.

---

## 5. Production route map

The v43 prototype uses hash routes. Production should use normal URLs.

| Prototype | Production | Public page |
|---|---|---|
| `#/` | `/` | Home |
| `#/company` | `/company` | Company |
| `#/api` | `/api` | API |
| `#/cdmo` | `/cdmo` | CDMO |
| `#/drug-product` | `/drug-product` | Drug Product / ANDA capability |
| `#/research` | `/research` | R&D & Innovation |
| `#/manufacturing` | `/manufacturing` | Manufacturing |
| `#/quality` | `/quality` | Quality, Regulatory & Accreditations |
| `#/healthcare` | `/healthcare` | Healthcare Businesses overview |
| `#/healthcare/medical-devices` | `/healthcare/medical-devices` | Medical Devices |
| `#/healthcare/rx` | `/healthcare/rx` | Rx / Prescription Medicines |
| `#/healthcare/otc` | `/healthcare/otc` | OTC / Consumer Wellness |
| `#/investors` | `/investors` | Investors |
| `#/newsroom` | `/newsroom` | News & Announcements |
| `#/careers` | `/careers` | Careers |
| `#/contact` | `/contact` | Partner With Us / Contact |
| `#/privacy` | `/privacy` | Final privacy policy when approved |

### Internal-only routes in the prototype

- `#/sources`
- prototype review/privacy utilities

These should not automatically be published. If needed, move them to internal documentation rather than the public website.

### Route issue to fix during React migration

Older review versions included footer links such as `#/transformation` and `#/sustainability` without matching entries in the current `PAGES` registry. Do not carry dead links into production. Either:

- map them to the correct existing page/anchor; or
- introduce fully approved production pages/routes.

Run an automated link audit in CI.

### Legacy hash-route migration

For people testing or bookmarking review links such as:

```text
Morepen_Website_Draft_v19.html#/api
```

production should redirect old hash-route equivalents to clean URLs where practical:

```text
/#/api  ->  /api
/#/company  ->  /company
```

This is a migration convenience, not the permanent URL structure.

---

## 6. Navigation architecture

The primary top navigation should remain focused and compact:

1. Company
2. API
3. CDMO
4. R&D
5. Healthcare Businesses
6. Investors

Healthcare Businesses is a dropdown containing:

- Overview
- Medical Devices
- Rx & Prescription Medicines
- OTC & Consumer Wellness

Supporting destinations can appear in utility navigation/footer:

- Manufacturing
- Quality & Accreditations
- Drug Product
- Newsroom
- Careers
- Contact / Partner With Us

### Header behaviour

- White background.
- Sticky behaviour allowed but should remain restrained.
- Scrolled state may use a very soft smoke-grey/blue shadow.
- Active route indicated with a thin blue/sky-blue accent.
- Mobile navigation becomes a full-width collapsible menu.
- Dropdowns must be keyboard accessible.
- Partner/contact CTA must never overflow header height.

---

## 7. Design system - non-negotiable direction

### 7.1 Visual character

The website must feel:

- modern;
- globally pharmaceutical;
- science-led but not “laboratory themed”;
- minimalist without being bland;
- editorial rather than dashboard-heavy;
- sophisticated rather than flashy;
- human and credible through real people/facility imagery.

Avoid:

- excessive blue-tinted backgrounds;
- large dark/navy slabs except where specifically approved;
- black typography;
- decorative laboratory motifs;
- gradients on CTA buttons;
- excessive shadows;
- over-rounded “app-like” UI;
- too many cards in every section;
- stock imagery where a Morepen-specific image exists;
- excessive motion.

### 7.2 Core colour tokens

Production should consolidate all historical CSS overrides into one token file.

Recommended canonical tokens based on the approved v38-v43 direction:

```css
:root {
  --mp-blue-900: #0B347B;      /* deep Morepen structural blue */
  --mp-blue-700: #075AAE;      /* primary Morepen blue */
  --mp-cyan-500: #16B9E8;      /* cyan / active accent */
  --mp-sky-400:  #6CCAF0;      /* sky-blue highlight */

  --mp-smoke-700: #687582;     /* main supporting text */
  --mp-smoke-600: #7A8590;     /* secondary supporting text */
  --mp-smoke-100: #F4F6F8;     /* smoke section background */
  --mp-smoke-150: #EEF2F5;     /* secondary smoke */
  --mp-line:      #DDE5EC;     /* borders/separators */
  --mp-white:     #FFFFFF;

  --mp-shadow-soft: 0 16px 42px rgba(16,42,86,.07);
  --mp-shadow-card: 0 8px 24px rgba(16,42,86,.06);
  --mp-radius-card: 14px;
}
```

If final brand guidelines provide exact corporate HEX values later, update the tokens only. Do not manually recolour dozens of components.

### 7.3 Typography colour rules

- Major headings: Morepen blue.
- Selected key phrase/word: sky blue/cyan.
- Supporting body copy: smoke grey.
- Avoid black.
- Dark blue is not a replacement for black everywhere; large text needs balance between blue and sky blue.
- White typography only on an intentionally dark branded surface.

### 7.4 Primary buttons

Primary CTA buttons should be **solid colour**, not gradient.

Recommended:

```css
.btn-primary {
  background: var(--mp-blue-700);
  color: white;
}

.btn-primary:hover {
  background: var(--mp-blue-900);
}
```

A sky-blue solid CTA may be used selectively where required, but gradients are considered dated and should not be introduced.

Secondary CTA:

- white background;
- Morepen blue text;
- subtle blue/smoke border;
- smoke-grey hover background.

### 7.5 Section backgrounds

Default: white.

Smoke-grey sections should be used only to:

- separate a long page rhythm;
- highlight a data/disclosure block;
- give subtle hierarchy where white-on-white becomes visually flat.

Do not alternate coloured bands mechanically.

### 7.6 Asymmetric image treatment

This is the signature modern design device.

Use sparingly on:

- page hero image;
- one or two major editorial images on long pages;
- key manufacturing/facility stories.

Typical treatment:

- slanted/angled left edge;
- thin cyan line parallel to image edge;
- white canvas around image;
- subtle shadow;
- no heavy blue box behind the image.

Representative CSS idea:

```css
.editorialImage img {
  clip-path: polygon(11% 0, 100% 0, 100% 100%, 0 100%);
}
```

Do not apply a slanted frame to every small image/card.

### 7.7 Card treatment

For cards/boxes that need clear separation:

- white background;
- smoke-grey border;
- solid sky-blue **vertical band on the left**;
- no top cyan stripe if vertical band is used;
- larger serial number at top-left when the card is ordered/numbered;
- modest/no shadow in resting state;
- subtle elevation on hover only when clickable.

Numbered card serials should have visual impact. They are not tiny metadata.

### 7.8 Footer

Footer across all pages:

- white background;
- smoke-grey supporting text;
- Morepen blue headings;
- subtle smoke-grey horizontal separators;
- no dark/navy footer block;
- social links integrated as text + small restrained icons.

Current social destinations used in the prototype:

- LinkedIn: `https://www.linkedin.com/company/morepen-laboratories-limited-india/`
- X/Twitter: `https://x.com/MorepenLabs`
- YouTube: `https://www.youtube.com/@BubbleChatMorepen/videos`

Validate these before production launch.

---

## 8. Responsive design targets

Minimum target widths for QA:

- 1440 px desktop
- 1280 px laptop
- 1024 px tablet landscape
- 768 px tablet portrait
- 430 px mobile
- 390 px mobile
- 360 px small mobile

### Responsive principles

- Do not merely shrink desktop layouts.
- 4-card grids -> 2 columns -> 1 column as space reduces.
- Avoid text below 14 px for essential body copy in production.
- Hero typography should use `clamp()`.
- Slanted image geometry may simplify on mobile.
- Horizontal carousels must be touch friendly.
- Tables/disclosure lists should become stacked rows/cards, not tiny horizontal tables.
- Buttons need 44 px minimum touch target where practical.

---

## 9. Shared React component library

Build these reusable components before converting page content.

### Layout

- `<SiteHeader />`
- `<UtilityBar />` if retained
- `<PrimaryNav />`
- `<HealthcareDropdown />`
- `<SiteFooter />`
- `<PageContainer />`
- `<Section />`
- `<SectionHeading />`
- `<Breadcrumbs />`

### Hero/media

- `<HomeHeroCarousel />`
- `<PageHero />`
- `<AsymmetricImage />`
- `<EditorialImage />`
- `<ImageCaption />`

### UI

- `<Button />`
- `<TextLink />`
- `<Badge />`
- `<Metric />`
- `<MetricBand />`
- `<NumberedCard />`
- `<FeatureCard />`
- `<ImageCard />`
- `<LogoCarousel />`
- `<Accordion />`
- `<Modal />`
- `<Tabs />`
- `<FilterPills />`
- `<SearchInput />`

### Domain components

API:

- `<TherapyCard />`
- `<TherapyGrid />`
- `<ApiPortfolioExplorer />`
- `<ApiProductCard />`
- `<ApiProductDialog />`
- `<ApiSupportSummary />`

CDMO:

- `<LifecycleStep />`
- `<ServiceCapabilityCard />`
- `<PhaseAppropriateSolutions />`
- `<CapacityBlock />`
- `<ExpansionRoadmap />`

Investors:

- `<InvestorMetricStrip />`
- `<PresentationCard />`
- `<PresentationGrid />`
- `<AnnualReportCard />`
- `<AnnualReportsGrid />`
- `<DisclosureDirectory />`
- `<InvestorContacts />`

Company:

- `<Timeline />`
- `<LeadershipProfile />`
- `<LeadershipModal />`
- `<GovernanceModal />`
- `<CSRSection />`

News:

- `<NewsCard />`
- `<PressReleaseRow />`
- `<MediaVideoCard />`

Quality:

- `<CredentialCard />`
- `<AccreditationLogoCarousel />`

---

## 10. Page-by-page production intent

### 10.1 Home

Purpose: establish Morepen transformation quickly.

Key order currently developed:

1. Hero carousel focusing on API, CDMO, R&D and Investors/news/numbers.
2. Key numbers / capability statistics.
3. Business/platform overview.
4. CDMO / transformation story.
5. News & announcements.
6. Morepen 2.0 / current growth journey.
7. Manufacturing & supply.
8. Quality / regulatory accreditation logo carousel.
9. Healthcare Businesses.
10. Footer.

Home should remain selective. Do not replicate every page's detail here.

### 10.2 Company

Purpose: confidence, history, governance and the Morepen transformation.

Include:

- four-decade journey;
- transformation narrative;
- milestones;
- manufacturing/facility visual;
- ESG and sustainability initiatives;
- CSR initiatives;
- leadership: Sushil Suri and Sanjay Suri shown upfront;
- remaining management/board/committees behind clear CTA/modal or dynamic directory;
- accreditations/regulatory recognition where relevant.

### 10.3 API

This page is a first-class route and must never regress or disappear.

Core sections:

1. API hero.
2. Chemistry/regulatory/manufacturing proof strip.
3. Larger therapy-wise discovery cards with icons and counts.
4. Searchable API portfolio explorer.
5. View/download complete API list CTA.
6. Dossiers, combinations, key intermediates and DMF/CEP support.
7. Manufacturing and R&D backbone.
8. Quality/regulatory evidence.
9. API enquiry CTA.
10. Product detail modal/dialog.

The API catalogue must be CMS/API-driven in production.

### 10.4 CDMO

Purpose: communicate end-to-end capability and customer partnership.

Core order:

1. Hero.
2. End-to-end development lifecycle.
3. Core service capabilities.
4. Phase-appropriate solutions.
5. Chemistry/development expertise.
6. Manufacturing platform.
7. Expansion roadmap.
8. Quality/regulatory support.
9. Flexible engagement model.
10. Partner CTA.

Critical roadmap values currently used in the prototype:

- 614 KL current installed API/CDMO reactor capacity;
- 800 KL next milestone;
- 1000 KL subsequent milestone;
- 1200 KL longer-term roadmap.

Future milestones must always retain forward-looking qualification. Do not present roadmap capacity as commissioned capacity.

### 10.5 Drug Product

Purpose: show development and ANDA capability without implying approvals that have not occurred.

Use precise language distinguishing:

- development;
- filing/submission;
- approval;
- commercial supply.

### 10.6 R&D / Research

Positioning:

- research-backed;
- quality-driven;
- continuous development;
- patents and DMFs;
- process chemistry;
- analytical science;
- technology transfer;
- Innovation Hub / Capability Centre as future direction.

Future technologies such as high-potency/oncology, peptides and related technologies must be labelled appropriately as planned/evaluative until qualified and commercially ready.

### 10.7 Manufacturing

Purpose: scale, process depth, supply reliability.

Use actual Morepen facility photography wherever possible.

The selected aerial image should remain consistent across the website wherever the main facility aerial shot is used.

### 10.8 Quality

Purpose: evidence and context, not a wall of logos.

Requirements:

- credential/accreditation carousel with original logos;
- large logo presentation with low internal whitespace;
- separate regulatory inspection, certification and recognition concepts;
- explain that approvals/registrations are site/product/filing specific;
- do not imply a logo equals company-wide approval.

### 10.9 Healthcare Businesses

Keep Medical Devices, Rx and OTC visible in navigation and content, but clearly as distinct healthcare businesses rather than the core API/CDMO corporate story.

Consumer-heavy brand storytelling should primarily live on dedicated Dr. Morepen properties.

### 10.10 Investors

Priority hierarchy:

1. latest reported numbers at the top;
2. latest five investor presentations with 16:9 thumbnails and title/date below;
3. annual reports with portrait cover thumbnails;
4. compact previews for remaining disclosure categories;
5. important contacts.

Investor figures:

- INR-million values should display as rounded whole numbers unless there is a specific accounting reason not to;
- percentages retain reported decimal precision.

Current Investor Relations contact in the prototype:

- Rajas Suri
- `rajas.suri@morepen.com`

The lower disclosure areas are intended to become CMS-driven. They should not hardcode the complete statutory archive in the frontend bundle.

### 10.11 Newsroom

Support:

- news;
- press releases;
- video/TV media thumbnails;
- recent content first;
- investor-facing announcements can link into Investors.

Do not require icons for text/PDF-only stories; use editorial layout and metadata instead.

### 10.12 Careers

Keep restrained unless a recruitment CMS/source is connected. Do not invent live openings.

### 10.13 Contact / Partner With Us

Support route-aware enquiry entry:

- API;
- CDMO;
- Drug Product;
- Quality;
- Investor relations;
- Healthcare businesses;
- General corporate enquiries.

Do not collect confidential chemistry/process data in the first public form.

---

## 11. Content architecture and CMS model

The website should not require a code deployment for routine investor, news, leadership, accreditation or API catalogue updates.

Recommended MongoDB collections:

### `pages`

```js
{
  slug: String,
  title: String,
  seoTitle: String,
  metaDescription: String,
  hero: {...},
  sections: [...],
  status: 'draft' | 'published',
  publishedAt: Date,
  updatedBy: ObjectId,
  revision: Number
}
```

Use for editorial page-level content if the admin/CMS needs flexibility. If page structure is intentionally locked, store only editable copy fields and keep layout in React.

### `apiProducts`

```js
{
  name: String,
  slug: String,
  therapy: String,
  category: String,
  forms: [String],
  regulatory: [String],
  status: 'active' | 'archived',
  displayOrder: Number,
  published: Boolean,
  sourceDocument: ObjectId,
  updatedAt: Date
}
```

### `therapyAreas`

```js
{
  name: String,
  slug: String,
  iconKey: String,
  description: String,
  displayOrder: Number,
  published: Boolean
}
```

### `investorDocuments`

```js
{
  title: String,
  category: 'presentation' | 'annual-report' | 'results' | 'shareholding' |
            'governance' | 'exchange-filing' | 'transcript' | 'other',
  fiscalYear: String,
  quarter: String,
  documentDate: Date,
  fileUrl: String,
  thumbnailUrl: String,
  featured: Boolean,
  displayOrder: Number,
  published: Boolean
}
```

### `financialHighlights`

```js
{
  period: String,
  label: String,
  value: Number,
  displayValue: String,
  unit: String,
  yoy: String,
  type: 'currency' | 'percentage' | 'count',
  sourceDocument: ObjectId,
  asOfDate: Date,
  published: Boolean
}
```

### `news`

```js
{
  title: String,
  slug: String,
  type: 'news' | 'press-release' | 'media',
  publishDate: Date,
  summary: String,
  body: String,
  thumbnailUrl: String,
  documentUrl: String,
  videoUrl: String,
  featured: Boolean,
  published: Boolean
}
```

### `credentials`

```js
{
  name: String,
  authority: String,
  type: 'inspection' | 'certification' | 'registration' | 'recognition',
  logoUrl: String,
  site: String,
  scope: String,
  validFrom: Date,
  validTo: Date,
  sourceUrl: String,
  displayOrder: Number,
  published: Boolean
}
```

### `leadership`

```js
{
  name: String,
  role: String,
  type: 'featured' | 'board' | 'management' | 'committee',
  imageUrl: String,
  bio: String,
  displayOrder: Number,
  published: Boolean
}
```

### `mediaAssets`

```js
{
  title: String,
  type: 'image' | 'pdf' | 'video' | 'logo',
  url: String,
  thumbnailUrl: String,
  altText: String,
  tags: [String],
  credit: String,
  rightsStatus: String,
  createdAt: Date
}
```

### `siteSettings`

Store:

- corporate addresses;
- phone numbers;
- investor contacts;
- social links;
- footer groups;
- global CTA text;
- SEO defaults;
- emergency banners/announcements if ever needed.

### `auditLogs`

For sensitive corporate/investor content, capture admin content changes.

---

## 12. Suggested REST API

Public read endpoints:

```text
GET /api/v1/pages/:slug
GET /api/v1/api-products
GET /api/v1/api-products/:slug
GET /api/v1/therapy-areas
GET /api/v1/investor-documents
GET /api/v1/investor-documents?category=presentation&limit=5
GET /api/v1/financial-highlights?period=latest
GET /api/v1/news
GET /api/v1/news/:slug
GET /api/v1/credentials
GET /api/v1/leadership
GET /api/v1/site-settings/public
```

Public write endpoint:

```text
POST /api/v1/contact
```

Admin endpoints should be separately authenticated and authorised.

Use consistent response shapes:

```js
{
  success: true,
  data: ..., 
  meta: {...}
}
```

Errors:

```js
{
  success: false,
  error: {
    code: 'VALIDATION_ERROR',
    message: '...',
    fields: {...}
  }
}
```

---

## 13. Investor document thumbnail strategy

This is important for the Investors page.

### Investor presentations

- use a 16:9 thumbnail;
- ideally generate it automatically from page 1 of the uploaded PDF;
- crop/letterbox consistently;
- preserve Morepen deck identity;
- title/date appear as HTML below the thumbnail, not baked into the image if avoidable.

### Annual reports

- portrait cover thumbnail;
- use actual report cover;
- maintain consistent displayed height;
- lazy load.

### Generation workflow

On document upload:

1. upload original PDF to object storage;
2. background worker creates thumbnail(s);
3. save thumbnail URL and metadata in MongoDB;
4. frontend refreshes content dynamically.

Do not render PDFs client-side merely to generate thumbnails on each page view.

---

## 14. API catalogue behaviour

The API page must remain a working interactive catalogue.

Production behaviour:

- therapy cards set a filter;
- text search filters by product name, therapy/category and approved form metadata;
- sort A-Z or featured;
- product cards open an accessible modal/drawer;
- product detail CTA routes to contact with product name prefilled;
- complete published API list remains downloadable;
- catalogue data comes from API/MongoDB, not hardcoded JS.

Do not expose confidential technical documents automatically.

---

## 15. Contact form backend

The current prototype does not transmit data. Production will need a real backend.

Recommended fields:

- name;
- company;
- work email;
- country/region;
- area of interest;
- program stage if relevant;
- brief non-confidential requirement;
- consent checkbox.

Backend requirements:

- schema validation;
- HTML/script sanitisation;
- rate limiting;
- spam protection;
- optional hCaptcha/reCAPTCHA/Turnstile;
- email/CRM routing by enquiry type;
- no confidential molecule/process upload in the first enquiry;
- no health/patient data collection;
- logging without storing unnecessary sensitive data.

---

## 16. SEO requirements

Each page needs:

- unique `<title>`;
- meta description;
- canonical URL;
- Open Graph metadata;
- social preview image;
- proper H1/H2 hierarchy;
- structured breadcrumb data where appropriate.

Recommended structured data:

- `Organization`;
- `WebSite`;
- `BreadcrumbList`;
- `NewsArticle` for newsroom stories;
- `Article` for press releases where appropriate;
- `JobPosting` only when an actual current opening exists.

Avoid structured data that implies medical claims or approvals beyond published evidence.

---

## 17. Accessibility - target WCAG 2.2 AA

Required:

- semantic landmarks;
- skip-to-content link;
- keyboard-operable menus/dropdowns;
- visible focus state;
- alt text for meaningful images;
- decorative images have empty alt;
- no colour-only status indicators;
- accessible modals with focus trap and restore focus;
- accordion state via `aria-expanded`;
- carousel pause/interaction controls available to assistive technology even if visually minimal;
- `prefers-reduced-motion` support;
- sufficient contrast between smoke-grey body text and white;
- touch targets sized appropriately.

Do not reduce body copy contrast merely to achieve a “soft” look.

---

## 18. Performance requirements

Production target:

- remove all inline base64 images/PDFs;
- responsive images with `srcset`;
- AVIF/WebP where sensible;
- lazy load below-the-fold media;
- eager/preload only critical hero image/logo/font assets;
- code-split page routes;
- defer noncritical JS;
- CDN for static assets;
- cache immutable asset URLs;
- compress API responses;
- optimise SVGs;
- avoid loading all investor PDFs in JavaScript.

Suggested Core Web Vitals targets:

- LCP < 2.5 s at 75th percentile;
- INP < 200 ms;
- CLS < 0.1.

---

## 19. Security requirements

Backend:

- `helmet`;
- strict CORS allowlist;
- secure cookies if cookies are used;
- input validation with Zod/Joi/Express Validator;
- rate limits;
- request body size limits;
- sanitisation where HTML input is allowed;
- no secrets in repository;
- audit admin changes;
- role-based admin permissions;
- MFA for production admin if available;
- signed/controlled upload URLs;
- file type/MIME/size validation;
- malware scanning for uploaded documents if infrastructure permits.

Frontend:

- never inject CMS HTML with raw `dangerouslySetInnerHTML` without sanitisation;
- use `rel="noopener noreferrer"` for external links;
- enforce Content Security Policy in production;
- avoid storing auth tokens in localStorage for privileged admin if a safer cookie flow is used.

---

## 20. Admin/CMS recommendation

A full headless CMS is optional. For this site, a lightweight internal admin built into the MERN app may be enough.

Minimum admin modules:

1. Investor documents
2. Financial highlights
3. News / press releases / media
4. API catalogue
5. Therapy areas
6. Accreditations / credentials
7. Leadership / committees
8. Global contacts and social links
9. Media library

Publishing workflow:

- draft;
- review;
- approved;
- published;
- archived.

For investor/regulatory content, allow an approver role separate from editor.

---

## 21. Content governance rules

This is a pharmaceutical corporate website. Content discipline is critical.

### Never silently change factual claims

A developer or AI agent must not “improve”:

- regulatory approval language;
- site/plant approval status;
- filing counts;
- patent counts;
- DMF counts;
- capacity figures;
- customer/order values;
- investor results;
- titles/roles;
- contact names;
- dates;
- geographic reach;
- market claims.

If a source conflicts, flag it for content owner review.

### Forward-looking statements

Roadmap items must remain clearly qualified.

Example:

- **current installed**: 614 KL;
- future 800/1000/1200 KL values are roadmap/milestones, not current commissioned capacity.

### Regulatory wording

Always distinguish:

- inspection;
- registration;
- approval;
- certification;
- filing/submission;
- commercialisation.

Do not convert one into another for marketing impact.

---

## 22. AI coding-agent operating instructions (Codex / Claude Code)

Put the following section at the top of the agent context or repository `AGENTS.md` if the project uses one.

### 22.1 Read before modifying

Before making changes, the coding agent must read:

1. this README;
2. `docs/design-system.md` if present;
3. the relevant page/component;
4. the current route registry;
5. relevant content/data schema;
6. tests for the affected feature.

### 22.2 Scope discipline

For every request:

- change only the requested feature;
- do not rewrite unrelated copy;
- do not change brand tokens unless explicitly requested;
- do not re-order sections unless explicitly requested;
- do not replace Morepen imagery with stock imagery unless asked;
- do not invent new corporate metrics or regulatory claims;
- do not delete routes merely because they look unused;
- do not alter CMS schemas without explaining migration impact.

### 22.3 Progressive-development protocol

For each meaningful change:

1. inspect current implementation;
2. state files likely to change;
3. implement smallest coherent change;
4. run lint/tests/build;
5. run route/link audit if navigation changed;
6. visually check affected page at desktop + mobile;
7. summarise exactly what changed;
8. note any content question rather than guessing.

### 22.4 Protect design-system consistency

Agents should use tokens/components, not ad hoc styles.

Bad:

```css
color: #19b6e9;
margin-left: 17px;
```

Good:

```css
color: var(--mp-cyan-500);
```

or a design-system utility/component prop.

### 22.5 Avoid CSS override accumulation

The prototype contains years of iterative overrides. Production must not repeat this pattern.

Do not add:

```css
.component { ... }
.component { ... }
.component { ... }
```

across multiple version blocks.

Refactor the source component/style once.

### 22.6 Do not use generated mockup text as factual source

The visual mockups were used to establish design language. Some illustrative labels/numbers in concept images are not approved content.

For actual public content, use:

- current approved website content;
- approved corporate presentation;
- approved investor materials;
- approved press releases;
- approved annual report;
- approved content-revision output.

### 22.7 Maintain a change log

Each development task should add a concise entry containing:

- date;
- area changed;
- files/components touched;
- user-facing change;
- data/schema migration if any;
- test/QA performed.

### 22.8 Agent stop conditions

The agent should stop and ask/flag instead of guessing when:

- a new regulatory claim is required;
- two approved sources show different numbers;
- a public contact is unclear;
- a capacity milestone cannot be classified as current vs roadmap;
- a new external/social URL cannot be verified;
- a page must expose confidential/customer-specific content;
- a design request would break accessibility or mobile layout materially.

---

## 23. Testing strategy

### Unit tests

- utility formatting;
- currency rounding;
- date formatting;
- API filter logic;
- route helpers;
- validation schemas.

### Component tests

- navigation dropdown keyboard behaviour;
- API therapy filters;
- product modal;
- investor presentation card;
- annual report card;
- disclosure accordion;
- contact form validation;
- mobile menu.

### Integration tests

- API product list from backend;
- investor documents render from backend;
- contact form success/failure;
- CMS publication state visibility.

### E2E tests - Playwright/Cypress

Minimum journeys:

1. Home -> API -> therapy filter -> product detail -> contact.
2. Home -> CDMO -> roadmap -> partner CTA.
3. Investors -> latest presentation -> annual report -> disclosure directory.
4. Company -> leadership -> management/committee dialog.
5. Mobile menu -> all primary routes.
6. Footer -> all internal routes.
7. Social links open correct external destinations.
8. Unknown URL renders branded 404.

### Visual regression

Capture at least:

- 1440 desktop;
- 1024 tablet;
- 390 mobile.

Key pages:

- Home;
- Company;
- API;
- CDMO;
- Investors;
- Contact.

---

## 24. Formatting utilities

Centralise numeric formatting.

### INR million

Display whole millions by default on website cards:

```js
formatInrMillions(5753.1) // "5,753"
```

Do not show unnecessary decimals in investor KPI cards.

### Percentage

Preserve published precision:

```js
formatPercent(15.25) // "15.25%"
```

### Capacity

Capacity values should include unit exactly:

```text
614 KL
800 KL
1000 KL
1200 KL
```

Do not auto-add commas to capacity unless copy guidelines later require it.

---

## 25. Image/content asset policy

### Preferred order

1. Morepen-owned current photography supplied for the redesign.
2. Morepen annual report/corporate presentation photography with confirmed rights.
3. Approved brand/product photography.
4. Carefully selected licensed stock imagery only when necessary.

### Never

- recolour accreditation logos;
- stretch/crop logos destructively;
- use generated people as if they are actual Morepen employees;
- label an illustrative image as a real Morepen facility/person unless confirmed;
- embed raw 5-20 MB images directly into JS bundles.

### Alt text

Describe what matters in context, not visual trivia.

Example:

> Morepen API manufacturing facility aerial view in Himachal Pradesh

---

## 26. Analytics and measurement

If approved, configure analytics through a central abstraction rather than scattering tracking code in components.

Useful events:

- `cta_partner_click`
- `api_product_open`
- `api_list_download`
- `investor_presentation_open`
- `annual_report_open`
- `contact_submit`
- `social_click`
- `news_open`
- `video_play`

Do not send confidential form text or sensitive personal data to analytics.

---

## 27. Error/loading/empty states

Every dynamic module must define all states.

Investor presentations:

- loading skeleton;
- empty state;
- API error with retry;
- no thumbnail fallback.

API catalogue:

- loading;
- no results;
- backend unavailable;
- product archived.

Accreditations:

- logo missing fallback;
- no records;
- expiry/validity handled by CMS rules.

Never leave a blank section if API content fails.

---

## 28. Browser support

Recommended launch support:

- current Chrome;
- current Edge;
- current Safari;
- current Firefox;
- iOS Safari current + previous major;
- Android Chrome current.

`clip-path` asymmetric images should have a graceful fallback to a normal rectangle if unsupported.

---

## 29. Migration plan from HTML prototype to React/MERN

### Phase 0 - freeze and archive

- archive v43 unchanged;
- confirm final content proofreading status;
- inventory all images/PDFs/social links;
- extract approved text into structured source files.

### Phase 1 - scaffold

- create React/Vite app;
- create Express app;
- configure MongoDB connection;
- set lint/format/test tooling;
- create route registry;
- implement design tokens.

### Phase 2 - shared shell

Build:

- header;
- primary nav;
- healthcare dropdown;
- footer;
- buttons;
- section primitives;
- page hero;
- asymmetric media component;
- card system.

Do not begin page-by-page custom styling before these primitives are stable.

### Phase 3 - static page migration

Recommended order:

1. Home
2. Company
3. API
4. CDMO
5. R&D
6. Manufacturing
7. Quality
8. Healthcare pages
9. Investors
10. Newsroom
11. Careers
12. Contact

Initially use local JSON modules so React layout can be reviewed without backend dependency.

### Phase 4 - dynamic modules

Move to backend/CMS:

- API catalogue;
- investor documents;
- financial highlights;
- annual reports;
- news/media;
- accreditations;
- leadership/governance;
- contacts/social links.

### Phase 5 - admin

- authentication;
- roles;
- upload flows;
- publishing workflow;
- audit log.

### Phase 6 - launch hardening

- SEO;
- accessibility audit;
- link audit;
- performance audit;
- security review;
- content signoff;
- browser/device QA;
- analytics/consent;
- redirects from old URLs.

---

## 30. Suggested package scripts

Root examples:

```json
{
  "scripts": {
    "dev": "concurrently \"npm run dev:web\" \"npm run dev:api\"",
    "dev:web": "npm --workspace apps/web run dev",
    "dev:api": "npm --workspace apps/api run dev",
    "build": "npm run build:web && npm run build:api",
    "build:web": "npm --workspace apps/web run build",
    "build:api": "npm --workspace apps/api run build",
    "lint": "npm run lint --workspaces",
    "test": "npm run test --workspaces",
    "test:e2e": "playwright test",
    "validate:links": "node scripts/validate-links.js"
  }
}
```

Actual scripts can be simplified if the repository is not a workspace/monorepo.

---

## 31. Environment variables

Example only; never commit real secrets.

```bash
# API
NODE_ENV=development
PORT=5000
MONGODB_URI=
CORS_ORIGIN=http://localhost:5173

# Object storage
MEDIA_BUCKET=
MEDIA_REGION=
MEDIA_CDN_BASE_URL=

# Email/CRM
CONTACT_FROM_EMAIL=
CONTACT_TO_API=
CONTACT_TO_CDMO=
CONTACT_TO_CORPORATE=
CONTACT_TO_INVESTOR=

# Security/admin
SESSION_SECRET=
JWT_SECRET=

# Frontend
VITE_API_BASE_URL=http://localhost:5000/api/v1
VITE_SITE_URL=http://localhost:5173
VITE_ANALYTICS_ID=
```

If JWT is not used, remove it rather than keeping unused secrets.

---

## 32. Definition of done for any page conversion

A page is not “done” merely because it looks similar to the prototype.

Required:

- correct production route;
- header/footer links work;
- mobile layout works;
- content matches approved source;
- no dead CTA;
- images optimised;
- alt text present;
- loading/error/empty states implemented for dynamic content;
- keyboard accessible;
- SEO metadata set;
- no console errors;
- no broken links;
- lint/tests pass;
- responsive visual QA completed;
- content owner approves factual copy;
- design owner approves visual parity.

---

## 33. Launch-specific checklist

Before production launch:

- [ ] Remove `noindex,nofollow` from prototype-only meta settings.
- [ ] Remove all “prototype”, “internal review”, “design draft” labels.
- [ ] Remove internal sources/review page from public route registry.
- [ ] Replace hash routes with clean routes.
- [ ] Configure 301 redirects from current live Morepen URLs where route names change.
- [ ] Validate all social links.
- [ ] Validate all investor contacts.
- [ ] Validate all regulatory logos/claims.
- [ ] Validate all capacity numbers and forward-looking wording.
- [ ] Verify Sushil Suri/Sanjay Suri leadership imagery and titles.
- [ ] Confirm API list/document download URL.
- [ ] Confirm latest five investor presentations dynamically.
- [ ] Confirm latest annual reports dynamically.
- [ ] Confirm legal/privacy/cookie content.
- [ ] Confirm contact form routing and privacy notice.
- [ ] Run W3C/HTML semantics checks where useful.
- [ ] Run Lighthouse.
- [ ] Run accessibility scan + manual keyboard test.
- [ ] Run broken-link crawler.
- [ ] Run production security headers check.
- [ ] Confirm backup/restore for MongoDB and media.

---

## 34. Final development principle

**The target is not to reproduce a large HTML prototype. The target is to reproduce the approved Morepen experience as a clean, maintainable, dynamic React/MERN product.**

Whenever there is tension between:

- legacy prototype CSS and the approved current design direction -> follow the current design direction;
- generated design mockup text and approved corporate content -> follow approved corporate content;
- a visually dramatic treatment and clarity/readability -> choose clarity;
- hardcoded content and content that changes regularly -> make the changing content data-driven;
- a developer shortcut and regulatory/investor accuracy -> choose accuracy.

The site should remain clean, focused, human, technically credible and easy to maintain as Morepen's API/CDMO story continues to evolve.

---

## 35. Current prototype reference

For migration review, retain an archived copy of:

- `Morepen_Website_Draft_v43.html`
- `API.html` from v43
- latest content-proofreading PDF, if approved by the content team
- supplied Morepen image/logo assets

Do not make the HTML prototype the runtime dependency of the React application. It is a reference artifact only.

