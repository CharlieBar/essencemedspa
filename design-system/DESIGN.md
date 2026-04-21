# Design System — Essence MedSpa

## Design Philosophy

Dark luxury editorial with surgical restraint. The page lives almost entirely in near-black (#0A0A0A, #141414) punctuated by an electric red (#FF3D00) that functions as a scalpel — precise, purposeful, never decorative. Gold (#C4A052) appears only in italic headings, never as a UI color. The design communicates that refinement and boldness are not opposites.

## Emotional Intent

A visitor should feel: quiet confidence on arrival, anticipation through the scroll, and desire for transformation by the end. The pacing is deliberate — slow reveals, cinematic timing, nothing hurries. The brand is expensive without being cold.

## Color Strategy

90% black surfaces. Red appears only on: CTAs, interactive underlines, active states, the marquee strip background, the loader wipe, and accent lines/dots. Gold appears only as the italic emphasis word inside about/CTA headings and testimonial author names. Muted grey (#6B6B6B) handles all supporting text. White (#FAFAFA) is reserved for primary headings and body text on dark surfaces — it's not a background color anywhere except buttons.

## Typography Strategy

Three fonts with strict non-overlapping roles. Bodoni Moda handles all drama at large scale — its high contrast thick/thin strokes create the luxury feel. Instrument Serif (italic only) provides editorial contrast as a single emphasized word within Bodoni headings, and as the testimonial voice. Outfit handles everything utilitarian — its geometric cleanness prevents the page from feeling overwrought. Font sizes use clamp() for fluid scaling — every heading is responsive without breakpoints.

## Motion Strategy

One consistent easing curve: `cubic-bezier(0.65, 0, 0.35, 1)`. All reveals, wipes, and transforms use this. The loader runs on page load (cinematic, ~2.5s total). Hero content staggers in by element. All below-the-fold content uses intersection-observer scroll reveals with translateY(60px) → translateY(0). About image uses a red wipe reveal. Nothing bounces, springs, or feels playful.

---

## Token Extraction Summary

- **Colors**: 9 named colors + 10 surface/opacity values + 3 gradients
- **Typography**: 3 font families (loaded weights: Bodoni 400/500, Instrument 400, Outfit 200–600), 25 size steps, 15 letter-spacing values
- **Spacing**: 40+ named spacing values, no arbitrary numbers
- **Effects**: No box-shadows (depth via overlays), backdrop-blur on nav only, 6 transition values, 10 named animations
- **Layout**: 2 breakpoints (768px, 968px), z-index system from 9997–10001
- **Components**: Custom cursor, grain overlay, loader, marquee, service card pattern, button fill wipe pattern

---

## File Map

| File | Purpose | When to Read |
|------|---------|-------------|
| `DESIGN.md` | This file — philosophy, strategy, agent rules | **First** |
| `tokens.json` | All atomic design values (canonical) | **Always before any styling** |
| `tokens.css` | CSS custom properties | When using vanilla CSS or WordPress |
| `tailwind.extend.json` | Tailwind config extension | When building with Tailwind CSS |
| `composition-rules.md` | How tokens combine into patterns | **Always before writing components** |
| `component-catalog.md` | Section-by-section specs | When building specific sections |
| `references/original.html` | Source design | When output drifts — visual reference |

---

## Agent Instructions

1. **Read `tokens.json` first.** Every color, font, spacing, and animation value comes from there. Never hardcode `#FF3D00` — reference the token. In Tailwind: `text-essence-accent`, `bg-essence-black`, etc.

2. **Read `composition-rules.md` before writing any component.** The button patterns, card hover pattern, underline technique, and scroll reveal implementation are all defined there.

3. **Build section by section** following `component-catalog.md` order and specs.

4. **Never invent new design values.** If you think a new color or size is needed, default to the closest existing token. There are no missing values.

5. **Implement the grain overlay and custom cursor** on every page. They are global fixed-position elements that define the luxury texture — skipping them degrades the design significantly.

6. **Implement the loader** on the homepage. It runs once on load and sets the cinematic tone.

7. **Use the exact easing curve** `cubic-bezier(0.65, 0, 0.35, 1)` for all transitions. Don't substitute `ease-in-out` or Tailwind's default `ease`.

8. **For scroll reveals**: In Next.js + Framer Motion, use `useInView` with `initial={{ opacity: 0, y: 60 }}`, `whileInView={{ opacity: 1, y: 0 }}`, `transition={{ duration: 1, ease: [0.65, 0, 0.35, 1] }}`. Apply stagger with `transition={{ delay: 0.1 * index }}`.

9. **For the about image reveal**: Use two Framer Motion elements — overlay div (scaleX 1→0) and image (opacity 0, scale 1.3 → opacity 1, scale 1), both triggered by `useInView`.

10. **Italic em spans**: Use `<em className="font-editorial italic text-essence-accent">` or `text-essence-gold` depending on section (hero/services = accent, about/CTA = gold).

11. When in doubt, open `references/original.html` in a browser and match visually.

---

## Validation Checklist

After building any section, verify:

- [ ] All colors reference tokens — no raw hex or rgb values
- [ ] Typography uses only font-display, font-editorial, or font-body classes
- [ ] Bodoni Moda only for headings/logos/stats; Instrument Serif only for italic em and quotes; Outfit for everything else
- [ ] Italic em words in headings are either accent (hero, services) or gold (about, CTA)
- [ ] All buttons are square (no border-radius)
- [ ] Button hover uses the fill-wipe technique via ::before pseudo-element or Framer Motion overlay
- [ ] Nav links use scaleX underline technique (not color change or opacity)
- [ ] Scroll reveals use `opacity: 0, translateY(60px)` → active with `cubic-bezier(0.65, 0, 0.35, 1)`
- [ ] Service cards have ghost number, icon circle, hover gradient overlay, and arrow reveal
- [ ] Service grid gap is created via parent background + 1px gap, not borders
- [ ] Grain overlay is present on all pages (fixed, z-index 9997, opacity 0.04)
- [ ] Custom cursor is present and hidden on mobile
- [ ] Responsive breakpoints: nav collapses at 968px, grids collapse at 768px/968px
