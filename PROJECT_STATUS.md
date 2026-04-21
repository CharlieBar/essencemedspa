# Essence Medspa V7a — Project Status

_Last updated: 2026-04-21_

Single source of truth for "where are we right now and what's still open." Update this file whenever a significant chunk of work lands or a new item surfaces.

---

## 1. Snapshot

- **Framework:** Next.js 14.2.18 (App Router) + TypeScript + Tailwind CSS 4
- **Build:** `npm run build` passes · **133 static pages** · 0 errors
- **Routes:** 16 top-level + dynamic `[slug]` routes for services (76), concerns (8), blog (30)
- **Content:** 25 MDX articles (all enriched — no PHASE 4 placeholders remaining)
- **Images:** ~131 assets across `public/images/` (blog 25 · services 71 · concerns 16 · hubs 5 · og 5 · categories 5 · team 3 · hero 1 · about 1)
- **Infrastructure files present:** `.gitignore`, `netlify.toml`, `IMAGE_MANIFEST.md`, `CLAUDE-BUILD-INSTRUCTIONS.md`
- **Design system:** Canonical `.eyebrow` + `.eyebrow-sm` utilities, documented red/gold role split, mosaic card pattern with accent top-bar hover, 300/500 ms transition scale, 4/5 portrait · 4/3 landscape · square aspect ratios

---

## 2. Recently completed — Design Polish Pass (8 steps)

All verified by `npm run build` (133 static pages, 0 errors).

| # | Step | Outcome |
|---|---|---|
| 1 | Alternate section surfaces | `surface="black" \| "soft"` prop pattern on service + concern templates — eliminates adjacent same-surface sections |
| 2 | Consolidate eyebrow styles | `.eyebrow` + `.eyebrow-sm` utilities adopted across 12 files |
| 3 | Normalize divider opacities | Locked to `/5 · /10 · /20 · /40` canonical scale |
| 4 | Standardize transition durations | `300ms` (state flips) + `500ms` (gesture-scale) only |
| 5 | Upgrade card hover states | Accent top-bar slide-in on 11 card components; standalone cards get subtle lift |
| 6 | Clarify red vs gold accent roles | Rule documented in `src/app/globals.css:5-20`; 7 gold-on-hover violations removed |
| 7 | Normalize aspect ratios | Portraits `4/5`, landscapes `4/3`, tiles `square` |
| 8 | Footer breathing room + label treatment | `pt-40 pb-16`, `space-y-4` rhythm, canonical `.eyebrow` on labels |

---

## 3. What's LEFT — high priority

### 3.1 Blog category pages — ✅ RESOLVED (2026-04-18)
- All 5 category slugs (`advanced-aesthetics`, `facial-peels`, `massage-body`, `skincare-wellness`, `news-events`) are handled by the existing unified `src/app/blog/[slug]/page.tsx` via its `CATEGORY_MAP` + merged `generateStaticParams()`. No separate `[category]` route is needed (would collide with `[slug]` at the same level in App Router).
- **Bug found + fixed:** `news-events.articleCategory` filter string was `"Essence News & Events"` but MDX frontmatter is `"Essence Medspa News & Events"` — so that category rendered 0 articles. One-line fix in `CATEGORY_MAP`.
- **Verified:** build produces `.next/server/app/blog/{advanced-aesthetics,facial-peels,massage-body,news-events,skincare-wellness}.html`, each with "5 Articles in …" heading.

### 3.2 Git initialization — ✅ RESOLVED (2026-04-21)
- Repo initialized, pushed to [CharlieBar/essencemedspa](https://github.com/CharlieBar/essencemedspa) on `main` (old broken files wiped via force push). Netlify auto-deploying from `main` — site live at [essencemedspa.netlify.app](https://essencemedspa.netlify.app/).

### 3.3 Pre-compaction carryover items
These surfaced in earlier sessions and were deferred:

- [x] **favicon.ico 404** — RESOLVED (2026-04-21). Generated `src/app/favicon.ico` (16/32/48 multi-size) matching the Essence "E" mark from `icon.svg`.
- [x] **Missing internal link** — RESOLVED. Audit found `src/content/articles/what-is-a-back-facial.mdx:81` already links `[back microdermabrasion](/services/back-microdermabrasion)`. Status doc was stale.
- [ ] **Verify subagent-written service content** — during blog enrichment a subagent wrote claims that may be fabricated. NEEDS ISLAM REVIEW — these are detailed technical claims that only the business can confirm:
  - `red-carpet-collagen-facial.ts` — 4-phase protocol (hydration → toning → collagen peptide infusion → collagen mask), DMAE in phase 2, 20-min mask dwell time, $215 / $590 pricing
  - `firming-facial.ts` — 4-step protocol with DMAE tensor effect, 15-min intensive lifting mask, 48–72hr results peak, $215 / $590 pricing
  - `oxygen-facial.ts` — pressurized O2 serum infusion, customized blends (hydration / brightening / anti-aging), 20–25 min infusion phase, $159 / $430 pricing

---

## 4. What's LEFT — medium priority

### 4.1 Hero image thinness
Only 1 image in `public/images/hero/`. Homepage hero carries the whole site visually. Options:
- Generate more hero variations for rotating hero (if/when added)
- Add a "secondary hero" image for inner pages that currently share the one asset

### 4.2 Team photos
Only 3 team images exist but the site pattern supports a richer team grid. If more headshots become available, drop them into `public/images/team/` and extend `src/content/pages/about.ts` team array.

### 4.3 Lighthouse / performance audit
Build succeeds but no perf audit run yet. Targets per `CLAUDE.md`:
- Performance > 90
- Accessibility WCAG AA
- SEO score check
Run after deployment environment is live — some metrics (CDN, caching) only measurable in prod.

### 4.4 Mobile responsiveness spot-check
Key pages at 375 / 768 / 1024 / 1440: homepage, a service page, a blog post, contact. Captured no breakages during build but no visual regression run performed.

---

## 5. Improvements SURFACED during polish (not actioned)

Items I noticed during the 8-step pass that are worth considering but weren't in scope:

### 5.1 Typography — ✅ RESOLVED (2026-04-21)
- `.tagline-label` + `.tagline-editorial` utilities formalized in `src/app/globals.css:177-200` with documentation for when to use each.
- Adopted across: ConcernsCarousel, RelatedServices, HubServicesList, ServiceCategoryGroup, TeamGrid (credentials), concerns page.
- `ServiceGrid.tsx:92` left on raw classes intentionally — it uses a larger 0.85rem size for primary service-card visual weight, which the 0.7rem utility default would shrink.

### 5.5 FAQ accordion red accent top-bar — ✅ RESOLVED
- Already in place (`FAQAccordion.tsx:50-55`): `w-0.5` vertical accent stripe scales on `group-hover` and open state. Matches the Step 5 card treatment.

### 5.2 Framer Motion timing drift
Motion variants across `HeroSection.tsx` use 1s / 1.2s / 2s durations with cascading delays (0.4 → 2.1s). Feels intentional but slightly over-long on the homepage. Also inconsistent with the new 300/500 ms transition scale (though framer-motion entrances are semantically different from CSS transitions).
- **Low-pri action:** audit `HeroSection.tsx:30-164` — total entrance choreography exceeds 3s before all content settles. Could trim delays without losing drama.

### 5.3 Ghost button variant visibility
`src/components/ui/Button.tsx:40` ghost variant uses `border-white/40`. During Step 3 I kept it outside the `/10–/20` canonical scale for visibility on dark backgrounds. If we ever want strict token purity, a dedicated `--border-ghost` token would formalize this exception.

### 5.4 Treatment Finder quiz non-selected indicators
`/tools/treatment-finder` uses `white/30` non-selected indicators — outside the canonical opacity scale. Kept intentionally for contrast against `essence-accent` selected state. Similar to 5.3 — could formalize as a "selection state" token pair.

### 5.5 FAQ accordion styling
`src/components/sections/FAQAccordion.tsx` could receive the same red accent top-bar treatment as Step 5 cards for visual rhyme — open-state already uses accent color, so a hover treatment would close the loop.

### 5.6 Megamenu dropdown (Header.tsx)
After Step 6, megamenu links now use `group-hover:text-essence-accent` (interactive red). Fine, but the dropdown panel itself could use a subtle top-bar accent for visual unity with the card system.

---

## 6. Nice-to-have / future initiatives

- **Image manifest completion.** `IMAGE_MANIFEST.md` exists. Worth auditing against the ~131 actual files in `public/images/` to make sure the manifest is current.
- **HTML sitemap page polish.** `src/app/sitemap-page/page.tsx` exists. Verify it renders all routes (services, concerns, blog, pages) and styles match the rest of the site.
- **OG image variations.** 5 OG images exist in `public/images/og/`. Check that routes are mapping to the correct OG image for each page type (service vs concern vs blog vs hub).
- **Print stylesheet.** For users who print a service page or a blog article — currently inherits dark mode. Consider a `@media print` override in `globals.css`.
- **Reduced-motion audit.** `prefers-reduced-motion` is handled in HeroSection/FAQAccordion/TestimonialSlider via framer-motion's `useReducedMotion()`. Verify every transition/animation respects it.

---

## 7. Verification checklist (before deploy)

- [ ] `npm run build` succeeds with 0 errors (currently ✓)
- [ ] `grep -r "(773) 763-1212" src/components/ src/app/` returns 0 (content separation — currently ✓ per memory)
- [ ] No `<!-- PHASE 4 -->` comments remain in `src/content/articles/` (currently ✓ — verified this session)
- [ ] Every page has metadata, JSON-LD, and OG tags (spot-check each template)
- [ ] All internal links resolve (run a link checker against the built output)
- [ ] favicon.ico loads (currently ✗ — see 3.3)
- [ ] Key pages mobile-responsive at 375/768/1024/1440 (not yet run)
- [ ] Lighthouse Perf/A11y/SEO > 90 on 5 representative pages (not yet run)

---

## 8. Recommended next actions (ordered)

1. ~~Blog category pages~~ — ✅ done (see §3.1)
2. ~~Favicon.ico~~ — ✅ done (see §3.3)
3. **Verify the 3 subagent-authored service claims** (§3.3) — NEEDS ISLAM REVIEW. Claims are detailed enough that a human who knows the spa's actual protocols must confirm.
4. ~~Missing internal link in `what-is-a-back-facial.mdx`~~ — ✅ already present
5. ~~Git init + push~~ — ✅ done (see §3.2)
6. ~~Deploy to Netlify~~ — ✅ live
7. **Lighthouse + mobile responsiveness pass** against the live [essencemedspa.netlify.app](https://essencemedspa.netlify.app/).
8. **Remaining §5 improvements** (low-priority polish): 5.2 HeroSection framer-motion timing trim, 5.3/5.4 border token formalization, 5.6 megamenu dropdown accent.
