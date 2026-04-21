// src/content/tools/pre-event-planner.ts
// Content for the Pre-Event Timeline Planner at /tools/pre-event-planner

import type { SEOMeta, HeroSection } from "@/types/content";

export const seo: SEOMeta = {
  title: "Pre-Event Glow Planner | Treatment Timeline | Essence Medspa Chicago",
  description:
    "Enter your event date and get a personalized medspa treatment timeline. From RF Microneedling 6 months out to a Hydrating Facial 2 days before — we'll map it all out.",
  keywords: [
    "pre-event medspa timeline",
    "wedding skincare timeline Chicago",
    "pre-wedding facial schedule",
    "event glow planner",
    "medspa treatment schedule before event",
  ],
  canonical: "https://www.essence-medspa.com/tools/pre-event-planner",
};

export const hero: HeroSection = {
  eyebrow: "Tool 03 — Pre-Event Planner",
  headline: "Plan Your *Glow* Timeline",
  subheadline:
    "Wedding, photoshoot, reunion, or big night out — enter your event date and we'll build a custom treatment roadmap so you look and feel your absolute best.",
  primaryCTA: {
    text: "Plan My Timeline",
    href: "#planner",
    variant: "primary",
  },
};

export const plannerMeta = {
  dateLabel: "Your Event Date",
  datePlaceholder: "Select a date",
  timelineHeadline: "Your Treatment Timeline",
  timelineSubheadline:
    "Treatments are shown from earliest to latest. Each window represents the ideal time to schedule that treatment for optimal results.",
  emptyHeadline: "Choose a Future Date",
  emptyMessage:
    "Select an upcoming event date above to build your personalized treatment timeline.",
  pastDateMessage:
    "Please choose a future date to build your timeline. We need at least a few days to recommend treatments.",
  bookLabel: "Book Consultation to Lock Your Schedule",
  daysLabel: "days before",
  weekLabel: "week before",
  weeksLabel: "weeks before",
  monthLabel: "month before",
  monthsLabel: "months before",
  dayOfEventLabel: "Day of Event",
  learnMoreLabel: "Learn About This Treatment",
};

export interface TimelineMilestone {
  daysBeforeEvent: number; // 0 = day of event
  treatmentName: string;
  slug: string | null; // null for "day of" (no treatment)
  description: string;
  idealWindow: string; // human-readable timing label
  isOptional?: boolean;
}

export const milestones: TimelineMilestone[] = [
  {
    daysBeforeEvent: 180,
    treatmentName: "Start RF Microneedling Series",
    slug: "rf-microneedling-facial",
    description:
      "Begin a 3-session RF Microneedling series spaced 4–6 weeks apart. This gives your skin time to build collagen and deliver the full firming, resurfacing effect by your event.",
    idealWindow: "6 months before",
  },
  {
    daysBeforeEvent: 90,
    treatmentName: "First Botox Appointment",
    slug: "botox",
    description:
      "If you're new to Botox, start here. This allows time for a follow-up touch-up at 30 days and full settling before your event. Veterans can schedule later.",
    idealWindow: "3 months before",
    isOptional: true,
  },
  {
    daysBeforeEvent: 60,
    treatmentName: "Chemical Peel or Signature Facelift Peel",
    slug: "essence-signature-facelift-facial",
    description:
      "A deeper peel at this stage refines texture and addresses pigment. At 60 days out, your skin has ample recovery time and will be glowing well before the event.",
    idealWindow: "2 months before",
  },
  {
    daysBeforeEvent: 45,
    treatmentName: "Brightening Facial Series Begins",
    slug: "brightening-facial",
    description:
      "Start a 2–3 session brightening series to address dark spots and uneven tone. Space sessions 2–3 weeks apart for progressive, cumulative results.",
    idealWindow: "6 weeks before",
  },
  {
    daysBeforeEvent: 30,
    treatmentName: "Botox Touch-Up (if needed)",
    slug: "botox",
    description:
      "If you received Botox at 90 days, schedule a touch-up now to perfect any areas. If you're newer to Botox, this can be your first appointment — results peak at 10–14 days.",
    idealWindow: "1 month before",
    isOptional: true,
  },
  {
    daysBeforeEvent: 14,
    treatmentName: "Hydrofacial",
    slug: "hydrofacial",
    description:
      "The Hydrofacial deeply cleanses, exfoliates, and infuses your skin with hydrating serums. No downtime, instant glow — perfect at the 2-week mark.",
    idealWindow: "2 weeks before",
  },
  {
    daysBeforeEvent: 7,
    treatmentName: "Red Carpet Anti-Aging Facial",
    slug: "red-carpet-anti-aging-facial",
    description:
      "Our signature pre-event facial targets fine lines, dullness, and uneven tone. You'll leave with noticeably smoother, brighter skin — ready for the spotlight in a week.",
    idealWindow: "1 week before",
  },
  {
    daysBeforeEvent: 2,
    treatmentName: "Hydrating Facial — No Extractions",
    slug: "hydrating-facial",
    description:
      "A gentle, deeply hydrating facial two days before your event gives your skin maximum plumpness and radiance. We skip extractions at this stage to prevent any redness.",
    idealWindow: "2 days before",
  },
  {
    daysBeforeEvent: 0,
    treatmentName: "Day of Event — Rest & Glow",
    slug: null,
    description:
      "No new treatments today. Stick to your home routine: SPF, your go-to serum, and light moisturizer. You've done the work — now let your skin shine.",
    idealWindow: "Day of event",
  },
];

export const seasonalNote = {
  headline: "Chicago Season Tips",
  tips: [
    {
      season: "Winter (Dec–Feb)",
      icon: "snowflake",
      note: "Chicago winters are brutal on your skin barrier. Layer in extra hydration treatments and ask about our barrier-repair add-ons for any facial.",
    },
    {
      season: "Summer (Jun–Aug)",
      icon: "sun",
      note: "Summer UV in Chicago is intense. Prioritize SPF 50+ daily and schedule any peels or resurfacing in fall/winter for safer, better results.",
    },
    {
      season: "Spring & Fall",
      icon: "leaf",
      note: "Ideal seasons for RF Microneedling, peels, and laser-adjacent treatments. Lower UV index means faster healing and better outcomes.",
    },
  ],
};

export const ctaSection = {
  headline: "Lock In Your *Glow* Schedule",
  subheadline:
    "Our team will help you confirm timing, combine treatments strategically, and get you looking your absolute best for your event.",
  primaryCTA: {
    text: "Book Your Consultation",
    href: "https://www.vagaro.com/essencemedspaandwellnesscenter/book-now",
    variant: "primary" as const,
  },
};
