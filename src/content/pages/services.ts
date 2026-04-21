// src/content/pages/services.ts

import type { SEOMeta } from "@/types/content";

export const seo: SEOMeta = {
  title: "All Services | Essence Medspa & Wellness Center Chicago",
  description:
    "Explore 65+ treatments at Essence Medspa in Chicago: advanced aesthetics, facials, body treatments, therapeutic massage, IV therapy, and spa upgrades. View pricing and book online.",
  keywords: [
    "medspa services Chicago",
    "facial treatments near me",
    "Botox and fillers Chicago",
    "massage services Chicago",
    "medspa treatments Edgebrook",
  ],
  canonical: "https://www.essence-medspa.com/services",
  ogImage: "/images/og/services.jpg",
};

export const hero = {
  eyebrow: "Our Services",
  headline: "65+ Treatments. One Serene Destination.",
  subheadline:
    "Advanced aesthetics, rejuvenating facials, therapeutic massage, and holistic wellness — all performed by licensed specialists in our Edgebrook studio.",
  primaryCTA: {
    text: "Book an Appointment",
    href: "https://www.vagaro.com/essencemedspaandwellnesscenter/book-now",
    variant: "primary" as const,
  },
  secondaryCTA: {
    text: "Not Sure? View by Concern",
    href: "/concerns",
    variant: "ghost" as const,
  },
  badge: "⭐ 4.9 Stars · 463 Google Reviews",
};

export const intro = {
  headline: "Find Your Perfect Treatment",
  body: "Whether you're looking to smooth wrinkles, clear acne, restore your hair, relieve chronic tension, or simply glow — we have a treatment designed for your specific goals. Browse by category below or filter by concern.",
};

export const filterOptions = {
  concerns: [
    "Wrinkles & Fine Lines",
    "Acne & Texture",
    "Dull Skin & Uneven Tone",
    "Hair Thinning",
    "Body Contouring",
    "Dark Circles",
    "Muscle Tension & Pain",
    "Relaxation & Stress Relief",
  ],
  priceRange: ["Under $100", "$100–$200", "$200–$400", "$400+"],
  duration: ["Under 30 min", "30–60 min", "60–90 min", "90+ min"],
  downtime: ["No Downtime", "Minimal (1–2 Days)", "Moderate (3–5 Days)"],
};

export const hubsSection = {
  categoryEyebrowPrefix: "Category",
  viewAllPrefix: "View All",
  serviceCardCTA: "Learn More",
};

export const ctaSection = {
  headline: "Not Sure Which Treatment Is Right for You?",
  subheadline:
    "Book a free consultation and our specialists will create a personalized plan based on your skin, your goals, and your budget.",
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
