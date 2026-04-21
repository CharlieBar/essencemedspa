# Component Catalog — Essence MedSpa

## Section Map (top to bottom)
1. Custom Cursor + Grain Overlay (global, fixed)
2. Loader Screen
3. Navigation
4. Progress Dots (global, fixed)
5. Hero Section
6. Marquee Strip
7. About / Split Section
8. Services Grid
9. Testimonial
10. CTA Section
11. Footer

---

## 1. Custom Cursor + Grain Overlay

**Custom Cursor** (hidden on mobile ≤768px)
- Two elements: `.cursor` (ring) and `.cursor-dot` (center dot), both `position: fixed`, `pointer-events: none`
- Ring: 20px × 20px, `border: 1px solid #FF3D00`, `border-radius: 50%`, `z-index: 10000`
- Dot: 5px × 5px, `background: #FF3D00`, `border-radius: 50%`, `z-index: 10001`
- Both follow `mousemove` via `style.left/top`, transformed `translate(-50%, -50%)`
- Hover state (on `a`, `button`, `.service-item`): ring expands to 60px × 60px, border-color → `#C4A052`, background → `rgba(196,160,82,0.1)`
- Transition on ring: `width 0.3s ease, height 0.3s ease, border-color 0.3s ease`
- `body { cursor: none }` on desktop, `cursor: auto` on mobile

**Grain Overlay**
- `position: fixed`, `top/left: -50%`, `width/height: 200%`, `pointer-events: none`, `z-index: 9997`, `opacity: 0.04`
- Background: inline SVG data URI with `<feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch"/>`
- Animation: `grainMove 8s steps(10) infinite` — random translate shifts

---

## 2. Loader Screen

- `position: fixed`, full viewport, `background: #0A0A0A`, `z-index: 9999`
- Centered flex column content
- **Brand text**: "ESSENCE" in Bodoni Moda, `clamp(3rem, 12vw, 8rem)`, letter-spacing `0.3em`
  - Each character wrapped in `<span>`, revealed via `charReveal 0.8s ease-essence forwards`, delays staggered `0.1s–0.4s`
- **Subtitle**: "Luxury Aesthetic Medicine" — `0.75rem`, letter-spacing `0.5em`, uppercase, muted color
  - `opacity: 0`, then `fadeIn 1s ease 0.8s forwards`
- **Red wipe overlay**: absolutely positioned div, `background: #FF3D00`, `transform: scaleY(0)`
  - On exit (`.done`): `loaderBg 1s cubic-bezier(0.76,0,0.24,1) 0.3s forwards` — scaleY 0→1 from bottom, then 1→0 from top
  - Characters hide via `charHide 0.5s` on `.done`
- **Timing**: `.done` class at 1200ms after load, `.hidden` (opacity 0, visibility hidden) at 2500ms

---

## 3. Navigation

- `position: fixed`, full width, `padding: 2rem 4%`, `z-index: 1000`
- Default: transparent background
- Scrolled (after 100px): `background: rgba(10,10,10,0.9)`, `backdrop-filter: blur(20px)`, padding compresses to `1.5rem 4%`
- **Logo**: left-aligned, Bodoni Moda, `1.3rem`, letter-spacing `0.4em`, color white
- **Center links**: absolute, `left: 50%; transform: translateX(-50%)`, flex with `gap: 4rem` — hidden at ≤968px
  - Link style: white, `0.75rem`, uppercase, letter-spacing `0.2em`, Outfit weight 300
  - Hover: `::before` underline scaleX(0)→scaleX(1), origin switches right→left, color: accent
- **Book Now CTA**: right-aligned, square button, `background: white`, `color: black`, `padding: 1rem 2rem`, `0.7rem`, uppercase, tracking `0.2em`, weight 500
  - Hover: background → accent, color → white
  - `transition: all 0.4s ease`

---

## 4. Progress Dots

- `position: fixed`, `right: 3rem`, `top: 50%; transform: translateY(-50%)`, `z-index: 100`
- Flex column, `gap: 1.5rem`
- Hidden at ≤768px
- Each dot: 8px × 8px, `border: 1px solid #6B6B6B`, `border-radius: 50%`
- Active dot: `background: #FF3D00`, `border-color: #FF3D00`, `transform: scale(1.5)`
- `transition: all 0.4s ease`
- Clicking a dot scrolls to the corresponding `[data-section]` element

---

## 5. Hero Section

- `height: 100vh`, `min-height: 700px`, flex center, `overflow: hidden`
- **Image panel** (`.hero-bg`): absolute, right: 0, width `55%`, height `100%` on desktop; `width: 100%, opacity: 0.4` on mobile
  - Image: `object-fit: cover`, `object-position: center top`
  - Enters: `scale(1.2) + opacity(0)` → `scale(1) + opacity(1)` via `heroImageReveal 2s ease-essence 1.8s`
  - Overlay: `linear-gradient(90deg, #0A0A0A 0%, #0A0A0A 40%, transparent 100%)` desktop; vertical variant mobile
- **Content block**: `position: relative`, `z-index: 10`, `padding: 0 4%`, `max-width: 800px`

**Hero Eyebrow** (animates in at 2s delay):
- `display: inline-flex`, `align-items: center`, `gap: 1.5rem`
- 60px × 1px red line + "Luxury Aesthetic Medicine" in accent, `0.7rem`, tracking `0.4em`, uppercase
- `opacity: 0; transform: translateY(30px)` → `slideUp 1s ease 2s`

**Hero Title** (word-by-word stagger):
- Bodoni Moda, `clamp(4rem, 10vw, 9rem)`, `line-height: 0.95`
- Each line: `<span class="hero-title-line">` with `overflow: hidden`
- Each word: `<span class="hero-title-word">` with `wordReveal 1.2s ease-essence`
- Delays: line1 `2.1s`, line2 `2.3s`, line3 `2.5s`
- Third line word is `<em>` in Instrument Serif italic, color: accent

**Hero Description** (delay 2.7s):
- `1.1rem`, Outfit weight 300, `line-height: 1.9`, color: white-off, `max-width: 450px`
- `slideUp 1s ease 2.7s`

**Hero CTA group** (delay 2.9s):
- Flex row, `gap: 2rem`, inline-flex, `slideUp 1s ease 2.9s`
- Primary button: See Button Patterns in composition-rules.md
- Secondary link: text link with scaleX underline

**Scroll Cue** (delay 3.2s):
- Absolute `bottom: 4rem`, `left: 4%`
- 40×60px pill (border 1px solid muted, border-radius 20px)
- Internal 4×10px red dot animates via `scrollBounce 2s ease-in-out infinite`
- "Scroll to Explore" label: `0.65rem`, tracking `0.3em`, uppercase, muted

---

## 6. Marquee Strip

- `padding: 2rem 0`, `background: #FF3D00`, `overflow: hidden`
- Inner flex container: `animation: marqueeScroll 25s linear infinite`
- Two identical content blocks (100% width each) — seamless loop via `translateX(-50%)`
- Items: Bodoni Moda, `1rem`, letter-spacing `0.3em`, uppercase, `color: #0A0A0A`
- Between each item: `◆` separator at `0.5rem`
- Items: Injectables · Laser Therapy · Medical Facials · Body Sculpting · Skin Rejuvenation · IV Therapy

---

## 7. About / Split Section

- `min-height: 100vh`, `display: grid`, `grid-template-columns: 1fr 1fr`
- Collapses to single column at ≤968px (image above, content below)

**Left — Visual Panel**:
- `overflow: hidden`, `background: #141414`
- Red wipe overlay: absolute full-size div, `scaleX(1)` → `scaleX(0)` on intersection (transform-origin: right, 1.2s ease-essence)
- Image: `width/height: 100%`, `object-fit: cover`; starts `opacity:0, scale(1.3)` → `opacity:1, scale(1)` on intersection (1.5s ease-essence)

**Right — Content Column**:
- `padding: 8rem` desktop, `4rem 5%` mobile
- `background: #0A0A0A`
- Content (all `.reveal` scroll-animated):
  - Section number: "01", accent color, `0.7rem`, tracking `0.3em`, Outfit
  - Section tag: "Our Philosophy", muted, `0.7rem`, tracking `0.4em`, uppercase
  - Heading: Bodoni Moda, `clamp(2.5rem, 5vw, 4.5rem)`, line-height 1.15; "Artistry" in Instrument Serif italic, gold
  - Body: `1rem`, weight 300, line-height 2.0, white-off, `max-width: 500px`
  - Stats row: flex, `gap: 5rem`
    - Each stat: large Bodoni `4rem` number + accent color `+`/`K` suffix, `0.7rem` uppercase label in muted

---

## 8. Services Grid Section

- `padding: 12rem 4%`, `background: #141414`

**Header row** (flex, space-between, align flex-end, `margin-bottom: 6rem`):
- Title: Bodoni Moda, `clamp(3rem, 7vw, 6rem)`, line-height 1.0; "Treatments" in Instrument Serif italic, accent
- Count label: "04 Experiences", `0.75rem`, uppercase, tracking `0.2em`, muted

**Grid**:
- `display: grid`, `grid-template-columns: repeat(2, 1fr)`, `background: rgba(255,255,255,0.05)`, `gap: 1px`
- Collapses to 1-col at ≤768px

**Each Service Card** (`.service-item`):
- `background: #141414`, `padding: 4rem`, `position: relative`, `overflow: hidden`
- `transition: all 0.6s cubic-bezier(0.65, 0, 0.35, 1)`
- Ghost number: absolute `top: 1rem; right: 2rem`, Bodoni `6rem`, `rgba(255,255,255,0.03)` → `rgba(0,0,0,0.1)` on hover
- Hover overlay: `::before` full-size, `linear-gradient(135deg, #FF3D00 0%, #CC3100 100%)`, opacity 0 → 1
- Icon circle: 70×70px, 50% radius, border `1px solid rgba(255,255,255,0.2)`, icon 1.5rem accent color
  - Hover: border → `rgba(255,255,255,0.5)`, bg → `rgba(255,255,255,0.1)`, icon → white
- Service name: Bodoni `2rem`, white, `position: relative; z-index: 1`, `margin-bottom: 1rem`
- Description: Outfit 0.95rem weight 300, muted → `rgba(255,255,255,0.8)` hover, `max-width: 350px`, z-index 1
- Arrow circle: 50×50px, 50% radius, `border: 1px solid accent`; hidden (`opacity:0, translateX(-20px)`) → visible on hover; absolute `bottom: 3rem; right: 3rem`; `transition: all 0.4s ease`; z-index 1

---

## 9. Testimonial Section

- `min-height: 100vh`, flex centered, `background: #0A0A0A`, `overflow: hidden`
- Background text "ESSENCE": absolute, Bodoni Moda, `clamp(10rem, 30vw, 30rem)`, color `#141414`, non-interactive, centered behind content
- Content block: `max-width: 1000px`, `padding: 0 5%`, text-center, `.reveal`

**Content order**:
- Decorative `"`: Bodoni `10rem`, accent color, `opacity: 0.3`, `line-height: 0.5`, `margin-bottom: -2rem` (negative pulls quote text up)
- Quote: Instrument Serif italic, `clamp(1.8rem, 4vw, 3.5rem)`, line-height 1.5, white, `margin-bottom: 4rem`
- Author block (flex column, align-center, gap 1rem):
  - 50×1px accent line
  - Name: `0.85rem`, letter-spacing `0.3em`, uppercase, gold
  - Role: `0.75rem`, muted, tracking `0.1em`

---

## 10. CTA Section

- `min-height: 80vh`, flex align-center, `overflow: hidden`, `position: relative`
- Background: full-size image, `filter: brightness(0.3)` — heavy darkening
- Content: centered column, `padding: 0 5%`, text-center, `z-index: 1`

**Content order** (all `.reveal` with stagger):
- Eyebrow: "Begin Your Transformation", accent color, `0.7rem`, tracking `0.4em`, uppercase, `margin-bottom: 2rem`
- Title: Bodoni Moda, `clamp(3rem, 8vw, 7rem)`, line-height 1.1; "Radiance" in Instrument Serif italic, gold
- Body: `1.1rem`, weight 300, white-off, `max-width: 500px`, line-height 1.9, `margin-bottom: 3rem`
- CTA Button: white background, black text → accent fill from bottom, text → white
  - `padding: 1.8rem 4rem`, `0.8rem`, tracking `0.2em`, uppercase, weight 600
  - `::before` `translateY(100%)` → `translateY(0)` on hover over `0.5s cubic-bezier(0.65,0,0.35,1)`

---

## 11. Footer

- `background: #0A0A0A`, `padding: 8rem 4% 3rem`
- Top border: `1px solid rgba(255,255,255,0.05)`

**Footer Top** (grid `2fr 1fr 1fr 1fr`, gap `4rem`, `margin-bottom: 6rem`):

- **Brand column** (2fr):
  - Logo: Bodoni Moda, `1.5rem`, tracking `0.3em`
  - Tagline: Instrument Serif italic, `1.2rem`, muted
  - Social icons: flex `gap: 1rem`, each 45×45px square, `border: 1px solid rgba(255,255,255,0.1)`
    - Hover: `background: #FF3D00`, `border-color: #FF3D00`
    - Transition: `all 0.3s ease`
    - Icons: Instagram, Facebook, Pinterest, TikTok (Font Awesome brands)

- **Navigate, Treatments, Contact columns** (1fr each):
  - Heading: `0.7rem`, tracking `0.3em`, uppercase, white, `margin-bottom: 2rem`
  - Links: `0.9rem`, muted → accent on hover, `transition: color 0.3s ease`, `margin-bottom: 1rem`

**Footer Bottom** (flex space-between, `padding-top: 3rem`, `border-top: 1px solid rgba(255,255,255,0.05)`):
- Copyright: `0.75rem`, muted
- Legal links (Privacy, Terms): `0.75rem`, muted → accent on hover, flex `gap: 2rem`

**Responsive**:
- Grid → `1fr 1fr` at ≤968px
- Grid → `1fr` at ≤600px
