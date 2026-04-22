# Facial Treatments Topical Authority — Wave 0 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Ship Wave 0 of the Facial Treatments topical-authority build: strategy doc with 75–90 article briefs, an upgraded hub mega-pillar page, 3 new sub-pillar pages, an existing-content audit, and a production deploy to Netlify.

**Architecture:** Keyword research performed via SERP inspection (no paid tools in scope) and consolidated into `docs/seo/facial-treatments-topical-authority.md`. Hub page upgraded in-place at `/services/facial-treatments` (existing dynamic `[slug]` route). Three new sub-pillar pages added under a new nested literal route `src/app/services/facial-treatments/[subPillar]/page.tsx`, with sub-pillar content stored in a new `src/content/sub-pillars/` directory. Hub page moves to a literal `src/app/services/facial-treatments/page.tsx` to preserve its URL while allowing nested sub-pillar routes.

**Tech Stack:** Next.js 14.2.18 App Router, TypeScript, Tailwind CSS 4, MDX for articles, TS content files for pages, Netlify auto-deploy from `main`.

**Spec:** [docs/superpowers/specs/2026-04-21-facial-treatments-topical-authority-design.md](../specs/2026-04-21-facial-treatments-topical-authority-design.md)

---

## File Structure

### Files to create
- `docs/seo/facial-treatments-topical-authority.md` — strategy doc (single file, ~10k–15k words, machine-parseable brief blocks)
- `docs/seo/research/anti-aging-serp.md` — raw SERP/keyword research for sub-pillar 1 (scratch, committed for traceability)
- `docs/seo/research/acne-clarity-serp.md` — raw research for sub-pillar 2
- `docs/seo/research/glow-brightening-serp.md` — raw research for sub-pillar 3
- `docs/seo/research/competitor-analysis.md` — Chicago medspa + national authority scan
- `docs/seo/research/existing-content-audit.md` — 10-article audit verdicts
- `src/types/sub-pillar.ts` — TS type definitions for sub-pillar content
- `src/content/sub-pillars/anti-aging.ts` — sub-pillar 1 content
- `src/content/sub-pillars/acne-clarity.ts` — sub-pillar 2 content
- `src/content/sub-pillars/glow-brightening.ts` — sub-pillar 3 content
- `src/lib/sub-pillars.ts` — content lookup helpers (getSubPillarBySlug, getAllSubPillarSlugs)
- `src/components/sections/SubPillarTemplate.tsx` — reusable sub-pillar page body
- `src/app/services/facial-treatments/page.tsx` — hub page (literal route, renders existing hub content)
- `src/app/services/facial-treatments/[subPillar]/page.tsx` — dynamic sub-pillar route

### Files to modify
- `src/content/hubs/facial-treatments.ts` — upgrade from hub to pillar-grade content (+ sub-pillar section, + FAQ, + local signals)
- `src/app/services/[slug]/page.tsx` — exclude `facial-treatments` from generateStaticParams (now served by literal route)
- `src/lib/content.ts` — expose sub-pillar helpers if needed by shared rendering
- Up to 10 files in `src/content/articles/*.mdx` — audit-driven refreshes (internal links, frontmatter tweaks, title updates per audit verdicts). Exact list output by Task A5.

### Conventions to follow
- Content/design separation: no copy in components (per `feedback_content_separation.md`)
- Design system utilities: `.eyebrow`, `.eyebrow-sm`, canonical opacity scale, 300/500ms transitions, red/gold role split (per `project_design_polish.md`)
- Build must pass: `npm run build` with 0 errors before every commit
- Commit style: follow existing pattern in `git log` — descriptive, imperative, Co-Authored-By footer

---

## Phase A — Research & Audit (Haiku subagents, parallelizable)

Each task in Phase A can be dispatched to a Haiku subagent in parallel. Outputs go to `docs/seo/research/` as scratch markdown. Phase B consolidates them.

### Task A1: SERP research for Anti-Aging sub-pillar

**Files:**
- Create: `docs/seo/research/anti-aging-serp.md`

- [ ] **Step 1: Draft the research template**

Write the following into `docs/seo/research/anti-aging-serp.md`:

```markdown
# Anti-Aging Sub-Pillar — Keyword & SERP Research

_Date: 2026-04-21 · Researcher: [subagent-id] · Confidence column: high/med/low based on SERP signal strength_

## 1. Head term
| Keyword | Est. monthly vol | Difficulty | Top 3 results | Local pack? | Featured snippet? | Confidence |
|---|---|---|---|---|---|---|
| anti-aging facial Chicago | | | | | | |
| best anti-aging facials Chicago | | | | | | |

## 2. Mid-tail (5–8 terms)
[same table format]

## 3. Long-tail (50+ terms, grouped by intent)

### Informational intent (what is / how does / why)
| Keyword | PAA? | Top result type | Gap for Essence? | Confidence |
|---|---|---|---|---|

### Commercial intent (best / vs / cost / review)
[same table]

### Transactional intent (near me / book / appointment)
[same table]

## 4. People Also Ask harvest
List every PAA question surfaced for the head + mid-tail terms.

## 5. Related searches harvest
List every "searches related to..." block at bottom of SERP.

## 6. Autocomplete harvest
For each seed (anti-aging facial, wrinkle treatment, collagen, skin tightening), list Google autocomplete completions a-z.

## 7. Observations
- SERP feature density (PAA, video carousel, local pack, featured snippet)
- Dominant content format (listicle, service page, clinic page, magazine article)
- Content length range of top 10 results
- Essence's current ranking status (if visible)
```

- [ ] **Step 2: Populate head + mid-tail keyword data**

Dispatch a subagent to research the anti-aging keyword set via web search. Subagent brief:

```
Research the following anti-aging-facial keyword set. For each keyword, use web search to inspect the Google SERP. Fill the table columns with real data:
- Top 3 result URLs (organic, not ads)
- "Local pack?" Yes/No if a map pack shows for Chicago geo
- "Featured snippet?" Yes/No, and what's in it if yes
- Confidence: high/med/low based on how much signal you can extract

Seed keywords: anti-aging facial Chicago, best anti-aging facial Chicago, anti-aging facial near me, collagen facial Chicago, firming facial Chicago, skin tightening facial Chicago, microneedling Chicago, RF microneedling Chicago, Jet Plasma facial, wrinkle facial Chicago, anti-aging treatment Jefferson Park.

Volume/difficulty: estimate based on SERP competitiveness (authority of ranking domains, commercial intent), since paid tools are not in scope. Use high-med-low buckets, not false-precise numbers.

Also harvest People Also Ask questions and Related Searches blocks.

Write results into docs/seo/research/anti-aging-serp.md following the template already in the file. Do not write volume numbers you cannot justify — use "high / med / low" bands.
```

- [ ] **Step 3: Populate long-tail + PAA + autocomplete sections**

Dispatch subagent for long-tail expansion. Subagent brief:

```
For the anti-aging facial topic, find 50+ long-tail keywords by:
1. Combining seed terms (anti-aging facial, collagen facial, firming facial, wrinkle treatment, skin tightening) with modifiers (cost, price, reviews, side effects, before after, how often, vs, best, near me, Chicago, Jefferson Park, Edgebrook, at home vs professional).
2. Harvesting Google Autocomplete for each seed (type seed + space + each letter a-z).
3. Harvesting People Also Ask for top-ranking results of head terms.
4. Checking Reddit (r/SkincareAddiction, r/30PlusSkincare) for actual user phrasing and questions.

Group into:
- Informational (what is X / how does X work / why do I have Y)
- Commercial (best X / X vs Y / X cost / X reviews)
- Transactional (X near me / book X / X appointment)

Write into docs/seo/research/anti-aging-serp.md sections 3-6. Minimum 50 long-tail terms total.
```

- [ ] **Step 4: Review the completed file**

Read `docs/seo/research/anti-aging-serp.md` in full. Verify:
- Head terms: ≥ 2 entries with SERP data
- Mid-tail: ≥ 5 entries
- Long-tail: ≥ 50 entries across all 3 intent buckets
- PAA harvest populated
- Autocomplete harvest populated
- No "TBD" or empty cells

If gaps exist, re-dispatch subagent to fill them.

- [ ] **Step 5: Commit**

```bash
git add docs/seo/research/anti-aging-serp.md
git commit -m "Add anti-aging sub-pillar SERP research

Wave 0 Phase A research for facial-treatments topical authority.
Covers head/mid-tail/long-tail keywords, PAA, and autocomplete harvest.

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

### Task A2: SERP research for Acne & Clarity sub-pillar

**Files:**
- Create: `docs/seo/research/acne-clarity-serp.md`

- [ ] **Step 1: Draft the research template**

Copy the template from Task A1 Step 1 into `docs/seo/research/acne-clarity-serp.md` and change the title to "Acne & Clarity Sub-Pillar — Keyword & SERP Research".

- [ ] **Step 2: Populate head + mid-tail keyword data**

Subagent brief:

```
Research the acne/clarity facial keyword set. Use web search for SERP inspection.

Seed keywords: acne facial Chicago, best acne facial Chicago, facial for acne-prone skin Chicago, deep pore cleansing facial Chicago, facial extractions Chicago, teen acne facial Chicago, back facial Chicago, chemical peel for acne Chicago, acne treatment Jefferson Park.

Fill the template table with top 3 organic results, local-pack presence, featured snippets, confidence level per entry. Harvest PAA and Related Searches.

Write to docs/seo/research/acne-clarity-serp.md.
```

- [ ] **Step 3: Populate long-tail + PAA + autocomplete**

Subagent brief:

```
Find 50+ long-tail keywords for acne/clarity facials. Combine seeds (acne facial, deep pore, pore cleansing, extractions, chemical peel for acne, teen acne, hormonal acne, back acne) with modifiers (cost, price, reviews, side effects, how often, before after, vs, near me, Chicago, Jefferson Park).

Harvest Google autocomplete a-z for each seed. Harvest PAA from top SERPs. Check Reddit (r/SkincareAddiction, r/acne) for real user phrasing.

Group into informational / commercial / transactional. Minimum 50 total.

Write into docs/seo/research/acne-clarity-serp.md sections 3-6.
```

- [ ] **Step 4: Review the completed file**

Same criteria as Task A1 Step 4.

- [ ] **Step 5: Commit**

```bash
git add docs/seo/research/acne-clarity-serp.md
git commit -m "Add acne-clarity sub-pillar SERP research

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

### Task A3: SERP research for Glow & Brightening sub-pillar

**Files:**
- Create: `docs/seo/research/glow-brightening-serp.md`

- [ ] **Step 1: Draft the research template**

Copy template from Task A1 Step 1 into `docs/seo/research/glow-brightening-serp.md`, change title to "Glow & Brightening Sub-Pillar — Keyword & SERP Research".

- [ ] **Step 2: Populate head + mid-tail keyword data**

Subagent brief:

```
Research the glow/brightening facial keyword set.

Seed keywords: brightening facial Chicago, glow facial Chicago, vitamin C facial Chicago, hydrafacial Chicago, oxygen facial Chicago, dark spot treatment Chicago, hyperpigmentation facial Chicago, melasma treatment Chicago, dull skin treatment Chicago.

Fill the template with SERP data (top 3 organic, local pack, featured snippet, confidence). Harvest PAA + Related.

Write to docs/seo/research/glow-brightening-serp.md.
```

- [ ] **Step 3: Populate long-tail + PAA + autocomplete**

Subagent brief:

```
Find 50+ long-tail keywords for glow/brightening facials. Combine seeds (brightening facial, vitamin C facial, hydrafacial, oxygen facial, glow facial, hyperpigmentation, melasma, dark spots, dull skin) with modifiers (cost, reviews, before after, at home vs professional, how often, vs retinol, vs niacinamide, Chicago).

Harvest Google autocomplete a-z for each seed. Harvest PAA from top SERPs. Check Reddit (r/SkincareAddiction, r/AsianBeauty) for phrasing.

Group into informational / commercial / transactional. Minimum 50 total.

Write into docs/seo/research/glow-brightening-serp.md sections 3-6.
```

- [ ] **Step 4: Review the completed file**

Same criteria as Task A1 Step 4.

- [ ] **Step 5: Commit**

```bash
git add docs/seo/research/glow-brightening-serp.md
git commit -m "Add glow-brightening sub-pillar SERP research

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

### Task A4: Competitor analysis

**Files:**
- Create: `docs/seo/research/competitor-analysis.md`

- [ ] **Step 1: Draft the competitor template**

Write to `docs/seo/research/competitor-analysis.md`:

```markdown
# Competitor Analysis — Facial Treatments (Chicago + National)

_Date: 2026-04-21_

## Local competitors (Chicago medspas)

For each competitor, document:
- Domain + URL structure (do they use /services, /treatments, /facials?)
- Facial service count
- Article/blog count in last 12 months
- Top 3 ranking facial keywords
- Notable content patterns (pillar pages, condition pages, article depth)
- Gaps/weaknesses Essence can exploit

| Competitor | Domain | Service Count | Blog Count | Top 3 Keywords | Pattern Notes |
|---|---|---|---|---|---|

## National authorities (informational)

For informational long-tail, national sites (Allure, Byrdie, RealSelf, Paula's Choice, Self) often rank. Document their treatment of facial topics.

| Site | Facial content strategy | Article depth | Format pattern |
|---|---|---|---|

## Content gap analysis

Topics Chicago medspas cover: [list]
Topics Chicago medspas MISS but national sites cover: [list]
Topics NO ONE covers well — Essence opportunity: [list]
```

- [ ] **Step 2: Populate Chicago competitor data**

Subagent brief:

```
Identify the top 10 Chicago medspas ranking for "facial Chicago" and "best facial Chicago" and related high-intent terms. For each, inspect their facial-services section and blog:

1. URL structure they use for facials
2. Count facial services offered
3. Scan their blog for facial-related article count in the last 12 months
4. Note top 3 keywords they appear to rank for (infer from their titles + meta)
5. Content patterns: do they have pillar pages? Condition pages? Long-form guides?
6. Any obvious gaps or weaknesses

Target competitors likely include: Chicago Beauty Lounge, Glamour Dermatology, Smoothe Med Spa, Urban Skin Rx, Mood Beauty Lounge, Spa Space, Blossom Beauty Lounge — plus whoever else ranks in the local pack for "facial Chicago".

Write into docs/seo/research/competitor-analysis.md "Local competitors" section.
```

- [ ] **Step 3: Populate national authority data**

Subagent brief:

```
For each of these national authority sites, inspect how they treat facial-treatment topics:
- Allure (allure.com)
- Byrdie (byrdie.com)
- RealSelf (realself.com)
- Paula's Choice (paulaschoice.com)
- Self (self.com)

For each: describe their facial content strategy (pillar pages? listicles? condition guides?), typical article depth (word count range of top-ranking articles), and format patterns (listicle vs guide vs Q&A).

Write into docs/seo/research/competitor-analysis.md "National authorities" section.
```

- [ ] **Step 4: Write content gap analysis**

Read both sections and write the "Content gap analysis" section yourself (Opus reasoning). List topics Chicago medspas cover well, topics they miss that national sites cover, and topics no one covers well — flagging the last group as Essence's biggest opportunity.

- [ ] **Step 5: Commit**

```bash
git add docs/seo/research/competitor-analysis.md
git commit -m "Add facial treatments competitor analysis

Covers top 10 Chicago medspas + 5 national authorities, plus
content gap analysis identifying under-served facial topics.

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

### Task A5: Existing-content audit

**Files:**
- Create: `docs/seo/research/existing-content-audit.md`

Audits the 10 facial-relevant articles currently live in `src/content/articles/`.

- [ ] **Step 1: List the articles to audit**

Articles to audit (from `src/content/articles/`):
1. best-facial-for-acne.mdx
2. custom-facial-chicago.mdx
3. chemical-peel-vs-microdermabrasion.mdx
4. hydrofacial-chicago.mdx
5. radiofrequency-facial-chicago.mdx
6. vampire-facial-benefits-prp.mdx
7. what-is-a-back-facial.mdx
8. chicago-winter-skincare-tips.mdx
9. seasonal-skincare-chicago.mdx
10. benefits-of-vitamin-c-skin.mdx
11. foods-for-glowing-skin.mdx

- [ ] **Step 2: Draft audit template**

Write to `docs/seo/research/existing-content-audit.md`:

```markdown
# Existing Facial-Relevant Article Audit

_Date: 2026-04-21 · Articles audited: 11_

For each article, verdict is one of:
- **Keep** — content is good, just needs internal-link graph additions
- **Refresh** — needs updates (new links, a new section, updated frontmatter)
- **Expand** — good foundation but too thin for pillar-era standards (bump to 1,500+ words)
- **Merge** — overlaps with a planned new article; merge into one canonical piece
- **Redirect** — obsolete or better covered by a planned piece; redirect to new URL

Per-article entry template:

### [filename.mdx]
- **URL:** /blog/[slug]
- **Current title:** [current H1]
- **Word count:** [count]
- **Current keywords:** [from frontmatter]
- **Sub-pillar mapping:** anti-aging | acne-clarity | glow-brightening | cross-cluster
- **Internal links OUT (current):** [list]
- **Internal links IN (current):** [list — use grep against other articles]
- **Verdict:** keep | refresh | expand | merge | redirect
- **Actions required:** [specific steps if refresh/expand/merge/redirect]
- **New title (if renaming):** [new H1]
- **New keywords:** [updated keyword list aligned with topical map]
```

- [ ] **Step 3: Audit each article**

Dispatch subagent:

```
Audit each of these 11 articles in src/content/articles/:
[list from Step 1]

For each article, fill the entry template in docs/seo/research/existing-content-audit.md:

1. Read the full MDX file including frontmatter
2. Count words (body only, excluding frontmatter)
3. Extract current keywords from frontmatter
4. Determine sub-pillar mapping based on content: anti-aging, acne-clarity, glow-brightening, or cross-cluster
5. Extract all internal links in the body (markdown [text](/path) format)
6. Use grep to find which OTHER articles link to this one (grep -r "slug-name" src/content/articles/)
7. Verdict: use the rubric above (keep/refresh/expand/merge/redirect)
8. Actions: specific, actionable steps. For "refresh", list exactly what to add (new H2s, new links, updated frontmatter fields).

Do not rename any URLs at this stage — just flag renaming recommendations. URL changes are deferred to the actual refresh task in Phase F.

Write each entry into docs/seo/research/existing-content-audit.md.
```

- [ ] **Step 4: Review audit verdicts for coherence**

Read the full audit file. Sanity-check:
- Every verdict is one of the 5 options (not a new invented verdict)
- Every "refresh/expand/merge" entry has concrete actions listed
- No two articles are recommended to be merged into each other without a clear canonical URL choice
- Sub-pillar mappings match the sub-pillar definitions in the spec

Fix any inconsistencies inline.

- [ ] **Step 5: Commit**

```bash
git add docs/seo/research/existing-content-audit.md
git commit -m "Add existing facial-article audit (11 articles)

Per-article verdict + actions. Inputs to Phase F refresh wave.

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

---

## Phase B — Strategy Synthesis (Opus)

Consolidate research into the strategy document.

### Task B1: Draft strategy doc skeleton

**Files:**
- Create: `docs/seo/facial-treatments-topical-authority.md`

- [ ] **Step 1: Write strategy doc outline**

Write the skeleton to `docs/seo/facial-treatments-topical-authority.md`:

```markdown
# Facial Treatments — Topical Authority Strategy

_Created: 2026-04-21 · Wave 0 · Author: Essence Medspa content team_

## 1. Executive Summary
[to fill in Task B5]

## 2. The Topical Graph
[diagram + explanation — Task B2]

## 3. Keyword Research by Sub-Pillar
### 3.1 Anti-Aging Facials
### 3.2 Acne & Clarity Facials
### 3.3 Glow & Brightening Facials
[consolidated from Phase A research — Task B3]

## 4. URL Map & Priority Tiers
[table of all planned URLs with tier assignments — Task B4]

## 5. Existing-Content Audit Summary
[consolidated from Task A5 — Task B6]

## 6. Internal-Linking Graph
[table showing each URL's inbound + outbound links — Task B7]

## 7. Cluster Article Briefs (75–90)
### 7.1 Anti-Aging briefs
### 7.2 Acne & Clarity briefs
### 7.3 Glow & Brightening briefs
### 7.4 Cross-cluster briefs
[one brief per article — Task B8]

## 8. Schema Strategy
[JSON-LD plan per page type — Task B9]

## 9. Phasing Plan (Waves 0–4)
[execution sequence — Task B10]

## 10. Measurement Plan
[GSC tracking, rankings, internal-link-count — Task B11]

## 11. Appendix: Research source files
- docs/seo/research/anti-aging-serp.md
- docs/seo/research/acne-clarity-serp.md
- docs/seo/research/glow-brightening-serp.md
- docs/seo/research/competitor-analysis.md
- docs/seo/research/existing-content-audit.md
```

- [ ] **Step 2: Commit skeleton**

```bash
git add docs/seo/facial-treatments-topical-authority.md
git commit -m "Add strategy doc skeleton for Wave 0 synthesis

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

### Task B2: Write Section 2 — Topical Graph

- [ ] **Step 1: Copy the graph diagram from the spec**

Open `docs/superpowers/specs/2026-04-21-facial-treatments-topical-authority-design.md` §4 and copy the ASCII tree into Section 2 of the strategy doc.

- [ ] **Step 2: Add linking-rules subsection**

Below the diagram, add the linking rules table from spec §4.

- [ ] **Step 3: Add intent-separation subsection**

Below that, add the 4-row intent-separation table from spec §4 that distinguishes `/services/[slug]` vs `/concerns/[slug]` vs sub-pillar vs cluster article.

- [ ] **Step 4: Commit**

```bash
git add docs/seo/facial-treatments-topical-authority.md
git commit -m "Strategy doc §2: topical graph + linking rules

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

### Task B3: Write Section 3 — Keyword Research

For each sub-pillar, consolidate the Phase A research into a single ranked keyword list.

- [ ] **Step 1: Consolidate Anti-Aging keywords**

Read `docs/seo/research/anti-aging-serp.md`. Write §3.1 with:

1. **Head term (1)** — pick the single highest-priority keyword
2. **Mid-tail (5–8)** — ranked by confidence × commercial value
3. **Long-tail (50+)** — grouped by intent, each with confidence tag

Format each keyword row:
```
| Keyword | Intent | Est. volume band | Difficulty | Target URL | Confidence |
```

- [ ] **Step 2: Consolidate Acne & Clarity keywords**

Same process for §3.2, reading `docs/seo/research/acne-clarity-serp.md`.

- [ ] **Step 3: Consolidate Glow & Brightening keywords**

Same process for §3.3, reading `docs/seo/research/glow-brightening-serp.md`.

- [ ] **Step 4: Verify each sub-section has 50+ long-tail + 5+ mid-tail + 1 head**

Count entries per sub-section. If any sub-pillar has < 50 long-tail, re-dispatch A1/A2/A3 Step 3 to fill gaps.

- [ ] **Step 5: Commit**

```bash
git add docs/seo/facial-treatments-topical-authority.md
git commit -m "Strategy doc §3: consolidated keyword research (3 sub-pillars)

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

### Task B4: Write Section 4 — URL Map & Priority Tiers

- [ ] **Step 1: Build the URL table**

For every planned URL (4 pillar/sub-pillar pages + 75–90 articles + existing 11 articles + relevant service/concern pages they'll link to), write one row:

```
| URL | Type | Sub-pillar | Primary keyword | Target word count | Priority tier | Status |
```

Types: hub | sub-pillar | article-new | article-existing-keep | article-existing-refresh | article-existing-expand | article-existing-merge | article-existing-redirect | service | concern.

Priority tiers:
- **P0** = publish in Wave 0-1 (highest-intent, most-searched). 4 pillar pages + ~20 articles.
- **P1** = publish in Waves 2-3. ~50 articles.
- **P2** = publish in Wave 4. ~20 articles.

- [ ] **Step 2: Verify tier counts match spec**

Count rows per tier. Expected: P0 ≈ 24 (4 pillars + ~20 articles), P1 ≈ 50, P2 ≈ 20. Total articles ≈ 75–90. If off by more than 10%, rebalance.

- [ ] **Step 3: Commit**

```bash
git add docs/seo/facial-treatments-topical-authority.md
git commit -m "Strategy doc §4: URL map with priority tiers (P0/P1/P2)

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

### Task B5: Write Section 1 — Executive Summary

Written AFTER §2-4 since the exec summary references their contents.

- [ ] **Step 1: Write executive summary**

Write §1 with:
- Thesis statement (1 paragraph): why this plan makes Essence the facial-treatments authority in Chicago
- Topical map overview (reference diagram in §2)
- By-the-numbers: 1 hub + 3 sub-pillars + 75–90 articles + 3 concerns + 20+ services
- 6-month ranking hypothesis (from spec §8)
- What success looks like (bulleted from spec §8 success criteria)

Keep to 400–600 words.

- [ ] **Step 2: Commit**

```bash
git add docs/seo/facial-treatments-topical-authority.md
git commit -m "Strategy doc §1: executive summary

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

### Task B6: Write Section 5 — Audit Summary

- [ ] **Step 1: Summarize the audit**

Read `docs/seo/research/existing-content-audit.md`. Write §5 as a summary table:

```
| Article | Verdict | Summary of actions | Wave to execute |
```

Then list:
- N articles marked `keep` (no action beyond linking)
- N marked `refresh` (action list)
- N marked `expand` (action list)
- N marked `merge` (explain mergers)
- N marked `redirect` (explain redirects)

Refresh/expand/merge/redirect actions get executed in **Phase F** of Wave 0 (see below).

- [ ] **Step 2: Commit**

```bash
git add docs/seo/facial-treatments-topical-authority.md
git commit -m "Strategy doc §5: existing-content audit summary

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

### Task B7: Write Section 6 — Internal-Linking Graph

- [ ] **Step 1: Build the link graph table**

For every URL in §4, list:
- Inbound links (which other URLs link TO this one)
- Outbound links (which URLs this one links TO)

Table format:
```
| URL | Inbound count | Outbound count | Inbound sources | Outbound targets |
```

- [ ] **Step 2: Verify no orphans**

Every URL must have ≥ 2 inbound links (per spec §8 success criterion). If any URL has < 2, add inbound links by choosing relevant sibling/parent articles and adding them to their outbound column.

- [ ] **Step 3: Commit**

```bash
git add docs/seo/facial-treatments-topical-authority.md
git commit -m "Strategy doc §6: internal-linking graph (no orphans)

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

### Task B8: Write Section 7 — Cluster Article Briefs

This is the largest task in Phase B. 75–90 briefs, each ~200–300 words.

- [ ] **Step 1: Write Anti-Aging briefs (§7.1, ~25 briefs)**

For each article planned under the Anti-Aging sub-pillar (per §4 URL map), write one brief using this exact template:

```markdown
### [Article Title]

- **URL:** /blog/[slug]
- **Priority:** P0 | P1 | P2
- **Sub-pillar:** anti-aging
- **Primary keyword:** [keyword] (vol band: high|med|low, difficulty: high|med|low, confidence: high|med|low)
- **Secondary keywords:** [3–5 related terms]
- **Intent:** informational | commercial | transactional
- **Title tag:** (≤ 60 chars)
- **Meta description:** (≤ 155 chars)
- **H1:** (can differ from title tag)
- **H2 outline:**
  1. [H2 text]
  2. [H2 text]
  3. [H2 text]
  4. [H2 text]
  5. [H2 text]
  6. [H2 text]
- **Word count target:** 1,200–2,500
- **Suggested FAQs:** 3–5 questions
  1. [Q]
  2. [Q]
- **Internal links out:**
  - Up: /services/facial-treatments/anti-aging
  - Down: [service URLs, e.g. /services/collagen-induction-therapy]
  - Sideways: [2–3 sibling article URLs]
  - Lateral: [concern URL if condition-relevant]
- **Image asset:** [existing image path from public/images/blog/ or categories/]
- **Writer notes:** [Essence-specific angles — ingredients, dwell times, team credentials, protocol details]
```

Dispatch subagent if desired; subagent brief:

```
Write ~25 article briefs for the Anti-Aging sub-pillar using the exact template in docs/seo/facial-treatments-topical-authority.md §7.1. Source articles from the §4 URL map (all anti-aging article-new + article-existing-refresh/expand rows).

Each brief must be complete — no "TBD" placeholders. Every field filled. Outline 6-10 H2s that flow logically. Internal links must map to URLs that actually exist in the site OR are planned in the §4 URL map.

Use existing enriched articles in src/content/articles/ as voice reference (e.g., best-facial-for-acne.mdx, custom-facial-chicago.mdx). Essence voice: dark luxury editorial, authoritative, no generic filler.

Pull service details from src/content/services/*.ts when citing ingredients, dwell times, or protocol steps — don't fabricate.
```

- [ ] **Step 2: Write Acne & Clarity briefs (§7.2, ~25 briefs)**

Same process, sub-pillar = acne-clarity, outputs to §7.2.

- [ ] **Step 3: Write Glow & Brightening briefs (§7.3, ~25 briefs)**

Same process, sub-pillar = glow-brightening, outputs to §7.3.

- [ ] **Step 4: Write cross-cluster briefs (§7.4)**

Some articles span multiple sub-pillars (e.g., "how often should you get a facial" is cross-cluster). Write ~5–10 briefs for these, tagged sub-pillar: cross-cluster, outputs to §7.4.

- [ ] **Step 5: Count briefs**

Run `grep -c "^### " docs/seo/facial-treatments-topical-authority.md` filtered to the §7 range. Expected: 75–90 briefs. If < 75, dispatch subagent to add more long-tail briefs. If > 90, move the weakest to a "parking lot" subsection for possible Wave 5+.

- [ ] **Step 6: Verify zero TBD placeholders**

Run: `grep -i "TBD\|TODO\|\\[fill\\|\\[placeholder" docs/seo/facial-treatments-topical-authority.md`

Expected: no matches in §7 (the "zero TBD" success criterion in §8 will match — that's OK). If any matches in briefs, fix inline.

- [ ] **Step 7: Commit**

```bash
git add docs/seo/facial-treatments-topical-authority.md
git commit -m "Strategy doc §7: 75-90 cluster article briefs

Anti-aging, acne-clarity, glow-brightening, and cross-cluster briefs
with full spec per brief. Inputs to Waves 1-4.

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

### Task B9: Write Section 8 — Schema Strategy

- [ ] **Step 1: Document schema per page type**

Write §8:

```markdown
## 8. Schema Strategy

All JSON-LD is rendered via the existing `<JsonLd>` component (src/components/ui/JsonLd.tsx) and schema helpers in src/lib/schema.ts. New schemas added in this plan are additive — existing service/blog schemas remain unchanged.

### 8.1 Hub mega-pillar (/services/facial-treatments)
- `MedicalWebPage` — primary page type (specialty: dermatology)
- `BreadcrumbList` — Home › Services › Facial Treatments
- `ItemList` — list of all 20+ facial services as ListItem entries

### 8.2 Sub-pillar pages (/services/facial-treatments/[subPillar])
- `MedicalWebPage` — specialty: dermatology
- `BreadcrumbList` — Home › Services › Facial Treatments › [Sub-Pillar]
- `FAQPage` — rendered from the sub-pillar's FAQ block

### 8.3 Cluster articles (/blog/[slug])
- `Article` — existing pattern preserved, ensure author + publishDate + image present
- `BreadcrumbList` — Home › Blog › [Category] › [Article]
- `FAQPage` (optional) — when article includes an FAQ section

### 8.4 Service pages (/services/[slug])
- `Service` — existing, unchanged
- `BreadcrumbList` — existing, unchanged

### 8.5 Concern pages (/concerns/[slug])
- `MedicalCondition` or `MedicalWebPage` — existing, verify during implementation
- `BreadcrumbList` — existing

### 8.6 Validation
After Wave 0 deploy, validate all new JSON-LD using:
- Google Rich Results Test (https://search.google.com/test/rich-results)
- Schema.org Validator (https://validator.schema.org/)

Target: zero errors, warnings triaged.
```

- [ ] **Step 2: Commit**

```bash
git add docs/seo/facial-treatments-topical-authority.md
git commit -m "Strategy doc §8: schema strategy per page type

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

### Task B10: Write Section 9 — Phasing Plan

- [ ] **Step 1: Document the 5-wave execution plan**

Copy-paste the 5-wave structure from spec §5 Deliverable 4. Flesh out each wave with:
- Article count target
- Expected session duration (rough estimate)
- Sample articles (3 titles per wave so readers understand the tier)
- Success checkpoint ending each wave

- [ ] **Step 2: Commit**

```bash
git add docs/seo/facial-treatments-topical-authority.md
git commit -m "Strategy doc §9: 5-wave phasing plan

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

### Task B11: Write Section 10 — Measurement Plan

- [ ] **Step 1: Document what/where/cadence**

Write §10:

```markdown
## 10. Measurement Plan

### 10.1 Metrics to track
- **Keyword rankings** — position for head + mid-tail terms (10 tracked keywords per sub-pillar = 30 total)
- **GSC impressions & clicks** — per target keyword, weekly trend
- **Organic sessions** — GA4 traffic to /services/facial-treatments/* and /blog/* (facial-category articles)
- **Internal link count per URL** — computed from the linking graph as a topical-trust-flow proxy, measured monthly
- **Organic bookings** — Vagaro conversion count attributed to organic sessions (requires conversion tracking wiring; flag as dependency)

### 10.2 Baseline (to capture before Wave 1 launches)
- Current GSC queries for `essence-medspa.com` filtered to facial-related terms — export CSV
- Current ranking position for the 30 tracked keywords — manual SERP inspection or Ahrefs if available
- Current internal link count for each of the 11 existing articles — computed by grep

### 10.3 Cadence
- **Weekly:** GSC impressions + rank changes for top-10 tracked keywords
- **Monthly:** full 30-keyword rank report, internal link graph diff, organic traffic to facial pages
- **Per-wave:** publish the wave, wait 4 weeks, run a pulse report to see if the wave moved any tracked metrics before starting the next wave

### 10.4 6-month review
At Wave 4 + 6 months, run a comprehensive review:
- Did ≥ 2 of 3 sub-pillar head terms reach top-10?
- Did ≥ 15 long-tail terms reach top-3?
- Did organic bookings attributed to facial content increase?
- If NO on any: re-examine keyword targeting / cluster density / link graph (spec §8 hypothesis test)
```

- [ ] **Step 2: Commit**

```bash
git add docs/seo/facial-treatments-topical-authority.md
git commit -m "Strategy doc §10: measurement plan (metrics, baseline, cadence)

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

### Task B12: Final strategy-doc review

- [ ] **Step 1: Read the full doc end-to-end**

Read `docs/seo/facial-treatments-topical-authority.md` from top to bottom. Verify:
- All 10 sections populated
- 75–90 briefs in §7 with zero TBDs
- Link graph in §6 has no orphans
- URL map in §4 balances to P0 + P1 + P2 ≈ total article count
- Executive summary in §1 accurately reflects the rest of the doc

- [ ] **Step 2: Fix any inconsistencies inline**

If any section contradicts another, fix it (not both — pick one and make it authoritative).

- [ ] **Step 3: Commit any fixes**

```bash
git add docs/seo/facial-treatments-topical-authority.md
git commit -m "Strategy doc: final consistency review pass

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

---

## Phase C — Hub Pillar Upgrade

Upgrade `/services/facial-treatments` from hub-grade to pillar-grade content (3,000–4,000 words), and restructure routing so sub-pillars can nest under it.

### Task C1: Create sub-pillar TypeScript types

**Files:**
- Create: `src/types/sub-pillar.ts`

- [ ] **Step 1: Write the sub-pillar type**

Write to `src/types/sub-pillar.ts`:

```typescript
// src/types/sub-pillar.ts
// Content contract for facial-treatments sub-pillar pages

import type { SEOMeta, CTA, ImageAsset, FAQItem, ServiceCard } from "@/types/content";

export interface SubPillarSectionBlock {
  eyebrow?: string;
  headline: string;
  body: string; // supports markdown-style paragraph breaks (\n\n)
}

export interface SubPillarClusterCard {
  title: string;
  excerpt: string;
  href: string; // /blog/[slug] or placeholder if article not yet published
  image?: ImageAsset;
  published: boolean; // false until Wave 1-4 lands the article
}

export interface SubPillarContent {
  slug: string; // "anti-aging" | "acne-clarity" | "glow-brightening"
  seo: SEOMeta;
  hero: {
    eyebrow: string;
    headline: string;
    subheadline: string;
    primaryCTA: CTA;
    secondaryCTA?: CTA;
    image?: ImageAsset;
  };
  problemDefinition: SubPillarSectionBlock; // 200-300 words
  scienceBlock: SubPillarSectionBlock; // 300-400 words
  treatmentLandscape: SubPillarSectionBlock; // 400-500 words
  essenceApproach: SubPillarSectionBlock; // 300-400 words
  relatedServices: ServiceCard[]; // 6-8 services
  relatedConcerns: Array<{
    title: string;
    href: string; // /concerns/[slug]
    excerpt: string;
  }>;
  clusterCards: SubPillarClusterCard[]; // 8-10 top articles in this cluster
  faqs: FAQItem[]; // 15+ questions
  closingCTA: {
    headline: string;
    subheadline: string;
    primaryCTA: CTA;
    secondaryCTA?: CTA;
  };
  parentHub: {
    title: string;
    href: string; // /services/facial-treatments
  };
}
```

- [ ] **Step 2: Verify types compile**

Run: `npx tsc --noEmit`
Expected: exits with 0, no type errors introduced.

- [ ] **Step 3: Commit**

```bash
git add src/types/sub-pillar.ts
git commit -m "Add SubPillarContent type for facial-treatments sub-pillars

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

### Task C2: Create sub-pillar content lookup helpers

**Files:**
- Create: `src/lib/sub-pillars.ts`

- [ ] **Step 1: Write the lookup module**

Write to `src/lib/sub-pillars.ts`:

```typescript
// src/lib/sub-pillars.ts
// Lookup helpers for facial-treatments sub-pillar content

import type { SubPillarContent } from "@/types/sub-pillar";

// Static imports — every sub-pillar must be registered here
import { antiAgingSubPillar } from "@/content/sub-pillars/anti-aging";
import { acneClaritySubPillar } from "@/content/sub-pillars/acne-clarity";
import { glowBrighteningSubPillar } from "@/content/sub-pillars/glow-brightening";

const SUB_PILLARS: Record<string, SubPillarContent> = {
  "anti-aging": antiAgingSubPillar,
  "acne-clarity": acneClaritySubPillar,
  "glow-brightening": glowBrighteningSubPillar,
};

export function getAllSubPillarSlugs(): string[] {
  return Object.keys(SUB_PILLARS);
}

export function getSubPillarBySlug(slug: string): SubPillarContent | undefined {
  return SUB_PILLARS[slug];
}
```

- [ ] **Step 2: Note — this will fail type-check until Task D1/D2/D3 land**

The imports reference files that don't exist yet. Mark as expected. The build will not be run until all sub-pillar content files exist.

- [ ] **Step 3: Commit (with broken state OK — will fix in Task D)**

```bash
git add src/lib/sub-pillars.ts
git commit -m "Add sub-pillar lookup helpers (content files pending)

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

### Task C3: Restructure routing — create literal facial-treatments directory

Currently `/services/facial-treatments` is served by `src/app/services/[slug]/page.tsx`. To allow nested `[subPillar]` routes, we need a literal directory that takes precedence.

**Files:**
- Create: `src/app/services/facial-treatments/page.tsx`
- Modify: `src/app/services/[slug]/page.tsx` (exclude `facial-treatments` from generateStaticParams)

- [ ] **Step 1: Copy the rendering logic for the hub path**

Read the current `src/app/services/[slug]/page.tsx` to identify the hub-rendering branch (the code path triggered when `getHubBySlug(slug)` returns a hub). Extract this branch's rendering into a new reusable function OR create a new file that calls the hub helpers directly.

- [ ] **Step 2: Create `src/app/services/facial-treatments/page.tsx`**

Write:

```tsx
// src/app/services/facial-treatments/page.tsx
// Literal route for the facial-treatments hub. Created to allow /services/facial-treatments/[subPillar]
// nested routes while preserving hub content rendering at /services/facial-treatments.

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getHubBySlug } from "@/lib/content";
import { site } from "@/content/global/site";
// Import the same section components used in the dynamic [slug] route for hubs
import { HeroSection } from "@/components/sections/HeroSection";
import { HubServicesList } from "@/components/sections/HubServicesList";
import { CTASection } from "@/components/sections/CTASection";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { JsonLd } from "@/components/ui/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

const SLUG = "facial-treatments";

export async function generateMetadata(): Promise<Metadata> {
  const hub = getHubBySlug(SLUG);
  if (!hub) return {};
  const { seo } = hub;
  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    alternates: { canonical: seo.canonical ?? `${site.url}/services/${SLUG}` },
    openGraph: {
      title: seo.title,
      description: seo.description,
      url: seo.canonical ?? `${site.url}/services/${SLUG}`,
      images: seo.ogImage ? [seo.ogImage] : undefined,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description,
      images: seo.ogImage ? [seo.ogImage] : undefined,
    },
  };
}

export default function FacialTreatmentsHubPage() {
  const hub = getHubBySlug(SLUG);
  if (!hub) notFound();

  // Render the same section composition the dynamic [slug] route uses for hubs.
  // The hub content file (src/content/hubs/facial-treatments.ts) will be upgraded
  // in Task C5 to include the new pillar-grade sections (subPillars, localSignals, faqs, etc).
  return (
    <>
      <HeroSection content={hub.hero} />
      {/* Additional sections will be composed here per the upgraded hub content file.
          The upgraded content file adds: subPillarCards, introDeep, localSignals, pillarFaqs. */}
      <HubServicesList services={hub.services} />
      {hub.faqs && <FAQAccordion items={hub.faqs} />}
      <CTASection content={hub.ctaSection} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: site.url },
          { name: "Services", url: `${site.url}/services` },
          { name: "Facial Treatments", url: `${site.url}/services/${SLUG}` },
        ])}
      />
    </>
  );
}
```

**Note:** The exact section composition depends on what sections the upgraded hub content file (Task C5) adds. Adjust this file when C5 lands.

- [ ] **Step 3: Exclude facial-treatments from [slug] generateStaticParams**

Edit `src/app/services/[slug]/page.tsx`. Find the `generateStaticParams` function and exclude the `facial-treatments` slug from the hub list:

```typescript
export async function generateStaticParams() {
  return [
    ...getAllServiceSlugs().map((slug) => ({ slug })),
    ...getAllHubSlugs()
      .filter((slug) => slug !== "facial-treatments") // served by literal route
      .map((slug) => ({ slug })),
  ];
}
```

- [ ] **Step 4: Run build**

Run: `npm run build`
Expected: build succeeds, 133 pages (one is now served by the literal route, net-zero change).

If build fails:
- Typescript errors in the new page.tsx — fix the imports / section composition
- "Module not found: @/content/sub-pillars/..." — this is Task C2's known broken state; comment out the sub-pillar imports in `src/lib/sub-pillars.ts` temporarily, or skip ahead to Task D1–D3 first

- [ ] **Step 5: Smoke-test the route**

Run: `npm run dev`
Open: http://localhost:3000/services/facial-treatments
Expected: hub page renders identically to the pre-change version.

Stop the dev server.

- [ ] **Step 6: Commit**

```bash
git add src/app/services/facial-treatments/page.tsx src/app/services/\[slug\]/page.tsx
git commit -m "Move /services/facial-treatments to literal route

Prep for nested [subPillar] routes. Hub content unchanged; route behavior
preserved via same hub helpers.

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

### Task C4: Extend hub content schema for pillar-grade sections

**Files:**
- Modify: `src/types/content.ts` (extend Hub type if needed)
- Modify: `src/content/hubs/facial-treatments.ts` (upgrade content)

- [ ] **Step 1: Inspect current Hub type**

Read `src/types/content.ts` and locate the `Hub` / `HubContent` type. Note what fields already exist (hero, intro, services, ctaSection likely).

- [ ] **Step 2: Extend Hub type with pillar-grade fields**

Add (or update) the Hub type to include:

```typescript
// Add to existing Hub type
export interface HubContent {
  // ...existing fields...
  subPillarCards?: Array<{
    title: string;
    tagline: string;
    description: string;
    href: string; // /services/facial-treatments/anti-aging etc.
    image?: ImageAsset;
  }>;
  localSignals?: {
    eyebrow?: string;
    headline: string;
    body: string;
  };
  deepIntro?: {
    eyebrow?: string;
    headline: string;
    body: string; // 250-300 words — "what makes Essence's approach different"
  };
  pillarFaqs?: FAQItem[]; // 10+ FAQs for the hub page specifically
  teamSection?: {
    eyebrow?: string;
    headline: string;
    body: string;
    ctaHref: string; // /about
  };
}
```

- [ ] **Step 3: Run typecheck**

Run: `npx tsc --noEmit`
Expected: 0 errors. If existing `facial-treatments.ts` is missing new fields, that's fine — they're optional (`?`).

- [ ] **Step 4: Commit**

```bash
git add src/types/content.ts
git commit -m "Extend HubContent type for pillar-grade sections

Adds optional subPillarCards, localSignals, deepIntro, pillarFaqs,
teamSection for hub pages being upgraded to pillar-grade.

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

### Task C5: Upgrade facial-treatments hub content to pillar-grade

**Files:**
- Modify: `src/content/hubs/facial-treatments.ts`

Target: 3,000–4,000 words across all content fields. Existing content stays; new sections added.

- [ ] **Step 1: Draft the deepIntro section (250–300 words)**

Write `deepIntro`:

```typescript
export const deepIntro = {
  eyebrow: "The Essence Approach",
  headline: "Medical-grade facials, tailored to your skin",
  body: "[250-300 words explaining why Essence facials differ: licensed esthetician assessment, medical-grade products (ZO Skin Health, Dermaquest, custom peels), protocol depth, consultation-first approach, skin-type personalization, Jefferson Park local expertise. Pull voice cues from existing articles like custom-facial-chicago.mdx. Concrete details only — no generic claims.]",
};
```

Write the actual 250–300 words, not the bracket placeholder. Reference existing articles in `src/content/articles/` for voice; reference existing service files for product/protocol specifics.

- [ ] **Step 2: Draft the subPillarCards (3 cards)**

```typescript
export const subPillarCards = [
  {
    title: "Anti-Aging Facials",
    tagline: "Reverse the clock on collagen loss",
    description: "[80-100 word description bridging hub → sub-pillar 1. Cover what it solves, who it's for, what makes Essence's approach distinct. Link sentiment: 'Learn more about our anti-aging protocols →']",
    href: "/services/facial-treatments/anti-aging",
    image: { src: "/images/hubs/facial-treatments-hero.jpg", alt: "Anti-aging facial at Essence Medspa Chicago" },
  },
  {
    title: "Acne & Clarity Facials",
    tagline: "Break the breakout cycle",
    description: "[80-100 words]",
    href: "/services/facial-treatments/acne-clarity",
    image: { src: "/images/categories/facial-treatments.jpg", alt: "Acne facial at Essence Medspa Chicago" },
  },
  {
    title: "Glow & Brightening Facials",
    tagline: "Radiance, restored",
    description: "[80-100 words]",
    href: "/services/facial-treatments/glow-brightening",
    image: { src: "/images/blog/best-facial-for-acne.jpg", alt: "Brightening facial at Essence Medspa Chicago" },
  },
];
```

Write the real 80–100-word descriptions, not placeholders.

- [ ] **Step 3: Draft localSignals section (200–300 words)**

```typescript
export const localSignals = {
  eyebrow: "Chicago · Jefferson Park",
  headline: "Chicago's most trusted facial treatment destination",
  body: "[200-300 words covering: Jefferson Park location (Milwaukee Ave & Lawrence), 5 years in business, 463 Google reviews · 4.9 stars, multilingual staff (English/Polish/Spanish likely), proximity to Edgebrook/Portage Park/Norwood Park, client base depth, free parking, public transit access (Blue Line), neighborhood-specific skincare considerations (Chicago winters, dry heating, summer humidity). Use real Essence details — don't fabricate.]",
};
```

Pull real details from `src/content/global/site.ts` and any existing about/location content.

- [ ] **Step 4: Draft pillarFaqs (12+ FAQs)**

Write 12+ FAQ items hitting high-PAA-volume questions from the Anti-Aging + Acne + Glow SERPs (from Phase A research). Examples:

```typescript
export const pillarFaqs: FAQItem[] = [
  { question: "How often should I get a professional facial?", answer: "[150-250 word evidence-backed answer]" },
  { question: "What's the difference between a facial and a chemical peel?", answer: "..." },
  { question: "How do I choose the right facial for my skin type?", answer: "..." },
  { question: "Are facials safe during pregnancy?", answer: "..." },
  { question: "Can I get a facial if I have active acne?", answer: "..." },
  { question: "How much do facials cost in Chicago?", answer: "..." },
  { question: "What should I do before a facial appointment?", answer: "..." },
  { question: "What should I avoid doing after a facial?", answer: "..." },
  { question: "Are at-home facials as effective as professional ones?", answer: "..." },
  { question: "How long do facial results last?", answer: "..." },
  { question: "Can facials help with dark spots and hyperpigmentation?", answer: "..." },
  { question: "At what age should I start getting facials?", answer: "..." },
];
```

Write the full 150–250-word answers, not placeholders. Link to relevant service or sub-pillar pages within answers where natural (e.g., "[microneedling treatment](/services/rf-microneedling-facial)").

- [ ] **Step 5: Draft teamSection (100–150 words)**

```typescript
export const teamSection = {
  eyebrow: "Your Aesthetician",
  headline: "Licensed. Experienced. Personally invested in your skin.",
  body: "[100-150 words about the team credentials — pull from src/content/pages/about.ts if team data exists there. Concrete: licenses held, years of experience, specializations, continued-ed credentials, why they chose aesthetics.]",
  ctaHref: "/about",
};
```

- [ ] **Step 6: Wire new sections into the hub render path**

Edit `src/app/services/facial-treatments/page.tsx` from Task C3 to compose the new sections. Example render order:

```tsx
<HeroSection content={hub.hero} />
{hub.deepIntro && <DeepIntroSection content={hub.deepIntro} />}
{hub.subPillarCards && <SubPillarCardsSection cards={hub.subPillarCards} />}
<HubServicesList services={hub.services} />
{hub.localSignals && <LocalSignalsSection content={hub.localSignals} />}
{hub.teamSection && <TeamCTASection content={hub.teamSection} />}
{hub.pillarFaqs && <FAQAccordion items={hub.pillarFaqs} />}
<CTASection content={hub.ctaSection} />
```

If `DeepIntroSection`, `SubPillarCardsSection`, `LocalSignalsSection`, `TeamCTASection` components don't exist yet, create minimal versions in `src/components/sections/`. Each is ~40–60 lines of TSX using existing Tailwind utilities and design system classes (`.eyebrow`, canonical opacity scale, red/gold roles).

- [ ] **Step 7: Run build**

Run: `npm run build`
Expected: succeeds. If type errors in the hub content file, verify all new field shapes match the Hub type extension from Task C4.

- [ ] **Step 8: Smoke-test the page**

Run: `npm run dev`
Open: http://localhost:3000/services/facial-treatments
Expected: page renders with all new sections visible. Word count of rendered prose ≥ 3,000.

Stop dev server.

- [ ] **Step 9: Count words**

Count the word count of the visible prose on the rendered page (intro + deepIntro + subPillarCards descriptions + localSignals + teamSection + pillarFaq answers). Expected: ≥ 3,000. If under, expand the weakest section.

- [ ] **Step 10: Commit**

```bash
git add src/content/hubs/facial-treatments.ts src/app/services/facial-treatments/page.tsx src/components/sections/
git commit -m "Upgrade facial-treatments hub to pillar-grade content

Adds deepIntro, subPillarCards (3), localSignals, teamSection, and
12+ pillarFaqs. Total content ~3,000+ words. Wires new sections into
the literal route added in prior commit.

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

---

## Phase D — Sub-Pillar Pages

Create 3 sub-pillar pages at `/services/facial-treatments/[subPillar]`.

### Task D1: Write anti-aging sub-pillar content

**Files:**
- Create: `src/content/sub-pillars/anti-aging.ts`

Target: 2,500–3,500 words across all content fields.

- [ ] **Step 1: Write the full content file**

Write to `src/content/sub-pillars/anti-aging.ts`:

```typescript
// src/content/sub-pillars/anti-aging.ts
// Facial Treatments → Anti-Aging sub-pillar content

import type { SubPillarContent } from "@/types/sub-pillar";

export const antiAgingSubPillar: SubPillarContent = {
  slug: "anti-aging",
  seo: {
    title: "Anti-Aging Facials Chicago | Collagen + Firming Treatments | Essence Medspa",
    description: "[≤155 chars: Licensed estheticians, medical-grade anti-aging facials in Jefferson Park. RF microneedling, collagen induction, firming treatments. Book now.]",
    keywords: ["anti-aging facial Chicago", "collagen facial Chicago", "firming facial Jefferson Park", "RF microneedling Chicago", "skin tightening Chicago"],
    canonical: "https://www.essence-medspa.com/services/facial-treatments/anti-aging",
    ogImage: "/images/hubs/facial-treatments-hero.jpg",
  },
  hero: {
    eyebrow: "Facial Treatments · Anti-Aging",
    headline: "Anti-Aging Facials That Actually Work",
    subheadline: "[100-150 word subheadline: What anti-aging facials really do (stimulate collagen, restore firmness, reverse photoaging), what they can't do (replace in-office neurotoxin/filler for deep wrinkles), and why Essence's approach outperforms home routines.]",
    primaryCTA: { text: "Book an Anti-Aging Facial", href: "https://www.vagaro.com/essencemedspaandwellnesscenter/book-now", variant: "primary" },
    secondaryCTA: { text: "Call (773) 763-1212", href: "tel:+17737631212", variant: "outline" },
    image: { src: "/images/hubs/facial-treatments-hero.jpg", alt: "Anti-aging facial treatment at Essence Medspa Chicago" },
  },
  problemDefinition: {
    eyebrow: "The Problem",
    headline: "Why skin ages — and why it's not just about wrinkles",
    body: "[200-300 words. Layman's-terms definition of skin aging: collagen loss (1% per year after 25), elastin degradation, glycation, photoaging vs chronological aging, volume loss, bone resorption. Non-technical but accurate. Reference 3-4 real terms, not dozens.]",
  },
  scienceBlock: {
    eyebrow: "The Science",
    headline: "How anti-aging facials actually work",
    body: "[300-400 words. Mechanism-level detail: RF microneedling → controlled micro-injury → wound-healing cascade → fibroblast activation → new collagen at 4-6 weeks. Vitamin C → fibroblast stimulation + antioxidant defense. Peptides → signaling. Retinoids → cell turnover. Peels → controlled desquamation. Cite 3-4 specific ingredients/modalities Essence uses. Not generic — grounded in what actually happens in the skin.]",
  },
  treatmentLandscape: {
    eyebrow: "The Landscape",
    headline: "What works, what doesn't, what to ignore",
    body: "[400-500 words. Honest assessment of anti-aging options: professional facials (what they do + limits), topical skincare (solid evidence for retinoids/Vitamin C/sunscreen, weaker for most \"collagen-boosting\" drugstore creams), devices (LED, microcurrent — modest gains), injectables (crossover territory — Essence refers or handles in-house), lifestyle (sunscreen, sleep, no smoking, nutrition). Honest — don't oversell. End with: \"And this is where facials fit in.\"]",
  },
  essenceApproach: {
    eyebrow: "Our Approach",
    headline: "How we build an anti-aging plan at Essence",
    body: "[300-400 words. Essence-specific: licensed esthetician assessment first, matching skin type + goals + downtime tolerance to protocol, starting with less aggressive treatments, building to RF microneedling or Jet Plasma for clients ready for more, home-care integration, 6-treatment package structure, results expectation-setting. Pull real details from src/content/services/collagen-induction-therapy.ts, firming-facial.ts, red-carpet-collagen-facial.ts.]",
  },
  relatedServices: [
    // 6-8 service cards pulled/adapted from src/content/hubs/facial-treatments.ts services array
    // Anti-aging specific: collagen-induction-therapy, firming-facial, red-carpet-collagen-facial,
    // essence-signature-facelift-facial, 4d-face-lifting-massage, face-lifting-gua-sha,
    // collagen-eye-contour, rf-microneedling-facial (if present)
    // Format matches ServiceCard type exactly.
  ],
  relatedConcerns: [
    {
      title: "Wrinkles & Fine Lines",
      href: "/concerns/wrinkles-fine-lines",
      excerpt: "[40-60 word excerpt from the concern page or a fresh summary]",
    },
    {
      title: "Hollow Under-Eyes",
      href: "/concerns/hollow-under-eyes",
      excerpt: "[40-60 word excerpt]",
    },
  ],
  clusterCards: [
    // 8-10 top articles planned for this sub-pillar. Pull from strategy doc §7.1 briefs.
    // For each: title, excerpt, href (may be placeholder /blog/[slug] if not yet published),
    // image, published: false (flip to true after Wave 1-4 lands the article).
    // Example:
    {
      title: "What Is RF Microneedling and How Does It Work?",
      excerpt: "[60-80 word excerpt]",
      href: "/blog/rf-microneedling-explained",
      image: { src: "/images/blog/radiofrequency-facial-chicago.jpg", alt: "RF microneedling device" },
      published: false,
    },
    // ... 7-9 more
  ],
  faqs: [
    // 15+ FAQs drawn from Anti-Aging Phase A PAA harvest
    { question: "What's the best anti-aging facial?", answer: "[150-250 word answer]" },
    { question: "At what age should I start anti-aging facials?", answer: "..." },
    { question: "Do anti-aging facials really work?", answer: "..." },
    { question: "How often should I get an anti-aging facial?", answer: "..." },
    { question: "RF microneedling vs. Morpheus8 — what's the difference?", answer: "..." },
    { question: "How much does an anti-aging facial cost in Chicago?", answer: "..." },
    { question: "How long do anti-aging facial results last?", answer: "..." },
    { question: "Is there downtime after RF microneedling?", answer: "..." },
    { question: "Can I wear makeup after an anti-aging facial?", answer: "..." },
    { question: "Anti-aging facial vs. Botox — which do I need?", answer: "..." },
    { question: "Are anti-aging facials safe during pregnancy?", answer: "..." },
    { question: "What's the difference between firming and lifting facials?", answer: "..." },
    { question: "How soon before an event should I get an anti-aging facial?", answer: "..." },
    { question: "Can anti-aging facials reverse sun damage?", answer: "..." },
    { question: "What ingredients actually fight aging?", answer: "..." },
  ],
  closingCTA: {
    headline: "Ready to rewrite your skin's aging timeline?",
    subheadline: "Book a consultation with our licensed esthetician. We'll assess your skin and build an anti-aging plan tailored to your goals, your downtime tolerance, and your budget.",
    primaryCTA: { text: "Book a Consultation", href: "https://www.vagaro.com/essencemedspaandwellnesscenter/book-now", variant: "primary" },
    secondaryCTA: { text: "Call (773) 763-1212", href: "tel:+17737631212", variant: "outline" },
  },
  parentHub: {
    title: "Facial Treatments",
    href: "/services/facial-treatments",
  },
};
```

Fill in every bracketed `[...]` with the real written content. No placeholders remain.

Dispatch subagent brief for the writing work:

```
Write the complete src/content/sub-pillars/anti-aging.ts content file.

Sources:
- Scaffolding template: docs/superpowers/plans/2026-04-21-facial-treatments-topical-authority-wave-0.md Task D1 Step 1
- Voice reference: src/content/articles/custom-facial-chicago.mdx, best-facial-for-acne.mdx
- Service details: src/content/services/collagen-induction-therapy.ts, firming-facial.ts, red-carpet-collagen-facial.ts, essence-signature-facelift-facial.ts, 4d-face-lifting-massage.ts
- Concern page content: src/content/concerns/wrinkles-fine-lines.ts, hollow-under-eyes.ts
- Keyword research: docs/seo/research/anti-aging-serp.md
- Strategy doc briefs: docs/seo/facial-treatments-topical-authority.md §7.1

Requirements:
- Every bracketed [...] placeholder replaced with real prose
- Word count total ≥ 2,500
- Essence voice: dark luxury editorial, authoritative, no filler
- No fabricated service claims — use only what's in existing service content files or flagged in PROJECT_STATUS.md §3.3 pending-review
- FAQ answers 150-250 words each
- All internal links point to existing URLs OR URLs in the strategy doc §4 URL map
- Matches SubPillarContent type exactly (src/types/sub-pillar.ts)
```

- [ ] **Step 2: Run typecheck**

Run: `npx tsc --noEmit`
Expected: 0 errors. Common errors: missing required field, typo in field name, wrong nested shape. Fix inline.

- [ ] **Step 3: Count words**

Count words in the content file's string values (hero.subheadline + all SectionBlock bodies + all FAQ answers). Expected: ≥ 2,500.

- [ ] **Step 4: Commit**

```bash
git add src/content/sub-pillars/anti-aging.ts
git commit -m "Add anti-aging sub-pillar content (~2,500 words)

Wave 0 deliverable: full pillar-grade content covering problem
definition, science, treatment landscape, Essence approach,
15 FAQs, 8-10 cluster cards, related services + concerns.

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

### Task D2: Write acne-clarity sub-pillar content

**Files:**
- Create: `src/content/sub-pillars/acne-clarity.ts`

Mirror the exact structure of Task D1 Step 1, changing:
- `slug: "acne-clarity"`
- `seo.title`, `seo.description`, `seo.keywords`, `seo.canonical` — acne/clarity focused
- All section bodies rewritten for acne/clarity topic
- `relatedServices`: acne-facial, deep-pore-cleansing-facial, custom-facial, custom-peel, back-facial, back-microdermabrasion, back-stimulator-peel, teen-facial
- `relatedConcerns`: acne-texture
- `clusterCards`: from strategy doc §7.2
- `faqs`: 15+ from Acne & Clarity PAA harvest

- [ ] **Step 1: Write content file**

Dispatch subagent (same brief as D1 Step 1 but for acne-clarity).

- [ ] **Step 2: Typecheck + word count + commit**

Same verification + commit pattern as D1 Steps 2–4. Commit message: "Add acne-clarity sub-pillar content (~2,500 words)".

### Task D3: Write glow-brightening sub-pillar content

**Files:**
- Create: `src/content/sub-pillars/glow-brightening.ts`

Mirror D1/D2 structure, customized for glow/brightening:
- `relatedServices`: brightening-facial, oxygen-facial, hydrofacial, glutathione-brightening, custom-peel, essence-signature-facelift-peel
- `relatedConcerns`: dull-tired-skin, dark-spots
- `clusterCards`: from strategy doc §7.3
- `faqs`: 15+ from Glow & Brightening PAA harvest

- [ ] **Step 1: Write content file**

Dispatch subagent.

- [ ] **Step 2: Typecheck + word count + commit**

Same pattern. Commit: "Add glow-brightening sub-pillar content (~2,500 words)".

### Task D4: Build SubPillarTemplate component

**Files:**
- Create: `src/components/sections/SubPillarTemplate.tsx`

- [ ] **Step 1: Write the template component**

Write to `src/components/sections/SubPillarTemplate.tsx`:

```tsx
// src/components/sections/SubPillarTemplate.tsx
// Reusable sub-pillar page body for /services/facial-treatments/[subPillar]

import type { SubPillarContent } from "@/types/sub-pillar";
import { HeroSection } from "@/components/sections/HeroSection";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { CTASection } from "@/components/sections/CTASection";
import { RelatedServices } from "@/components/sections/RelatedServices";
import { Headline } from "@/components/ui/Headline";
import { Reveal } from "@/components/ui/Reveal";
import Link from "next/link";
import Image from "next/image";

interface Props {
  content: SubPillarContent;
}

export function SubPillarTemplate({ content }: Props) {
  return (
    <>
      {/* Breadcrumb strip */}
      <nav className="border-b border-white/10 py-4 px-6 text-sm" aria-label="Breadcrumb">
        <ol className="max-w-7xl mx-auto flex gap-2 text-white/60">
          <li><Link href="/" className="hover:text-essence-accent">Home</Link></li>
          <li>·</li>
          <li><Link href="/services" className="hover:text-essence-accent">Services</Link></li>
          <li>·</li>
          <li><Link href={content.parentHub.href} className="hover:text-essence-accent">{content.parentHub.title}</Link></li>
          <li>·</li>
          <li className="text-white">{content.hero.headline}</li>
        </ol>
      </nav>

      <HeroSection content={content.hero} />

      {/* Problem Definition */}
      <section className="py-32 px-6 bg-essence-soft">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            {content.problemDefinition.eyebrow && <p className="eyebrow mb-4">{content.problemDefinition.eyebrow}</p>}
            <Headline className="mb-8">{content.problemDefinition.headline}</Headline>
            <div className="prose prose-invert prose-lg max-w-none">
              {content.problemDefinition.body.split("\n\n").map((p, i) => <p key={i}>{p}</p>)}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Science Block */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            {content.scienceBlock.eyebrow && <p className="eyebrow mb-4">{content.scienceBlock.eyebrow}</p>}
            <Headline className="mb-8">{content.scienceBlock.headline}</Headline>
            <div className="prose prose-invert prose-lg max-w-none">
              {content.scienceBlock.body.split("\n\n").map((p, i) => <p key={i}>{p}</p>)}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Treatment Landscape */}
      <section className="py-32 px-6 bg-essence-soft">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            {content.treatmentLandscape.eyebrow && <p className="eyebrow mb-4">{content.treatmentLandscape.eyebrow}</p>}
            <Headline className="mb-8">{content.treatmentLandscape.headline}</Headline>
            <div className="prose prose-invert prose-lg max-w-none">
              {content.treatmentLandscape.body.split("\n\n").map((p, i) => <p key={i}>{p}</p>)}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Essence Approach */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            {content.essenceApproach.eyebrow && <p className="eyebrow mb-4">{content.essenceApproach.eyebrow}</p>}
            <Headline className="mb-8">{content.essenceApproach.headline}</Headline>
            <div className="prose prose-invert prose-lg max-w-none">
              {content.essenceApproach.body.split("\n\n").map((p, i) => <p key={i}>{p}</p>)}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Related Services */}
      <RelatedServices services={content.relatedServices} />

      {/* Related Concerns */}
      <section className="py-32 px-6 bg-essence-soft">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <p className="eyebrow mb-4">Related Concerns</p>
            <Headline className="mb-12">Skin concerns we address</Headline>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-8">
            {content.relatedConcerns.map((concern) => (
              <Reveal key={concern.href}>
                <Link href={concern.href} className="block group p-8 border border-white/10 hover:border-essence-accent transition-colors duration-300">
                  <h3 className="text-2xl font-display mb-3 group-hover:text-essence-accent">{concern.title}</h3>
                  <p className="text-white/70">{concern.excerpt}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Cluster Cards (top articles in this sub-pillar) */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <p className="eyebrow mb-4">Deep Dive</p>
            <Headline className="mb-12">Learn more</Headline>
          </Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {content.clusterCards.filter((c) => c.published).map((card) => (
              <Reveal key={card.href}>
                <Link href={card.href} className="block group">
                  {card.image && (
                    <div className="aspect-[4/3] overflow-hidden mb-4">
                      <Image src={card.image.src} alt={card.image.alt} width={600} height={450} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                  )}
                  <h3 className="text-xl font-display mb-2 group-hover:text-essence-accent">{card.title}</h3>
                  <p className="text-white/70 text-sm">{card.excerpt}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQAccordion items={content.faqs} />

      {/* Closing CTA */}
      <CTASection content={content.closingCTA} />
    </>
  );
}
```

- [ ] **Step 2: Typecheck**

Run: `npx tsc --noEmit`
Expected: 0 errors. If `RelatedServices` prop shape doesn't match, adapt the component call. If `Headline` / `Reveal` / `CTASection` props differ, adjust.

- [ ] **Step 3: Commit**

```bash
git add src/components/sections/SubPillarTemplate.tsx
git commit -m "Add SubPillarTemplate section component

Reusable body for sub-pillar pages. Composes: breadcrumb, hero,
problem/science/landscape/approach blocks, related services,
related concerns, cluster cards, FAQ, CTA.

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

### Task D5: Create sub-pillar dynamic route

**Files:**
- Create: `src/app/services/facial-treatments/[subPillar]/page.tsx`

- [ ] **Step 1: Write the route file**

Write to `src/app/services/facial-treatments/[subPillar]/page.tsx`:

```tsx
// src/app/services/facial-treatments/[subPillar]/page.tsx

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllSubPillarSlugs, getSubPillarBySlug } from "@/lib/sub-pillars";
import { site } from "@/content/global/site";
import { SubPillarTemplate } from "@/components/sections/SubPillarTemplate";
import { JsonLd } from "@/components/ui/JsonLd";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";

interface PageProps {
  params: Promise<{ subPillar: string }>;
}

export async function generateStaticParams() {
  return getAllSubPillarSlugs().map((subPillar) => ({ subPillar }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { subPillar } = await params;
  const content = getSubPillarBySlug(subPillar);
  if (!content) return {};
  const { seo } = content;
  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    alternates: { canonical: seo.canonical ?? `${site.url}/services/facial-treatments/${subPillar}` },
    openGraph: {
      title: seo.title,
      description: seo.description,
      url: seo.canonical ?? `${site.url}/services/facial-treatments/${subPillar}`,
      images: seo.ogImage ? [seo.ogImage] : undefined,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description,
      images: seo.ogImage ? [seo.ogImage] : undefined,
    },
  };
}

export default async function SubPillarPage({ params }: PageProps) {
  const { subPillar } = await params;
  const content = getSubPillarBySlug(subPillar);
  if (!content) notFound();

  return (
    <>
      <SubPillarTemplate content={content} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: site.url },
          { name: "Services", url: `${site.url}/services` },
          { name: "Facial Treatments", url: `${site.url}/services/facial-treatments` },
          { name: content.hero.headline, url: `${site.url}/services/facial-treatments/${subPillar}` },
        ])}
      />
      <JsonLd data={faqSchema(content.faqs)} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "MedicalWebPage",
          name: content.seo.title,
          description: content.seo.description,
          url: `${site.url}/services/facial-treatments/${subPillar}`,
          about: { "@type": "MedicalProcedure", name: content.hero.headline },
          specialty: "Dermatology",
        }}
      />
    </>
  );
}
```

- [ ] **Step 2: Verify schema helpers exist**

Check that `breadcrumbSchema` and `faqSchema` exist in `src/lib/schema.ts`. Open the file and confirm. If `faqSchema` doesn't exist, add it:

```typescript
// src/lib/schema.ts (append if missing)
import type { FAQItem } from "@/types/content";

export function faqSchema(items: FAQItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}
```

- [ ] **Step 3: Run build**

Run: `npm run build`
Expected: succeeds with 3 new pages in the sitemap:
- /services/facial-treatments/anti-aging
- /services/facial-treatments/acne-clarity
- /services/facial-treatments/glow-brightening

Total pages should be 133 + 3 = 136.

If build fails:
- Type errors: reconcile `SubPillarContent` shape and the template's prop expectations
- Missing imports: fix paths

- [ ] **Step 4: Smoke-test each route**

Run: `npm run dev`
Open in browser:
- http://localhost:3000/services/facial-treatments/anti-aging
- http://localhost:3000/services/facial-treatments/acne-clarity
- http://localhost:3000/services/facial-treatments/glow-brightening

Expected for each: page renders with all sections (hero, problem, science, landscape, approach, services, concerns, cluster cards, FAQ, CTA), no console errors, breadcrumb nav works.

Stop dev server.

- [ ] **Step 5: Validate schema**

For each of the 3 URLs, copy the rendered page source's JSON-LD blocks into https://validator.schema.org/ (manual). Expected: zero errors.

- [ ] **Step 6: Commit**

```bash
git add src/app/services/facial-treatments/\[subPillar\]/ src/lib/schema.ts
git commit -m "Add sub-pillar dynamic route + JSON-LD schema

3 sub-pillar pages now live at /services/facial-treatments/[anti-aging|acne-clarity|glow-brightening].
Each renders SubPillarTemplate with MedicalWebPage + BreadcrumbList + FAQPage schema.

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

---

## Phase E — Existing Content Refresh (audit-driven)

Execute the audit verdicts from Task A5.

### Task E1: Execute "refresh" verdicts

**Files:**
- Modify: each article in `src/content/articles/` flagged `refresh` in the audit

- [ ] **Step 1: Extract the list of refresh articles**

Read `docs/seo/research/existing-content-audit.md`. Extract every article with verdict `refresh` and note the specific actions for each.

- [ ] **Step 2: Execute refreshes**

For each article:
- Open the MDX file
- Apply each action from the audit (typically: add internal links up to sub-pillar, add sideways links to 2–3 sibling articles, add lateral link to concern page, update frontmatter keywords if listed, tweak title if audit recommended)
- Save

Dispatch subagent if > 3 articles:

```
Execute refresh actions from docs/seo/research/existing-content-audit.md for articles flagged "refresh".

For each article:
1. Open the MDX file at src/content/articles/[slug].mdx
2. Apply the actions listed in its audit entry verbatim
3. Common actions: add internal links to sub-pillars (/services/facial-treatments/{anti-aging|acne-clarity|glow-brightening}), add 2-3 sibling article links in a "related reading" section near the end, add 1 concern page link in-body, update frontmatter keywords to align with strategy doc §3, tweak title/description if specified
4. Do NOT change URLs — slugs stay the same
5. Preserve all existing body content — only add/modify what the audit specifies

Keep edits minimal and surgical. Frontmatter shape must stay valid.
```

- [ ] **Step 3: Build check**

Run: `npm run build`
Expected: succeeds, page count unchanged (existing articles refreshed, no new/removed).

- [ ] **Step 4: Commit**

```bash
git add src/content/articles/
git commit -m "Refresh N facial-article internal links + frontmatter

Per docs/seo/research/existing-content-audit.md verdicts. Adds links
up to sub-pillars, sideways to siblings, lateral to concerns.

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

(Replace N with the actual count.)

### Task E2: Execute "expand" verdicts

- [ ] **Step 1: Extract the list**

From the audit, list articles flagged `expand`.

- [ ] **Step 2: Expand each**

For each expand article, dispatch subagent:

```
Expand src/content/articles/[slug].mdx per the audit actions in docs/seo/research/existing-content-audit.md.

Target word count: 1,500+ (or whatever the audit specifies).

Typical expand actions: add 2-3 new H2 sections, expand thin sections with more detail, add FAQ block if missing, add conclusion CTA if missing, add "related reading" section with 2-3 sibling links.

Match Essence voice (dark luxury editorial, authoritative, no filler). Do not fabricate service details — pull from src/content/services/*.ts when citing specifics.
```

- [ ] **Step 3: Build check + commit**

```bash
npm run build
git add src/content/articles/
git commit -m "Expand N facial articles to pillar-era standards (1,500+ words)

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

### Task E3: Execute "merge" and "redirect" verdicts

- [ ] **Step 1: List merges + redirects**

From the audit. If count is 0 for either, skip that sub-step.

- [ ] **Step 2: For each merge**

- Pick the canonical URL (keep)
- Copy valuable content from the merged-in article into the canonical one
- Delete the merged-in MDX file
- Add redirect rule in `netlify.toml`:

```toml
[[redirects]]
  from = "/blog/[old-slug]"
  to = "/blog/[canonical-slug]"
  status = 301
```

- [ ] **Step 3: For each redirect**

- Delete the MDX file
- Add redirect rule to `netlify.toml`

- [ ] **Step 4: Build check**

Run: `npm run build`
Expected: page count decreases by the number of merges + redirects.

- [ ] **Step 5: Commit**

```bash
git add src/content/articles/ netlify.toml
git commit -m "Merge/redirect N obsolete facial articles per audit

Canonical content preserved; obsolete URLs 301'd via netlify.toml.

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

---

## Phase F — Final Verification & Deploy

### Task F1: Final build + sanity checks

- [ ] **Step 1: Run full build**

Run: `npm run build`
Expected:
- Exits with 0 errors
- Page count = original (133) + 3 sub-pillars − any merges/redirects from Task E3 + any netlify-redirect pages
- No warnings about missing schema fields, missing images, or broken internal links

- [ ] **Step 2: Verify content-separation rule**

Run: `grep -r "(773) 763-1212" src/components/ src/app/ 2>/dev/null`
Expected: zero matches (phone numbers must live in content files only).

Run: `grep -r "essence-medspa@" src/components/ src/app/ 2>/dev/null`
Expected: zero matches (if email strings exist, they must be in content).

- [ ] **Step 3: Verify no PHASE 4 placeholders**

Run: `grep -r "PHASE 4\|TODO\|TBD\|\\[placeholder\\]" src/content/articles/ src/content/sub-pillars/`
Expected: zero matches.

- [ ] **Step 4: Verify all new pages have metadata + JSON-LD**

For each of:
- /services/facial-treatments
- /services/facial-treatments/anti-aging
- /services/facial-treatments/acne-clarity
- /services/facial-treatments/glow-brightening

Open the `.next/server/app/services/facial-treatments/...` built HTML and confirm each has:
- `<title>` populated
- `<meta name="description">` populated
- `<link rel="canonical">` populated
- `<meta property="og:image">` populated
- At least one `<script type="application/ld+json">` block

- [ ] **Step 5: Spot-check internal-link graph**

Pick 3 random article slugs. For each:
- `grep -l "[slug]" src/content/articles/ src/content/sub-pillars/ src/content/hubs/`
- Confirm ≥ 2 inbound link sources per the spec §8 "no orphans" criterion

If any article has < 2 inbound links, add them during a quick refresh commit.

### Task F2: Commit, push, deploy

- [ ] **Step 1: Final status check**

Run: `git status`
Expected: clean working tree (all changes already committed in Phases A–E).

If anything is uncommitted, review and commit it now.

- [ ] **Step 2: Review commit history**

Run: `git log --oneline -30`
Expected: clean Phase A → B → C → D → E → F commit sequence, each with a descriptive message.

- [ ] **Step 3: Push to main**

Run: `git push origin main`

- [ ] **Step 4: Confirm Netlify deploy**

Visit https://app.netlify.com/sites/essencemedspa/deploys (or check Netlify CLI / email).

Expected: build triggered within 30 seconds of push, completes within ~3 minutes, status goes green.

If build fails on Netlify but passed locally:
- Check Netlify build logs for the specific error
- Common cause: case-sensitivity on Linux vs Windows file imports (check `src/content/sub-pillars/` file name casing matches imports exactly)
- Do NOT retry the push — fix the issue locally and commit the fix

- [ ] **Step 5: Smoke-test production URLs**

Visit each new/changed URL on https://essencemedspa.netlify.app:
- /services/facial-treatments (upgraded hub — verify new sections visible)
- /services/facial-treatments/anti-aging
- /services/facial-treatments/acne-clarity
- /services/facial-treatments/glow-brightening

For each: confirm it loads, renders correctly, has no console errors, breadcrumb nav works, CTAs link correctly.

### Task F3: Close-out

- [ ] **Step 1: Update PROJECT_STATUS.md**

Open `PROJECT_STATUS.md` at the repo root. Append a new section:

```markdown
## 9. Topical Authority — Wave 0 (2026-04-21)

Wave 0 of the Facial Treatments topical-authority build shipped (see `docs/seo/facial-treatments-topical-authority.md`):

- ✅ Strategy doc with 75–90 article briefs
- ✅ Hub upgraded to pillar-grade at `/services/facial-treatments` (~3,000 words)
- ✅ 3 new sub-pillar pages live at `/services/facial-treatments/[anti-aging|acne-clarity|glow-brightening]`
- ✅ Existing 11 facial articles audited + refreshed (see audit verdicts)
- ✅ Page count: 133 → 136
- ✅ Deployed to Netlify

**Next:** Wave 1 — implement the ~20 P0 cluster articles. Spawn a new session for Wave 1 using the strategy doc §7 briefs as input.
```

- [ ] **Step 2: Save + commit**

```bash
git add PROJECT_STATUS.md
git commit -m "Update PROJECT_STATUS: Wave 0 topical authority shipped

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
git push origin main
```

- [ ] **Step 3: Update memory**

Add a new memory entry at `C:\Users\islam\.claude\projects\C--Users-islam-Desktop-DEV-ESSENCE-Essence-V7a\memory\project_topical_authority_wave0.md`:

```markdown
---
name: Topical authority Wave 0
description: Facial Treatments sub-pillar architecture shipped 2026-04-21; 3 sub-pillars live at /services/facial-treatments/[slug]; 75-90 article briefs in docs/seo/facial-treatments-topical-authority.md
type: project
---

Wave 0 of the Facial Treatments topical-authority build shipped 2026-04-21. Three sub-pillars live under the hub:
- /services/facial-treatments/anti-aging
- /services/facial-treatments/acne-clarity
- /services/facial-treatments/glow-brightening

Content lives in `src/content/sub-pillars/*.ts`; template is `src/components/sections/SubPillarTemplate.tsx`; dynamic route is `src/app/services/facial-treatments/[subPillar]/page.tsx`. Hub moved from dynamic [slug] route to a literal `src/app/services/facial-treatments/page.tsx` to allow nested sub-pillar routes.

Strategy doc with 75-90 article briefs: `docs/seo/facial-treatments-topical-authority.md`. Research scratch: `docs/seo/research/`.

**Why:** Build topical authority on Facial Treatments hub first; each sub-pillar absorbs 25+ cluster articles across Waves 1-4.

**How to apply:** When asked to write Wave 1-4 articles, source URLs + briefs from strategy doc §7. When adding new facial content, link to the correct sub-pillar using the parent-hub/sub-pillar routing. When building other-hub pillar pages later, reuse this architecture: SubPillarTemplate, sub-pillars content dir pattern, literal route carving.
```

And append this line to MEMORY.md:

```markdown
- [Topical authority Wave 0](project_topical_authority_wave0.md) — Facial Treatments sub-pillars shipped 2026-04-21; 75-90 briefs in docs/seo/facial-treatments-topical-authority.md
```

- [ ] **Step 4: Announce completion**

Wave 0 is complete. Next: spin up a Wave 1 session to write the first ~20 P0 articles from the strategy doc §7 briefs.

---

## Self-Review

Plan reviewed against spec before handoff:

**Spec coverage:**
- §1 Goal (full build, published) → covered across Phases A–F
- §4 Topical graph → built in code (hub, sub-pillars, cluster cards referencing future articles), documented in strategy doc §2
- §5 Deliverable 1 (strategy doc) → Phase B
- §5 Deliverable 2 (hub pillar page) → Phase C
- §5 Deliverable 3 (3 sub-pillars) → Phase D
- §5 Deliverable 4 (75-90 briefs) → Task B8 (Wave 1+ writes the actual articles)
- §6 execution phases → A (research) / B (synthesis) / C-D (production) / E (audit execution) / F (deploy)
- §8 success criteria → Task F1 Steps 1-5 verify each

**Placeholder scan:** All bracketed `[...]` in task code samples are *instructions* to the writer about what content to produce (marked as "write the actual content, not the bracket placeholder"). No TBDs in plan steps. Every step contains concrete actions.

**Type consistency:** `SubPillarContent`, `SubPillarSectionBlock`, `SubPillarClusterCard` defined in Task C1 and used consistently in D1/D2/D3/D4/D5. `HubContent` extended in Task C4 and used in C5. All imports resolvable.

**Scope check:** Wave 0 only. Waves 1-4 (actual article writing) are each their own plan — explicitly noted in spec §5 and plan §F3 Step 4. No scope creep.

---

## Execution Handoff

Plan complete and saved to `docs/superpowers/plans/2026-04-21-facial-treatments-topical-authority-wave-0.md`. Two execution options:

**1. Subagent-Driven (recommended)** — I dispatch a fresh subagent per task, review between tasks, fast iteration. Best for this plan because Phase A (5 research tasks) parallelizes cleanly and Phases B/D have large writing tasks (briefs, sub-pillar content) that benefit from fresh-context subagents.

**2. Inline Execution** — Execute tasks in this session using executing-plans, batch execution with checkpoints. Feasible but risks context compaction during Phase B Task B8 (75–90 briefs = large output).

Which approach?
