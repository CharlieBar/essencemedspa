// src/content/tools/index.ts
// Content for the /tools landing page

import type { SEOMeta, HeroSection } from "@/types/content";

export const seo: SEOMeta = {
  title: "Free Medspa Tools | Treatment Finder, Botox Calculator & Event Planner | Essence Medspa Chicago",
  description:
    "Explore our free interactive tools: take the medspa treatment quiz, use our Botox unit calculator, or plan your pre-event glow timeline. Serving Chicago's Edgebrook neighborhood.",
  keywords: [
    "medspa treatment quiz Chicago",
    "Botox cost calculator",
    "pre-event glow planner",
    "medspa treatment finder",
    "Botox unit estimator Chicago",
    "event skincare timeline",
    "Essence Medspa tools",
  ],
  canonical: "https://www.essence-medspa.com/tools",
};

export const hero: HeroSection = {
  eyebrow: "Interactive Tools",
  headline: "Find Your *Perfect* Treatment",
  subheadline:
    "Not sure where to start? Our free tools help you discover the right treatments, understand costs, and plan your glow journey — before you book a single appointment.",
  primaryCTA: {
    text: "Take the Quiz",
    href: "/tools/treatment-finder",
    variant: "primary",
  },
  secondaryCTA: {
    text: "Book a Consultation",
    href: "https://www.vagaro.com/essencemedspaandwellnesscenter/book-now",
    variant: "ghost",
  },
};

export const toolCards = [
  {
    id: "treatment-finder",
    eyebrow: "Tool 01",
    icon: "Target",
    headline: "Treatment Finder Quiz",
    description:
      "Answer 4 quick questions about your skin concerns, timeline, downtime tolerance, and budget. We'll recommend your top 3 treatments from our full menu.",
    href: "/tools/treatment-finder",
    cta: "Start the Quiz",
    badge: "Takes 2 minutes",
  },
  {
    id: "botox-calculator",
    eyebrow: "Tool 02",
    icon: "Calculator",
    headline: "Botox Unit Calculator",
    description:
      "Select the areas you want to treat and instantly see an estimated unit count and cost at Essence's per-unit rate. A great starting point before your consultation.",
    href: "/tools/botox-calculator",
    cta: "Calculate Your Estimate",
    badge: "Instant results",
  },
  {
    id: "pre-event-planner",
    eyebrow: "Tool 03",
    icon: "Calendar",
    headline: "Pre-Event Timeline Planner",
    description:
      "Enter your event date — wedding, reunion, photoshoot, or any big moment — and get a personalized treatment timeline starting up to 6 months out.",
    href: "/tools/pre-event-planner",
    cta: "Plan My Timeline",
    badge: "Date-based planning",
  },
];

export const toolsIntro = {
  eyebrow: "Smart Planning",
  headline: "Tools Built for Confident Decisions",
  subheadline:
    "We believe informed clients get the best results. These tools are a complement to — not a replacement for — a personalized consultation with our licensed specialists.",
};

export const ctaSection = {
  eyebrow: "Ready to Book?",
  headline: "Let's Build Your *Custom* Treatment Plan",
  subheadline:
    "Our tools give you a head start, but nothing replaces a one-on-one consultation with our licensed aestheticians. Book yours today — it's complimentary.",
  primaryCTA: {
    text: "Book Your Consultation",
    href: "https://www.vagaro.com/essencemedspaandwellnesscenter/book-now",
    variant: "primary" as const,
  },
  secondaryCTA: {
    text: "Call Us",
    href: "tel:+17737631212",
    variant: "ghost" as const,
  },
};
