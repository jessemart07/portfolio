# Jesse Codes — Website Revamp Implementation Brief

Version: 1.0 · Prepared 21 September 2026

Website: https://www.jessecodes.co.za

Audience: Devin, Windsurf or another implementation agent working in the existing website repository.

## 1. Task and operating instructions

Implement a substantial refresh of Jesse Martin's existing portfolio website using this document as the product, content and design brief. Deliver a complete, responsive, reviewable implementation in the existing repository, with working navigation, honest project content and a verified enquiry route.

Read this document completely, then inspect the repository and its applicable instructions before changing code. Preserve the existing deployment approach and compatible framework conventions. Work on a branch. Do not publish to production as part of this brief unless Jesse separately authorises deployment.

The design decisions below are the recommended implementation defaults from the preceding review. Jesse requested a concrete implementation plan; the exact palette and layouts have not been separately approved as final designs. Use these defaults to build the first complete reviewable version without repeated aesthetic questions.

Make ordinary implementation decisions autonomously. Record assumptions and missing content in a private handover file. Only ask a question when a missing fact prevents a safe, truthful implementation. Missing client permissions or screenshots must not block the general site build: omit the affected public material and complete the remaining experience.

### Definition of success

A prospective client should quickly understand what Jesse builds, see credible evidence of relevant work, understand how an engagement works and have a clear way to enquire. The site should reflect an experienced independent software engineer with production responsibilities.

### Priority order

1. Accurate positioning and confidentiality.
2. Clear layout and meaningful project evidence.
3. Responsive, accessible interaction.
4. Reliable contact flow and technical fundamentals.
5. Restrained visual polish.

Do not spend the first iteration building decorative animation while the content and enquiry experience remain unfinished.

## 2. Owner and business context

- Public name: Jesse Martin.
- Existing brand: Jesse Codes. Retain this name; no company renaming is in scope.
- Location: Jeffreys Bay, South Africa; remote collaboration is relevant.
- Works as an independent software engineer/contractor and runs a software development business.
- Graduated in 2018. The rendered current site states 8+ years of experience and 20+ projects. These are existing self-reported website claims, not independently audited metrics. Prefer the stable phrase “Building software since 2018” rather than animated counters.
- Experience discussed includes React, Next.js, React Native/Expo, backend APIs, Node.js, C#/.NET, SQL databases, Azure, authentication, payment integrations, reporting, notifications and app releases. Do not turn this into unsupported claims of expertise in every technology.
- Some recent AI and IoT work consists of research, proposals and architecture planning. Do not describe those proposals as shipped products.
- Primary assumed audience: business owners, product teams and organisations seeking bespoke software or ongoing engineering support. Recruitment is secondary.
- Do not publish rates, budgets, client commercial arrangements or personal financial details.

### Positioning

An independent software engineer who helps businesses build, launch and maintain web applications, mobile apps and internal systems.

Tone: clear, personal, capable and practical. Write in first-person singular. Avoid pretending Jesse is a large agency. Avoid “world-class”, “10x”, “cutting-edge”, “passionate coder”, guaranteed outcomes and inflated AI claims.

## 3. Existing-site review and migration context

The live desktop site was inspected through its rendered interface, HTML and public JavaScript. The repository itself has not yet been inspected. Treat technical details below as observations to verify, not instructions to force a new architecture.

### Observed implementation and content

- Next.js application, apparently using the Pages Router, with utility classes, Framer Motion transitions and Swiper carousels.
- Existing routes: `/`, `/about`, `/services`, `/work`, `/contact`.
- Charcoal backgrounds with mint/teal and peach accents, decorative technology imagery and large cutout portraits.
- Icon-only side navigation with hover labels.
- Full-height page composition and animated page transitions.
- Projects and services are presented in carousels and mounted on the client.
- Current work includes Budget Buddy, Jesse and Kylie Music, Ohana User System, DISC Quiz and Global Academy LMS.
- Services include a duplicated Custom Development entry.
- Contact has name, email, subject and message fields. Email was rendered as a text input; field labels were placeholders.
- Initial HTML lacked titles and meta descriptions in the retrieved responses. Verify runtime metadata and repository implementation before fixing.
- Initial HTML showed six years of experience, while the browser displayed eight after client rendering. Avoid inconsistent server/client copy in the new build.

### Visually observed problems to resolve

- Generic hero message: “I Build Things For The Web”.
- Large portrait dominates the homepage without immediate project evidence.
- Small project screenshots inside wide containers; no substantial linked case studies in the inspected cards.
- Services show arrow affordances but clicking Design did not reveal detail or navigate.
- About portrait overlaps the skills panel and sits underneath the navigation.
- Faint body text and contact placeholders.
- Core content requires moving between separate screens and carousel slides.

### Keep and evolve

- Jesse Codes wordmark and personal identity.
- A restrained teal connection to the existing brand.
- Professional social links that remain relevant and valid.
- Genuine existing project information, subject to permission and accuracy checks.

### Replace

- Icon-only primary navigation.
- Project/service carousels.
- Full-screen route transition overlays.
- Decorative circuit backgrounds, spinning shapes and glowing cursor effects.
- Coffee counters and technology logos as the main evidence of capability.
- Repeated large portrait cutouts.

## 4. Confidentiality and project-publication rules

These rules override any suggestion elsewhere to include a named client project.

### Precision Coaching: excluded by default

Jesse explicitly said he does not think he has permission to post Precision Coaching. Do not include its name, logo, screenshots, links, feature descriptions attributable to that client or an anonymised case study in the public build. Do not put restricted content in HTML comments, client bundles, JSON, public assets, metadata, sitemap entries or social images.

General statements about Jesse's skills, such as payment integrations or notifications, may be used without identifying the engagement. Do not assume private sharing or anonymisation is permitted. Only add a case study later after Jesse provides explicit permission and an approved scope.

### Candidate project register — private planning only

| Candidate | Known context | Initial publication treatment |
| --- | --- | --- |
| Jesse and Kylie Music | Existing personal project: responsive site for a musical duo, gigs, social links and booking enquiries | Strong provisional public candidate; verify source assets and descriptions in repo. |
| Budget Buddy | Existing personal budget mock-up using React/Firebase | Public candidate; clearly label personal prototype, never imply a production financial product. |
| Global Academy LMS | Existing public portfolio description covers student accounts, results, attendance and reporting | Retain existing public factual scope if still appropriate; expanded screenshots and claims require confirmation. |
| Ohana User System | Existing public portfolio says Jesse built account registration, login, roles and profiles | Do not imply Jesse built the entire platform; retain only existing public scope pending confirmation. |
| DISC Quiz | Existing public portfolio: 24-question personality quiz and results | Optional older work; avoid overstating scientific or commercial outcomes. |
| Secure Solutions | Recent reporting/compliance workflows and access-related work | Permission unknown; hold out of public build until approved. |
| HOM | Recent Expo app and release preparation | Permission, exact contribution and release status require confirmation; hold out of public build. |
| PrimeCreativeIQ | Creative metadata platform planning/proposal | Hold out; do not imply delivered implementation or publish proposal details. |
| Panic button solution | Connectivity/firmware/security research and proposal | Hold out; no deployed-system claims. |

Existing publication is evidence of what is already public, not a blanket grant to reveal more. Do not unilaterally expand a client's disclosure scope.

### Public-content behaviour

- Keep private candidate notes out of browser-accessible data files.
- Only store publishable project data in the public site content module.
- Use two or three real, allowed projects rather than invented flagship work.
- If only two projects are ready, use two full-width or two-column cards with intentional spacing. Do not show empty slots or “permission pending” tiles.
- With no suitable new project images, retain suitable existing approved assets or use a typographic project card. Never generate fake product screens and present them as real work.
- Testimonials, client logo strips and results metrics remain absent until real, approved material is supplied.

## 5. Design direction and tokens

### Visual character

Light, calm and editorial, with strong typography, generous spacing, real product imagery and a monochrome portrait. It should feel like a capable independent engineer's professional practice.

Do not add a dark-mode toggle in this scope. Do not default to a generic dark SaaS template, neon gradients, glass panels, oversized rounded bento tiles or terminal/code-rain decoration.

### Colour tokens

| Token | Value | Intended use |
| --- | --- | --- |
| `background` | `#F7F7F4` | Main warm off-white canvas |
| `surface` | `#FFFFFF` | Cards, inputs and image surfaces |
| `text` | `#202224` | Headings and primary text |
| `text-muted` | `#62676B` | Supporting text; verify contrast in context |
| `accent` | `#286D68` | Primary buttons, links, active details |
| `accent-hover` | `#205A56` | Button/link hover |
| `accent-soft` | `#E5EFEC` | Small tinted areas and tags |
| `border` | `#DDE1DC` | Decorative dividers and card outlines |
| `input-border` | `#858D88` | Form boundaries; verify UI contrast |
| `error` | `#B42318` | Field errors with text/icon, never colour alone |

Use semantic CSS variables, not scattered hex values. White text is the default on solid teal buttons. Pale mint is a background, not small text on white. Check contrast on every actual pairing; token values alone do not establish accessibility.

### Typography

- Prefer the existing Sora font if already licensed/bundled and performing well. Use weights 400, 500 and 600; add 700 only if needed.
- Use a system sans-serif fallback and `font-display: swap` or the framework equivalent.
- Desktop hero heading: approximately 60–72px, line height 1.06–1.12, slightly tight tracking.
- Mobile hero heading: approximately 38–44px, fluid with viewport width; never overflow.
- Section headings: 32–44px desktop, 28–34px mobile.
- Body: 17–18px with line height 1.55–1.7; supporting text at least 14px.
- Reading columns: approximately 60–70 characters wide.
- No paragraphs in all caps; small uppercase labels may be used sparingly.

### Layout

- Container max width: 1200px, centred.
- Horizontal gutters: 20px small mobile, 24–32px tablet, 40–48px desktop.
- Section padding: approximately 88–112px desktop, 56–72px mobile.
- Spacing scale: 4, 8, 12, 16, 24, 32, 48, 64, 96px.
- Breakpoint guidance: under 768px stacked/mobile; 768–1023px tablet; 1024px and above desktop. Adapt to existing conventions when equivalent.
- Cards: subtle 1px border, radius around 12px, minimal shadow or none.
- Buttons: 48px minimum height, readable labels, modest corner radius.
- No fixed page heights that clip content or prevent normal scrolling.

### Motion

Use 150–220ms hover/focus transitions. A subtle short entrance animation is optional, but all content must remain available without animation or JavaScript. Respect `prefers-reduced-motion`. No page-covering transitions, parallax portraits, looping ornaments or scroll hijacking.

## 6. Portrait and asset handling

The owner supplied a new black-and-white photograph named `Jesse Martin Photo.png`: front-facing portrait in a black shirt against a light background. This replaces the old blazer portraits.

The implementation agent must obtain the actual attachment or a copy in the repository. A ChatGPT file attachment is not automatically accessible to Devin/Windsurf. Jesse should attach the photo with this brief or place it in the repo. Do not rely on a previous temporary workspace path.

### Required presentation

- One prominent portrait in the homepage hero, on the right at desktop sizes and after the introduction/CTAs on mobile.
- Desktop: approximately 38–42% of hero width; copy gets the larger share.
- Crop to head and upper torso, with breathing room above the head. Start with a 4:5 frame and top-centred focal point; refine visually using the real source.
- Preserve the light photographic background inside a clean image area. Avoid visible attempts to match it perfectly to the page if the tones differ; a deliberate frame is acceptable.
- No synthetic face changes, recolouring, glow, heavy drop shadow or repeated cutout portraits.
- Alt text: “Jesse Martin, independent software engineer”.
- Export optimised WebP/AVIF variants as appropriate, keeping an original outside the deployed asset set if needed. Supply intrinsic dimensions and responsive sizes.
- Load the above-the-fold portrait eagerly; do not preload every project image.
- Target a portrait resource around 100–250KB at normal desktop display size where visual quality permits; record actual delivered weight.

If unavailable, complete the hero as a polished text-led composition and record the missing asset. Do not use a stock person, broken URL, fabricated portrait or old portrait as an unmentioned substitute.

### Project imagery

- Aim for 3–5 meaningful images for a full case study when available; do not block a shorter honest case study on that target.
- One main overview; one core workflow; optional relevant details.
- Remove personal information, real customer data, credentials and internal URLs.
- Use real approved application captures. Device/browser framing should be simple and secondary.
- Maintain consistent image areas without shrinking tall screenshots into unreadable thumbnails. Prefer a deliberate cropped preview plus access to the full image.
- Preserve native project colours within screenshots; do not tint the products to match the portfolio.
- A zoom/lightbox is optional. If implemented, support keyboard access, Escape, focus return and meaningful alt text. Otherwise provide an accessible full-image link.

## 7. Information architecture and page specifications

Retain all five existing routes so old links continue to work. Add `/work/[slug]` for real approved case studies. Do not replace all routes with redirects to homepage anchors.

### Shared header

- Left: existing Jesse Codes wordmark, recoloured for light surfaces if the asset supports it.
- Visible navigation: Work, Services, About.
- Right: primary “Discuss a project” link to `/contact`.
- Home reachable from the logo; accessible name “Jesse Codes — home”.
- Sticky header is acceptable, around 76–84px desktop. Avoid covering anchor targets or keyboard focus.
- Mobile: logo and a clearly labelled menu button; reveal navigation with `aria-expanded`, appropriate focus behaviour and Escape dismissal. Links must also remain reachable if JavaScript is unavailable.
- Active route indication should not depend on colour alone.
- Remove the side navigation and glowing cursor.

### Homepage `/`

#### Section 1: Hero

Eyebrow: `Jesse Martin · Independent software engineer`

Heading: `Software built around your business.`

Supporting copy: `I help businesses build and improve web applications, mobile apps and internal systems—from the first requirements through to launch and ongoing development.`

Primary CTA: `Discuss a project` → `/contact`

Secondary CTA: `Explore my work` → `#selected-work`

Quiet supporting line: `Based in Jeffreys Bay, South Africa. Working remotely with businesses and product teams.`

Place the supplied portrait alongside the copy. Avoid a forced 100vh hero. At a typical 1440×900 desktop viewport, let the start of the next section become apparent where content permits. On mobile, keep the headline and primary CTA ahead of the photo.

#### Section 2: Selected work

ID: `selected-work`

Heading: `Selected work`

Intro: `A selection of applications and websites I’ve contributed to.`

Show two or three publishable projects, ordered by relevance and quality of evidence. Each card includes project title, explicit type/status, concise contribution summary, image if available and a descriptive link to a real case study. Include “View all work” → `/work`.

Do not put Precision Coaching or other restricted candidates here. Do not imply a personal prototype is client production work.

#### Section 3: Services

Heading: `What I can help you build`

Use the four service areas in section 8. Two-column grid desktop, one column mobile. Each item has a clear heading and useful sentence; decorative arrows only when the entire item has a working destination.

Link: `Explore services` → `/services`.

#### Section 4: Working together

Heading: `A clear path from requirements to release`

Four short steps: Understand, Plan, Build and review, Launch and improve. Explain them using the copy in section 8. Avoid promising fixed schedules or unlimited support.

#### Section 5: Short introduction

Heading: `Hi, I’m Jesse.`

Copy: `I’m an independent software engineer based in Jeffreys Bay. I’ve been building software since 2018, with experience across web applications, mobile apps and business systems. I enjoy turning complicated requirements into software that people can use with confidence.`

Link: `More about me` → `/about`.

No second large portrait required.

#### Section 6: Closing CTA

Heading: `Have a project in mind?`

Copy: `Tell me what you’re building, what needs improving and where you need support.`

CTA: `Let’s talk` → `/contact`.

### Work index `/work`

Heading: `Selected projects and contributions`

Intro: `A closer look at the problems, decisions and implementation behind my work.`

Use a responsive grid of approved cards, two columns desktop and one mobile. Three columns only if screenshots remain legible. No carousel. No search/filter controls for a small list.

Cards should use meaningful type labels such as `Personal prototype`, `Website` or `Business application`. Clearly distinguish Jesse's contribution from the whole product.

#### Portfolio work groups

Keep all work under the Jesse Codes identity, but organise projects by the problem solved and the nature of Jesse's contribution rather than presenting every project as the same kind of software engagement. Use these three groups throughout the Work page, homepage project selection and project metadata:

1. **Websites and digital experiences** — public-facing websites, WordPress work and responsive frontend experiences. Initial candidates include Tricolt, Envequity, Bayede Travel and Jesse and Kylie Music, subject to permission and factual verification.
2. **Applications and business systems** — web or mobile applications, internal tools, APIs, data workflows and integrations. Initial candidates include FRSM Fuel Management Services, Secure Solutions, Global Academy LMS, Ohana User System and Budget Buddy. Personal prototypes must be labelled as such; client work must not imply ownership of the entire product unless confirmed.
3. **Engineering delivery, QA and consulting** — quality assurance, deployment, release preparation, technical support and engineering advice where Jesse did not primarily own product development. Initial candidates include Innovatr and HOM.

The groups are complementary capabilities, not separate brands. The homepage should show one representative project from each group where approved. The Work page should use visible grouped sections instead of filters while the public list remains small. Consider category routes or filters only once there are enough approved projects for each group to stand alone, approximately eight to ten total projects.

Every project card must expose both a type and a role, for example `Website · WordPress development`, `Business application · Engineering contribution`, or `Mobile application · QA and release support`. Role wording must state what Jesse actually did: built, designed, maintained, tested, deployed, advised or supported. Do not use a generic `Developer` label when the engagement was primarily QA, deployment or consulting.

The service structure should reflect the same range without claiming that every project represents every service:

- **Websites and digital experiences** — public-facing websites and content-managed experiences.
- **Web applications and business systems** — applications, internal tools and workflow software.
- **APIs, integrations and ongoing development** — backend connections, feature work and support for existing products.
- **QA, deployment and technical support** — testing, release preparation, deployment and practical technical consulting.

Use category-specific emphasis in case studies. Website studies should explain audience, content structure and implementation; application studies should explain workflows, data, integrations and Jesse's technical contribution; QA or consulting studies should explain project stage, responsibilities, testing, release or technical decisions, and boundaries of ownership.

### Case study `/work/[slug]`

Build one reusable template with these sections, omitting unsupported sections rather than filling them with invented content:

1. Breadcrumb back to Work.
2. Project name and factual one-sentence summary.
3. Role, project type/status and concise technology list.
4. Primary screenshot if available.
5. The problem: who needed what.
6. My contribution: exactly what Jesse designed/built/maintained.
7. Implementation: 2–4 meaningful decisions grounded in available evidence.
8. Screenshots with captions explaining workflows or features.
9. Result: verified qualitative or quantitative outcome. If no outcome evidence exists, use “What this project includes” to describe confirmed functionality.
10. Relevant project link only if checked and authorised; then an enquiry CTA and next-project/back-to-work link.

Never claim uptime, conversion uplift, user volume, revenue impact, improved speed or sole ownership without evidence. Case studies may be concise when sources are limited.

### About `/about`

Heading: `An engineer you can work with directly.`

Use the homepage introduction as the starting point, expanded with factual experience and an approachable explanation of working with Jesse.

Include:

- Building software since 2018.
- Work spanning interfaces, APIs, data and release/support responsibilities.
- Clear communication, practical scoping and regular review as the proposed engagement approach.
- Education already shown on the current site: BCom IT Management, University of Johannesburg, 2014–2018. Verify exact credential wording against repository/current owner-approved content before publishing it.
- Compact text-based capability groups; no proficiency percentages, arbitrary skill scores or icon wall.
- CTA to discuss a project.

Do not add personal family information, hobbies or faith statements without a separate request. Do not imply certifications that have not been supplied.

### Services `/services`

Heading: `Practical software development for your business.`

Use four expanded service blocks, each with example deliverables and a “Discuss this service” link to Contact. A query parameter for service preselection is optional, but must map to a fixed allowed list.

Include a short engagement section covering new builds, improvements to existing products and ongoing engineering support. Scope and availability are discussed individually. Do not publish prices or service-level guarantees.

### Contact `/contact`

Heading: `Let’s talk about your project.`

Copy: `Tell me a little about your business, what you need and any timing you have in mind. It’s fine if you’re still working out the details.`

Form fields:

| Field | Required | Behaviour |
| --- | --- | --- |
| Name | Yes | Visible label; text input; name autocomplete |
| Email | Yes | Visible label; email input; email autocomplete |
| Company | No | Organisation autocomplete |
| What do you need help with? | No | Select: Web application, Mobile application, APIs and integrations, Existing product/support, Not sure yet |
| Project details | Yes | Visible label; textarea; brief hint asking about goals and timing |

Button: `Send enquiry`.

Do not require a budget, phone number, account creation or file attachment.

Preserve the current working provider/backend where practical. Inspect existing integration before making changes; never expose new secrets in client code. Update payload mapping if existing backend expects a subject field. Validate server-side where supported, set reasonable input lengths, prevent duplicate submits, maintain spam protection and handle timeouts/failures honestly.

Success copy, only after a confirmed provider/backend success: `Thanks—your enquiry has been sent.`

Failure copy: `Your enquiry couldn’t be sent. Please try again, or use the email link below.` Only display that email alternative if a verified address has been provided.

Do not invent Jesse's email address from the domain. If no form integration or verified contact destination is available, implement the UI in preview and clearly flag contact wiring as a release blocker. Never fake a successful submission or ship a dead primary CTA.

Test with mocks/sandbox/test mode. Do not send live test messages without explicit authorisation. Do not claim end-to-end delivery was verified if only a mocked response was tested.

### Footer

Jesse Codes, current year, a short professional description and relevant verified links. Prioritise GitHub and LinkedIn. Existing CodeSandbox and Facebook links are optional if still relevant; do not keep them just to fill space. Include a privacy link if an applicable policy exists or an owner-reviewed policy is added for the real contact implementation. Do not generate legal assurances unsupported by actual processing.

## 8. Approved draft service and process copy

This copy is proposed for implementation review. It makes general capability statements and does not disclose specific client engagements.

### Web applications and business systems

`Custom dashboards, portals and internal tools built around the way your business works.`

Examples: reporting workflows, administrative interfaces, account/role management and operational tools. Avoid claiming every example is a product already delivered by Jesse unless verified.

### Mobile applications

`Mobile app development with React Native and Expo, including backend integration and support through the release process.`

Examples: app interfaces, notifications, API integration and store submission preparation. Never promise store approval.

### APIs and integrations

`Connect your application to the services and data it needs, with clear interfaces and considered access controls.`

Examples: authentication, payments, database-backed APIs, notifications and external services. No blanket “unhackable” or compliance claims.

### Ongoing product development

`Improve existing software, resolve issues and develop the next set of features as your needs evolve.`

Examples: feature work, maintenance, debugging and release support. Availability and response times are agreed per engagement.

### Working process

- **Understand:** `We start with the people using the software, the problem to solve and the constraints that matter.`
- **Plan:** `I help shape the scope, technical approach and priorities so the next steps are clear.`
- **Build and review:** `Work is developed in manageable increments, with opportunities to review progress and refine details.`
- **Launch and improve:** `I support the release process and can continue helping as the product develops.`

AI-assisted tooling may be mentioned briefly as part of implementation, review and testing practices if Jesse wants it included. Do not make AI the headline, promise autonomous delivery or publish unsupported time/cost savings.

## 9. Content implementation and maintainability

Use the current repository's content patterns if suitable. A small typed data module or Markdown/MDX case studies is enough; no CMS migration is required.

Suggested publishable project model:

```ts
type Project = {
  slug: string;
  title: string;
  summary: string;
  category: string;
  statusLabel: string;
  role: string;
  featured: boolean;
  technologies: string[];
  cover?: { src: string; alt: string; caption?: string };
  gallery?: { src: string; alt: string; caption?: string }[];
  problem?: string;
  contribution: string[];
  implementation?: string[];
  result?: string;
  externalUrl?: string;
};
```

This model must contain only approved public content. Do not store confidential candidates in the same client-imported module behind `published: false`; excluded data and assets should not enter the public build at all.

Keep project order, service copy and social links in easily maintained locations. Use reusable Header, Footer, Container, Button, ProjectCard, ProjectGallery and CaseStudyLayout components where this fits the existing codebase. Avoid unnecessary design-system infrastructure.

## 10. Technical requirements

### Repository discovery

Before edits, identify framework/router version, package manager and lockfile, styling setup, routing, content source, image pipeline, form integration, environment configuration, deployment output and existing checks. Read README and AGENTS instructions when present.

Preserve compatible installed versions. Do not upgrade the framework, replace the router, change hosting or introduce a new backend solely to perform this redesign. If the current site is statically exported, new routes and form behaviour must remain compatible with that deployment.

### Rendering and routes

- Render primary copy, navigation, project lists and services into the initial HTML.
- Avoid hiding content until mount or animation completion.
- Eliminate hydration mismatches, including date-derived experience copy.
- Existing URLs must load directly and survive refresh.
- Generate only actual public case-study routes. Unknown slugs return a useful 404.
- Keep a clear 404 page with a Home/Work route back.

### Accessibility

- Target WCAG 2.2 AA practices; do not claim formal certification.
- One H1 per page, logical heading order, semantic main/nav/footer and a skip link.
- Keyboard access, visible focus, meaningful link names and no hover-only information.
- At least 44×44px practical touch targets for primary controls.
- Body text contrast at least 4.5:1; large text and required UI boundaries at least 3:1 as applicable.
- Form labels remain visible; required fields and errors are programmatically associated. Submission state is announced appropriately.
- Respect reduced motion; no auto-advancing content.
- At 200% zoom, content remains readable and operable. Check reflow at narrow widths.

### Performance and metadata

- Optimise images and reserve their dimensions to prevent layout shifts.
- Lazy-load below-the-fold images, not the hero portrait.
- Remove unused carousel/animation dependencies only after verifying no remaining references.
- Avoid unnecessary third-party scripts, new tracking and heavy UI libraries.
- Descriptive title, meta description, canonical URL and Open Graph metadata per route.
- Suggested homepage title: `Jesse Martin | Web & Mobile Software Engineer`.
- Suggested homepage description: `Independent software engineer in South Africa building web applications, mobile apps and business systems. Explore my work and discuss your project.`
- Verify the configured canonical host before setting global URLs; preserve the existing preferred host.
- Create a restrained branded social image if needed using existing assets; no restricted client images or invented credentials.
- Update sitemap and robots behaviour appropriately; omit unpublished projects. Keep preview/staging indexing disabled without carrying that setting into production.
- Structured data is optional and must contain only factual public fields. No fabricated reviews, awards or ratings.

Target a mobile Lighthouse performance score of 90+ on a production preview where practical and 95+ accessibility, while recognising environment variability. Treat these as diagnostic targets, not guarantees or reasons for endless polishing. Record test context and prioritise actual content, keyboard and layout defects over score chasing.

## 11. Implementation sequence

### Phase 1 — Audit and content inventory

1. Inspect repository and existing deployment/form behaviour.
2. Inventory current images, logo, fonts, project content and social destinations.
3. Separate approved public material from candidates requiring permission.
4. Classify each potential project as `Websites and digital experiences`, `Applications and business systems`, or `Engineering delivery, QA and consulting`.
5. Record Jesse's actual role for each project using specific terms such as built, designed, maintained, tested, deployed, advised or supported.
6. Locate the new portrait or record its absence.
7. Create a concise private implementation checklist. Continue with the safe defaults in this brief.

Deliverable: repository-specific implementation approach and factual content inventory.

### Phase 2 — Visual foundation and site shell

1. Add semantic design tokens and typography.
2. Build responsive header/mobile navigation/footer.
3. Establish container widths, spacing, buttons and focus styles.
4. Remove old full-screen overlays, side navigation and decorative effects.

Deliverable: functioning light-theme site shell at desktop and mobile widths.

### Phase 3 — Homepage and core pages

1. Implement hero with the new portrait if supplied.
2. Build selected work, services, process, introduction and final CTA.
3. Present the three work groups clearly without splitting the Jesse Codes identity: websites and digital experiences, applications and business systems, and engineering delivery/QA/consulting.
4. Implement Work, About, Services and Contact routes.
5. Preserve enquiry integration or document a concrete release blocker.

Deliverable: complete navigable site, without fake content or dead controls.

### Phase 4 — Case studies and asset preparation

1. Produce accurate case studies from available approved sources, using a website, application or QA/consulting emphasis as appropriate.
2. Add explicit project type and role labels to every public card and case study.
3. Add real screenshots and captions where allowed.
4. Ensure restricted names/data/assets are absent from public output.
5. Optimise images and metadata.

Deliverable: honest project evidence, even if initial project selection is smaller than desired.

### Phase 5 — Verification and handover

1. Run existing required lint/type/build checks.
2. Review real rendered pages at representative widths.
3. Test navigation, mobile menu, direct route loading, keyboard behaviour and form states.
4. Correct concrete issues and capture representative screenshots.
5. Provide a reviewable branch/PR or patch, concise change summary and any release blockers. Do not deploy automatically.

## 12. Acceptance checklist

### Content and confidentiality

- [ ] Jesse Codes identity retained; first-person voice consistent.
- [ ] Hero explains web, mobile and business-system work.
- [ ] Precision Coaching absent from public content, metadata, images and built assets.
- [ ] Other unapproved recent clients omitted.
- [ ] No invented testimonials, metrics, permissions or shipped-project claims.
- [ ] Personal prototypes clearly labelled.
- [ ] Each case study accurately states Jesse's contribution.
- [ ] No personal customer data in screenshots.
- [ ] No TODO, lorem ipsum, fake links or internal permission notes visible publicly.

### Visual and responsive

- [ ] Off-white/charcoal/teal system is consistent.
- [ ] New portrait used correctly if available; missing asset disclosed in handover otherwise.
- [ ] Headline/copy remains dominant over the portrait.
- [ ] Project imagery is legible and intentionally cropped.
- [ ] No side navigation, carousels, coffee counters or technology-background effects remain.
- [ ] No clipping, overlapping navigation or horizontal page scroll at 360, 390, 768, 1024 and 1440px viewport widths.
- [ ] Long project titles, error messages and mobile menu fit correctly.
- [ ] Reduced-motion and 200% zoom checks pass.

### Functional

- [ ] All five existing routes work via direct navigation and refresh.
- [ ] Every public project card opens an actual case study or has no misleading link affordance.
- [ ] Primary and secondary CTAs resolve correctly.
- [ ] Mobile navigation opens, closes and works by keyboard.
- [ ] Contact has visible labels, validation and truthful success/error/loading states.
- [ ] No secrets in client code or build output.
- [ ] No live test messages sent without approval.
- [ ] Project content is present in initial HTML.
- [ ] No hydration errors or uncaught console errors attributable to the changes.
- [ ] Correct titles, descriptions, canonical URLs and public route sitemap.
- [ ] Production build and repository-required checks pass, or pre-existing failures are specifically documented.

### Evidence to return

- A brief summary of what changed and why.
- Changed-file list or PR link.
- Desktop homepage, mobile homepage, Work/case study and Contact screenshots.
- Commands/checks actually run and their results.
- Explicit distinction between mocked form verification and real provider delivery.
- Missing owner inputs and remaining release blockers, if any.

Do not report a check as passed if it was not executed. Stop optional testing once the specific risks and required gates are covered.

## 13. Owner inputs and safe defaults

| Input | Needed for | Safe default while unavailable |
| --- | --- | --- |
| Existing repository access | Applying the implementation | Cannot modify the actual project without access; prepare implementation against supplied code only. |
| New portrait file | Updated hero photo | Finish text-led hero; record missing photo. |
| Client publication permissions | Adding recent named case studies | Exclude those projects completely. |
| Approved project screenshots | Stronger visual case studies | Use existing permitted assets or honest text-led cards. |
| Confirmed contribution/outcome details | Detailed case studies | Use only existing verified descriptions; omit speculative details. |
| Verified email/form provider config | Real enquiries | Preserve working integration; otherwise mark contact wiring as a production release blocker. |
| Testimonials | Additional credibility | Omit section. |
| Deployment authorisation | Production release | Deliver branch/preview for review; do not publish. |

## 14. Out of scope

- Renaming the business or creating an unrelated brand.
- Framework/router/hosting migration without a concrete technical necessity.
- CMS, blog, admin dashboard, authentication or booking system.
- New analytics/tracking or marketing automation.
- Fabricated product imagery, client endorsements or case-study outcomes.
- Exposing confidential client information or fetching private project data without authorisation.
- Publishing the redesign to production without a separate instruction.

## 15. Suggested instruction to accompany this file

> Implement the attached Jesse Codes website revamp brief in this repository. Read the full brief and repository instructions first, then work through the phases autonomously. Preserve the existing stack and deployment compatibility. Use the supplied portrait. Exclude Precision Coaching and any other unapproved client work from all public output. Use the brief's design and copy defaults, make ordinary implementation decisions yourself, and record missing assets or facts without inventing them. Deliver a polished responsive implementation, verification results and a reviewable branch/PR. Do not deploy to production.

