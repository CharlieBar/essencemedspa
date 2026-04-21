// src/content/hubs/massage.ts

import type { SEOMeta, ServiceCard } from "@/types/content";

export const seo: SEOMeta = {
  title: "Therapeutic Massage | Swedish, Deep Tissue, Hot Stone & Couples | Essence Medspa Chicago",
  description: "13 massage modalities including Swedish, deep tissue, hot stone, cupping, prenatal, Thai herbal, and couples massage at Essence Medspa in Chicago's Edgebrook neighborhood.",
  keywords: ["massage Chicago", "deep tissue massage near me", "couples massage Chicago", "hot stone massage Edgebrook", "therapeutic massage Chicago"],
  canonical: "https://www.essence-medspa.com/services/massage",
};

export const hero = {
  eyebrow: "Therapeutic Massage",
  headline: "Tension Dissolves. Balance Restores. You, Renewed.",
  subheadline: "13 massage modalities from classic Swedish to deep tissue, hot stone, cupping, and couples experiences — all performed by licensed massage therapists in our serene Edgebrook studio.",
  primaryCTA: { text: "Book a Massage", href: "https://www.vagaro.com/essencemedspaandwellnesscenter/book-now", variant: "primary" as const },
  secondaryCTA: { text: "Call (773) 763-1212", href: "tel:+17737631212", variant: "outline" as const },
  image: { src: "/images/hubs/massage-hero.jpg", alt: "Peaceful massage treatment room at Essence Medspa wellness center in Chicago" },
};

export const intro = {
  headline: "Massage at Essence",
  body: "Massage is more than relaxation — it's therapeutic medicine for your muscles, your circulation, and your mind. Our licensed massage therapists are trained in over eight modalities and customize every session to your body's specific needs. Whether you're recovering from a workout, managing chronic pain, preparing for a baby, or sharing a serene experience with your partner, we have a massage designed for exactly that.",
};

export const services: ServiceCard[] = [
  { name: "Swedish Massage", slug: "swedish-massage", tagline: "The classic. The essential. The reset.", description: "50 or 80-minute soothing massage using long, flowing strokes to dissolve tension, improve circulation, and promote deep relaxation.", startingPrice: "$109–$145", highlights: ["Classic technique", "Full relaxation", "50 or 80 min"], cta: { text: "Learn More", href: "/services/swedish-massage" } },
  { name: "Restorative Deep Tissue Massage", slug: "deep-tissue-massage", tagline: "Reach the knots others can't", description: "50 or 80-minute deep pressure massage targeting chronic muscle tension, adhesions, and trigger points.", startingPrice: "$130–$169", highlights: ["Deep knot release", "Chronic pain relief", "50 or 80 min"], cta: { text: "Learn More", href: "/services/deep-tissue-massage" } },
  { name: "Hot Stone Massage", slug: "hot-stone-massage", tagline: "Heated stones, deeper healing", description: "50 or 80-minute massage using heated basalt stones placed on tension points for deep muscle relaxation.", startingPrice: "$160–$195", highlights: ["Basalt stones", "Deep warmth", "50 or 80 min"], cta: { text: "Learn More", href: "/services/hot-stone-massage" } },
  { name: "Cupping Massage", slug: "cupping-massage", tagline: "Ancient technique, modern relief", description: "50 or 80-minute treatment using silicone cupping for increased circulation, fascia release, and tension relief.", startingPrice: "$109–$145", highlights: ["Circulation boost", "Fascia release", "50 or 80 min"], cta: { text: "Learn More", href: "/services/cupping-massage" } },
  { name: "Bamboo Massage", slug: "bamboo-massage", tagline: "Warm bamboo, deep relaxation", description: "50 or 80-minute massage using warm bamboo rods for tension relief and full-body relaxation.", startingPrice: "$125–$165", highlights: ["Bamboo rods", "Digital detox", "50 or 80 min"], cta: { text: "Learn More", href: "/services/bamboo-massage" } },
  { name: "The Athlete's Massage", slug: "athletes-massage", tagline: "Built for active bodies", description: "50 or 80-minute sports-focused massage combining deep tissue, stretching, and targeted muscle group work.", startingPrice: "$126–$165", highlights: ["Sports recovery", "Flexibility", "50 or 80 min"], cta: { text: "Learn More", href: "/services/athletes-massage" } },
  { name: "Thai Herbal Massage", slug: "thai-herbal-massage", tagline: "Aromatic herbs meet ancient healing", description: "50-minute massage using heated herbal compresses with aromatic Thai herbs for natural harmony and deep relaxation.", startingPrice: "$166", highlights: ["Herbal compresses", "Thai tradition", "50 min"], cta: { text: "Learn More", href: "/services/thai-herbal-massage" } },
  { name: "Prenatal Massage", slug: "prenatal-massage", tagline: "Comfort and relief for moms-to-be", description: "50 or 80-minute safe pregnancy massage addressing aches, swelling, and discomfort with specialized positioning.", startingPrice: "$159–$199", highlights: ["Pregnancy-safe", "Specialized positioning", "50 or 80 min"], cta: { text: "Learn More", href: "/services/prenatal-massage" } },
  { name: "Foot Reflexology", slug: "foot-reflexology", tagline: "Your whole body, through your feet", description: "30 or 45-minute focused foot treatment stimulating nerve endings for energy boost, relaxation, and detoxification.", startingPrice: "$75–$95", highlights: ["Nerve stimulation", "Energy boost", "30 or 45 min"], cta: { text: "Learn More", href: "/services/foot-reflexology" } },
  { name: "Couples Swedish Massage", slug: "couples-swedish-massage", tagline: "Share relaxation, side by side", description: "50-minute couples Swedish massage in our private Bamboo Suite. Wine and cheese platter upgrade available.", startingPrice: "$318", highlights: ["Bamboo Suite", "Side-by-side", "50 min"], cta: { text: "Learn More", href: "/services/couples-swedish-massage" } },
  { name: "Couples Deep Tissue Massage", slug: "couples-deep-tissue-massage", tagline: "Deep relief, together", description: "80-minute couples deep tissue in the Bamboo Suite with wine and platter included.", startingPrice: "$438", highlights: ["Bamboo Suite", "Wine + platter included", "80 min"], cta: { text: "Learn More", href: "/services/couples-deep-tissue-massage" } },
  { name: "Face Lifting Gua Sha & Massage", slug: "face-lifting-gua-sha", tagline: "Sculpt, drain, and lift the face", description: "50-minute facial massage using ancient Gua Sha technique for lymphatic drainage, sculpting, and radiance.", startingPrice: "$125", highlights: ["Gua Sha", "Lymphatic drainage", "50 min"], cta: { text: "Learn More", href: "/services/face-lifting-gua-sha" } },
  { name: "Face Lymphatic Drainage", slug: "face-lymphatic-drainage", tagline: "De-puff and detoxify", description: "30-minute facial lymphatic drainage to reduce fluid retention, puffiness, and toxin buildup for a youthful appearance.", startingPrice: "$95", highlights: ["De-puffing", "Detoxifying", "30 min"], cta: { text: "Learn More", href: "/services/face-lymphatic-drainage" } },
];

export const ctaSection = {
  headline: "Ready to Unwind?",
  subheadline: "Book your massage online in under 60 seconds. Tell us where you hold tension, and we'll match you with the right therapist and modality.",
  primaryCTA: { text: "Book a Massage", href: "https://www.vagaro.com/essencemedspaandwellnesscenter/book-now", variant: "primary" as const },
  secondaryCTA: { text: "Call (773) 763-1212", href: "tel:+17737631212", variant: "outline" as const },
};
