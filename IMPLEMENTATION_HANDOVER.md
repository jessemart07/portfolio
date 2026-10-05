# Jesse Codes redesign handover

Implemented 30 September 2026; Secure Solutions added 5 October 2026 in the existing Next.js 14.1 Pages Router project.

## Delivered

- Warm off-white, charcoal and teal design with locally hosted Sora, a serif accent in the headline and Jesse’s supplied monochrome portrait.
- Responsive text navigation, mobile menu with Escape dismissal and keyboard focus handling, skip link and visible focus styles.
- Rebuilt Home, Work, Services, About and Contact. Removed side navigation, carousels and counters. Restored the original portfolio’s motion character in the new palette: pointer-reactive linked particles, directional entrances, staggered scroll reveals and three-layer page wipes. The portrait has a moving orbit and chamfered frame; buttons, links and project previews have coordinated hover effects.
- Nine statically generated case studies: Secure Solutions, HOM, Innovatr, Fuel Rebate Solution Management, Global Academy LMS, Invequity, Bayede Travel, Jesse and Kylie Music, and Budget Buddy. Budget Buddy is explicitly a personal prototype and is absent from featured homepage work.
- Project roles and content limited to existing public descriptions. No invented outcomes, testimonials or recent client disclosures.
- Website and application work are grouped on Work; engineering delivery, QA and consulting are represented in Services without inventing a portfolio example.
- Page titles, descriptions, canonicals, Open Graph tags, robots and a sitemap. Vercel preview builds automatically receive noindex metadata; it can also be enabled with NEXT_PUBLIC_NOINDEX=true.
- Contact keeps Web3Forms. Visible labels, length limits, validation, submission lock, timeout, honeypot and provider-confirmed success. The old unused SendGrid route now rejects unsupported methods and invalid payloads and requires a configured verified sender.
- Motion uses native canvas, CSS and browser observers, with no additional animation dependency. Pause/resume controls share a saved preference across routes; system reduced-motion preferences disable movement. Canvas work stops offscreen or when the tab is hidden. Server-rendered content remains visible without JavaScript.
- Removed unused animation, carousel, counter, icon and form-library dependencies and subsequently upgraded the framework and tooling; see the dependency update below.

## Missing inputs and release conditions

1. **Web3Forms configuration:** restored NEXT_PUBLIC_WEB_FORMS_API_KEY from Jesse’s supplied environment file into the ignored .env.local on 5 October 2026 and rebuilt the site. The contact form is enabled locally. Production must retain the same environment variable and be rebuilt after any configuration change. Web3Forms accepted one owner-authorised live test enquiry; inbox receipt awaits Jesse’s confirmation.
2. **Portrait supplied:** Jesse Martin Photo.png is now used in the homepage hero, preserving its monochrome treatment; CSS blends its photographic background into the sage frame. The 869 × 948 WebP is 41,038 bytes; a CSS 4:5 frame crops the sides slightly without changing the photograph. It loads eagerly beside the introduction on desktop and follows the copy and calls to action on mobile.
3. **Project captures:** Global Academy uses the teal Global Academy Support Centre capture selected explicitly by Jesse; Ohana has been removed. Four questionable captures were removed from public assets and backed up outside this repository under the chat's work/original-project-images directory. Use owner-approved, sanitised captures before adding galleries. The existing music image is a 348px presentation rather than a high-resolution application capture.
4. **Deployment:** README identifies Vercel; an older GitHub Pages workflow also exists and was retained. Confirm the actual deployment target before release. No deployment or push was performed. One owner-authorised live Web3Forms test enquiry was accepted on 5 October 2026.
5. **Git:** Windows sandbox ACLs deny writes to .git/refs. Branch creation was attempted and blocked. Changes remain uncommitted on the existing main checkout. A binary patch and complete source archive are supplied for review. Create a branch before committing or publishing.

## Verification

- A clean npm ci with the updated lockfile succeeds.
- Production next build succeeds, including lint and page generation. All five core pages and four case studies render to initial HTML.
- Five node:test tests pass with mocked fetch responses: invalid fields, missing configuration/honeypot, subject mapping and confirmed success, provider/HTTP/JSON failures, and network failure/timeout. They send no requests to Web3Forms.
- Browser review covered desktop and mobile. Nine public routes checked at 360, 390, 768, 1024 and 1440px: no horizontal overflow, one H1 per page and no broken images.
- Motion revision: all nine routes rechecked at 320px and 1440px with no horizontal overflow and one H1. Homepage additionally checked at 390, 768 and 1024px. Results are in motion-layout-checks.json. Page wipes were observed on navigation and cleared after completion; same-page anchor navigation did not trigger a wipe. Pause removed reveal waiting states and stopped the CSS orbit; the choice persisted after reload. Scroll reveals and mobile Menu/Escape were checked.
- Mobile menu opening, Escape dismissal, route navigation and closing were exercised. Form labels and missing-configuration behaviour were inspected.
- HTTP route/metadata and restricted-content scan results are in verification.json; layout measurements are in layout-checks.json.
- Screenshots supplied: desktop and mobile homepage, full homepage, Work, a case study, desktop and mobile Contact.
- No Lighthouse score, formal accessibility certification, actual 200% browser zoom or OS reduced-motion emulation is claimed. Narrow reflow was checked; reduced-motion CSS disables animation/transitions and smooth scrolling.

## Main implementation files

- src/components/Motion.js: preference provider, pause/resume controls, scroll entrances, route curtains and linked particle canvas.
- src/components/Layout.js: shared header, mobile navigation and footer.
- src/components/Site.js: metadata, project presentation, services, process and closing CTA.
- src/content/site.js: publishable project and service copy.
- src/pages/index.js, work.js, services.js, about.js, contact.js, 404.js and work/[slug].js.
- src/lib/enquiry.mjs and tests/enquiry.test.mjs: form payload, validation and mocked transport checks.
- src/pages/api/contactform.js: hardened legacy SendGrid endpoint.
- src/styles/globals.css, public/fonts and public/logo-light.svg: visual system and assets.
- next.config.js, public/robots.txt, public/sitemap.xml and .env.example: indexing and configuration.
- package.json, package-lock.json and eslint.config.mjs: dependency cleanup and working lint configuration.

## Run locally

Use Node 24 LTS and npm (Node 22.13 or later is required). Copy .env.example to .env.local and configure the public Web3Forms access key if you want the form enabled. Never place a SendGrid secret in a NEXT_PUBLIC variable.

    npm ci
    npm run test
    npm run lint
    npm run build
    npm run start

The patch targets the original checkout's HEAD and includes binary changes and new files. It has been checked against an archive of that HEAD. The source ZIP excludes .git, node_modules, build output, environment secrets and the private implementation brief.

## Secure Solutions addition — 5 October 2026

Featured on Home and Work with a new /work/secure-solutions case study and sitemap entry. The scope comes from Jesse’s explicit description: full-stack redevelopment of a Laravel platform in React and .NET, Azure setup and hosting, and high-risk inventory tracking across South African stores. The supplied dashboard screenshot is included at its original resolution. The store-list and item-level screenshots were left out of public assets because they contain staff contact details and store-level stock data. No store-count, financial, performance or business-outcome claims were inferred from the captures. The application is represented through the real dashboard and a labelled Laravel → React + .NET → Azure redevelopment sequence.

Verification for this addition: production build (including lint and static generation) passed; Home, Work and Secure Solutions checked at 320, 390, 768, 1024 and 1440px with no horizontal overflow, one H1 and no broken loaded images. The featured card was exercised and opened the case study. All ten public routes passed HTTP and metadata checks. New desktop, mobile and full-page case-study screenshots are included. Live publication has not been performed.

## Innovatr addition — 5 October 2026

Added a featured Home card, Work entry and /work/innovatr case study, using Jesse’s supplied screenshot and explicit project description. The role is scoped to consulting, implementation of a few features, and stabilisation and polish of parts of an existing platform originally developed rapidly in Replit. The stack is React, PostgreSQL and Express. The screenshot is captioned as the public-facing site for project context; its marketing figures are not presented as Jesse’s outcomes, and no claim is made that Jesse built the entire platform or the pictured homepage. The featured layout now has a lead card followed by two balanced rows. Added the case study to the sitemap.

Verification for Innovatr: production build, lint and static generation passed. Home, Work and Innovatr checked at 320, 390, 768, 1024 and 1440px: no horizontal overflow, one H1 and no broken loaded images. Work-card navigation opened the case study; all eleven public routes passed HTTP and metadata checks. Desktop, mobile and full-page Innovatr previews and refreshed Home/Work screenshots are supplied. No live publication was performed.

## HOM addition — 5 October 2026

Added HOM to featured Home work, Work and /work/hom. The role is scoped to consulting, selected feature implementation, stabilisation and polish of an existing Replit-built web/mobile platform, with responsibility for deployment and publishing the mobile app to Apple App Store and Google Play. Generated a device presentation with the built-in image_gen tool using Jesse’s two supplied screenshots. The case study uses the concise caption “HOM on web and mobile” and links to the unmodified web/mobile captures; the asset’s generation method is documented here. The final PNG and exact prompt are provided in the outputs directory. A WebP version is stored in public/portfolio for the portfolio; its card omits redundant browser chrome. Jesse confirmed React for web, React Native for mobile, PostgreSQL and Express; Replit is described as the original development environment. No store listing links, security certifications, marketing metrics or ownership of the original product design are claimed.

HOM and Innovatr explicitly list “Development environment: Replit” in their project facts and describe the platforms as built in a Replit development environment. HOM’s confirmed stack is React, React Native, PostgreSQL and Express.

Verification for HOM and the Replit clarification: production build, lint and static generation passed. Home, Work and HOM were checked at 320, 390, 768, 1024 and 1440px; HOM and Innovatr were rechecked at those widths after adding the development-environment field. No horizontal overflow, duplicate H1 or broken loaded images was found. All twelve public routes passed HTTP and metadata checks. Work-card navigation to HOM was exercised. Updated desktop, mobile and full-page previews are supplied. Browser console contained no warnings or errors. No live publication was performed.

## Invequity addition — 5 October 2026

Added Invequity to featured Home work, the Websites and digital experiences group on Work, and /work/invequity, with a sitemap entry. Uses Jesse’s supplied homepage screenshot without modification. The role and copy are scoped to website creation using WordPress and Elementor. No additional functionality, commercial outcomes, hosting responsibility or live-site URL is inferred. Caption: “Invequity homepage.”

Verification for Invequity: production build, lint and static generation passed. Home, Work and Invequity were checked at 320, 390, 768, 1024 and 1440px: no horizontal overflow, one H1 per page and no broken loaded images. The Work card opened the case study. All thirteen public routes passed HTTP and metadata checks. Browser console showed no warnings or errors. Updated Home/Work grids and desktop, full-page and mobile Invequity previews are supplied. No live publication was performed.

## Bayede Travel addition — 5 October 2026

Added Bayede Travel to featured Home work, the Websites and digital experiences group on Work, and /work/bayede-travel, with a sitemap entry. Uses Jesse’s supplied homepage screenshot without modification. The role and copy are scoped to website creation using WordPress and Divi. No booking functionality, commercial outcomes, hosting responsibility or live-site URL is inferred. Caption: “Bayede Travel homepage.”

Verification for Bayede Travel: production build, lint and static generation passed. Home, Work and Bayede Travel were checked at 320, 390, 768, 1024 and 1440px: no horizontal overflow, one H1 per page and no broken loaded images. The Work card opened the case study. All fourteen public routes passed HTTP and metadata checks. Browser console showed no warnings or errors. Updated Home/Work grids and desktop, full-page and mobile Bayede Travel previews are supplied. No live publication was performed.

## Fuel Rebate Solution Management addition — 5 October 2026

Added the agricultural fuel-rebate and tax-return tracking project to Home, Work and /work/fuel-rebate-solution-management, with a sitemap entry. Jesse explicitly authorised this addition, superseding its omission from the original implementation brief. Stack: React, Vite and Firebase. The original supplied transactions screenshot is used and captioned as test-company data. Project scope follows Jesse’s description; purchase/dispense records, storage-unit grouping and search/date filters are visible in the supplied capture. No tax-compliance guarantee, automated filing, savings or business outcome is claimed.

Verification for Fuel Rebate Solution Management: production build, lint and static generation passed. Home, Work and the case study were checked at 320, 390, 768, 1024 and 1440px: no horizontal overflow, one H1 per page and no broken loaded images. The Work card opened the case study under the corrected name and route. All fifteen public routes passed HTTP and metadata checks. Browser console showed no warnings or errors. Updated Home/Work grids and desktop, full-page and mobile case previews are supplied. No live publication was performed.

## Ohana removal — 5 October 2026

Removed the Ohana project from the shared project list and sitemap at Jesse’s request. It no longer appears on Home or Work, and the former case-study URL returns 404.

Verification for Ohana removal: production build, lint and static generation passed. No Ohana text or links remain in Home or Work; both pages reflow without horizontal overflow at 390px and 1440px. The old case-study route returns 404. All fourteen remaining public routes pass HTTP/metadata checks, and the source/build content scan finds no Ohana references. Updated project-grid screenshots are supplied.

## Global Academy screenshot restoration — 5 October 2026

Restored the teal Global_Academy_Login.png capture selected by Jesse, unmodified, as public/portfolio/global-academy-overview.png. It appears on Home, Work and the Global Academy case study. The older LMS_1.png dashboard was rejected and its copy removed from public assets. Alt text and caption describe the student overview rather than a login screen.



Verification for the selected teal Global Academy capture: production build, lint and static generation passed. The correct overview image is present on Home, Work and the case study; those pages have no broken loaded images or horizontal overflow at 390px and 1440px. All fourteen public routes pass HTTP and metadata checks. Updated Home/Work grids and desktop, full-page and mobile case-study previews are supplied.

## Text separator cleanup — 5 October 2026

Removed decorative middle-dot, em-dash and slash separators from site copy, section labels, project metadata, technology lists and the home-link accessible label. Project type/role and technologies use commas; section numbers use spaces. Education dates read “2014 to 2018”. Contact success text uses two sentences. Removed the unused project-separator CSS rule.

Verification for text separator cleanup: production build, lint and static generation passed. Browser text checks found no em dashes, en dashes, middle dots or spaced slash separators on the fourteen public routes or the 404 page. Home, Work, About and Global Academy were checked at 390px and 1440px with no horizontal overflow. HTTP and metadata checks pass. Updated Home, Work and Global Academy screenshots are supplied.


## Contact configuration restoration, 5 October 2026

Compared the contact implementation with main at 06db212ab57763440fab287175811330c47b7f31. The original form used Web3Forms with NEXT_PUBLIC_WEB_FORMS_API_KEY; its SendGrid request was commented out. The revamp already uses the same provider and configuration name. The disabled form was caused by missing local configuration. Restored only the Web3Forms variable from Jesse’s supplied environment file into the ignored .env.local, without copying unrelated settings or exposing values. No transport rewrite was needed. Environment files are excluded from the patch and source archive.

Verification: all five mocked contact tests and the production build passed. Browser checks confirmed the configured form is enabled, empty submissions show all three required-field errors and focus the name field, and Contact reflows at desktop and mobile widths. After Jesse explicitly authorised one test enquiry, the browser submitted it to Web3Forms and displayed “Thanks. Your enquiry has been sent.” The form reset and submission was re-enabled. This confirms provider acceptance; inbox receipt awaits Jesse’s confirmation. No second enquiry was sent.


## Dependency update, 5 October 2026

Updated and pinned Next.js 16.3.8, React/React DOM 19.3.0, Sharp 0.35.5 and
SendGrid 8.1.6. Updated build tooling to Autoprefixer 10.6.1, PostCSS 8.5.29,
Tailwind 3.4.19, ESLint 9.39.5 and eslint-config-next 16.3.8, and refreshed
transitive dependencies in the lockfile. Tailwind stays on its latest 3.x patch
to preserve existing styles. Build-only packages are now devDependencies.
ESLint stays on 9 because the current Next.js React plugin declares support
through ESLint 9; its upstream deprecation warning remains. No peer-dependency
checks were bypassed. Node 24 LTS is recommended, with minimum Node 22.13.

Migrated the old ESLint configuration to eslint.config.mjs. The production
build explicitly runs lint with zero allowed warnings because Next.js 16 no
longer runs lint itself. Motion preferences use useSyncExternalStore for saved
preferences and reduced-motion subscriptions. Menu closing and page wipes use
router event subscriptions. Focus handling only reveals waiting content and
preserves completed animations. Added the documented smooth-scroll HTML
attribute and replaced deprecated image priority props with preload.
Next.js generated AGENTS.md and CLAUDE.md pointing future agent work at its
bundled, version-matched documentation.

Verification: clean npm ci, lint, five contact tests and the production build
passed. Browser review checked mobile menu dismissal, navigation, page wipes,
saved pause/resume preferences, contact validation and responsive pages.
All fourteen public routes pass HTTP and metadata checks; removed routes
remain 404. Built page scripts and optimised images load successfully.
The previous owner-authorised Web3Forms test remains recorded; no additional
live enquiry was sent for this dependency update.

Security status: npm audit --omit=dev reports zero vulnerabilities. The full
audit reports seven high findings propagated from one unpatched braces
advisory (GHSA-vfj7-8cjw-p6xm) in lint/Tailwind glob tooling. There is no patched
braces release at this time. These build tools use repository-owned patterns;
they are not used by the portfolio runtime to process visitor-supplied glob
patterns. Do not describe the entire dependency tree as vulnerability-free.
The audit reports are supplied as dependency-audit-all.json and
dependency-audit-runtime.json. Recheck for an upstream patch in future updates.

No deployment, push or additional live email was performed. The older GitHub
Pages workflow and production Vercel configuration still require release review.
