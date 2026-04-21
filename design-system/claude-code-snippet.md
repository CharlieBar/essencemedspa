# CLAUDE.md Design System Block
# ─────────────────────────────────────────────────────────────────────────
# Paste the content below (starting at "## Design System") into your
# project's CLAUDE.md file. This block tells Claude Code exactly where
# to find all design files and how to use them.
# ─────────────────────────────────────────────────────────────────────────

## Design System — Essence MedSpa

This project has a complete design system extracted from an approved design.
All visual decisions are documented. **Do not improvise or invent design values.**

### Stack
Next.js (App Router) + Tailwind CSS

### Reading Order — MANDATORY before any frontend work

1. `design-system/DESIGN.md` — Philosophy, strategy, agent rules
2. `design-system/tokens.json` — All design values (canonical source of truth)
3. `design-system/tailwind.extend.json` — Merge into tailwind.config.ts
4. `design-system/composition-rules.md` — How to combine tokens correctly
5. `design-system/component-catalog.md` — Section-by-section build specs

### Hard Rules

- **NEVER hardcode** colors (`#FF3D00`), font sizes, spacing, or animations — always use Tailwind tokens (e.g. `text-essence-accent`, `font-display`)
- **NEVER invent** new colors, fonts, spacing, or easing curves not in `tokens.json`
- **ALWAYS use** `cubic-bezier(0.65, 0, 0.35, 1)` as the easing — never substitute `ease-in-out`
- **ALWAYS implement** the grain overlay and custom cursor — they are non-optional
- **ALWAYS implement** the loader on the homepage
- Use **Bodoni Moda** only for headings, logos, stats, marquee
- Use **Instrument Serif** only for italic `<em>` words inside headings and testimonial quotes
- Use **Outfit** for all body text, buttons, labels, nav

### Scroll Reveals (Framer Motion)

```tsx
// Standard scroll reveal
<motion.div
  initial={{ opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-100px" }}
  transition={{ duration: 1, ease: [0.65, 0, 0.35, 1] }}
>

// Staggered children
<motion.div
  variants={{
    hidden: { opacity: 0, y: 60 },
    visible: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 1, ease: [0.65, 0, 0.35, 1] } })
  }}
  initial="hidden"
  whileInView="visible"
  custom={index}
>
```

### Button Fill-Wipe Pattern (Framer Motion)

```tsx
// Hero button — accent bg, white fill from left
<motion.a className="relative overflow-hidden bg-essence-accent px-[3rem] py-[1.5rem] text-[0.75rem] uppercase tracking-[0.15em] font-medium text-white">
  <motion.span
    className="absolute inset-0 bg-white"
    initial={{ x: "-100%" }}
    whileHover={{ x: 0 }}
    transition={{ duration: 0.5, ease: [0.65, 0, 0.35, 1] }}
  />
  <span className="relative z-10 group-hover:text-essence-black transition-colors duration-[400ms]">Begin Journey</span>
</motion.a>
```

### Service Card Pattern

```tsx
// Service card with gradient hover
<div className="relative overflow-hidden bg-essence-black-soft p-[4rem] cursor-pointer group">
  {/* Ghost number */}
  <span className="absolute top-4 right-8 font-display text-[6rem] text-white/[0.03] group-hover:text-black/10 transition-colors">01</span>
  {/* Hover gradient overlay */}
  <div className="absolute inset-0 bg-service-card-hover opacity-0 group-hover:opacity-100 transition-opacity duration-[600ms] ease-essence" />
  {/* All content needs relative z-10 */}
</div>
```

### Nav Underline Pattern

```tsx
// Scaleх underline that switches origin direction
<a className="relative text-white text-[0.75rem] uppercase tracking-[0.2em] font-[300] py-2
  before:absolute before:bottom-0 before:left-0 before:w-full before:h-px before:bg-essence-accent
  before:scale-x-0 before:origin-right hover:before:scale-x-100 hover:before:origin-left
  before:transition-transform before:duration-[400ms] before:ease-essence">
  Services
</a>
```

### Reference File
If the output drifts visually, open: `design-system/references/original.html`
