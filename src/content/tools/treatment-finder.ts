// src/content/tools/treatment-finder.ts
// Content for the Treatment Finder Quiz at /tools/treatment-finder

import type { SEOMeta, HeroSection } from "@/types/content";

export const seo: SEOMeta = {
  title: "Treatment Finder Quiz | Find Your Perfect Medspa Treatment | Essence Medspa Chicago",
  description:
    "Answer 4 questions and discover which Essence Medspa treatments match your skin concerns, timeline, downtime tolerance, and budget. Free and instant.",
  keywords: [
    "medspa treatment quiz Chicago",
    "skincare treatment finder",
    "which facial is right for me",
    "Botox vs facial Chicago",
    "best medspa treatment for wrinkles",
  ],
  canonical: "https://www.essence-medspa.com/tools/treatment-finder",
};

export const hero: HeroSection = {
  eyebrow: "Tool 01 — Treatment Finder",
  headline: "Which Treatment Is *Right* for You?",
  subheadline:
    "Four questions. Three personalized recommendations. Zero guesswork. Our quiz matches your unique skin goals to the treatments most likely to deliver results.",
  primaryCTA: {
    text: "Start the Quiz",
    href: "#quiz",
    variant: "primary",
  },
};

export const quizMeta = {
  title: "Treatment Finder",
  subtitle: "Answer 4 quick questions to find your match",
  progressLabel: "Step",
  ofLabel: "of",
  backLabel: "Back",
  nextLabel: "Next",
  seeResultsLabel: "See My Results",
  startOverLabel: "Start Over",
  resultsHeadline: "Your Personalized Recommendations",
  resultsSubheadline:
    "Based on your answers, here are the three treatments we recommend. A consultation with our team will help determine the perfect protocol for your unique goals.",
  bookConsultLabel: "Book a Consultation",
  learnMoreLabel: "Learn More",
};

export type ConcernId =
  | "wrinkles"
  | "acne-texture"
  | "dull-skin"
  | "dark-spots"
  | "hollow-eyes"
  | "hair-thinning"
  | "stubborn-fat"
  | "muscle-tension";

export type TimelineId = "urgent" | "planning" | "long-term";

export type DowntimeId = "none" | "minimal" | "some";

export type BudgetId = "starter" | "mid" | "premium";

export interface QuizOption<T extends string> {
  id: T;
  label: string;
  description: string;
}

export interface QuizStep<T extends string> {
  id: string;
  headline: string;
  subheadline: string;
  options: QuizOption<T>[];
}

export const steps: [
  QuizStep<ConcernId>,
  QuizStep<TimelineId>,
  QuizStep<DowntimeId>,
  QuizStep<BudgetId>,
] = [
  {
    id: "concern",
    headline: "What's your primary skin concern?",
    subheadline: "Choose the one that matters most to you right now.",
    options: [
      {
        id: "wrinkles",
        label: "Wrinkles & Fine Lines",
        description: "Forehead lines, crow's feet, expression lines",
      },
      {
        id: "acne-texture",
        label: "Acne & Texture",
        description: "Active breakouts, scarring, uneven skin surface",
      },
      {
        id: "dull-skin",
        label: "Dull Skin",
        description: "Lackluster complexion, tired-looking, no glow",
      },
      {
        id: "dark-spots",
        label: "Dark Spots",
        description: "Hyperpigmentation, melasma, sun damage",
      },
      {
        id: "hollow-eyes",
        label: "Hollow Under Eyes",
        description: "Tear troughs, under-eye hollows, sunken look",
      },
      {
        id: "hair-thinning",
        label: "Hair Thinning",
        description: "Shedding, thinning strands, receding hairline",
      },
      {
        id: "stubborn-fat",
        label: "Stubborn Fat",
        description: "Diet-resistant fat pockets, body contouring goals",
      },
      {
        id: "muscle-tension",
        label: "Muscle Tension",
        description: "Chronic tightness, stress, pain relief",
      },
    ],
  },
  {
    id: "timeline",
    headline: "When do you want to see results?",
    subheadline: "This helps us match you with treatments that fit your schedule.",
    options: [
      {
        id: "urgent",
        label: "Urgent — Under 2 Weeks",
        description: "I have an event or need results fast",
      },
      {
        id: "planning",
        label: "Planning Ahead — 1 to 3 Months",
        description: "I want to start soon and see gradual improvement",
      },
      {
        id: "long-term",
        label: "Long-Term — 3 to 6+ Months",
        description: "I'm investing in a lasting transformation",
      },
    ],
  },
  {
    id: "downtime",
    headline: "How much downtime can you handle?",
    subheadline: "Downtime affects which treatments are appropriate for your schedule.",
    options: [
      {
        id: "none",
        label: "None",
        description: "I need to be back to normal immediately",
      },
      {
        id: "minimal",
        label: "Minimal — 1 to 2 Days",
        description: "Some mild redness or sensitivity is okay",
      },
      {
        id: "some",
        label: "Some — Up to a Week",
        description: "I can plan around a few days of recovery",
      },
    ],
  },
  {
    id: "budget",
    headline: "What's your budget per session?",
    subheadline: "We have options at every price point — no judgment.",
    options: [
      {
        id: "starter",
        label: "Starter — $100 to $200",
        description: "Great entry-level treatments with real results",
      },
      {
        id: "mid",
        label: "Mid-Range — $200 to $500",
        description: "Our most popular, effective treatment range",
      },
      {
        id: "premium",
        label: "Premium — $500 and up",
        description: "Advanced injectables, technology-driven results",
      },
    ],
  },
];

// Treatment metadata for results display
export interface TreatmentResult {
  slug: string;
  name: string;
  tagline: string;
  startingPrice: string;
}

export const treatmentResults: Record<string, TreatmentResult> = {
  botox: {
    slug: "botox",
    name: "Botox",
    tagline: "The gold standard for smoothing expression lines and preventing new wrinkles.",
    startingPrice: "From $14/unit",
  },
  "juvederm-fillers": {
    slug: "juvederm-fillers",
    name: "Juvederm Fillers",
    tagline: "Restore lost volume and contour with naturally beautiful filler results.",
    startingPrice: "From $650/syringe",
  },
  hydrofacial: {
    slug: "hydrofacial",
    name: "Hydrofacial",
    tagline: "Deep cleanse, exfoliate, and hydrate in one powerhouse no-downtime treatment.",
    startingPrice: "From $175",
  },
  "custom-facial": {
    slug: "custom-facial",
    name: "Custom Facial",
    tagline: "A fully personalized facial tailored to your exact skin type and concerns.",
    startingPrice: "From $120",
  },
  "rf-microneedling-facial": {
    slug: "rf-microneedling-facial",
    name: "RF Microneedling",
    tagline: "Stimulate collagen with radiofrequency energy for lasting skin remodeling.",
    startingPrice: "From $350",
  },
  "jet-plasma-facial": {
    slug: "jet-plasma-facial",
    name: "Jet Plasma Facial",
    tagline: "Cutting-edge plasma technology for tightening, resurfacing, and rejuvenation.",
    startingPrice: "From $295",
  },
  "essence-signature-facelift-facial": {
    slug: "essence-signature-facelift-facial",
    name: "Signature Facelift Facial",
    tagline: "Our luxury multi-step facial that lifts, firms, and transforms in one session.",
    startingPrice: "From $225",
  },
  "prp-facial": {
    slug: "prp-facial",
    name: "PRP Facial",
    tagline: "Harness your own growth factors to stimulate collagen and skin renewal.",
    startingPrice: "From $450",
  },
  "vampire-facial": {
    slug: "vampire-facial",
    name: "Vampire Facial",
    tagline: "PRP combined with microneedling for dramatic skin rejuvenation results.",
    startingPrice: "From $550",
  },
  "hair-restoration": {
    slug: "hair-restoration",
    name: "Hair Restoration",
    tagline: "PRP therapy to reactivate dormant follicles and restore thicker, fuller hair.",
    startingPrice: "From $650",
  },
  "brightening-facial": {
    slug: "brightening-facial",
    name: "Brightening Facial",
    tagline: "Targeted ingredients to fade dark spots and reveal a luminous, even complexion.",
    startingPrice: "From $140",
  },
  "hydrating-facial": {
    slug: "hydrating-facial",
    name: "Hydrating Facial",
    tagline: "Intense moisture infusion for plump, dewy, instantly radiant skin.",
    startingPrice: "From $120",
  },
  "oxygen-facial": {
    slug: "oxygen-facial",
    name: "Oxygen Facial",
    tagline: "Infuse pure oxygen and serums to instantly brighten and revitalize tired skin.",
    startingPrice: "From $150",
  },
  "custom-peel": {
    slug: "custom-peel",
    name: "Custom Peel",
    tagline: "Professionally blended acids to resurface, refine, and even out your complexion.",
    startingPrice: "From $130",
  },
  "microdermabrasion-facial": {
    slug: "microdermabrasion-facial",
    name: "Microdermabrasion",
    tagline: "Physical exfoliation that polishes away dull, rough skin to reveal fresh glow.",
    startingPrice: "From $120",
  },
  "red-carpet-anti-aging-facial": {
    slug: "red-carpet-anti-aging-facial",
    name: "Red Carpet Anti-Aging Facial",
    tagline: "Our show-stopping pre-event facial for camera-ready, glowing skin.",
    startingPrice: "From $185",
  },
  "lipo-sculpt": {
    slug: "lipo-sculpt",
    name: "Lipo Sculpt",
    tagline: "Non-invasive body contouring to target and reduce stubborn fat deposits.",
    startingPrice: "From $250",
  },
  "meso-contour": {
    slug: "meso-contour",
    name: "Meso Contour",
    tagline: "Mesotherapy cocktails injected directly into stubborn fat for targeted slimming.",
    startingPrice: "From $300",
  },
  "iv-therapy-cosmetic": {
    slug: "iv-therapy-cosmetic",
    name: "IV Therapy — Cosmetic",
    tagline: "Deliver skin-brightening vitamins and antioxidants directly into your bloodstream.",
    startingPrice: "From $185",
  },
  "deep-tissue-massage": {
    slug: "deep-tissue-massage",
    name: "Deep Tissue Massage",
    tagline: "Firm, targeted pressure to release chronic muscle tension and restore mobility.",
    startingPrice: "From $110",
  },
  "swedish-massage": {
    slug: "swedish-massage",
    name: "Swedish Massage",
    tagline: "Classic relaxation massage to ease tension, boost circulation, and calm the mind.",
    startingPrice: "From $95",
  },
  "cupping-massage": {
    slug: "cupping-massage",
    name: "Cupping Massage",
    tagline: "Ancient technique using suction cups to release deep-seated muscle tension.",
    startingPrice: "From $110",
  },
};

export const ctaSection = {
  headline: "Love Your Recommendations?",
  subheadline:
    "Book a complimentary consultation and our specialists will create a personalized treatment plan based on your quiz results and skin analysis.",
  primaryCTA: {
    text: "Book Your Consultation",
    href: "https://www.vagaro.com/essencemedspaandwellnesscenter/book-now",
    variant: "primary" as const,
  },
};
