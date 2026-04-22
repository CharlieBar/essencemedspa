# Facial Treatments Topical Authority — Design Spec

_Created: 2026-04-21 · Updated: 2026-04-21 (scope expanded to full build) · Project: Essence Medspa V7a · Status: Design approved, pending implementation plan_

---

## 1. Goal

Establish Essence Medspa as Google's top topical authority for facial treatments in Chicago by building a structured pillar/cluster content graph on the Facial Treatments hub, **and publish the entire graph to production**. Deliverables: a comprehensive strategy document, four production-ready load-bearing pages (one hub mega-pillar + three sub-pillars), and all 75–90 cluster articles written as production MDX, wired into the site, and deployed via the existing Netlify pipeline.

**Scope expansion note (2026-04-21):** Original design (v1) delivered briefs only for the 75–90 cluster articles. User expanded scope to full-build: all articles written, all supporting pages built, everything published. See §5 and §6 for updated deliverables and execution model.

---

## 2. Context

**Current state (as of 2026-04-21):**

- Site: Next.js 14.2.18, 133 static pages, live at [essencemedspa.netlify.app](https://essencemedspa.netlify.app/)
- Facial Treatments hub exists at `/services/facial-treatments` with `src/content/hubs/facial-treatments.ts` as the content source
- 20+ facial services already live under `/services/[slug]` (acne-facial, brightening-facial, custom-facial, deep-pore-cleansing-facial, signature-facelift-facial, firming-facial, collagen-induction-therapy, oxygen-facial, hydrofacial, red-carpet-collagen-facial, back-facial, back-microdermabrasion, etc.)
- 3 concern pages relevant to facials already exist: `/concerns/acne-texture`, `/concerns/dark-spots`, `/concerns/dull-tired-skin`, `/concerns/wrinkles-fine-lines`
- 10 facial-relevant articles already published under `/blog/[slug]`: best-facial-for-acne, custom-facial-chicago, chemical-peel-vs-microdermabrasion, hydrofacial-chicago, radiofrequency-facial-chicago, vampire-facial-benefits-prp, what-is-a-back-facial, chicago-winter-skincare-tips, seasonal-skincare-chicago, benefits-of-vitamin-c-skin, foods-for-glowing-skin
- Content/design separation rule is strictly enforced: all copy lives in `src/content/`

**Problem to solve:**

Essence ranks for some long-tail terms but has no authoritative pillar content and no structured cluster graph. Individual service pages compete without contextual support; articles are disconnected from services; concern pages don't feed educational traffic into treatment pages. Google has no strong signal that Essence is *the* Chicago authority on facials.

**Why topical authority:**

Google's Helpful Content and E-E-A-T systems reward sites with dense, interconnected coverage of a topic. Studies (Koray Tuğberk, Cyrus Shepard, Semrush research) consistently show the inflection point for "authority" treatment is ~25–30 high-quality pieces per cluster with a pillar architecture above them. Essence has the service inventory (20+ facials) and existing article head start (10 pieces) to hit that threshold on one hub within a realistic execution window.

---

## 3. Scope

### In scope

- Keyword research and topical map for the **Facial Treatments hub only**
- One hub mega-pillar page upgrade: `/services/facial-treatments`
- Three new sub-pillar pages:
  - `/services/facial-treatments/anti-aging`
  - `/services/facial-treatments/acne-clarity`
  - `/services/facial-treatments/glow-brightening`
- **All 75–90 cluster articles written as production MDX under `src/content/articles/`** (10 existing audited + refreshed where needed; 65–80 net-new drafted, reviewed, published)
- Internal-linking graph — built into the actual MDX, not just specified
- Audit + refresh of the 10 existing facial-relevant articles (actual edits, not just recommendations)
- `npm run build` passing end-to-end with ~90 new pages in the sitemap
- Deployment via existing Netlify pipeline (`git push main` → auto-deploy)

### Out of scope (explicitly)

- Other hubs: Advanced Aesthetics, Massage, Body Treatments, Upgrades
- Off-page SEO: backlinks, PR, citations, Google Business Profile
- Technical SEO audits (Core Web Vitals, schema expansion) beyond what new pages require
- Paid, email, or social strategy
- Copyediting or rewriting any existing service pages
- Generating new images (articles reuse existing image library per `IMAGE_MANIFEST.md`, or use the shared category OG images)

---

## 4. Architecture — The Topical Graph

```
Facial Treatments Hub (mega-pillar)
  /services/facial-treatments
  — head terms: "facial treatments Chicago", "best facials Chicago"
  — 3,000–4,000 words · links down to 3 sub-pillars + all 20+ facial services
  │
  ├── Sub-pillar 1: Anti-Aging Facials
  │   /services/facial-treatments/anti-aging
  │   — head: "anti-aging facial Chicago", "best anti-aging facials Chicago"
  │   — absorbs: wrinkles, fine lines, loss of firmness, collagen loss, skin laxity
  │   — feeds services: collagen-induction-therapy, firming-facial, face-lifting-gua-sha,
  │                     essence-signature-facelift-facial, red-carpet-collagen-facial,
  │                     4d-face-lifting-massage, collagen-eye-contour
  │   — feeds concerns: /concerns/wrinkles-fine-lines, /concerns/hollow-under-eyes
  │   — ~25 cluster articles
  │
  ├── Sub-pillar 2: Acne & Clarity Facials
  │   /services/facial-treatments/acne-clarity
  │   — head: "acne facial Chicago", "facial for acne-prone skin Chicago"
  │   — absorbs: acne, congestion, blackheads, oily skin, acne scarring, breakouts
  │   — feeds services: acne-facial, deep-pore-cleansing-facial, custom-facial,
  │                     custom-peel, back-facial, back-microdermabrasion,
  │                     back-stimulator-peel
  │   — feeds concerns: /concerns/acne-texture
  │   — ~25 cluster articles
  │
  └── Sub-pillar 3: Glow & Brightening Facials
      /services/facial-treatments/glow-brightening
      — head: "brightening facial Chicago", "glow facial Chicago", "vitamin C facial Chicago"
      — absorbs: dull skin, hyperpigmentation, dark spots, uneven tone, melasma, post-inflammatory marks
      — feeds services: brightening-facial, oxygen-facial, hydrofacial,
                        glutathione-brightening, custom-peel, essence-signature-facelift-peel
      — feeds concerns: /concerns/dull-tired-skin, /concerns/dark-spots
      — ~25 cluster articles
```

### Linking rules

- Every cluster article links **up** to its sub-pillar (once in body, once in closing CTA)
- Every cluster article links **sideways** to 2–3 sibling cluster articles (contextually, not forced)
- Every cluster article links **down** to ≥ 1 service page when treatment-relevant
- Every cluster article links **laterally** to 1 concern page when condition-relevant
- Sub-pillars link **up** to the hub and **down** to every cluster + service in their branch
- Hub mega-pillar links to all 3 sub-pillars, all 20+ facial services, and 5–8 "best of" cluster articles
- Breadcrumb schema: `Home › Services › Facial Treatments › [Sub-pillar] › [Article]`

### Intent separation (avoiding cannibalization)

| Page type | Intent | CTA tone | Example target |
|---|---|---|---|
| `/services/[slug]` | Transactional | "Book now" | "acne facial" (direct service purchase) |
| `/concerns/[slug]` | Transactional (problem-led) | "Find your treatment" | "how to treat acne at a medspa" |
| Sub-pillar | Educational with commercial intent | "Learn about X / explore treatments" | "what are anti-aging facials" |
| Cluster article | Informational | "Read related / consider X service" | "at what age should I get my first facial" |

---

## 5. Deliverables

### Deliverable 1 — Strategy Document

**File:** `docs/seo/facial-treatments-topical-authority.md`
**Size:** ~8,000–12,000 words
**Sections:**

1. **Executive summary** — thesis, graph diagram, 6-month ranking hypothesis
2. **Keyword research per sub-pillar** — for each of 3 sub-pillars:
   - 1 head term (high volume, high competition)
   - 5–8 mid-tail terms (modifiers: Chicago, best, cost, near me, vs)
   - 50+ long-tail terms grouped by intent (informational / commercial / transactional)
   - Volume + difficulty estimates derived from SERP inspection, autocomplete, People Also Ask, Google Trends, and forum frequency — each keyword tagged with confidence level (high/medium/low) since no paid tools are in scope
3. **Topical map** — full URL list with per-entry: target keyword, title tag (≤ 60 chars), meta description (≤ 155 chars), H1, H2 outline, word-count target, primary + secondary keywords, 3–5 suggested FAQs, internal link targets, priority tier (P0/P1/P2)
4. **Existing-content audit** — each of the 10 facial-relevant articles gets a verdict: `keep as-is` / `refresh` / `merge` / `redirect` / `expand` with specific notes and new-title suggestions where applicable
5. **Internal-linking graph** — table showing every planned URL and its inbound + outbound links (for orphan detection)
6. **Phasing plan** — execution waves:
   - Wave 1: 4 pillar/sub-pillar pages (this spec's production deliverable)
   - Wave 2: P0 cluster articles (highest-intent, most-searched) — ~20 articles
   - Wave 3: P1 cluster articles — ~30 articles
   - Wave 4: P2 cluster articles — ~25 articles
7. **Schema strategy** — JSON-LD per page type:
   - Hub: `MedicalWebPage` + `BreadcrumbList` + `ItemList` (services)
   - Sub-pillar: `MedicalWebPage` + `BreadcrumbList` + `FAQPage`
   - Cluster article: `Article` + `BreadcrumbList` + optional `FAQPage`
   - Service page: existing `Service` schema preserved
8. **Measurement plan** — what to track, where, at what cadence:
   - GSC impressions/clicks per target keyword (weekly)
   - Ranking baseline for 10 tracked terms before launch
   - Internal link count per URL as topical-trust-flow proxy (monthly)
   - Organic booking conversions (when conversion tracking is live)

### Deliverable 2 — Hub Mega-Pillar Page

**File:** `src/content/hubs/facial-treatments.ts` (upgrade existing)
**Template:** `src/app/services/facial-treatments/page.tsx` (minor changes only if current template can't render pillar-length content)

**Spec:**
- 3,000–4,000 words in structured content sections
- Full metadata block: title, description, canonical, OG image, OG title/description
- JSON-LD: `MedicalWebPage` + `BreadcrumbList` + `ItemList` of services
- Structure:
  1. Hero intro (150–200 words) — "what is a medical-grade facial and why it's different"
  2. What makes Essence's approach different (250–300 words) — credentials, protocols, ingredients
  3. Three sub-pillar cards — visual links down to each sub-pillar
  4. Full service matrix — 20+ facials with 2-sentence descriptions + service page links
  5. Chicago & Jefferson Park local signals (200–300 words) — neighborhood expertise, client base
  6. Team expertise (150 words) — link to `/about`
  7. FAQ block — 10+ questions with schema-ready markup
  8. Closing CTA — book consultation
- Internal links out: 3 sub-pillars + 20+ services + 3 concerns + 5–8 hero cluster articles
- Voice: dark luxury editorial (per design system)

### Deliverable 3 — Three Sub-Pillar Pages

**Files:**
- `src/content/pages/sub-pillar-anti-aging.ts`
- `src/content/pages/sub-pillar-acne-clarity.ts`
- `src/content/pages/sub-pillar-glow-brightening.ts`

**Routing:** Decision deferred to implementation plan. Two options:
- **Option A:** Static routes at `src/app/services/facial-treatments/anti-aging/page.tsx` etc. — simpler, 3 files
- **Option B:** Dynamic route `src/app/services/facial-treatments/[subPillar]/page.tsx` — DRY, generateStaticParams over 3 slugs

The plan phase picks one after inspecting how `/services/facial-treatments/` currently routes and whether there's conflict with the `[slug]` service route at a different level.

**Per-page spec:**
- 2,500–3,500 words
- Full metadata, JSON-LD (`MedicalWebPage` + `BreadcrumbList` + `FAQPage`), breadcrumb
- Structure:
  1. Problem definition (200–300 words) — what the condition/goal actually is, in layman's terms
  2. Science of why it happens (300–400 words) — dermatological mechanism, aging process, sebum pathways, melanin biology (scaled to topic)
  3. Treatment landscape (400–500 words) — what works, what doesn't, myths, what the evidence actually says
  4. Essence's approach (300–400 words) — which treatments, which protocols, which team members specialize
  5. Service cards — 6–8 relevant facial services with links
  6. Related concern pages — direct links to concern pages feeding into this sub-pillar
  7. Deep-dive cluster-article cards — top 8–10 articles in this cluster
  8. FAQ block — 15+ questions
  9. Closing CTA — book consultation
- Voice: dark luxury editorial, authoritative but warm (reference `src/content/articles/` for tonal examples)

### Deliverable 4 — 75–90 Cluster Articles (production MDX, published)

Each article is written as a full MDX file under `src/content/articles/[slug].mdx`, matching the existing enriched-article format (frontmatter + body) used by the 25 current articles. Articles are generated in waves, reviewed by Islam at wave checkpoints, committed to git, and deployed via Netlify auto-deploy.

**Per-article production spec:**
- 1,200–2,500 words (varies by intent: informational longer, commercial shorter)
- Full MDX frontmatter matching existing article schema: title, description, category, articleCategory, publishDate, author, readingTime, image, imageAlt, keywords[], schema fields
- H1 + 6–10 H2 sections + FAQ block (3–5 Qs) + CTA
- Internal links wired per the graph (up / sideways / down / lateral — per §4 linking rules)
- JSON-LD: `Article` + `BreadcrumbList` + optional `FAQPage`
- Essence voice (dark luxury editorial), no generic filler, no fabricated service claims
- Image: reuse from `public/images/blog/` or `public/images/categories/` — no new image generation in this scope
- `npm run build` must pass after each batch

**Brief template (used internally as input to the writer subagent):**

```markdown
### [Article Title]

- **URL:** /blog/[slug]
- **Priority:** P0 | P1 | P2
- **Sub-pillar:** anti-aging | acne-clarity | glow-brightening
- **Primary keyword:** [keyword] (est. vol: X, difficulty: Y, confidence: high|med|low)
- **Secondary keywords:** [3–5 related terms]
- **Intent:** informational | commercial | transactional
- **Title tag:** (≤ 60 chars)
- **Meta description:** (≤ 155 chars)
- **H1:** (can differ from title tag)
- **H2 outline:** (6–10 H2s)
- **Word count target:** 1,200–2,500
- **Suggested FAQs:** 3–5
- **Internal links out:**
  - Up: [sub-pillar URL]
  - Down: [service URLs]
  - Sideways: [2–3 sibling articles]
  - Lateral: [concern URL if applicable]
- **Image asset:** [existing image path]
- **Writer notes:** any Essence-specific angles, ingredient callouts, or protocol details to include
```

**Waves / execution reality:**

Writing 75–90 articles at 1,200–2,500 words each = ~120k–200k words of net-new production content. This cannot execute in a single session and should not be attempted — context would compact mid-wave and quality would degrade. The implementation plan will decompose this into **4 production waves**, each a separate session with its own plan + approval cycle:

- **Wave 0 (this plan's primary output):** Strategy doc + 4 pillar/sub-pillar pages + all 75–90 briefs + existing-content audit (+ deploy)
- **Wave 1:** ~20 P0 articles (highest-intent, most-searched) — session of its own
- **Wave 2:** ~25 P1 articles — session of its own
- **Wave 3:** ~25 P1 articles — session of its own
- **Wave 4:** ~20 P2 articles — session of its own

Each wave: Islam reviews a sample of 2–3 articles before the rest are committed. Each wave ends with `npm run build` passing and `git push main` triggering Netlify deploy.

---

## 6. Approach / Execution Model

Three phases, each optimized for the right model:

**Phase 1 — Research (Haiku subagents + Opus orchestration)**
- SERP inspection for every planned keyword
- Competitor analysis: top 10 Chicago medspas + national authorities (Allure, Byrdie, RealSelf, Paula's Choice)
- Existing-content audit of the 10 facial-relevant articles
- Outputs raw data into scratch markdown files under `docs/seo/research/`

**Phase 2 — Synthesis (Opus)**
- Transform raw research into the strategy doc
- Keyword groupings, priority tiers, linking graph, 75–90 briefs
- Reasoning-heavy, stays on Opus

**Phase 3 — Production (Sonnet via Implementer subagent, multi-session)**
- **Wave 0 session:** Write the 4 load-bearing pages as production MDX/TS content files, wire new routes into Next.js, verify `npm run build` passes with +3 pages, push to main, confirm Netlify deploy
- **Waves 1–4 (separate sessions):** For each wave, implementer subagents write articles in parallelizable batches of 5–8 (dispatched via the `superpowers:dispatching-parallel-agents` skill). Each wave:
  1. Islam reviews 2–3 sample articles before the rest are committed
  2. All articles batch-committed with descriptive commit messages
  3. `npm run build` run and verified (page count grows wave-by-wave)
  4. Git push triggers Netlify auto-deploy
  5. Wave retro notes appended to `docs/seo/facial-treatments-topical-authority.md`

**Why waves, not one session:** At 1,200–2,500 words × 75–90 articles, total net-new production approaches 200k words. A single session would compact context mid-execution, destroying per-article consistency. Waves also give Islam review checkpoints rather than a 200k-word "all-or-nothing" merge.

**Compliance with project rules:**
- All copy in `src/content/`, no component-level strings (per `feedback_content_separation.md`)
- Design system rules followed (per `project_design_polish.md`): `.eyebrow` utilities, canonical opacity scale, 300/500ms transitions, red/gold role split
- `npm run build` must pass before anything is marked done

---

## 7. Risks & Mitigations

| Risk | Mitigation |
|---|---|
| No paid keyword tools (Ahrefs/Semrush) = missing volume data | SERP inspection, autocomplete, People Also Ask, Google Trends, forum frequency as proxies. Each keyword tagged with confidence level. |
| Sub-pillar routes collide with existing `[slug]` service dynamic route | Implementation plan inspects `src/app/services/facial-treatments/` routing first and picks static vs. dynamic strategy accordingly. |
| Cannibalization between new sub-pillars and existing concern pages | Explicit intent separation (see §4 table). Different titles, H1s, CTAs. Audit phase checks for title-tag overlap. |
| 4 pillar pages at 3,000+ words risks generic AI content | Voice guardrails (dark luxury editorial), pull protocol specifics from existing enriched articles in `src/content/articles/`, cite real Essence details (ingredients, dwell times, team credentials) — no generic filler. |
| Strategy doc becomes unmaintainable | Single markdown file, strict per-brief template (§5 Deliverable 4), machine-parseable for later execution waves. |
| Existing articles might have indexed URLs we'd break by renaming | Audit phase flags any URL-change recommendations; redirects specified explicitly; GSC check noted as prerequisite before any URL change. |
| Fabricated service claims (per `PROJECT_STATUS.md` §3.3) leak into pillar pages | Pillar pages must cite only claims verifiable from existing service content files or flagged for Islam's review before publish. |

---

## 8. Success Criteria

**Wave 0 (this plan):**
- ✅ Strategy doc committed at `docs/seo/facial-treatments-topical-authority.md`
- ✅ 4 new/upgraded pages live, `npm run build` passes with page count ≥ 136
- ✅ All 75–90 briefs complete — zero "TBD" placeholders
- ✅ Internal-link graph has no orphans: every planned URL has ≥ 2 inbound links
- ✅ All 10 existing facial-relevant articles have an audit verdict with notes
- ✅ All 4 pillar/sub-pillar pages pass 5-point QA: metadata, JSON-LD, OG tag, breadcrumb schema, canonical URL
- ✅ Content/design separation rule respected — no copy in components
- ✅ Design system utilities used (.eyebrow, opacity scale, etc.)
- ✅ Wave 0 deployed to Netlify — live at essencemedspa.netlify.app

**Waves 1–4 (full build — cumulative):**
- ✅ All 75–90 cluster articles live as MDX under `src/content/articles/`
- ✅ Page count = ~220+ (was 133): 133 baseline + 3 sub-pillars + ~80 new articles + any audit-driven refreshes
- ✅ `npm run build` passes at each wave boundary with 0 errors
- ✅ All articles deployed to production via Netlify
- ✅ Every article meets per-article production spec (§5 Deliverable 4): word count, frontmatter, H1/H2s, FAQ, CTA, internal-link graph wired, JSON-LD, Essence voice, no fabricated claims
- ✅ Sitemap.xml regenerates cleanly and all new URLs are crawlable
- ✅ No orphaned articles (every article has ≥ 2 inbound links per the graph)
- ✅ Islam approves sample articles at each wave checkpoint

**6-month outcome hypothesis (not a spec deliverable — a stake in the ground):**

Given execution of all 4 waves, Essence should rank top-10 for ≥ 2 of 3 sub-pillar head terms, top-3 for ≥ 15 long-tail terms, and show measurable topical-trust-flow improvement in GSC within 6 months of the final wave publishing. If this does not occur, re-examine strategy assumptions (keyword targeting, cluster density, link graph), not content volume.

---

## 9. Key Decisions Locked

- Scope limited to Facial Treatments hub (not all 5 hubs)
- Architecture is three-sub-pillar (not mega-pillar-only, not condition-led)
- Cluster depth: Standard (75–90 articles, not Lean 45–60 or Aggressive 120–150)
- Deliverable scope: **FULL BUILD** — strategy doc + 4 production pages + all 75–90 cluster articles written and published to Netlify (expanded from v1 which was briefs-only)
- Execution model: 5 waves across 5 sessions (Wave 0 = strategy + pillars; Waves 1–4 = cluster articles in priority order), each wave separately reviewed and deployed
- Sub-pillars are educational with commercial intent; `/concerns/` pages remain transactional problem-led pages — no merge
- Existing articles are audited; where they materially diverge from the new graph, they are refreshed in Wave 0
- Pillar pages reuse existing Essence voice/design system — no new design work
- No new images generated — articles reuse existing `public/images/blog/` and `public/images/categories/` assets

---

## 10. Next Step

Hand off to `superpowers:writing-plans` skill to produce the **Wave 0 implementation plan**, which will break Deliverables 1–3 into concrete, ordered, verifiable steps with model assignments per step. Waves 1–4 will each get their own implementation plan generated at the start of their respective sessions, using the briefs from Wave 0 as input.
