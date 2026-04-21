// src/content/pages/blog.ts

import type { SEOMeta } from "@/types/content";

export const seo: SEOMeta = {
  title: "Skincare Blog | Expert Tips & Treatment Guides | Essence Medspa Chicago",
  description:
    "Expert skincare tips, treatment guides, and wellness advice from the team at Essence Medspa in Chicago. Learn about Botox, facials, massage, IV therapy, and more.",
  keywords: [
    "skincare blog Chicago",
    "medspa blog",
    "Botox tips",
    "facial treatment guide",
    "Chicago skincare advice",
  ],
  canonical: "https://www.essence-medspa.com/blog",
};

export const hero = {
  eyebrow: "The Essence Blog",
  headline: "Expert Skincare Tips & Treatment Guides",
  subheadline:
    "Science-backed insights, honest treatment guides, and wellness advice from our team of licensed specialists.",
  browseArticlesCTA: { text: "Browse Articles", href: "#articles", variant: "primary" as const },
};

export const categories = [
  {
    name: "Advanced Aesthetics",
    slug: "advanced-aesthetics",
    description: "Deep dives into Botox, fillers, PRP, mesotherapy, and injectable treatments",
  },
  {
    name: "Facial Treatments & Peels",
    slug: "facial-peels",
    description: "Everything about facials, peels, microdermabrasion, and skin rejuvenation",
  },
  {
    name: "Massage & Body Treatments",
    slug: "massage-body",
    description: "Massage modalities, body treatments, and physical wellness",
  },
  {
    name: "Skincare & Wellness",
    slug: "skincare-wellness",
    description: "Daily skincare routines, nutrition, seasonal tips, and holistic wellness",
  },
  {
    name: "Essence News & Events",
    slug: "news-events",
    description: "Team updates, new treatments, specials, and community events",
  },
];

export const newsletter = {
  headline: "Get Skincare Tips in Your Inbox",
  subheadline: "Join 2,000+ Chicagoans who get our monthly skincare tips, exclusive offers, and treatment guides.",
  placeholder: "Your email address",
  submitText: "Subscribe",
  privacyNote: "No spam, ever. Unsubscribe anytime.",
  successMessage: "Thanks for subscribing!",
  // ASSUMPTION: Newsletter subscriber count — update with actual number
};

export const categoriesSection = {
  number: "01",
  eyebrow: "Categories",
  headline: "Browse by Topic",
};

export const articlesSection = {
  number: "02",
  eyebrow: "All Articles",
  headline: "Latest from the Blog",
  cardCTA: "Read Article",
};

export const ctaSection = {
  headline: "Ready to Put These Tips Into Practice?",
  subheadline: "Book a treatment and experience the Essence difference firsthand.",
  primaryCTA: {
    text: "Book Your Appointment",
    href: "https://www.vagaro.com/essencemedspaandwellnesscenter/book-now",
    variant: "primary" as const,
  },
};
