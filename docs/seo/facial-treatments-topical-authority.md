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
