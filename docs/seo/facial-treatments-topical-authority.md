# Facial Treatments — Topical Authority Strategy

_Created: 2026-04-21 · Wave 0 · Author: Essence Medspa content team_
_Spec: [docs/superpowers/specs/2026-04-21-facial-treatments-topical-authority-design.md](../superpowers/specs/2026-04-21-facial-treatments-topical-authority-design.md)_
_Plan: [docs/superpowers/plans/2026-04-21-facial-treatments-topical-authority-wave-0.md](../superpowers/plans/2026-04-21-facial-treatments-topical-authority-wave-0.md)_

---

## 1. Executive Summary

_Written last — see §12 for placement note. Populated after §2–§11._

---

## 2. The Topical Graph

```
Facial Treatments Hub (mega-pillar)
  /services/facial-treatments
  — head terms: "facial treatments Chicago", "best facials Chicago"
  — 3,000–4,000 words · links down to 3 sub-pillars + all 20+ facial services
  │
  ├── Sub-pillar 1: Anti-Aging Facials
  │   /services/facial-treatments/anti-aging
  │   — head: "anti-aging facial Chicago"
  │   — feeds services: collagen-induction-therapy, firming-facial, face-lifting-gua-sha,
  │                     essence-signature-facelift-facial, red-carpet-collagen-facial,
  │                     4d-face-lifting-massage, collagen-eye-contour
  │   — feeds concerns: /concerns/wrinkles-fine-lines, /concerns/hollow-under-eyes
  │   — ~25 cluster articles
  │
  ├── Sub-pillar 2: Acne & Clarity Facials
  │   /services/facial-treatments/acne-clarity
  │   — head: "acne facial Chicago"
  │   — feeds services: acne-facial, deep-pore-cleansing-facial, custom-facial,
  │                     custom-peel, back-facial, back-microdermabrasion,
  │                     back-stimulator-peel, teen-facial
  │   — feeds concerns: /concerns/acne-texture
  │   — ~25 cluster articles
  │
  └── Sub-pillar 3: Glow & Brightening Facials
      /services/facial-treatments/glow-brightening
      — head: "brightening facial Chicago" / "vitamin C facial Chicago"
      — feeds services: brightening-facial, oxygen-facial, hydrofacial,
                        glutathione-brightening, custom-peel, essence-signature-facelift-peel
      — feeds concerns: /concerns/dull-tired-skin, /concerns/dark-spots
      — ~25 cluster articles
```

### 2.1 Linking rules

| Rule | Detail |
|---|---|
| Articles → sub-pillar | Every cluster article links up to its sub-pillar once in body + once in CTA |
| Articles → siblings | Every cluster article links sideways to 2–3 sibling cluster articles |
| Articles → services | Every cluster article links down to ≥ 1 service page when treatment-relevant |
| Articles → concerns | Every cluster article links laterally to 1 concern page when condition-relevant |
| Sub-pillar → hub | Sub-pillars link up to the hub and down to every cluster + service in their branch |
| Hub → everything | Hub links to all 3 sub-pillars, all 20+ facial services, and 5–8 hero cluster articles |
| Breadcrumb | `Home › Services › Facial Treatments › [Sub-pillar] › [Article]` |

### 2.2 Intent separation (avoiding cannibalization)

| Page type | Intent | CTA tone | Example target |
|---|---|---|---|
| `/services/[slug]` | Transactional | "Book now" | "acne facial" (direct service purchase) |
| `/concerns/[slug]` | Transactional (problem-led) | "Find your treatment" | "how to treat acne at a medspa" |
| Sub-pillar | Educational + commercial | "Learn / explore treatments" | "what are anti-aging facials" |
| Cluster article | Informational | "Read related / consider X" | "at what age should I start facials" |

---

## 3. Keyword Research by Sub-Pillar

_Populated in §3.1–§3.3 by synthesis task. Raw research: `docs/seo/research/anti-aging-serp.md`, `acne-clarity-serp.md`, `glow-brightening-serp.md`._

### 3.1 Anti-Aging Facials

_To be populated by synthesis subagent._

### 3.2 Acne & Clarity Facials

_To be populated by synthesis subagent._

### 3.3 Glow & Brightening Facials

_To be populated by synthesis subagent._

---

## 4. URL Map & Priority Tiers

_To be populated after §3. Table format:_

```
| URL | Type | Sub-pillar | Primary keyword | Target word count | Priority tier | Status |
```

**Priority tiers:**
- **P0** — Wave 0–1. 4 pillar pages + ~20 highest-intent articles
- **P1** — Waves 2–3. ~50 articles
- **P2** — Wave 4. ~20 articles

---

## 5. Existing-Content Audit Summary

**Source:** `docs/seo/research/existing-content-audit.md`

**Audit verdict counts (11 facial-relevant articles):**
- Keep: 0
- Refresh: 9
- Expand: 2 (`chicago-winter-skincare-tips`, and one other flagged for breadth)
- Merge: 0
- Redirect: 0

**Headline finding:** The existing 11 articles already link out to service pages, but **zero** link to other blog posts via body markdown. The internal-link graph between facial-related articles is essentially unbuilt. Wave 0 Phase E will light up this graph.

**Top 3 refresh actions across the set:**
1. Add pillar up-links on every article to `/services/facial-treatments` and the relevant sub-pillar.
2. Add `subPillar` frontmatter field + `relatedArticles` to all 11 MDX files.
3. Expand `chicago-winter-skincare-tips` (~1,150 words) with a ~400-word cross-cluster H2 that bridges the three sub-pillars.

Full per-article verdicts and action lists live in the audit file.

---

## 6. Internal-Linking Graph

_Populated after §4. Every URL gets inbound + outbound link counts; spec §8 requires every URL to have ≥ 2 inbound links (no orphans)._

---

## 7. Cluster Article Briefs (75–90)

_Populated by parallel subagents per sub-pillar. Brief template:_

```markdown
### [Article Title]

- **URL:** /blog/[slug]
- **Priority:** P0 | P1 | P2
- **Sub-pillar:** anti-aging | acne-clarity | glow-brightening | cross-cluster
- **Primary keyword:** [keyword] (vol: high|med|low, difficulty: high|med|low, confidence: high|med|low)
- **Secondary keywords:** [3–5 related terms]
- **Intent:** informational | commercial | transactional
- **Title tag:** (≤ 60 chars)
- **Meta description:** (≤ 155 chars)
- **H1:** (can differ from title tag)
- **H2 outline:** 6–10 H2s
- **Word count target:** 1,200–2,500
- **Suggested FAQs:** 3–5 questions
- **Internal links out:** up / sideways / down / lateral
- **Image asset:** existing image path
- **Writer notes:** Essence-specific angles
```

### 7.1 Anti-Aging briefs

_To be populated._

### 7.2 Acne & Clarity briefs

_To be populated._

### 7.3 Glow & Brightening briefs

_To be populated._

### 7.4 Cross-cluster briefs

_To be populated._

---

## 8. Schema Strategy

All JSON-LD is rendered via the existing `<JsonLd>` component (`src/components/ui/JsonLd.tsx`) and schema helpers in `src/lib/schema.ts`. New schemas added in Wave 0 are additive — existing service/blog schemas remain unchanged.

### 8.1 Hub mega-pillar `/services/facial-treatments`
- `MedicalWebPage` — specialty: dermatology
- `BreadcrumbList` — Home › Services › Facial Treatments
- `ItemList` — 20+ facial services as `ListItem` entries

### 8.2 Sub-pillar pages `/services/facial-treatments/[subPillar]`
- `MedicalWebPage` — specialty: dermatology
- `BreadcrumbList` — Home › Services › Facial Treatments › [Sub-Pillar]
- `FAQPage` — rendered from the sub-pillar's FAQ block

### 8.3 Cluster articles `/blog/[slug]`
- `Article` — existing pattern preserved; ensure author + publishDate + image present
- `BreadcrumbList` — Home › Blog › [Category] › [Article]
- `FAQPage` (optional) — when article includes an FAQ section

### 8.4 Service pages `/services/[slug]`
- `Service` — existing, unchanged
- `BreadcrumbList` — existing, unchanged

### 8.5 Concern pages `/concerns/[slug]`
- `MedicalCondition` or `MedicalWebPage` — existing; verify during implementation
- `BreadcrumbList` — existing

### 8.6 Validation
Post-deploy: Google Rich Results Test (https://search.google.com/test/rich-results) + Schema.org Validator (https://validator.schema.org/). Target: 0 errors, warnings triaged.

---

## 9. Phasing Plan (Waves 0–4)

| Wave | Scope | Article count | Session |
|---|---|---|---|
| 0 | Strategy doc + 4 pillar/sub-pillar pages + existing-article audit + refresh | 0 new articles | This session |
| 1 | P0 cluster articles (highest-intent, most-searched) | ~20 | Dedicated session |
| 2 | P1 cluster articles — batch 1 | ~25 | Dedicated session |
| 3 | P1 cluster articles — batch 2 | ~25 | Dedicated session |
| 4 | P2 cluster articles (long-tail fill) | ~20 | Dedicated session |

**Per-wave checkpoint:** Islam reviews 2–3 sample articles before the rest are committed. Each wave ends with `npm run build` passing + `git push main` + Netlify deploy + 4-week soak before the next wave starts (so the pulse report can assess whether the wave moved any tracked metrics).

---

## 10. Measurement Plan

### 10.1 Metrics
- **Keyword rankings** — position for head + mid-tail (10 tracked keywords × 3 sub-pillars = 30 total)
- **GSC impressions + clicks** — per target keyword, weekly trend
- **Organic sessions** — GA4 traffic to `/services/facial-treatments/*` and `/blog/*` (facial category)
- **Internal link count per URL** — topical-trust-flow proxy, monthly
- **Organic bookings** — Vagaro conversion count attributed to organic sessions (requires tracking wiring — flag as dependency)

### 10.2 Baseline (capture before Wave 1 launches)
- GSC queries for `essence-medspa.com` filtered to facial-related terms — CSV export
- Ranking position for 30 tracked keywords — manual SERP inspection
- Current inbound-link count per article — grep-based audit

### 10.3 Cadence
- **Weekly:** GSC impressions + rank changes for top-10 tracked keywords
- **Monthly:** 30-keyword rank report, link graph diff, organic traffic to facial pages
- **Per-wave:** publish wave → wait 4 weeks → pulse report → start next wave

### 10.4 6-month review
At Wave 4 + 6 months:
- Did ≥ 2 of 3 sub-pillar head terms reach top-10?
- Did ≥ 15 long-tail terms reach top-3?
- Did organic bookings attributed to facial content increase measurably?

If NO on any: re-examine keyword targeting / cluster density / link graph (spec §8 hypothesis test).

---

## 11. Appendix — Research Source Files

- [`docs/seo/research/anti-aging-serp.md`](research/anti-aging-serp.md) — 88 keywords, 40 PAAs
- [`docs/seo/research/acne-clarity-serp.md`](research/acne-clarity-serp.md) — 90 keywords, 39 PAAs
- [`docs/seo/research/glow-brightening-serp.md`](research/glow-brightening-serp.md) — 80 keywords, 45 PAAs
- [`docs/seo/research/competitor-analysis.md`](research/competitor-analysis.md) — 10 Chicago medspas + 5 national sites
- [`docs/seo/research/existing-content-audit.md`](research/existing-content-audit.md) — 11 articles audited
