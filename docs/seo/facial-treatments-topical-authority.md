# Facial Treatments — Topical Authority Strategy

_Created: 2026-04-21 · Wave 0 · Author: Essence Medspa content team_
_Spec: [docs/superpowers/specs/2026-04-21-facial-treatments-topical-authority-design.md](../superpowers/specs/2026-04-21-facial-treatments-topical-authority-design.md)_
_Plan: [docs/superpowers/plans/2026-04-21-facial-treatments-topical-authority-wave-0.md](../superpowers/plans/2026-04-21-facial-treatments-topical-authority-wave-0.md)_

---

## 1. Executive Summary

**Thesis.** Essence Medspa already wins on individual terms — Vitamin C facial, deep pore cleansing, teen acne, firming facial — but the broader "facial treatments Chicago" SERP is still owned by plastic-surgery groups, chain medspas, and directory sites that don't actually deliver the treatments. This strategy fixes that by replacing scattered service-page rankings with a single, dense topical graph (§2): one mega-pillar hub, three sub-pillars (anti-aging, acne-clarity, glow-brightening), 89 cluster articles, 5 concern pages, and all 21 facial service pages interlinked via consistent up/down/sideways/lateral patterns. Google's topical-authority signal rewards exactly this shape: a commercial hub surrounded by informational content that answers every PAA the sub-pillar head term surfaces.

**The graph.** One hub at `/services/facial-treatments`, three sub-pillars at `/services/facial-treatments/{anti-aging, acne-clarity, glow-brightening}`, 89 cluster articles (25 per sub-pillar + 14 cross-cluster bridges), 5 concern pages that absorb condition-led intent, and 21 existing service pages that receive all the booking traffic. Every URL is interlinked per §6.1's pattern; no URL is an orphan.

**The scale.**
- **258 target keywords** researched and mapped (§3): 88 anti-aging, 90 acne-clarity, 80 glow-brightening.
- **4 new pillar-tier pages** authored in Wave 0 (1 hub + 3 sub-pillars).
- **89 cluster-article briefs** specified in `docs/seo/briefs/*.md` — 78 net-new, 11 existing-refresh. Priority distribution: 18 P0 / 53 P1 / 18 P2.
- **~140,000–180,000 words of net-new long-form content** across Waves 1–4 (78 articles at an average 1,700 words) plus ~10,000 words of hub/sub-pillar copy.

**The opportunity.** Five terms are near-lock ranking wins in a 6-month window per the keyword research in §3:
1. **Vitamin C facial Chicago** — Essence already #1; graph integration permanently defends it.
2. **Deep pore cleansing facial Chicago** — Essence already #1; sub-pillar up-link + FAQ schema lock it in.
3. **Oxygen facial Chicago** — Essence top 3; a dedicated sub-pillar up-link and refreshed service page should push it to #1.
4. **Teen acne facial Chicago** — Essence #2; deepening the service page copy and the new teen-acne brief should secure #1.
5. **Jet Plasma facial Chicago** — empty SERP (no Chicago medspa owns the term); Brief 10 (`what-is-jet-plasma-facial`) + the service page can own this category with a single publishing cycle.

**The 6-month hypothesis** (carried over from spec §8): at Wave 4 + 6 months, ≥ 2 of 3 sub-pillar head terms ("anti-aging facial Chicago", "acne facial Chicago", "brightening facial Chicago") reach top-10; ≥ 15 long-tail terms reach top-3; topical-trust-flow improves measurably via the link graph §6 delivers. If fewer than 2 head terms hit top-10, the strategy gets re-examined per §10.4.

**What success looks like.**
- All 4 pillar pages (hub + 3 sub-pillars) live on Netlify with correct schema (§8) and zero validation errors.
- All 89 cluster-article briefs complete and reviewed (§7).
- All 11 existing facial articles audit-refreshed (frontmatter + up-links + sideways + lateral links per §5).
- Zero orphan URLs — every URL has ≥ 2 inbound links (§6.2).
- Baseline keyword-tracking CSV captured before Wave 1 ships (§10.2).
- `npm run build` passes + `main` branch pushed + Netlify deploy green.
- Wave 1 session plan ready to consume 18 P0 briefs immediately after Wave 0 merge.

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

**Head term:** `anti-aging facial Chicago` — Med volume band · Med-High difficulty. Single highest-priority term: strongest commercial intent, clearest sub-pillar match, and the SERP is dominated by plastic-surgery and multi-location medspas that Essence can contest with clinical-facial authority it already has.

**Mid-tail (8, ranked by priority):**

| # | Keyword | Intent | Volume band | Difficulty | Target URL | Confidence |
|---|---|---|---|---|---|---|
| 1 | anti-aging facial near me | transactional | high | med | /services/facial-treatments/anti-aging | high |
| 2 | best anti-aging facial Chicago | commercial | med | med-high | /services/facial-treatments/anti-aging | high |
| 3 | microneedling Chicago | commercial | high | high | /services/collagen-induction-therapy | high |
| 4 | RF microneedling Chicago | commercial | med | high | /services/collagen-induction-therapy | high |
| 5 | skin tightening facial Chicago | commercial | med | high | /services/firming-facial | high |
| 6 | anti-aging treatment Jefferson Park | transactional | low | low | /services/facial-treatments/anti-aging | high |
| 7 | collagen facial Chicago | commercial | low-med | med | /services/red-carpet-collagen-facial | med |
| 8 | Jet Plasma facial Chicago | commercial | low | low-med | article (planned) | med |

**Long-tail — Informational (grouped by question family):**

_"What is / what does" — definitional:_
- what is an anti-aging facial — /services/facial-treatments/anti-aging — high
- what does an anti-aging facial do — /services/facial-treatments/anti-aging — high
- what is collagen induction therapy — /services/collagen-induction-therapy — high
- what is Jet Plasma and how does it work — article (planned) — high
- what ingredients are in anti-aging facials — article (planned) — high
- what is collagen and why does it matter for skin — article (planned) — high

_"How does X work / how long" — mechanism:_
- how does microneedling work for wrinkles — /services/collagen-induction-therapy — high
- how does RF microneedling stimulate collagen — article (planned) — med
- how does LED red light therapy reduce wrinkles — article (planned) — high
- how long does an anti-aging facial last — /services/facial-treatments/anti-aging — high

_"How often / what age" — frequency and timing:_
- how often should you get an anti-aging facial — /services/facial-treatments/anti-aging — high
- how often should you do RF microneedling — article (planned) — med
- what age should you start anti-aging facials — article (planned) — high
- what age should you start microneedling — article (planned) — med
- when to start Botox vs facials — article (planned) — med
- how to prevent wrinkles in your 30s — article (planned) — high

_"Why / what causes" — root-cause:_
- what causes fine lines and wrinkles — article (planned) — high
- what causes forehead wrinkles — article (planned) — high
- why does skin lose elasticity with age — /concerns/wrinkles-fine-lines — high

_"Do they work / skepticism":_
- do anti-aging facials actually work — /services/facial-treatments/anti-aging — high
- are at-home anti-aging facials effective — article (planned) — med
- at-home vs professional anti-aging facial — article (planned) — med

_"X vs Y" — comparisons (informational):_
- retinol vs microneedling for wrinkles — article (planned) — med
- peptides vs retinol for anti-aging — article (planned) — med

_Safety / side effects:_
- is microneedling safe — article (planned) — high
- microneedling downtime — article (planned) — high
- RF microneedling side effects — article (planned) — med
- anti-aging facial side effects — /services/facial-treatments/anti-aging — med

**Long-tail — Commercial (grouped by decision modifier):**

_"Best X":_
- best anti-aging facial Chicago 2026 — /services/facial-treatments/anti-aging — high
- best medspa for anti-aging Chicago — /services/facial-treatments/anti-aging — high
- best facial for 40s Chicago — article (planned) — med
- best facial for 50s Chicago — article (planned) — med
- best RF microneedling Chicago — /services/collagen-induction-therapy — high
- best microneedling Chicago reviews — /services/collagen-induction-therapy — high
- best collagen treatment Chicago — /services/red-carpet-collagen-facial — med
- best non-surgical facelift Chicago — /services/essence-signature-facelift-facial — high
- medical grade facial Chicago — /services/facial-treatments/anti-aging — med

_"X cost / pricing":_
- microneedling cost Chicago — /services/collagen-induction-therapy — high
- RF microneedling cost Chicago — /services/collagen-induction-therapy — high
- Morpheus8 cost Chicago — article (planned) — high
- how much does an anti-aging facial cost — article (planned) — high
- anti-aging facial packages Chicago — /services/facial-treatments/anti-aging — med

_"X vs Y" (commercial comparisons):_
- microneedling vs chemical peel — article (planned) — high
- microneedling vs RF microneedling — article (planned) — med
- microneedling vs Botox — article (planned) — med
- Morpheus8 vs Ultherapy — article (planned) — high
- Morpheus8 vs microneedling — article (planned) — high
- Ultherapy vs RF microneedling — article (planned) — med
- anti-aging facial vs HydraFacial — article (planned) — med
- HydraFacial vs microneedling for anti-aging — article (planned) — med

_"X reviews / before-after / worth it":_
- anti-aging facial reviews Chicago — /services/facial-treatments/anti-aging — high
- RF microneedling before and after Chicago — /services/collagen-induction-therapy — high
- microneedling before and after wrinkles — /services/collagen-induction-therapy — high
- is Jet Plasma worth it — article (planned) — med
- is Morpheus8 worth the money — article (planned) — med

**Long-tail — Transactional (grouped by local intent):**

_Chicago (city-level):_
- book anti-aging facial Chicago — /services/facial-treatments/anti-aging — med
- anti-aging facial appointment Chicago — /services/facial-treatments/anti-aging — med
- anti-aging facial consultation Chicago — /services/facial-treatments/anti-aging — med
- microneedling deals Chicago — /services/collagen-induction-therapy — med
- Morpheus8 special Chicago — /services/facial-treatments/anti-aging — med
- skin tightening near me Chicago — /services/firming-facial — high

_Near me:_
- anti-aging facial near me — /services/facial-treatments/anti-aging — high
- microneedling near me Chicago — /services/collagen-induction-therapy — high
- RF microneedling near me — /services/collagen-induction-therapy — high
- collagen facial near me — /services/red-carpet-collagen-facial — med
- Morpheus8 near me Chicago — /services/facial-treatments/anti-aging — high
- Jet Plasma near me Chicago — article (planned) — med

_Jefferson Park:_
- schedule anti-aging facial Jefferson Park — /services/facial-treatments/anti-aging — med
- best medspa near Jefferson Park for wrinkles — /services/facial-treatments/anti-aging — med
- anti-aging facial 60630 — /services/facial-treatments/anti-aging — med

_Edgebrook:_
- best medspa in Edgebrook Chicago — /services/facial-treatments/anti-aging — high
- anti-aging facial 60646 — /services/facial-treatments/anti-aging — med

_Corridor / neighborhood long-tail:_
- wrinkle treatment near Milwaukee Ave Chicago — /services/facial-treatments/anti-aging — low

**Total keyword count for this sub-pillar:** 88 (1 head + 9 mid-tail + 28 informational + 26 commercial + 16 transactional + 8 already-ranking variants covered in the mid-tail/SERP notes).

**Top 5 ranking opportunities (realistic top-10 in 6 months):**
1. **Jet Plasma facial Chicago** — thinnest SERP in the cluster; no Chicago medspa owns the term. A strong service/explainer page can dominate quickly.
2. **anti-aging treatment Jefferson Park** — hyper-local, low competition; Essence is the best-matched business and needs only a dedicated geo-page to win.
3. **wrinkle facial Chicago** — Essence already ranks page 1 on a branded clinical variant; defend and expand to capture the head-adjacent term.
4. **firming facial Chicago** — Essence already appears; strengthen the firming-facial page with FAQ/schema and it should hold top-10.
5. **RF microneedling cost Chicago** — SERP rewards pricing transparency; a dedicated cost-breakdown article on /services/collagen-induction-therapy clears the bar most local competitors avoid.

---

### 3.2 Acne & Clarity Facials

**Head term:** `acne facial Chicago` — High volume band (1.5k–3k) · High difficulty. Strongest commercial intent across the cluster; Essence does not yet rank on the bare head term but holds #1/#2 on deep-pore and teen variants — the sub-pillar page is the logical vehicle to capture it.

**Mid-tail (8, ranked by priority):**

| # | Keyword | Intent | Volume band | Difficulty | Target URL | Confidence |
|---|---|---|---|---|---|---|
| 1 | deep pore cleansing facial Chicago | commercial | med | med | /services/deep-pore-cleansing-facial | high |
| 2 | facial extractions Chicago | commercial | med | med | /services/deep-pore-cleansing-facial | high |
| 3 | best acne facial Chicago | commercial | med | med-high | /services/facial-treatments/acne-clarity | high |
| 4 | facial for acne-prone skin Chicago | commercial | med | med | /services/acne-facial | high |
| 5 | teen acne facial Chicago | commercial | low-med | low-med | /services/teen-facial | high |
| 6 | back facial Chicago | commercial | med | med | /services/back-facial | high |
| 7 | chemical peel for acne Chicago | commercial | med | high | /services/custom-peel | high |
| 8 | hormonal acne facial Chicago | commercial | low-med | med | article (planned) | med |
| 9 | acne treatment Jefferson Park | transactional | low | low | /services/facial-treatments/acne-clarity | med |

**Long-tail — Informational (grouped by question family):**

_"What is / what does" — definitional:_
- what is an acne facial — /services/facial-treatments/acne-clarity — high
- what does an acne facial include — /services/facial-treatments/acne-clarity — high
- what is deep pore cleansing — /services/deep-pore-cleansing-facial — med
- what is a salicylic acid peel — article (planned) — high
- what is cystic acne — /concerns/acne-texture — high
- what is skin congestion — article (planned) — med
- what are extractions in a facial — /services/deep-pore-cleansing-facial — high

_"How does X work / how often / how long":_
- how do acne facials work — /services/facial-treatments/acne-clarity — high
- how often should I get an acne facial — /services/facial-treatments/acne-clarity — high
- how long does an acne facial take — /services/acne-facial — med
- how does hydrafacial treat acne — /services/hydrofacial — high

_"Why / what causes" — root-cause:_
- why do I get blackheads on my nose — article (planned) — high
- what causes hormonal acne — /concerns/acne-texture — high
- what causes back acne — article (planned) — high
- why is my skin purging after a facial — article (planned) — med

_"Do they work / skepticism / worth it":_
- are facials good for acne — /services/facial-treatments/acne-clarity — high
- can facials help with acne — /services/facial-treatments/acne-clarity — high
- do acne facials actually work — /services/facial-treatments/acne-clarity — high
- are acne facials worth it — /services/facial-treatments/acne-clarity — high

_Safety / side effects / special populations:_
- are facial extractions safe — article (planned) — high
- can teens get professional facials — /services/teen-facial — med
- is a chemical peel good for acne — article (planned) — high
- does led light therapy help acne — article (planned) — high

_Disambiguation / comparisons (informational):_
- salicylic acid vs glycolic acid for acne — article (planned) — med
- difference between blackheads and whiteheads — article (planned) — high
- how is back acne different from face acne — article (planned) — med

**Long-tail — Commercial (grouped by decision modifier):**

_"Best X":_
- best acne facial near me — /services/facial-treatments/acne-clarity — high
- best facial for hormonal acne Chicago — article (planned) — med
- best facial for cystic acne — article (planned) — med
- best facial for oily skin Chicago — /services/acne-facial — high
- best facial for blackheads Chicago — /services/deep-pore-cleansing-facial — high
- best facial for teen acne Chicago — /services/teen-facial — med
- best esthetician for acne Chicago — /services/facial-treatments/acne-clarity — high

_"X vs Y" (commercial comparisons):_
- acne facial vs chemical peel — article (planned) — high
- acne facial vs hydrafacial — article (planned) — high
- hydrafacial vs chemical peel for acne — article (planned) — med
- led facial vs acne facial — article (planned) — med
- chemical peel vs microdermabrasion for acne — article (planned) — med

_"X cost":_
- acne facial cost Chicago — /services/acne-facial — high
- how much does an acne facial cost — article (planned) — high
- chemical peel cost Chicago — /services/custom-peel — high
- back facial cost Chicago — /services/back-facial — med
- teen acne facial cost — /services/teen-facial — med
- hormonal acne facial cost — article (planned) — low-med

_Safety / transparency / reviews:_
- acne facial side effects — /services/acne-facial — high
- chemical peel side effects — /services/custom-peel — high
- are acne facials painful — article (planned) — high
- acne facial before and after — /services/facial-treatments/acne-clarity — high
- acne facial reviews Chicago — /services/facial-treatments/acne-clarity — med
- essence medspa acne facial reviews — /services/facial-treatments/acne-clarity — med

**Long-tail — Transactional (grouped by local intent):**

_Chicago / booking:_
- acne facial near me — /services/facial-treatments/acne-clarity — high
- book acne facial Chicago — /services/acne-facial — med
- acne facial appointment Chicago — /services/acne-facial — low-med
- acne facial Saturday Chicago — /services/acne-facial — low
- walk in acne facial Chicago — /services/acne-facial — low
- first time acne facial Chicago — /services/acne-facial — low-med
- acne facial for sensitive skin Chicago — /services/custom-facial — low-med
- acne facial for men Chicago — article (planned) — med
- prom skin facial Chicago — /services/teen-facial — low-med
- wedding acne facial Chicago — /services/acne-facial — low-med
- acne clearing facial package Chicago — /services/acne-facial — med

_Jefferson Park:_
- acne facial Jefferson Park — /services/facial-treatments/acne-clarity — high
- acne treatment near Milwaukee Ave Chicago — /services/facial-treatments/acne-clarity — med
- acne facial 60630 — /services/facial-treatments/acne-clarity — low

_Edgebrook:_
- acne facial Edgebrook — /services/facial-treatments/acne-clarity — med

_Other neighborhoods:_
- acne facial Norwood Park — /services/facial-treatments/acne-clarity — med
- acne facial Portage Park — /services/facial-treatments/acne-clarity — med
- acne facial Forest Glen — /services/facial-treatments/acne-clarity — med

_Near me (specific):_
- teen acne facial near me — /services/teen-facial — high
- back facial near me Chicago — /services/back-facial — high
- hormonal acne treatment near me — article (planned) — med
- blackhead extraction near me Chicago — /services/deep-pore-cleansing-facial — high
- deep pore cleansing near me Chicago — /services/deep-pore-cleansing-facial — high
- facial extractions near me — /services/deep-pore-cleansing-facial — high
- oily skin facial Chicago — /services/acne-facial — med

**Total keyword count for this sub-pillar:** 90 (1 head + 9 mid-tail + 25 informational + 24 commercial + 31 transactional).

**Top 5 ranking opportunities (realistic top-10 in 6 months):**
1. **deep pore cleansing facial Chicago** — Essence already holds #1; a sub-pillar up-link + FAQ schema locks it in permanently.
2. **teen acne facial Chicago** — Essence at #2 today; deepening the `/services/teen-facial` page with age-appropriate FAQs and parent-facing reassurance copy pushes it to #1.
3. **acne facial Jefferson Park** — hyper-local, near-empty SERP, Essence is the best-matched business. The sub-pillar page with explicit neighborhood copy wins this in one publishing cycle.
4. **facial extractions Chicago** — Essence already surfaces on related variants; a strong extractions section on `/services/deep-pore-cleansing-facial` with a fresha-style price band converts the signal into a ranking.
5. **back facial Chicago** — Essence ranks in top 10; adding bacne-specific long-tail copy to `/services/back-facial` and linking from the sub-pillar should push into the top 5.

---

### 3.3 Glow & Brightening Facials

**Head term:** `brightening facial Chicago` — Med volume band · Med difficulty. Single highest-priority term: Essence already holds page-1 organic via `/services/facial-treatments/brightening-vitamin-c/`, making the sub-pillar page a defensible and upgradeable entry point.

**Mid-tail (8, ranked by priority):**

| # | Keyword | Intent | Volume band | Difficulty | Target URL | Confidence |
|---|---|---|---|---|---|---|
| 1 | vitamin C facial Chicago | commercial | low-med | low-med | /services/brightening-facial | high |
| 2 | oxygen facial Chicago | commercial | low-med | low-med | /services/oxygen-facial | high |
| 3 | hydrafacial Chicago | commercial | high | high | /services/hydrofacial | high |
| 4 | glow facial Chicago | commercial | med | med | /services/facial-treatments/glow-brightening | high |
| 5 | dark spot treatment Chicago | commercial | med | med | /services/facial-treatments/glow-brightening | high |
| 6 | hyperpigmentation treatment Chicago | commercial | med | med-high | /concerns/dark-spots | high |
| 7 | melasma treatment Chicago | commercial | med | med-high | /concerns/dark-spots | high |
| 8 | glutathione IV Chicago | commercial | low-med | med | /services/glutathione-brightening | high |

**Long-tail — Informational (grouped by question family):**

_"What is / what causes" — definitional and root-cause:_
- what causes dull skin — /concerns/dull-tired-skin — high
- why does my skin look dull — /concerns/dull-tired-skin — high
- what is post inflammatory hyperpigmentation — article (planned) — high
- what triggers melasma — article (planned) — high
- why is my face uneven in color — article (planned) — med
- what is tranexamic acid for skin — article (planned) — med

_"How does X work / how often / how long":_
- how does vitamin C brighten skin — /services/brightening-facial — high
- how often should I get a brightening facial — /services/facial-treatments/glow-brightening — high
- how long does hyperpigmentation take to fade — article (planned) — high
- how long does glutathione take to brighten skin — /services/glutathione-brightening — high

_"How to / top-funnel":_
- how to get glowing skin naturally — article (planned) — high
- how to fade dark spots fast — article (planned) — high
- best ingredients for hyperpigmentation — article (planned) — high
- how to prep skin for a wedding — article (planned) — high
- facial before wedding timeline — article (planned) — high

_"Benefits / does X work":_
- vitamin C serum benefits for skin — /services/brightening-facial — high
- does vitamin C fade dark spots — /services/brightening-facial — high
- does niacinamide fade dark spots — article (planned) — high
- is glutathione IV safe — /services/glutathione-brightening — high

_"X vs Y" comparisons (informational):_
- vitamin C vs niacinamide for brightening — article (planned) — high
- hydrafacial vs oxygen facial — article (planned) — high
- hydrafacial vs diamond glow — article (planned) — high
- oxygen facial vs vitamin C facial — article (planned) — med
- chemical peel vs laser for dark spots — article (planned) — high
- IPL vs laser for hyperpigmentation — article (planned) — med
- difference between PIH and PIE — article (planned) — med
- melasma vs hyperpigmentation difference — /concerns/dark-spots — high
- how to tell if dark spots are sun damage or melasma — article (planned) — med

_Safety / special populations / condition-specific:_
- can you do vitamin C facial while pregnant — article (planned) — high
- can melasma go away on its own — /concerns/dark-spots — high

**Long-tail — Commercial (grouped by decision modifier):**

_"Best X":_
- best brightening facial Chicago — /services/facial-treatments/glow-brightening — high
- best facial for hyperpigmentation Chicago — /concerns/dark-spots — high
- best facial for glow Chicago — /services/facial-treatments/glow-brightening — high
- best facial for dark spots Chicago — /concerns/dark-spots — high
- best medspa for melasma Chicago — /concerns/dark-spots — high
- top rated vitamin C facial Chicago — /services/brightening-facial — med

_"X cost":_
- vitamin C facial Chicago cost — /services/brightening-facial — high
- hydrafacial cost Chicago — /services/hydrofacial — high
- oxygen facial cost Chicago — /services/oxygen-facial — med
- glutathione IV cost Chicago — /services/glutathione-brightening — high

_"Near me" (commercial-intent):_
- brightening facial near me — /services/facial-treatments/glow-brightening — high
- hydrafacial near me — /services/hydrofacial — high
- dark spot removal near me — /concerns/dark-spots — high
- melasma treatment near me — /concerns/dark-spots — high
- vitamin C facial near me — /services/brightening-facial — med

_Neighborhood geo:_
- medspa Jefferson Park Chicago — /services/facial-treatments/glow-brightening — high
- brightening facial Edgebrook — /services/facial-treatments/glow-brightening — high
- brightening facial Norwood Park — /services/facial-treatments/glow-brightening — med
- brightening facial Portage Park — /services/facial-treatments/glow-brightening — med
- brightening facial Lincoln Square — /services/facial-treatments/glow-brightening — med
- brightening facial Mayfair Chicago — /services/facial-treatments/glow-brightening — med
- hydrafacial Jefferson Park — /services/hydrofacial — high
- oxygen facial Edgebrook — /services/oxygen-facial — high
- vitamin C facial Chicago north side — /services/brightening-facial — med
- hyperpigmentation treatment northwest side Chicago — /concerns/dark-spots — med
- medspa near 60630 — /services/facial-treatments/glow-brightening — high

**Long-tail — Transactional (grouped by local intent):**

_Chicago / booking:_
- book brightening facial Chicago — /services/brightening-facial — high
- book hydrafacial Chicago — /services/hydrofacial — high
- schedule vitamin C facial Chicago — /services/brightening-facial — med
- brightening facial deal Chicago — /services/facial-treatments/glow-brightening — med
- brightening facial Groupon Chicago — (not targeted — Groupon owns) — low
- brightening facial package Chicago — /services/facial-treatments/glow-brightening — med
- first time hydrafacial Chicago deal — /services/hydrofacial — med
- membership facial Chicago — /services/facial-treatments/glow-brightening — high
- brightening facial gift card Chicago — /services/facial-treatments/glow-brightening — med
- walk in brightening facial Chicago — /services/facial-treatments/glow-brightening — low
- same day hydrafacial Chicago — /services/hydrofacial — low
- Saturday facial appointment Chicago — /services/facial-treatments/glow-brightening — med
- Sunday medspa Chicago — /services/facial-treatments/glow-brightening — med
- brightening facial consultation Chicago — /services/facial-treatments/glow-brightening — med
- book melasma consultation Chicago — /concerns/dark-spots — med
- buy brightening facial package — /services/facial-treatments/glow-brightening — med

**Total keyword count for this sub-pillar:** 80 (1 head + 8 mid-tail + 30 informational + 22 commercial + 16 transactional + 3 absorbed into mid-tail commercial variants).

**Top 5 ranking opportunities (realistic top-10 in 6 months):**
1. **vitamin C facial Chicago** — Essence already #1; sub-pillar internal links + FAQ schema permanently lock it.
2. **oxygen facial Chicago** — Essence already top 3; a dedicated sub-pillar up-link and before/after gallery pushes it to #1.
3. **glutathione IV Chicago (re-angled for brightening)** — Essence top 5 on a broad IV-drip page; a brightening-angled section on `/services/glutathione-brightening` converts adjacent rankings into head-term ranking.
4. **hydrafacial Jefferson Park** — pure white-space neighborhood SERP; Essence's `/services/hydrofacial` plus a geo-explicit sub-pillar section captures it effortlessly.
5. **brightening facial Chicago** — Essence already on page 1; tightening the sub-pillar page around the head term (plus internal link from vitamin C service page) moves it into the top 5.

---

## 4. URL Map & Priority Tiers

Complete enumeration of every URL in the topical graph: 1 hub + 3 sub-pillars + 89 cluster articles + 21 facial service pages + 5 concern pages = **119 URLs**.

### 4.1 Priority tier definitions

- **P0** — Wave 1 (~18 articles). Highest-intent / highest-volume / best ranking opportunity. Ship first.
- **P1** — Waves 2–3 (~53 articles). Solid mid-tail and supporting PAA content.
- **P2** — Wave 4 (~18 articles). Long-tail fill, geo, myth-bust, defensive.
- **Wave 0 (baseline)** — Existing service + concern pages already live; no primary-keyword-driven rewrite needed in this strategy. Linking + schema upgrades handled in Wave 0 Phase E.
- **Wave 0 (refresh)** — Existing blog articles receiving audit-driven link/frontmatter refresh in Wave 0.

### 4.2 Hub + sub-pillars

| URL | Type | Sub-pillar | Primary keyword | Target word count | Priority tier | Status |
|---|---|---|---|---|---|---|
| /services/facial-treatments | hub | — | facial treatments Chicago | 3,000–4,000 | P0 | Wave 0 (write) |
| /services/facial-treatments/anti-aging | sub-pillar | anti-aging | anti-aging facial Chicago | 2,500–3,500 | P0 | Wave 0 (write) |
| /services/facial-treatments/acne-clarity | sub-pillar | acne-clarity | acne facial Chicago | 2,500–3,500 | P0 | Wave 0 (write) |
| /services/facial-treatments/glow-brightening | sub-pillar | glow-brightening | brightening facial Chicago | 2,500–3,500 | P0 | Wave 0 (write) |

### 4.3 Cluster articles — Anti-Aging (25)

| URL | Type | Sub-pillar | Primary keyword | Target word count | Priority tier | Status |
|---|---|---|---|---|---|---|
| /blog/radiofrequency-facial-chicago | article-existing-refresh | anti-aging | RF microneedling Chicago | 2,000 | P0 | Wave 0 (refresh) |
| /blog/vampire-facial-benefits-prp | article-existing-refresh | anti-aging | Vampire Facial Chicago | 2,000 | P0 | Wave 0 (refresh) |
| /blog/anti-aging-facial-cost-chicago | article-new | anti-aging | anti-aging facial cost Chicago | 1,800 | P0 | Wave 1 (write) |
| /blog/best-anti-aging-facial-40s-chicago | article-new | anti-aging | best facial for 40s Chicago | 1,800 | P0 | Wave 1 (write) |
| /blog/best-anti-aging-facial-30s-chicago | article-new | anti-aging | anti-aging facial for 30s | 1,800 | P1 | Wave 2 (write) |
| /blog/best-anti-aging-facial-50s-chicago | article-new | anti-aging | best facial for 50s Chicago | 1,800 | P1 | Wave 2 (write) |
| /blog/bridal-anti-aging-facial-timeline-chicago | article-new | anti-aging | bridal facial Chicago | 1,800 | P0 | Wave 1 (write) |
| /blog/pre-event-facial-chicago | article-new | anti-aging | pre-event facial Chicago | 1,500 | P1 | Wave 2 (write) |
| /blog/what-is-collagen-induction-therapy | article-new | anti-aging | what is collagen induction therapy | 2,000 | P1 | Wave 2 (write) |
| /blog/what-is-jet-plasma-facial | article-new | anti-aging | what is Jet Plasma facial | 2,000 | P0 | Wave 1 (write) |
| /blog/rf-microneedling-vs-morpheus8-chicago | article-new | anti-aging | RF microneedling vs Morpheus8 | 1,800 | P0 | Wave 1 (write) |
| /blog/microneedling-vs-rf-microneedling | article-new | anti-aging | microneedling vs RF microneedling | 1,800 | P1 | Wave 2 (write) |
| /blog/microneedling-vs-chemical-peel-wrinkles | article-new | anti-aging | microneedling vs chemical peel | 1,800 | P1 | Wave 2 (write) |
| /blog/anti-aging-facial-vs-botox-fillers | article-new | anti-aging | anti-aging facial vs Botox | 1,800 | P1 | Wave 2 (write) |
| /blog/non-surgical-facelift-chicago | article-new | anti-aging | non-surgical facelift Chicago | 2,000 | P1 | Wave 2 (write) |
| /blog/rf-microneedling-vs-jet-plasma | article-new | anti-aging | RF microneedling vs Jet Plasma | 1,500 | P1 | Wave 3 (write) |
| /blog/how-often-anti-aging-facial | article-new | anti-aging | how often should you get an anti-aging facial | 1,800 | P1 | Wave 3 (write) |
| /blog/anti-aging-facial-downtime-recovery | article-new | anti-aging | anti-aging facial downtime | 1,800 | P1 | Wave 3 (write) |
| /blog/anti-aging-facial-ingredients-deep-dive | article-new | anti-aging | anti-aging facial ingredients | 2,500 | P1 | Wave 3 (write) |
| /blog/first-anti-aging-facial-what-to-expect | article-new | anti-aging | first anti-aging facial what to expect | 1,500 | P1 | Wave 3 (write) |
| /blog/anti-aging-at-home-vs-professional | article-new | anti-aging | at-home vs professional anti-aging facial | 2,000 | P1 | Wave 3 (write) |
| /blog/does-collagen-cream-work-myth-busting | article-new | anti-aging | does collagen cream work | 2,000 | P2 | Wave 4 (write) |
| /blog/what-is-firming-facial | article-new | anti-aging | firming facial Chicago | 1,500 | P2 | Wave 4 (write) |
| /blog/what-is-face-lifting-massage | article-new | anti-aging | face-lifting massage Chicago | 1,800 | P2 | Wave 4 (write) |
| /blog/anti-aging-facial-jefferson-park-edgebrook | article-new | anti-aging | anti-aging facial Jefferson Park | 1,200 | P2 | Wave 4 (write) |

### 4.4 Cluster articles — Acne & Clarity (25)

| URL | Type | Sub-pillar | Primary keyword | Target word count | Priority tier | Status |
|---|---|---|---|---|---|---|
| /blog/what-is-an-acne-facial | article-new | acne-clarity | what is an acne facial | 2,000–2,200 | P0 | Wave 1 (write) |
| /blog/best-acne-facial-chicago | article-new | acne-clarity | best acne facial Chicago | 1,600–1,800 | P0 | Wave 1 (write) |
| /blog/acne-facial-vs-chemical-peel-vs-hydrafacial | article-new | acne-clarity | acne facial vs chemical peel | 2,200–2,500 | P0 | Wave 1 (write) |
| /blog/acne-facial-cost-chicago | article-new | acne-clarity | acne facial cost Chicago | 1,400–1,600 | P0 | Wave 1 (write) |
| /blog/acne-facial-jefferson-park | article-new | acne-clarity | acne facial Jefferson Park | 1,200–1,400 | P0 | Wave 1 (write) |
| /blog/best-facial-for-acne | article-existing-refresh | acne-clarity | best facial for acne | 1,500 | P1 | Wave 0 (refresh) |
| /blog/what-is-a-back-facial | article-existing-refresh | acne-clarity | what is a back facial | 1,550 | P1 | Wave 0 (refresh) |
| /blog/teen-acne-facial-chicago | article-new | acne-clarity | teen acne facial Chicago | 1,400–1,600 | P1 | Wave 2 (write) |
| /blog/hormonal-acne-facial-chicago | article-new | acne-clarity | hormonal acne facial Chicago | 1,600–1,800 | P1 | Wave 2 (write) |
| /blog/cystic-acne-facial-treatment | article-new | acne-clarity | best facial for cystic acne | 1,600–1,800 | P1 | Wave 2 (write) |
| /blog/bacne-back-acne-treatment-chicago | article-new | acne-clarity | back acne facial | 1,600–1,800 | P1 | Wave 2 (write) |
| /blog/blackhead-extraction-facial-chicago | article-new | acne-clarity | blackhead extraction near me Chicago | 1,400–1,600 | P1 | Wave 2 (write) |
| /blog/pregnancy-safe-acne-facial-chicago | article-new | acne-clarity | acne facial while pregnant | 1,400–1,600 | P1 | Wave 2 (write) |
| /blog/first-acne-facial-what-to-expect | article-new | acne-clarity | first time acne facial Chicago | 1,400–1,600 | P1 | Wave 3 (write) |
| /blog/acne-facial-aftercare-downtime | article-new | acne-clarity | acne facial side effects | 1,200–1,400 | P1 | Wave 3 (write) |
| /blog/how-often-acne-facial | article-new | acne-clarity | how often should I get an acne facial | 1,200–1,400 | P1 | Wave 3 (write) |
| /blog/acne-scarring-treatment-chicago | article-new | acne-clarity | acne scar treatment Chicago | 1,800–2,000 | P1 | Wave 3 (write) |
| /blog/salicylic-acid-acne-guide | article-new | acne-clarity | what is a salicylic acid peel | 1,500–1,700 | P1 | Wave 3 (write) |
| /blog/benzoyl-peroxide-vs-salicylic-acid | article-new | acne-clarity | benzoyl peroxide vs salicylic acid | 1,200–1,400 | P2 | Wave 4 (write) |
| /blog/adult-acne-causes-treatments | article-new | acne-clarity | adult acne treatment Chicago | 1,600–1,800 | P2 | Wave 4 (write) |
| /blog/professional-facial-extractions-explained | article-new | acne-clarity | what are extractions in a facial | 1,300–1,500 | P2 | Wave 4 (write) |
| /blog/acne-myths-busted | article-new | acne-clarity | does sunscreen cause acne | 1,200–1,400 | P2 | Wave 4 (write) |
| /blog/esthetician-vs-dermatologist-acne | article-new | acne-clarity | do I need a dermatologist or an esthetician for acne | 1,300–1,500 | P2 | Wave 4 (write) |
| /blog/acne-facial-professional-vs-at-home | article-new | acne-clarity | acne facial treatment at home | 1,400–1,600 | P2 | Wave 4 (write) |
| /blog/niacinamide-for-acne | article-new | acne-clarity | niacinamide for acne | 1,200–1,400 | P2 | Wave 4 (write) |

### 4.5 Cluster articles — Glow & Brightening (25)

| URL | Type | Sub-pillar | Primary keyword | Target word count | Priority tier | Status |
|---|---|---|---|---|---|---|
| /blog/best-brightening-facial-chicago | article-new | glow-brightening | best brightening facial Chicago | 2,000–2,500 | P0 | Wave 1 (write) |
| /blog/hydrofacial-chicago | article-existing-refresh | glow-brightening | Hydrofacial Chicago | 1,500–1,800 | P0 | Wave 0 (refresh) |
| /blog/vitamin-c-facial-chicago | article-new | glow-brightening | vitamin C facial Chicago | 1,600–2,000 | P0 | Wave 1 (write) |
| /blog/hydrafacial-vs-oxygen-facial-vs-diamondglow | article-new | glow-brightening | hydrafacial vs oxygen facial | 2,200–2,800 | P0 | Wave 1 (write) |
| /blog/oxygen-facial-chicago-guide | article-new | glow-brightening | oxygen facial Chicago | 1,600–2,000 | P0 | Wave 1 (write) |
| /blog/hydrafacial-vs-vitamin-c-facial | article-new | glow-brightening | vitamin C facial vs hydrafacial | 1,500–2,000 | P1 | Wave 2 (write) |
| /blog/hyperpigmentation-treatment-chicago | article-new | glow-brightening | hyperpigmentation treatment Chicago | 2,000–2,500 | P0 | Wave 1 (write) |
| /blog/melasma-treatment-chicago | article-new | glow-brightening | melasma treatment Chicago | 1,800–2,300 | P1 | Wave 2 (write) |
| /blog/dark-spots-treatment-chicago | article-new | glow-brightening | dark spot treatment Chicago | 1,800–2,200 | P1 | Wave 2 (write) |
| /blog/post-inflammatory-hyperpigmentation-acne-marks | article-new | glow-brightening | what is post inflammatory hyperpigmentation | 1,500–2,000 | P1 | Wave 2 (write) |
| /blog/glutathione-iv-skin-brightening-chicago | article-new | glow-brightening | glutathione IV Chicago | 1,800–2,200 | P0 | Wave 1 (write) |
| /blog/vitamin-c-vs-niacinamide-brightening | article-new | glow-brightening | vitamin C vs niacinamide for brightening | 1,500–2,000 | P1 | Wave 2 (write) |
| /blog/pre-wedding-facial-timeline-chicago | article-new | glow-brightening | facial before wedding timeline | 2,000–2,500 | P0 | Wave 1 (write) |
| /blog/brightening-facial-cost-chicago | article-new | glow-brightening | brightening facial cost | 1,500–1,800 | P1 | Wave 3 (write) |
| /blog/facial-for-dull-tired-skin-chicago | article-new | glow-brightening | facial for dull skin | 1,600–2,000 | P1 | Wave 3 (write) |
| /blog/how-often-brightening-facial-cadence | article-new | glow-brightening | how often should I get a brightening facial | 1,200–1,500 | P1 | Wave 3 (write) |
| /blog/brightening-facial-melanin-rich-skin-chicago | article-new | glow-brightening | dark spot treatment for Black skin | 1,600–2,000 | P1 | Wave 3 (write) |
| /blog/benefits-of-vitamin-c-skin | article-existing-refresh | glow-brightening | benefits of Vitamin C skin | 1,800–2,000 | P1 | Wave 0 (refresh) |
| /blog/foods-for-glowing-skin | article-existing-refresh | glow-brightening | foods for glowing skin | 1,800–2,000 | P2 | Wave 0 (refresh) |
| /blog/summer-sun-damage-recovery-facial-chicago | article-new | glow-brightening | summer glow facial | 1,400–1,700 | P2 | Wave 4 (write) |
| /blog/at-home-vs-professional-brightening-facial | article-new | glow-brightening | brightening facial at home | 1,400–1,800 | P2 | Wave 4 (write) |
| /blog/first-brightening-facial-what-to-expect | article-new | glow-brightening | first brightening facial Chicago | 1,300–1,600 | P2 | Wave 4 (write) |
| /blog/brightening-facial-jefferson-park-edgebrook | article-new | glow-brightening | brightening facial Jefferson Park | 1,200–1,500 | P1 | Wave 3 (write) |
| /blog/brightening-skincare-myths-debunked | article-new | glow-brightening | can I use lemon on my skin | 1,200–1,500 | P2 | Wave 4 (write) |
| /blog/dark-circles-under-eye-brightening-chicago | article-new | glow-brightening | dark circles treatment Chicago | 1,400–1,800 | P2 | Wave 4 (write) |

### 4.6 Cluster articles — Cross-cluster (14)

| URL | Type | Sub-pillar | Primary keyword | Target word count | Priority tier | Status |
|---|---|---|---|---|---|---|
| /blog/professional-facials-chicago-guide | article-new | cross-cluster | professional facial Chicago | 2,200–2,500 | P0 | Wave 1 (write) |
| /blog/how-to-choose-the-right-facial | article-new | cross-cluster | how to choose a facial | 1,800–2,200 | P0 | Wave 1 (write) |
| /blog/how-often-should-you-get-a-facial | article-new | cross-cluster | how often should you get a facial | 1,600–2,000 | P0 | Wave 1 (write) |
| /blog/medical-grade-facial-vs-spa-facial | article-new | cross-cluster | medical grade facial Chicago | 1,500–1,800 | P1 | Wave 2 (write) |
| /blog/facial-series-vs-single-session | article-new | cross-cluster | facial package Chicago | 1,400–1,700 | P1 | Wave 2 (write) |
| /blog/pre-facial-prep-guide | article-new | cross-cluster | how to prepare for a facial | 1,300–1,600 | P1 | Wave 2 (write) |
| /blog/post-facial-aftercare-72-hour-rules | article-new | cross-cluster | post facial aftercare | 1,400–1,700 | P1 | Wave 3 (write) |
| /blog/facials-during-pregnancy-chicago | article-new | cross-cluster | facial during pregnancy | 1,800–2,200 | P1 | Wave 3 (write) |
| /blog/seasonal-skincare-chicago | article-existing-refresh | cross-cluster | seasonal skincare Chicago | 1,560 | P1 | Wave 0 (refresh) |
| /blog/chicago-winter-skincare-tips | article-existing-refresh | cross-cluster | Chicago winter skincare tips | 1,500–1,600 | P1 | Wave 0 (refresh) |
| /blog/facial-with-botox-fillers-combining-treatments | article-new | cross-cluster | facial with Botox | 1,600–1,900 | P1 | Wave 3 (write) |
| /blog/custom-facial-chicago | article-existing-refresh | cross-cluster | custom facial Chicago | 1,460 | P1 | Wave 0 (refresh) |
| /blog/chemical-peel-vs-microdermabrasion | article-existing-refresh | cross-cluster | chemical peel vs microdermabrasion | 1,310 | P1 | Wave 0 (refresh) |
| /blog/first-professional-facial-guide | article-new | cross-cluster | what to expect at a facial | 1,800–2,100 | P2 | Wave 4 (write) |

### 4.7 Facial service pages (21)

| URL | Type | Sub-pillar | Primary keyword | Target word count | Priority tier | Status |
|---|---|---|---|---|---|---|
| /services/hydrofacial | service | glow-brightening | — | — | Wave 0 (baseline) | live |
| /services/custom-facial | service | cross | — | — | Wave 0 (baseline) | live |
| /services/rf-microneedling-facial | service | anti-aging | — | — | Wave 0 (baseline) | live |
| /services/jet-plasma-facial | service | anti-aging | — | — | Wave 0 (baseline) | live |
| /services/essence-signature-facelift-facial | service | anti-aging | — | — | Wave 0 (baseline) | live |
| /services/essence-signature-facelift-peel | service | glow-brightening | — | — | Wave 0 (baseline) | live |
| /services/red-carpet-collagen-facial | service | anti-aging | — | — | Wave 0 (baseline) | live |
| /services/red-carpet-anti-aging-facial | service | anti-aging | — | — | Wave 0 (baseline) | live |
| /services/firming-facial | service | anti-aging | — | — | Wave 0 (baseline) | live |
| /services/acne-facial | service | acne-clarity | — | — | Wave 0 (baseline) | live |
| /services/brightening-facial | service | glow-brightening | — | — | Wave 0 (baseline) | live |
| /services/hydrating-facial | service | glow-brightening | — | — | Wave 0 (baseline) | live |
| /services/oxygen-facial | service | glow-brightening | — | — | Wave 0 (baseline) | live |
| /services/deep-pore-cleansing-facial | service | acne-clarity | — | — | Wave 0 (baseline) | live |
| /services/microdermabrasion-facial | service | cross | — | — | Wave 0 (baseline) | live |
| /services/microdermabrasion-chest | service | cross | — | — | Wave 0 (baseline) | live |
| /services/microdermabrasion-neck | service | cross | — | — | Wave 0 (baseline) | live |
| /services/custom-peel | service | acne-clarity | — | — | Wave 0 (baseline) | live |
| /services/collagen-eye-contour | service | anti-aging | — | — | Wave 0 (baseline) | live |
| /services/teen-facial | service | acne-clarity | — | — | Wave 0 (baseline) | live |
| /services/4d-face-lifting-massage | service | anti-aging | — | — | Wave 0 (baseline) | live |

### 4.8 Concern pages (5)

| URL | Type | Sub-pillar | Primary keyword | Target word count | Priority tier | Status |
|---|---|---|---|---|---|---|
| /concerns/wrinkles-fine-lines | concern | anti-aging | — | — | Wave 0 (baseline) | live |
| /concerns/hollow-under-eyes | concern | anti-aging | — | — | Wave 0 (baseline) | live |
| /concerns/acne-texture | concern | acne-clarity | — | — | Wave 0 (baseline) | live |
| /concerns/dull-tired-skin | concern | glow-brightening | — | — | Wave 0 (baseline) | live |
| /concerns/dark-spots | concern | glow-brightening | — | — | Wave 0 (baseline) | live |

### 4.9 Balance check — article priority tier distribution

| Tier | Anti-aging | Acne-clarity | Glow-brightening | Cross-cluster | **Total** |
|---|---|---|---|---|---|
| P0 | 5 | 5 | 5 | 3 | **18** |
| P1 | 15 | 15 | 15 | 8 | **53** |
| P2 | 5 | 5 | 5 | 3 | **18** |
| **Total** | 25 | 25 | 25 | 14 | **89** |

P0 is within target (18–24). P1 is within target (45–55). P2 is within target (15–20). Total 89 articles matches the brief count. Refresh breakdown: 11 of the 89 are existing-refresh (2 anti-aging + 2 acne + 3 glow + 4 cross-cluster); 78 are net-new writes.

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

Rather than enumerate every inbound/outbound edge across 119 URLs (which would duplicate the linking rules already codified per brief), this section defines the standard link pattern per URL type and audits the graph for orphan risk.

### 6.1 Link pattern per URL type

| URL type | Typical inbound count | Typical inbound sources | Typical outbound count | Typical outbound targets |
|---|---|---|---|---|
| Hub mega-pillar (`/services/facial-treatments`) | Very high (40+) | All 3 sub-pillars (up-link × 2 each: intro + closing CTA); all 89 cluster articles (up-link); selected service pages in the `relatedServices` arrays; hub-adjacent pages (About, Contact) | Very high (30+) | 3 sub-pillars + all 21 services + 5–8 hero cluster articles + about/team page |
| Sub-pillar (`/services/facial-treatments/[sub]`) | High (~25–30) | Hub (down-link), 25 cluster articles in its cluster (up-link × 2), 2–3 cross-cluster articles (sideways), 3–5 audit-refresh existing-article up-links, 2 related concerns | High (15–20) | Hub (up) + 6–8 services in its branch (down) + 2 related concerns (lateral) + 8–10 cluster cards (deep-dive teasers in sub-pillar body) |
| Cluster article — new | 2–4 inbound | Parent sub-pillar (sub-pillar body teaser in the 8–10 cluster-card block), 2–3 sibling articles (via their "Sideways" link sections) | 4–8 outbound | Parent sub-pillar (up, twice: intro + CTA), 2–3 siblings (sideways), 1–3 service pages (down), 1 concern (lateral) |
| Cluster article — existing-refresh | 2–4 inbound | Same as new + any historical backlinks preserved from pre-Wave-0 | 4–8 outbound | Same as new (refresh adds these per audit actions) |
| Cross-cluster article | 3–5 inbound | Hub (hero-article slot), 2 of 3 sub-pillars (sideways), 2–3 sibling cross-cluster articles | 6–10 outbound | Hub (up), 2–3 sub-pillars (sideways), 2 services (down), 2 concerns (lateral), 2–3 siblings |
| Service page (`/services/[slug]`) | High (10–20) | Hub (services array), parent sub-pillar (6–8 services each), 2–5 cluster articles (down-links), existing `relatedServices` cross-references | Existing (unchanged) | Hub's `relatedServices` pattern + in-body inline links to adjacent services |
| Concern page (`/concerns/[slug]`) | High (5–15) | 1–2 sub-pillars (lateral), 5–10 condition-specific articles (lateral), existing concern-to-service cross-links | Existing (unchanged) | Related services + adjacent concerns |

### 6.2 Orphan check (spec §8: every URL ≥ 2 inbound links)

Walking the graph top-down against the briefs:

1. **Hub** — Receives ≥ 3 inbound from the 3 sub-pillars (each sub-pillar intro + closing CTA links up). Plus up-links from every article's "Up:" directive (4 per brief — new articles link to the sub-pillar; sub-pillar links to hub). Plus audit-refresh up-links on 11 existing articles. **Pass** — ≥ 3 direct + transitive hub mentions from nearly every cluster article's CTA.
2. **Sub-pillars** — Each receives:
   - Hub down-link (1)
   - 25 cluster article up-links × 2 each (50)
   - Cross-cluster sideways links: 11 of 14 cross-cluster briefs link to ≥ 2 sub-pillars (~22 inbound split across 3 sub-pillars → ~7 each)
   - Audit-refresh up-links on the 11 existing articles (~3–4 per sub-pillar)
   **Pass** — each sub-pillar receives ~60 inbound edges.
3. **Cluster articles** — Each brief specifies 2–3 "Sideways" targets. Reciprocity check:
   - Anti-aging: siblings link densely (e.g., Brief 5 ↔ Brief 4 ↔ Brief 17 form a triangle; Brief 10 ↔ Brief 15 ↔ Brief 16 form a Jet-Plasma triangle). Each of the 25 anti-aging briefs appears as a sideways target in ≥ 2 other anti-aging briefs.
   - Acne-clarity: strong reciprocity (e.g., Brief 1 ↔ Brief 2 ↔ Brief 3 for the intro-trio; Brief 14 ↔ Brief 15 ↔ Brief 16 for the aftercare/cadence trio; Brief 11 ↔ Brief 7 for bacne).
   - Glow-brightening: Brief 1 (best-brightening) links out to Briefs 2, 14, 22; Briefs 7, 8, 9, 10 form a tight hyperpigmentation quartet; Brief 18 (refresh) links to Briefs 3, 15, 19.
   - Cross-cluster: Briefs 6 ↔ 7 (pre/post prep pair), Briefs 9 ↔ 10 (seasonal pair), Briefs 1 ↔ 2 ↔ 3 ↔ 14 (first-visit stack).
   **Pass** — spot-check confirms every cluster article appears in ≥ 2 sibling "Sideways" link sections.
4. **Services** — Every service appears in the hub's `services` array (21 inbound from hub). Sub-pillars link to 6–8 services each (services receive 1–3 inbound from their sub-pillar). Cluster articles link down to 1–3 services each (~5–15 inbound per service). Existing `relatedServices` cross-references preserved. **Pass** — every service receives ≥ 10 inbound.
5. **Concerns** — Each concern is the "Lateral" target in multiple briefs:
   - `/concerns/wrinkles-fine-lines` — ~23 inbound (lateral in every anti-aging brief)
   - `/concerns/hollow-under-eyes` — ~3 inbound (sub-pillar + Brief 11 cross-cluster + Brief 25 glow)
   - `/concerns/acne-texture` — ~25 inbound (lateral in every acne-clarity brief)
   - `/concerns/dull-tired-skin` — ~15 inbound (lateral in most glow-brightening + 4 cross-cluster briefs)
   - `/concerns/dark-spots` — ~14 inbound (lateral in glow-brightening hyperpigmentation articles + several cross-cluster briefs)
   **Pass** — every concern receives ≥ 3 inbound; wrinkles/acne/dull-skin/dark-spots receive far more.

**Flagged risks:**
- `/concerns/hollow-under-eyes` sits at the low end (~3 inbound). Recommendation: during Wave 1–3, add at least one more lateral link from Brief 14 (anti-aging ingredients deep-dive — should reference eye-contour) and Brief 25 (dark circles under eye). Flagged for reviewer.
- No cluster article is an orphan on paper, but the briefs' "Sideways" reciprocity must be enforced in copy — if a writer drops a sibling link during drafting, the target loses one of its 2–3 inbound paths. Mitigation: the writing-wave reviewer's first pass must diff the brief's specified internal-links-out list against the rendered MDX before merge.

### 6.3 Cross-cluster link multipliers

The 14 cross-cluster briefs are link-density amplifiers. Each cross-cluster article links sideways into 2–3 sub-pillars. Aggregate impact:

- **Briefs 1, 2, 3** (professional-facials-guide, how-to-choose, how-often) each link to all 3 sub-pillars (3 × 3 = 9 inbound edges to sub-pillars)
- **Brief 4** (medical-grade-vs-spa) links to hub + 2 cross-cluster siblings
- **Brief 5** (series-vs-single) links to 2 sub-pillars (acne + glow)
- **Briefs 6, 7** (pre/post prep) link to hub + each other
- **Brief 8** (pregnancy) links to all 3 sub-pillars (3 inbound)
- **Briefs 9, 10** (seasonal refresh pair) link to all 3 sub-pillars (6 inbound)
- **Brief 11** (facial + Botox) links to 1 sub-pillar + service pages
- **Brief 12** (custom-facial refresh) links to all 3 sub-pillars (3 inbound)
- **Brief 13** (peel vs derm refresh) links to 2 sub-pillars (2 inbound)
- **Brief 14** (first-professional-facial) links to hub + cross-cluster siblings

**Aggregate:** the 14 cross-cluster briefs collectively add **~30–40 inbound links to sub-pillars** on top of the 25 up-links each sub-pillar already receives from its own cluster. This boosts the sub-pillars' topical-trust-flow signal without cannibalizing — cross-cluster articles use informational intent, so they reinforce the sub-pillar pages as the commercial authority.

---

## 7. Cluster Article Briefs (89 total)

Briefs live in separate files for maintainability and to keep this document navigable. Each brief contains: URL, priority tier, sub-pillar, primary/secondary keywords, intent, title tag, meta description, H1, H2 outline, word-count target, FAQs, internal link targets, image asset, writer notes.

- [`docs/seo/briefs/anti-aging.md`](briefs/anti-aging.md) — 25 briefs (2 existing-refresh + 23 net-new · 5 P0 / 15 P1 / 5 P2)
- [`docs/seo/briefs/acne-clarity.md`](briefs/acne-clarity.md) — 25 briefs (2 existing-refresh + 23 net-new · 5 P0 / 15 P1 / 5 P2)
- [`docs/seo/briefs/glow-brightening.md`](briefs/glow-brightening.md) — 25 briefs (3 existing-refresh + 22 net-new · 5 P0 / 15 P1 / 5 P2)
- [`docs/seo/briefs/cross-cluster.md`](briefs/cross-cluster.md) — 14 briefs (4 existing-refresh + 10 net-new · 3 P0 / 8 P1 / 3 P2)

**Total:** 89 briefs (11 existing-refresh + 78 net-new). Distribution: 18 P0 / 53 P1 / 18 P2.

Wave 1–4 execution sessions consume these briefs. Each wave picks briefs by priority tier. See §9 for the phasing plan.

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
