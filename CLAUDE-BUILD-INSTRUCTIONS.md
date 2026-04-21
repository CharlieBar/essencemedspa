# CLAUDE.md — Essence Medspa & Wellness Center Website Build

## Project Overview

Build the complete website for **Essence Medspa & Wellness Center** — a 127-page, SEO-optimized, conversion-focused medspa website in Chicago's Edgebrook neighborhood.

**Stack:** Next.js 15 (App Router) + Tailwind CSS 4 + TypeScript  
**Hosting:** Netlify (via GitHub repo)  
**Content:** Pre-built in `src/content/` — 120 TypeScript and MDX files with all copy, SEO, CTAs, FAQs, pricing  
**Design:** Award-winning quality using the `award-winning-design` skill + design system references in `design-system/`  

---

## ⚠️ CRITICAL RULES — READ FIRST

### Content/Design Separation (NON-NEGOTIABLE)

```
src/content/    ← NEVER modify during design work. Contains ALL copy.
src/types/      ← NEVER modify. Contains data contracts.
```

- **Every visible string** on every page MUST come from a content file import
- **Zero hardcoded text** in any component, layout, or page file
- Components receive content via props or imports — they render, never define
- If content is missing or incomplete, **add it to the content file first**, then render it

### Content Enrichment Rule

Some content files (especially blog posts and a few service pages) have placeholder or thin content. Before building those pages:

1. Read the existing content file
2. If the body content says `<!-- PHASE 4 -->` or is under 800 words, **write full rich content** (1,200–1,800 words for blogs, complete sections for service pages)
3. Ensure all content is **SEO-optimized** with:
   - Target keywords used naturally in H2s, first paragraph, and throughout
   - Chicago + Edgebrook geo-modifiers in key positions
   - Internal links to related service pages (use actual slugs from the content directory)
   - Benefit-first language, no filler phrases
4. Write the enriched content back to the content file, then build the page component

### Internal Linking Requirements

Every page must have correct internal links:
- Service pages link to related services (check `relatedServices` in each content file)
- Blog posts link to 2–4 relevant service pages using actual URL slugs
- Concern pages link to all listed solution services
- Hub pages link to every service in their category
- Navigation matches `src/content/global/navigation.ts` exactly
- Footer links match `src/content/global/navigation.ts` footer export exactly

---

## Build Order

Execute in this exact sequence:

### Phase 1: Project Setup

1. Initialize Next.js 15 project with App Router and TypeScript
2. Install Tailwind CSS 4, configure `tailwind.config.ts`
3. Install dependencies: `framer-motion`, `lucide-react`, `next-seo` (or built-in metadata API)
4. Set up path aliases: `@/` → `src/`, `@/content/` → `src/content/`, `@/types/` → `src/types/`
5. Copy the entire `src/content/` directory and `src/types/content.ts` into the project
6. Create GitHub repo and push initial commit
7. Connect repo to Netlify for auto-deployment

### Phase 2: Design System & Global Layout

**Read these skills/references before writing any design code:**
- Read `award-winning-design` skill (`/mnt/skills/user/award-winning-design/SKILL.md`)
- Read its `references/design-directions.md` for direction specs
- Read its `references/execution-patterns.md` for hero/section/animation code
- Read `nextjs-tailwind-builder` skill (`/mnt/skills/user/nextjs-tailwind-builder/SKILL.md`)
- Read all files in the `design-system/` folder provided by the user

**Design Direction Selection:**

For a Chicago medspa targeting luxury wellness + medical-grade results, select from these appropriate directions:
- **Velvet Underground** — luxury, intimate, premium feel
- **Cotton Soft** — warm, approachable, spa-like serenity
- **Carbon Luxury** — modern, medical authority with luxury warmth
- **Honey & Sage** — natural wellness warmth with sophistication

Pick ONE direction that best matches the `design-system/` reference files provided. If design references suggest a different direction, follow them. **Commit fully to the chosen direction — no mixing directions.**

**Build global elements:**
1. CSS custom properties from the chosen direction in `globals.css`
2. Typography (Google Fonts or next/font) — display + body pairing
3. Root layout (`app/layout.tsx`) importing from `src/content/global/site.ts` and `navigation.ts`
4. Header/Navigation component (mega menu for Services + Concerns, top bar with phone/reviews)
5. Footer component (4-column layout from `navigation.ts` footer export)
6. Shared section components: HeroSection, CTASection, FAQAccordion, ServiceCard, ProcessSteps, StatBar, TestimonialSlider

### Phase 3: Core Pages (Priority Build)

Build in this order — these are the highest-traffic pages:

1. **Homepage** (`/`) — Import from `src/content/pages/home.ts`
   - Use the provided homepage image for the hero section
   - Hero with booking CTA + review badge + stats
   - Services overview grid (5 categories)
   - "Your Concerns, Our Solutions" carousel/grid (8 concerns)
   - Why Essence features section
   - Stats bar (reviews, treatments, years, etc.)
   - Testimonials slider (from `src/content/global/testimonials.ts`)
   - Recent blog posts section
   - Instagram feed section (placeholder grid)
   - Full-width CTA section

2. **Services Index** (`/services`) — Import from `src/content/pages/services.ts`

3. **About** (`/about`) — Import from `src/content/pages/about.ts`

4. **Contact** (`/contact`) — Import from `src/content/pages/contact.ts`
   - Google Maps embed (use coordinates from content file)
   - Contact form (fields defined in content file)
   - Quick actions grid (Book, Call, Email)

5. **All Concerns Index** (`/concerns`) — Import from `src/content/pages/concerns.ts`

6. **Blog Index** (`/blog`) — Import from `src/content/pages/blog.ts`

### Phase 4: Hub & Concern Pages

1. **5 Service Category Hubs** (`/services/[category-slug]`)
   - Import from `src/content/hubs/[slug].ts`
   - Each hub lists all services in that category as cards
   - Category description + intro + CTA

2. **8 Concern Pages** (`/concerns/[slug]`)
   - Import from `src/content/concerns/[slug].ts`
   - Each concern page shows relevant treatments with prices
   - FAQ accordion, why-us section, booking CTA

### Phase 5: Individual Service Pages (71 pages)

Use a dynamic route: `app/services/[slug]/page.tsx`

**Template structure** (every service page follows this pattern):
```
Hero Section (split layout with floating badge)
↓
Trust Strip (review count, rating, years)
↓
Overview + Key Facts sidebar
↓
Benefits/Treatment Areas grid
↓
Process Steps (numbered)
↓
Ideal Candidates (if present in content)
↓
Pricing Cards (if present in content)
↓
Results Stats bar
↓
FAQ Accordion
↓
Related Services cards
↓
Full-width CTA section
```

Import pattern:
```typescript
import { content } from "@/content/services/[slug]";
// Use content.seo, content.hero, content.overview, content.benefits, etc.
```

Generate `generateStaticParams()` by reading all files in `src/content/services/`.

### Phase 6: Blog

1. **Blog Index** (`/blog`) with category filtering and pagination
2. **Blog Category Pages** (`/blog/[category]`) — 5 categories defined in `src/content/pages/blog.ts`
3. **Individual Blog Posts** (`/blog/[slug]`) from `src/content/articles/[slug].mdx`
   - **IMPORTANT:** Check each MDX file. If the body contains `<!-- PHASE 4 -->` placeholder, write full 1,200–1,800 word SEO-optimized content FIRST, save to the MDX file, THEN build the page
   - Render MDX with proper heading hierarchy, internal links, and reading time
   - Blog post template: featured image, title, author, date, category, reading time, body, related posts, CTA

### Phase 7: Utility Pages

1. **Privacy Policy** (`/privacy-policy`) — Generate HIPAA-aware privacy policy scaffold, flag for legal review
2. **Terms of Service** (`/terms`) — Generate T&C scaffold, flag for legal review
3. **HTML Sitemap** (`/sitemap`) — Auto-generate from all routes
4. **XML Sitemap** (`/sitemap.xml`) — Auto-generate via Next.js sitemap
5. **404 Page** (`/404`) — Custom with search, popular services, booking CTA
6. **Thank You** (`/thank-you`) — Post-form confirmation with next steps
7. **robots.txt** — Allow all, reference sitemap

---

## Images Strategy

### Homepage

The user has provided a homepage hero image. Use it for the homepage hero section.

### All Other Images

Use **placeholder/stock images** for now. For each image used, create a stock image that fits the context (e.g., use Unsplash-style free stock photos via `next/image` with placeholder blur).

### Image Manifest (REQUIRED)

After building all pages, generate a file at `IMAGE_MANIFEST.md` in the project root listing every image the site needs:

```markdown
# Image Manifest — Essence Medspa

## Hero Images
| Page | Path | Dimensions | Description / ComfyUI Prompt Notes |
|------|------|------------|-------------------------------------|
| Homepage | /images/hero/home-hero.jpg | 1920x1080 | [provided by client] |
| About | /images/about/team-photo.jpg | 1600x900 | Team photo in the Essence Medspa studio |
...

## Service Images
| Service | Path | Description / ComfyUI Prompt Notes |
|---------|------|-------------------------------------|
| Botox | /images/services/botox-hero.jpg | Natural Botox results, smooth forehead |
...

## Blog Images
...

## Category / Hub Images
...

## Concern Images
...
```

For each image, write a brief description that can later be converted into a ComfyUI prompt using the `comfyui-image-generator` skill. The descriptions should be specific enough to generate the right image (e.g., "Close-up of a calm female client receiving a facial treatment in a warm-lit medspa treatment room, soft focus, warm tones, professional setting").

---

## SEO Requirements

### On-Page SEO (Every Page)

- `<title>` tag from content file's `seo.title` (includes primary keyword + "Chicago" + business name)
- `<meta name="description">` from `seo.description` (150–160 chars with keyword + location)
- `<meta name="keywords">` from `seo.keywords` array
- Canonical URL from `seo.canonical`
- Open Graph tags (title, description, image, type, url)
- Twitter Card tags
- H1 = `hero.headline` (only one H1 per page)
- H2s use benefit-driven language with target keywords
- Image alt text from content file image objects (never empty)

### Local SEO

- JSON-LD schema markup on every page:
  - `MedicalSpa` schema on homepage with full business info
  - `Service` schema on each service page with name, description, price, provider
  - `Article` schema on blog posts
  - `BreadcrumbList` schema on all inner pages
  - `FAQPage` schema on pages with FAQs
- NAP (Name, Address, Phone) consistent across all pages — sourced from `src/content/global/site.ts`
- Geo-modifiers (Chicago, Edgebrook) naturally placed in titles, H1s, and body copy

### Technical SEO

- Server-side rendering (Next.js App Router default)
- Semantic HTML (proper heading hierarchy, landmarks, nav, main, article, section)
- XML sitemap auto-generated
- robots.txt allowing all crawlers
- Canonical URLs on every page
- Next/Image for all images (lazy loading, srcset, WebP)
- Core Web Vitals optimized (LCP < 2.5s, FID < 100ms, CLS < 0.1)

---

## Netlify Deployment

### Setup

1. Create a GitHub repository: `essence-medspa-website`
2. Push all code to `main` branch
3. Connect to Netlify:
   - Build command: `npm run build` (or `next build`)
   - Publish directory: `.next` (or use `@netlify/plugin-nextjs`)
   - Install the Netlify Next.js plugin for proper SSR support
4. Configure environment variables if needed
5. Set up custom domain when ready (the domain is `essence-medspa.com`)

### Netlify Config (`netlify.toml`)

```toml
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"

[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-Content-Type-Options = "nosniff"
    Referrer-Policy = "strict-origin-when-cross-origin"

[[redirects]]
  from = "/book"
  to = "https://www.vagaro.com/essencemedspaandwellnesscenter/book-now"
  status = 301

[[redirects]]
  from = "/book-now"
  to = "https://www.vagaro.com/essencemedspaandwellnesscenter/book-now"
  status = 301
```

---

## Design Quality Bar

This is NOT a template website. Every page should feel intentional, premium, and worthy of design recognition.

**Mandatory design elements:**
- At least one "wow moment" per major page (scroll-triggered animation, parallax, reveal effect)
- Hero sections use split layouts, overlapping elements, or cinematic compositions — NOT centered text on a gradient
- Typography has dramatic contrast (large display headings vs refined body text)
- Color palette is used with intention — primary for CTAs, secondary for accents, neutrals for breathing room
- Micro-interactions on buttons, cards, and navigation elements
- Smooth page transitions between routes
- `prefers-reduced-motion` respected for all animations
- Mobile responsive at 375px, 768px, 1024px, 1440px breakpoints

**Performance requirements:**
- Lighthouse Performance score > 90
- All images optimized with `next/image`
- Fonts preloaded
- Critical CSS above the fold
- Animations at 60fps

---

## File Structure

```
essence-medspa-website/
├── CLAUDE.md                    ← This file (build instructions)
├── IMAGE_MANIFEST.md            ← Generated during build (all images needed)
├── netlify.toml                 ← Netlify deployment config
├── next.config.ts               ← Next.js config
├── tailwind.config.ts           ← Tailwind config with design tokens
├── tsconfig.json
├── package.json
├── public/
│   ├── images/                  ← All site images
│   │   ├── hero/
│   │   ├── services/
│   │   ├── blog/
│   │   ├── concerns/
│   │   ├── categories/
│   │   ├── about/
│   │   ├── team/
│   │   └── og/                  ← Open Graph images
│   ├── favicon.ico
│   └── robots.txt
├── src/
│   ├── app/
│   │   ├── layout.tsx           ← Root layout (nav + footer + fonts + metadata)
│   │   ├── page.tsx             ← Homepage
│   │   ├── about/page.tsx
│   │   ├── contact/page.tsx
│   │   ├── services/
│   │   │   ├── page.tsx         ← Services index
│   │   │   └── [slug]/page.tsx  ← Dynamic: hubs + individual services
│   │   ├── concerns/
│   │   │   ├── page.tsx         ← Concerns index
│   │   │   └── [slug]/page.tsx  ← Individual concerns
│   │   ├── blog/
│   │   │   ├── page.tsx         ← Blog index
│   │   │   ├── [category]/page.tsx
│   │   │   └── [slug]/page.tsx  ← Individual blog posts
│   │   ├── privacy-policy/page.tsx
│   │   ├── terms/page.tsx
│   │   ├── sitemap/page.tsx
│   │   ├── thank-you/page.tsx
│   │   └── not-found.tsx        ← Custom 404
│   ├── components/              ← ✅ Freely redesign these
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── MegaMenu.tsx
│   │   │   └── TopBar.tsx
│   │   ├── sections/
│   │   │   ├── HeroSection.tsx
│   │   │   ├── CTASection.tsx
│   │   │   ├── ServiceGrid.tsx
│   │   │   ├── ConcernsCarousel.tsx
│   │   │   ├── WhyUsFeatures.tsx
│   │   │   ├── StatsBar.tsx
│   │   │   ├── TestimonialSlider.tsx
│   │   │   ├── ProcessSteps.tsx
│   │   │   ├── PricingCards.tsx
│   │   │   ├── FAQAccordion.tsx
│   │   │   ├── RelatedServices.tsx
│   │   │   ├── BlogPostCard.tsx
│   │   │   └── InstagramFeed.tsx
│   │   └── ui/
│   │       ├── Button.tsx
│   │       ├── Badge.tsx
│   │       ├── Card.tsx
│   │       └── ...
│   ├── content/                 ← ❌ NEVER modify for design changes
│   │   ├── global/
│   │   ├── pages/
│   │   ├── concerns/
│   │   ├── hubs/
│   │   ├── services/
│   │   └── articles/
│   ├── types/                   ← ❌ NEVER modify
│   │   └── content.ts
│   ├── lib/
│   │   ├── content.ts           ← Content loading utilities
│   │   ├── mdx.ts               ← MDX rendering utilities
│   │   └── schema.ts            ← JSON-LD schema generators
│   └── styles/
│       └── globals.css          ← Tailwind + CSS custom properties
└── design-system/               ← Design references provided by user
```

---

## Quick Reference — Business Data

| Field | Value |
|-------|-------|
| Name | Essence Medspa & Wellness Center |
| Phone | (773) 763-1212 |
| Email | keepcalm@essence-medspa.com |
| Address | 6413 N Kinzua Ave, Chicago, IL 60646 |
| Neighborhood | Edgebrook |
| Reviews | 4.9 stars / 463 reviews (Google) |
| Booking | https://www.vagaro.com/essencemedspaandwellnesscenter/book-now |
| Instagram | @essencechicago |
| Facebook | facebook.com/essencemedspainchicago |
| TikTok | @essencechicago |

---

## Summary Checklist

- [ ] Next.js 15 + Tailwind CSS 4 project initialized
- [ ] Content files copied to `src/content/` (120 files)
- [ ] Design direction chosen from award-winning-design skill + design-system references
- [ ] Global layout (Header, Footer, TopBar) built from content imports
- [ ] Homepage built with all sections from `home.ts`
- [ ] 5 core pages built (About, Contact, Services, Blog, Concerns)
- [ ] 5 hub/category pages built
- [ ] 8 concern pages built
- [ ] 71 service pages built via dynamic route
- [ ] 25 blog posts built (thin content enriched to full articles)
- [ ] 7 utility pages built (Privacy, Terms, Sitemap, 404, Thank You, robots.txt)
- [ ] All internal links verified correct
- [ ] JSON-LD schema on every page
- [ ] SEO metadata rendering correctly
- [ ] IMAGE_MANIFEST.md generated with all image needs + ComfyUI prompt notes
- [ ] Mobile responsive (375px → 1440px)
- [ ] Accessibility (WCAG AA, semantic HTML, keyboard nav)
- [ ] GitHub repo created and code pushed
- [ ] Netlify connected and deploying from main branch
- [ ] Lighthouse score > 90 performance
