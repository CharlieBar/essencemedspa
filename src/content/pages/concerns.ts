// src/content/pages/concerns.ts

import type { SEOMeta } from "@/types/content";

export const seo: SEOMeta = {
  title: "Skin & Body Concerns | Find Your Solution | Essence Medspa Chicago",
  description:
    "Not sure which treatment you need? Browse by concern — wrinkles, acne, dark spots, hair loss, stubborn fat, and more. Personalized solutions at Essence Medspa in Chicago.",
  keywords: [
    "skin concerns treatments Chicago",
    "wrinkle treatment near me",
    "acne scar treatment Chicago",
    "hair loss treatment Chicago",
    "dark spots treatment",
  ],
  canonical: "https://www.essence-medspa.com/concerns",
};

export const hero = {
  eyebrow: "Your Concerns, Our Solutions",
  headline: "Start with What Bothers You. We'll Find the Fix.",
  subheadline:
    "Every concern has a solution — often several. Browse the issues that matter to you and discover which treatments deliver the results you're looking for.",
  primaryCTA: {
    text: "Book a Free Consultation",
    href: "https://www.vagaro.com/essencemedspaandwellnesscenter/book-now",
    variant: "primary" as const,
  },
};

export const concerns = [
  {
    name: "Hollow Under Eyes & Dark Circles",
    slug: "hollow-under-eyes",
    tagline: "Look As Awake As You Feel",
    description: "Targeted treatments to brighten, plump, and restore the under-eye area without surgery.",
    image: { src: "/images/concerns/under-eyes.jpg", alt: "Treatment for hollow under eyes and dark circles at Essence Medspa" },
    treatmentCount: 4,
  },
  {
    name: "Wrinkles & Fine Lines",
    slug: "wrinkles-fine-lines",
    tagline: "Turn Back Time, Naturally",
    description: "Smooth expression lines, crow's feet, and forehead wrinkles with proven anti-aging treatments.",
    image: { src: "/images/concerns/wrinkles.jpg", alt: "Anti-aging wrinkle treatment results at Essence Medspa Chicago" },
    treatmentCount: 4,
  },
  {
    name: "Acne Scars & Texture Issues",
    slug: "acne-texture",
    tagline: "Your Smoothest Canvas Yet",
    description: "Resurface, refine, and reveal smoother skin with treatments that target scarring and uneven texture.",
    image: { src: "/images/concerns/acne-scars.jpg", alt: "Acne scar and skin texture treatment at Essence Medspa" },
    treatmentCount: 5,
  },
  {
    name: "Dull, Tired-Looking Skin",
    slug: "dull-tired-skin",
    tagline: "Reveal Your Inner Glow",
    description: "Restore radiance, hydration, and luminosity with brightening treatments and nourishing facials.",
    image: { src: "/images/concerns/dull-skin.jpg", alt: "Skin brightening and glow treatment at Essence Medspa Chicago" },
    treatmentCount: 5,
  },
  {
    name: "Stubborn Fat Pockets",
    slug: "stubborn-fat",
    tagline: "Sculpt Your Dream Silhouette",
    description: "Non-invasive body contouring treatments that target fat deposits diet and exercise can't reach.",
    image: { src: "/images/concerns/body-contouring.jpg", alt: "Non-invasive body contouring treatment at Essence Medspa" },
    treatmentCount: 3,
  },
  {
    name: "Hair Thinning & Hair Loss",
    slug: "hair-thinning",
    tagline: "Reclaim Your Crown",
    description: "Stimulate natural hair growth and restore volume with PRP and advanced scalp treatments.",
    image: { src: "/images/concerns/hair-thinning.jpg", alt: "PRP hair restoration treatment at Essence Medspa Chicago" },
    treatmentCount: 3,
  },
  {
    name: "Chronic Tension & Muscle Pain",
    slug: "muscle-tension",
    tagline: "Release, Relax, Restore",
    description: "Targeted therapeutic massage to release deep knots, improve mobility, and manage chronic pain.",
    image: { src: "/images/concerns/tension.jpg", alt: "Therapeutic deep tissue massage for muscle tension at Essence Medspa" },
    treatmentCount: 4,
  },
  {
    name: "Hyperpigmentation & Dark Spots",
    slug: "dark-spots",
    tagline: "Even Out Your Glow",
    description: "Fade sun damage, melasma, and post-inflammatory marks with brightening and corrective treatments.",
    image: { src: "/images/concerns/dark-spots.jpg", alt: "Hyperpigmentation and dark spot treatment at Essence Medspa" },
    treatmentCount: 4,
  },
];

export const concernsGrid = {
  number: "01",
  eyebrow: "Browse Concerns",
  headline: "Find Your Solution",
  subheadline:
    "Every skin and body concern has a treatment — often several. Browse below to discover which treatments deliver the results you're looking for.",
  cardCTA: "Explore Solutions",
  treatmentCountSuffix: "treatments available",
};

export const ctaSection = {
  headline: "Not Sure Where to Start?",
  subheadline:
    "Book a free consultation and our specialists will evaluate your concerns and recommend the most effective treatment plan.",
  primaryCTA: {
    text: "Book a Free Consultation",
    href: "https://www.vagaro.com/essencemedspaandwellnesscenter/book-now",
    variant: "primary" as const,
  },
  secondaryCTA: {
    text: "Call (773) 763-1212",
    href: "tel:+17737631212",
    variant: "outline" as const,
  },
};
