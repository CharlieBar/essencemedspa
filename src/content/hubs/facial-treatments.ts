// src/content/hubs/facial-treatments.ts

import type { SEOMeta, ServiceCard } from "@/types/content";

export const seo: SEOMeta = {
  title: "Facial Treatments | Hydrofacial, Peels & Anti-Aging | Essence Medspa Chicago",
  description: "21 customized facial treatments including Hydrofacial ($229), RF Micro-Needling ($399), Jet Plasma ($350), chemical peels, and our Signature Facelift Facial at Essence Medspa Chicago.",
  keywords: ["facial treatments Chicago", "Hydrofacial near me", "chemical peel Chicago", "anti-aging facial Edgebrook", "microdermabrasion Chicago"],
  canonical: "https://www.essence-medspa.com/services/facial-treatments",
  ogImage: "/images/og/facial-treatments.jpg",
};

export const hero = {
  eyebrow: "Facial Treatments",
  headline: "21 Facials. One Perfect Match for Your Skin.",
  subheadline: "From deep-cleansing basics to advanced RF micro-needling, every facial is customized to your skin type, concerns, and goals. Walk in with questions, walk out with answers — and a glow.",
  primaryCTA: { text: "Book a Facial", href: "https://www.vagaro.com/essencemedspaandwellnesscenter/book-now", variant: "primary" as const },
  secondaryCTA: { text: "Call (773) 763-1212", href: "tel:+17737631212", variant: "outline" as const },
  badge: "⭐ 4.9 Stars · 463 Google Reviews",
  image: { src: "/images/hubs/facial-treatments-hero.jpg", alt: "Client receiving a luxury facial treatment at Essence Medspa Chicago" },
};

export const intro = {
  headline: "Facial Treatments at Essence",
  body: "Your face is unique — your facial should be too. Our 21 facial treatments span every skin concern from teenage acne to mature skin rejuvenation, from post-summer sun damage to pre-event glow prep. Every treatment includes a skin assessment and product recommendations so you continue seeing results at home between visits.",
};

export const services: ServiceCard[] = [
  { name: "Hydrofacial", slug: "hydrofacial", tagline: "Chicago's most requested glow treatment", description: "60-minute oxygen and water facial combining cleansing, extraction, and infusion for instant, visible radiance.", startingPrice: "$229", highlights: ["Instant glow", "Zero downtime", "All skin types"], cta: { text: "Learn More", href: "/services/hydrofacial" } },
  { name: "Custom Facial", slug: "custom-facial", tagline: "Your skin, your treatment, your results", description: "50-minute fully personalized facial tailored after a thorough skin analysis. The most flexible option for unique concerns.", startingPrice: "$169", highlights: ["Fully customized", "Skin analysis included", "50 minutes"], cta: { text: "Learn More", href: "/services/custom-facial" } },
  { name: "RF Micro-Needling Facial", slug: "rf-microneedling-facial", tagline: "Rewrite your skin's collagen framework", description: "75-minute radiofrequency micro-needling for advanced anti-aging, scar revision, and skin tightening.", startingPrice: "$399", highlights: ["Collagen remodeling", "Skin tightening", "75 minutes"], cta: { text: "Learn More", href: "/services/rf-microneedling-facial" } },
  { name: "Jet Plasma Facial", slug: "jet-plasma-facial", tagline: "Plasma-powered skin transformation", description: "30-minute plasma treatment for fine lines, acne scarring, hyperpigmentation, and overall rejuvenation.", startingPrice: "$350", highlights: ["No downtime", "Fine lines + scars", "30 minutes"], cta: { text: "Learn More", href: "/services/jet-plasma-facial" } },
  { name: "Essence Signature Facelift Facial", slug: "essence-signature-facelift-facial", tagline: "Our most transformative facial", description: "50-minute 4-layer Vitamin C treatment with AHA/BHA/enzymes to tighten, brighten, and visibly transform.", startingPrice: "$195", highlights: ["4-layer treatment", "Vitamin C infusion", "Visible lift"], cta: { text: "Learn More", href: "/services/essence-signature-facelift-facial" } },
  { name: "Essence Signature Facelift Peel", slug: "essence-signature-facelift-peel", tagline: "Our signature peel, safe for all skin types", description: "30-minute organic peel using our proprietary 4-layer facelift formula. Safe for sensitive skin.", startingPrice: "$129", highlights: ["All skin types", "Organic formula", "30 minutes"], cta: { text: "Learn More", href: "/services/essence-signature-facelift-peel" } },
  { name: "Red Carpet Collagen Anti-Wrinkle", slug: "red-carpet-collagen-facial", tagline: "80 minutes of powerful anti-aging", description: "80-minute collagen-boosting treatment that hydrates, tones, strengthens, and visibly reduces wrinkles.", startingPrice: "$215", highlights: ["Anti-wrinkle", "Collagen boost", "80 minutes"], cta: { text: "Learn More", href: "/services/red-carpet-collagen-facial" } },
  { name: "Red Carpet Signature Anti-Aging", slug: "red-carpet-anti-aging-facial", tagline: "Instant visible results, no needles", description: "60-minute non-invasive expression line treatment with immediate visible improvement. Pre-event favorite.", startingPrice: "$199", highlights: ["Instant results", "Non-invasive", "60 minutes"], cta: { text: "Learn More", href: "/services/red-carpet-anti-aging-facial" } },
  { name: "Firming Facial", slug: "firming-facial", tagline: "Visible lifting in a single session", description: "60-minute 4-step progressive treatment delivering an instant face lift effect. Ideal before special events.", startingPrice: "$215", highlights: ["Instant lift", "4-step protocol", "60 minutes"], cta: { text: "Learn More", href: "/services/firming-facial" } },
  { name: "Acne Facial", slug: "acne-facial", tagline: "Clear breakouts, calm inflammation", description: "50-minute acne treatment with ZO Stimulator Peel and sulfur mask targeting active breakouts and congestion.", startingPrice: "$159", highlights: ["Acne-specific", "ZO Stimulator Peel", "50 minutes"], cta: { text: "Learn More", href: "/services/acne-facial" } },
  { name: "Brightening Facial", slug: "brightening-facial", tagline: "Vitamin C-powered radiance", description: "50-minute antioxidant facial with Vitamin C, algae patches, and thermal organic clay for luminous skin.", startingPrice: "$155", highlights: ["Vitamin C", "Brightening", "50 minutes"], cta: { text: "Learn More", href: "/services/brightening-facial" } },
  { name: "Hydrating Facial", slug: "hydrating-facial", tagline: "Deep relief for parched skin", description: "50-minute soothing hydration treatment with thermo-cooling for sensitive and dehydrated skin.", startingPrice: "$159", highlights: ["Sensitive-safe", "Thermo-cooling", "50 minutes"], cta: { text: "Learn More", href: "/services/hydrating-facial" } },
  { name: "Oxygen Facial", slug: "oxygen-facial", tagline: "Breathe life back into your skin", description: "60-minute oxygen revival treatment delivering deep hydration, plumpness, and luminous radiance.", startingPrice: "$159", highlights: ["Deep hydration", "Oxygen infusion", "60 minutes"], cta: { text: "Learn More", href: "/services/oxygen-facial" } },
  { name: "Deep Pore Cleansing Facial", slug: "deep-pore-cleansing-facial", tagline: "The ultimate skin detox", description: "50-minute intensive pore detox with professional extractions for congested, oily, or breakout-prone skin.", startingPrice: "$125", highlights: ["Extractions", "Pore detox", "50 minutes"], cta: { text: "Learn More", href: "/services/deep-pore-cleansing-facial" } },
  { name: "Microdermabrasion Facial", slug: "microdermabrasion-facial", tagline: "Resurface and reveal", description: "50-minute crystal exfoliation for sun damage, scarring, wrinkles, age spots, and large pores.", startingPrice: "$125", highlights: ["Crystal exfoliation", "Scar + sun damage", "50 minutes"], cta: { text: "Learn More", href: "/services/microdermabrasion-facial" } },
  { name: "Microdermabrasion — Chest", slug: "microdermabrasion-chest", tagline: "Smooth and renew the décolleté", description: "45-minute chest treatment for sun damage, age spots, and fine lines on the décolleté area.", startingPrice: "$91", highlights: ["Chest area", "Sun damage", "45 minutes"], cta: { text: "Learn More", href: "/services/microdermabrasion-chest" } },
  { name: "Microdermabrasion — Neck", slug: "microdermabrasion-neck", tagline: "Targeted neck renewal", description: "20-minute neck treatment for lines, wrinkles, and uneven skin tone.", startingPrice: "$59", highlights: ["Neck area", "Quick treatment", "20 minutes"], cta: { text: "Learn More", href: "/services/microdermabrasion-neck" } },
  { name: "Custom Peel", slug: "custom-peel", tagline: "Results-driven exfoliation", description: "30-minute chemical peel customized to your skin type for pigmentation, mature skin, and fine lines.", startingPrice: "$130", highlights: ["Customized formula", "Progressive results", "30 minutes"], cta: { text: "Learn More", href: "/services/custom-peel" } },
  { name: "Collagen Sublime Eye Contour", slug: "collagen-eye-contour", tagline: "Revitalize the delicate eye area", description: "30-minute 4-step eye treatment for under-eye revitalization, nourishment, and anti-aging.", startingPrice: "$77", highlights: ["Eye-specific", "4-step protocol", "30 minutes"], cta: { text: "Learn More", href: "/services/collagen-eye-contour" } },
  { name: "Teen Facial", slug: "teen-facial", tagline: "The right start for young skin", description: "30-minute facial designed specifically for teen skin — deep cleansing, acne management, and skincare education.", startingPrice: "$85", highlights: ["Ages 13–19", "Acne management", "30 minutes"], cta: { text: "Learn More", href: "/services/teen-facial" } },
  { name: "4D Face Lifting Massage", slug: "4d-face-lifting-massage", tagline: "Non-invasive lift meets ancient technique", description: "60-minute multi-layer face lifting combining Eastern wisdom with modern skincare science.", startingPrice: "$195", highlights: ["Non-invasive lift", "Eastern + modern", "60 minutes"], cta: { text: "Learn More", href: "/services/4d-face-lifting-massage" } },
];

export const ctaSection = {
  headline: "Not Sure Which Facial Is Right for You?",
  subheadline: "Book a consultation and our aesthetician will analyze your skin and recommend the perfect facial for your specific concerns.",
  primaryCTA: { text: "Book a Facial", href: "https://www.vagaro.com/essencemedspaandwellnesscenter/book-now", variant: "primary" as const },
  secondaryCTA: { text: "Call (773) 763-1212", href: "tel:+17737631212", variant: "outline" as const },
};
