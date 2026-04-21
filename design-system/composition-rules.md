# Composition Rules — Essence MedSpa

## Design Personality

Dark luxury editorial. The page is almost entirely black with surgical applications of red (#FF3D00) and gold (#C4A052). Typography does the heavy lifting — Bodoni Moda creates drama at large scale, Instrument Serif provides italic contrast, Outfit handles all UI/body with restraint. Motion is cinematic and deliberate, never playful.

---

## 1. Visual Hierarchy Pattern

Every content section follows this strict ordering:

```
[Section Number]    ← 0.7rem Outfit, accent color, tracking 0.3em  (e.g. "01")
[Section Tag]       ← 0.7rem Outfit, muted color, tracking 0.4em, uppercase  (e.g. "Our Philosophy")
[Main Heading]      ← Bodoni Moda clamp size, with italic Instrument Serif em spans in gold or accent
[Body Text]         ← 0.95–1.1rem Outfit weight 300, white-off color, generous line-height (1.8–2.0)
[Supporting Item]   ← stats / cards / CTAs
```

The section number is ALWAYS in accent color (#FF3D00). The section tag is ALWAYS in muted (#6B6B6B). The heading ALWAYS mixes Bodoni Moda roman with an italic Instrument Serif word in either gold or accent.

For hero-level eyebrows (not inside sections), use:
```
[60px accent line] + [eyebrow text in accent, 0.7rem, tracking 0.4em, uppercase]
```

---

## 2. Typography Mixing Rule

The design uses THREE fonts with specific roles that never cross:

- **Bodoni Moda** → Only for: logos, all headings (h1–h3), stat values, marquee items, ghost section numbers
- **Instrument Serif** (italic only) → Only for: the italic `<em>` word inside a Bodoni heading, testimonial quotes, footer brand tagline
- **Outfit** → Everything else: body text, nav, buttons, labels, eyebrows, captions

**Italic emphasis rule**: The italic word in a heading is always EITHER accent red OR gold — never white, never muted. Hero/Services headings use accent red for the italic word. About/CTA headings use gold for the italic word.

---

## 3. Button Patterns

### Primary Button (Hero, CTA)
- Square corners (border-radius: 0)
- Background: varies by context (accent or white)
- Fill wipe animation on hover via `::before` pseudo-element
- Text: uppercase, letter-spacing, Outfit weight 500–600
- Arrow icon shifts right 5px on hover
- Z-index layering: text/icon positioned relative z-index 1 above ::before overlay

**Hero button** — accent background, white text, white fill wipe → text turns black on hover:
```
padding: 1.5rem 3rem  |  font-size: 0.75rem  |  letter-spacing: 0.15em
::before background: white  |  translateX(-100%) → translateX(0)
hover: text/icon color → var(--color-black)
```

**CTA button** — white background, black text, accent fill wipe → text turns white on hover:
```
padding: 1.8rem 4rem  |  font-size: 0.8rem  |  letter-spacing: 0.2em  |  font-weight: 600
::before background: accent  |  translateY(100%) → translateY(0)
hover: text/icon color → white
```

### Secondary Link (Hero)
- No background, no border
- Text: white, 0.75rem, uppercase, tracking 0.15em
- Underline via `::after` pseudo-element: scaleX(0) → scaleX(1), transform-origin switches from right (default) to left (hover)

### Nav CTA Button
- Square, no radius
- Background: white, text: black
- Hover: background accent, text white
- padding: 1rem 2rem  |  0.7rem  |  uppercase  |  tracking 0.2em  |  weight 500

### Nav Links
- No background
- Underline via `::before` pseudo-element: same scaleX right→left technique
- Color: white default  |  underline color: accent

---

## 4. Card / Service Card Pattern

```
Position: relative  |  Overflow: hidden
Background: var(--color-black-soft) — default
Padding: 4rem all sides

Hover overlay: ::before absolute full-size,
  background: linear-gradient(135deg, #FF3D00, #CC3100)
  opacity: 0 → 1 on hover (0.6s ease)

Ghost number: absolute, top-right, 6rem Bodoni, rgba(255,255,255,0.03)
  On hover: color → rgba(0,0,0,0.1)

Icon circle: 70×70px, border 1px solid rgba(255,255,255,0.2), border-radius 50%
  Icon: 1.5rem, accent color
  On hover: border rgba(255,255,255,0.5), bg rgba(255,255,255,0.1), icon → white

Service name: 2rem Bodoni, white → white (z-index above overlay)
Service desc: 0.95rem Outfit weight 300, muted → rgba(255,255,255,0.8) on hover

Arrow circle: 50×50px, border 1px solid accent, border-radius 50%
  Default: opacity 0, translateX(-20px)
  Hover: opacity 1, translateX(0)  — reveals from left
  Always absolute, bottom: 3rem, right: 3rem
```

**Important**: ALL text/icon elements need `position: relative; z-index: 1` to appear above the ::before hover gradient.

Grid gap technique: The 1px "gap" between service cards is achieved by setting the PARENT grid's `background: rgba(255,255,255,0.05)` and `gap: 1px`, with each card background being `var(--color-black-soft)`. Do NOT use border.

---

## 5. Spacing Rhythm

Consistent vertical rhythm within sections:
```
Section number bottom margin: 1rem
Section tag bottom margin: 2rem
Section heading bottom margin: 2rem
Body text bottom margin (before stats/CTAs): 4rem
Between hero eyebrow and title: 3rem
Between hero title and desc: 2rem (via title margin-bottom)
Between hero desc and CTA: 3rem
Between CTA eyebrow and title: 2rem
Between CTA title and desc: 2rem
Between CTA desc and button: 3rem
Services header to grid: 6rem
Stat items gap: 5rem
```

Hero, Services, Footer use `padding: 0 4%` horizontally.
CTA, Testimonial use `padding: 0 5%` horizontally.
About content column uses `padding: 8rem` on desktop.

---

## 6. Scroll Reveal Animation Pattern

All non-hero content uses intersection observer scroll reveals:

```css
/* Default state */
.reveal {
  opacity: 0;
  transform: translateY(60px);
  transition: all 1s cubic-bezier(0.65, 0, 0.35, 1);
}

/* Active (when intersected) */
.reveal.active {
  opacity: 1;
  transform: translateY(0);
}

/* Stagger delays */
.reveal-delay-1 { transition-delay: 0.1s; }
.reveal-delay-2 { transition-delay: 0.2s; }
.reveal-delay-3 { transition-delay: 0.3s; }
```

**Trigger**: element's `getBoundingClientRect().top < window.innerHeight - 100`

In Next.js, implement via `useEffect` with IntersectionObserver, or a Framer Motion `whileInView` with `initial={{ opacity: 0, y: 60 }}` and `transition={{ duration: 1, ease: [0.65, 0, 0.35, 1] }}`.

---

## 7. Image Reveal Pattern (About Section)

The about section image has a cinematic reveal when scrolled into view:

```
1. Red overlay div (position absolute, full size) starts at scaleX(1), transform-origin: right
2. On intersection: overlay scaleX → 0 over 1.2s ease-essence  (wipes away revealing image)
3. Image starts: opacity 0, scale(1.3)
4. On intersection: opacity → 1, scale → 1 over 1.5s ease-essence  (subtle Ken Burns exit)
```

In Next.js use Framer Motion with `useInView` and two separate motion variants — one for the overlay, one for the image.

---

## 8. Marquee Pattern

```
Parent: overflow hidden, background: accent (#FF3D00), padding: 2rem 0
Inner: display flex, animation: marqueeScroll 25s linear infinite
Two identical content blocks side by side (translateX(-50%) at end creates seamless loop)
Items: Bodoni Moda 1rem, letter-spacing 0.3em, uppercase, color: black
Separator: ◆ character, 0.5rem, between each item
```

---

## 9. Glass Nav Pattern

After scrolling 100px:
```
background: rgba(10,10,10,0.9)
backdrop-filter: blur(20px)
padding compresses: 2rem 4% → 1.5rem 4%
transition: all 0.4s ease
```

Default (top of page): fully transparent background.

---

## 10. Responsive Behavior

| Element | Desktop | Mobile (≤768px or ≤968px) |
|---------|---------|--------------------------|
| Nav links | Visible, centered | Hidden (hamburger implied) |
| Hero image | Right 55%, full height | Full width, opacity 0.4 behind text |
| Hero overlay | Horizontal gradient L→R | Vertical gradient B→T |
| About section | 2-col grid | Stacks (image first, then content) |
| Services grid | 2-col | 1-col |
| Footer | 4-col | 2-col (968px), 1-col (600px) |
| Custom cursor | Visible | Hidden, body cursor: auto |
| Progress dots | Visible (right side fixed) | Hidden |

---

## 11. Motion Personality

The site uses a single consistent easing: `cubic-bezier(0.65, 0, 0.35, 1)` — a slow-in slow-out curve that feels luxurious and deliberate. All reveals, transforms, and wipes use this easing.

The only exception is the loader's background wipe: `cubic-bezier(0.76, 0, 0.24, 1)` — slightly more dramatic for the opening moment.

**Motion never surprises.** Elements reveal from below (translateY), wipes move from right to left (scaleX origin: right → left), fills move left to right or bottom to top. All motion is predictable and elegant.

---

## Do / Don't Quick Reference

| Do | Don't |
|----|-------|
| Use Bodoni Moda for ALL headings | Mix Outfit into headings |
| Use Instrument Serif ONLY in italic em spans | Use Instrument Serif for standalone text |
| Apply accent red to interactive underlines, CTAs, progress dots | Use gold for interactive elements |
| Use gold for italic em words in About, CTA headings | Use gold for borders or buttons |
| Keep all buttons square (border-radius: 0) | Add border-radius to buttons |
| Use `cubic-bezier(0.65, 0, 0.35, 1)` for all transitions | Use `ease-in-out` or `spring` |
| Apply opacity: 0.04 grain overlay fixed to all pages | Skip the grain — it defines the luxury texture |
| Position text/icons z-index above ::before overlays | Let hover gradients cover text |
| Use scaleX underlines with origin switching (right → left) | Use opacity or color alone for link hovers |
| Implement scroll reveals with translateY(60px) + opacity | Use translateX or scale for scroll reveals |
| Use the service card ghost number (rgba 0.03) | Omit the ghost number — it's critical for depth |
| Keep accent red sparse — CTAs, underlines, active states only | Apply accent red to body text or backgrounds broadly |
