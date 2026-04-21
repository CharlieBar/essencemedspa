// src/content/tools/botox-calculator.ts
// Content for the Botox Unit Calculator at /tools/botox-calculator

import type { SEOMeta, HeroSection } from "@/types/content";

export const seo: SEOMeta = {
  title: "Botox Unit Calculator | Estimate Your Cost | Essence Medspa Chicago",
  description:
    "Use our free Botox unit calculator to estimate how many units you may need and what it could cost at Essence Medspa in Chicago. Select your treatment areas for an instant estimate.",
  keywords: [
    "Botox cost calculator",
    "Botox unit estimator Chicago",
    "how many Botox units do I need",
    "Botox price calculator",
    "Botox forehead units cost",
  ],
  canonical: "https://www.essence-medspa.com/tools/botox-calculator",
};

export const hero: HeroSection = {
  eyebrow: "Tool 02 — Botox Calculator",
  headline: "How Many Botox Units Do *You* Need?",
  subheadline:
    "Select the areas you want to treat and instantly see an estimated unit count and cost range. Based on Essence Medspa's current per-unit rate.",
  primaryCTA: {
    text: "Calculate Now",
    href: "#calculator",
    variant: "primary",
  },
};

export const calculatorMeta = {
  headline: "Select Your Treatment Areas",
  subheadline: "Check every area you're interested in. The estimate updates in real time.",
  summaryHeadline: "Your Estimate",
  unitsLabel: "Estimated Units",
  costLabel: "Estimated Cost",
  durationLabel: "Treatment Duration",
  durationValue: "20–40 min",
  resultsLastLabel: "Results Typically Last",
  resultsLastValue: "3–4 months",
  bookLabel: "Book Your Consultation",
  selectAreasPrompt: "Select at least one area above to see your estimate.",
  disclaimer:
    "Final dosing is determined during your consultation based on your anatomy, muscle strength, and treatment goals. This calculator provides an estimate only and does not constitute medical advice.",
  unitPriceNote: "Based on Essence Medspa's rate of",
};

// Unit price in USD — all business rates sourced from site content, never hardcoded in components
export const unitPrice = 15;

export interface BotoxArea {
  id: string;
  label: string;
  min: number;
  max: number;
  description: string;
}

export const areas: BotoxArea[] = [
  {
    id: "forehead",
    label: "Forehead Lines",
    min: 10,
    max: 20,
    description: "Horizontal lines across the forehead",
  },
  {
    id: "glabella",
    label: "Frown Lines (11s)",
    min: 20,
    max: 25,
    description: "The vertical lines between your brows",
  },
  {
    id: "crows-feet",
    label: "Crow's Feet",
    min: 10,
    max: 20,
    description: "Lines at the outer corners of the eyes",
  },
  {
    id: "bunny-lines",
    label: "Bunny Lines",
    min: 5,
    max: 10,
    description: "Small lines on the bridge of the nose",
  },
  {
    id: "brow-lift",
    label: "Brow Lift",
    min: 2,
    max: 5,
    description: "Subtle lift of the eyebrow arch",
  },
  {
    id: "lip-flip",
    label: "Lip Flip",
    min: 4,
    max: 6,
    description: "Softens the upper lip for fuller look",
  },
  {
    id: "chin",
    label: "Chin Dimpling",
    min: 4,
    max: 6,
    description: "Smooths pebbled or dimpled chin texture",
  },
  {
    id: "masseter",
    label: "Masseter (Jawline Slimming)",
    min: 40,
    max: 60,
    description: "Both sides of the jaw — slims face, relieves TMJ",
  },
  {
    id: "neck-bands",
    label: "Neck Bands (Nefertiti Lift)",
    min: 15,
    max: 25,
    description: "Vertical bands on the neck",
  },
  {
    id: "gummy-smile",
    label: "Gummy Smile",
    min: 4,
    max: 8,
    description: "Reduces excess gum showing when smiling",
  },
];

export const ctaSection = {
  headline: "Ready to Get Your Actual Quote?",
  subheadline:
    "Every face is different. Book a complimentary Botox consultation and our injector will give you an exact unit count and treatment plan tailored to your anatomy.",
  primaryCTA: {
    text: "Book a Botox Consultation",
    href: "https://www.vagaro.com/essencemedspaandwellnesscenter/book-now",
    variant: "primary" as const,
  },
};
