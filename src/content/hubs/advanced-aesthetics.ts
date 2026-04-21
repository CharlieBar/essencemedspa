// src/content/hubs/advanced-aesthetics.ts

import type { SEOMeta, ServiceCard } from "@/types/content";

export const seo: SEOMeta = {
  title: "Advanced Aesthetics | Botox, Fillers, PRP & IV Therapy | Essence Medspa Chicago",
  description: "19 advanced aesthetic treatments including Botox ($15/unit), Juvederm fillers, PRP & PRF facials, mesotherapy, IV therapy, and hair restoration at Essence Medspa in Chicago.",
  keywords: ["advanced aesthetics Chicago", "Botox near me", "PRP facial Chicago", "IV therapy Edgebrook", "dermal fillers Chicago", "mesotherapy near me"],
  canonical: "https://www.essence-medspa.com/services/advanced-aesthetics",
  ogImage: "/images/og/advanced-aesthetics.jpg",
};

export const hero = {
  eyebrow: "Advanced Aesthetics",
  headline: "Medical-Grade Treatments. Visible Transformation.",
  subheadline: "From wrinkle-smoothing Botox to regenerative PRP facials and restorative IV therapy — 19 advanced treatments delivered by licensed specialists in our Chicago studio.",
  primaryCTA: { text: "Book an Appointment", href: "https://www.vagaro.com/essencemedspaandwellnesscenter/book-now", variant: "primary" as const },
  secondaryCTA: { text: "Call (773) 763-1212", href: "tel:+17737631212", variant: "outline" as const },
  badge: "⭐ 4.9 Stars · 463 Google Reviews",
  image: { src: "/images/hubs/advanced-aesthetics-hero.jpg", alt: "Advanced aesthetic treatment being performed at Essence Medspa Chicago" },
};

export const intro = {
  headline: "Advanced Aesthetics at Essence",
  body: "Our advanced aesthetics menu brings together the most effective non-surgical treatments in modern medicine. Each treatment is backed by clinical research, performed by certified specialists, and customized to your unique facial anatomy and goals. Whether you're looking to smooth your first fine lines or restore volume you've lost over the years, we'll create a plan that looks natural and lasts.",
};

export const services: ServiceCard[] = [
  { name: "Botox", slug: "botox", tagline: "The gold standard for dynamic wrinkles", description: "Botox Cosmetic injections for forehead lines, crow's feet, frown lines, and facial symmetry. Natural-looking results in 3–5 days.", startingPrice: "$15/unit", highlights: ["3–5 day onset", "3–4 month results", "No downtime"], cta: { text: "Learn More", href: "/services/botox" } },
  { name: "Juvederm Ultra XC / Voluma", slug: "juvederm-fillers", tagline: "Restore volume where it matters most", description: "Hyaluronic acid dermal fillers for lips, cheeks, nasolabial folds, and chin augmentation. Immediate, natural-looking volume.", startingPrice: "$650–$1,000", highlights: ["Immediate results", "6–18 month duration", "Reversible"], cta: { text: "Learn More", href: "/services/juvederm-fillers" } },
  { name: "PRP Facial", slug: "prp-facial", tagline: "Your own blood, your best skin", description: "Platelet-rich plasma facial for fine lines, wrinkle reduction, and youthful radiance. Harnesses your body's own healing power.", startingPrice: "$550", highlights: ["Natural regeneration", "Collagen boost", "Minimal downtime"], cta: { text: "Learn More", href: "/services/prp-facial" } },
  { name: "PRF Facial", slug: "prf-facial", tagline: "Next-generation regenerative treatment", description: "Platelet-rich fibrin for deep skin rejuvenation, collagen production, and tissue repair. Slow-release growth factors for lasting results.", startingPrice: "$650", highlights: ["Extended growth factor release", "Collagen production", "No synthetic materials"], cta: { text: "Learn More", href: "/services/prf-facial" } },
  { name: "PRF Under Eyes", slug: "prf-under-eyes", tagline: "Brighten and plump without fillers", description: "PRF injected beneath the eyes for dark circle correction and natural volume restoration. No filler migration risk.", startingPrice: "$300", highlights: ["Natural under-eye revival", "No filler risk", "4–6 week improvement"], cta: { text: "Learn More", href: "/services/prf-under-eyes" } },
  { name: "The Vampire Facial", slug: "vampire-facial", tagline: "The ultimate non-surgical facelift", description: "Personalized non-surgical facelift combining multiple advanced techniques to lift, tighten, and sculpt.", startingPrice: "$999", highlights: ["Multi-technique approach", "Lift + tighten + sculpt", "Customized protocol"], cta: { text: "Learn More", href: "/services/vampire-facial" } },
  { name: "Collagen Induction Therapy + Vitamin C", slug: "collagen-induction-therapy", tagline: "Rebuild your skin's foundation", description: "Microneedling combined with Vitamin C serum for enhanced collagen production, radiance, and skin rejuvenation.", startingPrice: "$350", highlights: ["Collagen remodeling", "Vitamin C infusion", "Progressive results"], cta: { text: "Learn More", href: "/services/collagen-induction-therapy" } },
  { name: "Lipo Sculpt", slug: "lipo-sculpt", tagline: "Non-invasive body contouring", description: "Target and reduce stubborn fat deposits without surgery. Body sculpting for abdomen, flanks, thighs, and arms.", startingPrice: "$300", highlights: ["Non-invasive", "No downtime", "Measurable reduction"], cta: { text: "Learn More", href: "/services/lipo-sculpt" } },
  { name: "Meso Brightening", slug: "meso-brightening", tagline: "Fade dark spots at the source", description: "Mesotherapy micro-injections to target dark spots, uneven tone, and discoloration at the cellular level.", startingPrice: "$125", highlights: ["Targets pigment directly", "Progressive brightening", "All skin types"], cta: { text: "Learn More", href: "/services/meso-brightening" } },
  { name: "Meso Contour", slug: "meso-contour", tagline: "Precision sculpting without surgery", description: "Mesotherapy contouring for post-weight-loss sculpting, double chin reduction, and feature definition.", startingPrice: "$125", highlights: ["Targeted contouring", "Minimal downtime", "Progressive results"], cta: { text: "Learn More", href: "/services/meso-contour" } },
  { name: "Meso Firm", slug: "meso-firm", tagline: "Tighter, firmer, more youthful skin", description: "Mesotherapy firming cocktail for skin laxity, loss of elasticity, and early sagging.", startingPrice: "$125", highlights: ["Skin tightening", "Elasticity restoration", "Collagen stimulation"], cta: { text: "Learn More", href: "/services/meso-firm" } },
  { name: "Meso Glow", slug: "meso-glow", tagline: "The lit-from-within treatment", description: "Nourishing mesotherapy serums delivered via micro-needling for radiance, hydration, and luminous skin.", startingPrice: "$125", highlights: ["Instant radiance", "Deep nourishment", "No downtime"], cta: { text: "Learn More", href: "/services/meso-glow" } },
  { name: "Meso Lift", slug: "meso-lift", tagline: "Smooth, tone, and lift", description: "Mesotherapy lifting cocktail to smooth, tone, and lift skin while stimulating collagen production.", startingPrice: "$125", highlights: ["Non-surgical lifting", "Collagen stimulation", "Progressive results"], cta: { text: "Learn More", href: "/services/meso-lift" } },
  { name: "Glutathione Skin Brightening", slug: "glutathione-brightening", tagline: "Glow from the inside out", description: "IV glutathione push — the body's master antioxidant — for internal skin brightening and radiance.", startingPrice: "$79", highlights: ["Internal brightening", "Master antioxidant", "Quick 15-min session"], cta: { text: "Learn More", href: "/services/glutathione-brightening" } },
  { name: "Hair Restoration PRP", slug: "hair-restoration", tagline: "Reactivate dormant follicles", description: "PRP therapy for non-surgical hair rejuvenation. Growth factors stimulate thicker, stronger hair growth.", startingPrice: "$499", highlights: ["Non-surgical", "Your own growth factors", "Visible in 6–8 weeks"], cta: { text: "Learn More", href: "/services/hair-restoration" } },
  { name: "Hyaluronidase Dissolve", slug: "hyaluronidase-dissolve", tagline: "Reset and restore your natural look", description: "Enzyme treatment to dissolve unwanted or migrated hyaluronic acid filler. Safe, controlled correction.", startingPrice: "$175", highlights: ["Filler correction", "Fast-acting enzyme", "Natural restoration"], cta: { text: "Learn More", href: "/services/hyaluronidase-dissolve" } },
  { name: "IV Therapy — Cosmetic", slug: "iv-therapy-cosmetic", tagline: "Beauty from the inside out", description: "Cosmetic IV infusion packed with vitamins, minerals, and antioxidants for skin health, energy, and radiance.", startingPrice: "$230", highlights: ["Direct absorption", "Skin + energy boost", "45-min session"], cta: { text: "Learn More", href: "/services/iv-therapy-cosmetic" } },
  { name: "IV Therapy — Hydration", slug: "iv-therapy-hydration", tagline: "Deep cellular rehydration", description: "Hydration IV infusion for rapid rehydration delivered directly to your bloodstream. Ideal for dehydration, fatigue, and dry skin.", startingPrice: "$175", highlights: ["Instant hydration", "100% absorption", "30-min session"], cta: { text: "Learn More", href: "/services/iv-therapy-hydration" } },
  { name: "IV Therapy — Recovery", slug: "iv-therapy-recovery", tagline: "Bounce back faster", description: "Recovery IV infusion for post-workout, post-travel, or general rejuvenation. Replenishes what your body needs most.", startingPrice: "$225", highlights: ["Full-body recovery", "Vitamin + mineral boost", "45-min session"], cta: { text: "Learn More", href: "/services/iv-therapy-recovery" } },
];

export const ctaSection = {
  headline: "Not Sure Which Advanced Treatment Is Right for You?",
  subheadline: "Book a free consultation. Our specialists will assess your concerns, explain your options, and create a personalized plan — with clear pricing before we begin.",
  primaryCTA: { text: "Book a Free Consultation", href: "https://www.vagaro.com/essencemedspaandwellnesscenter/book-now", variant: "primary" as const },
  secondaryCTA: { text: "Call (773) 763-1212", href: "tel:+17737631212", variant: "outline" as const },
};
