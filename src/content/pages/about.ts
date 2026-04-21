// src/content/pages/about.ts

import type { SEOMeta, TeamMember, FeatureItem } from "@/types/content";

export const seo: SEOMeta = {
  title: "About Essence Medspa & Wellness Center | Chicago Edgebrook Medspa",
  description:
    "Meet the team behind Chicago's top-rated medspa. Learn our story, values, and why 463+ clients trust Essence Medspa in Edgebrook for advanced aesthetics and wellness.",
  keywords: [
    "about Essence Medspa",
    "Chicago medspa team",
    "Edgebrook medspa",
    "licensed aestheticians Chicago",
    "medspa near me",
  ],
  canonical: "https://www.essence-medspa.com/about",
  ogImage: "/images/og/about.jpg",
};

export const hero = {
  eyebrow: "Our Story",
  headline: "Where Science Meets Serenity",
  subheadline:
    "We built Essence Medspa to be the place we always wished existed — where advanced medical aesthetics and genuine relaxation come together in one beautiful space.",
  primaryCTA: {
    text: "Meet the Team",
    href: "#team",
    variant: "primary" as const,
  },
  secondaryCTA: {
    text: "Book a Consultation",
    href: "https://www.vagaro.com/essencemedspaandwellnesscenter/book-now",
    variant: "outline" as const,
  },
  image: {
    src: "/images/about/team-photo.jpg",
    alt: "The Essence Medspa & Wellness Center team in their Chicago Edgebrook location",
  },
};

export const story = {
  headline: "The Essence Story",
  sections: [
    {
      heading: "It Started with a Simple Belief",
      body: "Great skincare and real relaxation shouldn't be an either-or choice. Too many medspas feel clinical and cold. Too many spas offer pampering without results. Essence Medspa was founded to bridge that gap — delivering medical-grade outcomes in an environment that feels like a retreat from the moment you walk through the door.",
    },
    {
      heading: "Rooted in Chicago's Edgebrook Neighborhood",
      body: "Located at 6413 N Kinzua Ave in the heart of Edgebrook, we're proud to serve clients from across Chicago's North Side and surrounding suburbs. Our neighbors in Sauganash, Forest Glen, Lincolnwood, Park Ridge, and Niles have made us their trusted destination for everything from Botox to deep tissue massage to IV therapy. We know this community, and this community knows us — by name.",
    },
    {
      heading: "Results You Can See. Relaxation You Can Feel.",
      body: "Every treatment we offer is backed by science, performed by licensed professionals, and delivered in an atmosphere designed for calm. Whether you're here for a quick lunchtime Botox touch-up or a full afternoon of facials and massage, you'll leave looking better and feeling restored. That's not a promise we take lightly — it's the standard our 463+ five-star reviews are built on.",
    },
  ],
};

export const values = {
  headline: "What We Stand For",
  items: [
    {
      icon: "target",
      title: "Results-First Approach",
      description:
        "We recommend treatments based on what your skin actually needs, not what trends are popular. If a $85 teen facial will solve your concern better than a $399 treatment, we'll tell you.",
    },
    {
      icon: "users",
      title: "Personalized, Never Generic",
      description:
        "No two skin types are the same, so no two treatment plans should be either. Every visit starts with understanding where you are and where you want to be.",
    },
    {
      icon: "shield",
      title: "Safety and Transparency",
      description:
        "All prices published. All providers licensed. All products medical-grade. No hidden fees, no surprise upsells, no pressure to book what you don't need.",
    },
    {
      icon: "heart",
      title: "Whole-Person Wellness",
      description:
        "Beautiful skin starts from within. That's why we offer IV therapy, therapeutic massage, and holistic body treatments alongside our advanced aesthetic services.",
    },
  ] satisfies FeatureItem[],
};

// ASSUMPTION: Team members and bios — update with actual staff names, roles, and headshots
export const team = {
  headline: "Meet the Team",
  subheadline:
    "Every member of the Essence team is a licensed, trained specialist who genuinely loves what they do.",
  members: [
    {
      name: "Gosia",
      role: "Founder & Lead Aesthetician",
      credentials: "Licensed Aesthetician, Advanced Injectable Certification",
      bio: "With over a decade of experience in medical aesthetics, Gosia founded Essence Medspa to create the medspa she always wished existed — one that combines clinical precision with genuine warmth. She specializes in injectables, PRP treatments, and creating personalized treatment plans that deliver visible, lasting results.",
      image: {
        src: "/images/team/gosia.jpg",
        alt: "Gosia, founder and lead aesthetician at Essence Medspa Chicago",
      },
    },
    {
      name: "Team Aesthetician",
      role: "Senior Aesthetician",
      credentials: "Licensed Aesthetician",
      bio: "Specializing in facials, peels, and skin analysis, our senior aesthetician brings years of hands-on experience to every treatment. Known for a meticulous eye and calming presence, they ensure every client leaves with a clear understanding of their skin and a plan to maintain their results at home.",
      image: {
        src: "/images/team/aesthetician-2.jpg",
        alt: "Senior aesthetician at Essence Medspa performing a facial treatment",
      },
    },
    {
      name: "Team Massage Therapist",
      role: "Lead Massage Therapist",
      credentials: "Licensed Massage Therapist (LMT)",
      bio: "Our lead massage therapist is trained in over eight modalities including Swedish, deep tissue, hot stone, Thai herbal, and cupping. Whether you need deep knot release for chronic pain or a gentle prenatal massage, you're in experienced and caring hands.",
      image: {
        src: "/images/team/massage-therapist.jpg",
        alt: "Licensed massage therapist at Essence Medspa wellness center in Chicago",
      },
    },
  ] satisfies TeamMember[],
  // ASSUMPTION: Team member names (other than Gosia) are placeholders — update with real names and photos
};

export const credentials = {
  headline: "Licensed. Trained. Trusted.",
  items: [
    "State of Illinois Licensed Aestheticians",
    "Advanced Injectable Certification (Botox & Fillers)",
    "Licensed Massage Therapists (LMT)",
    "Annual Advanced Training & Continuing Education",
    "Medical-Grade Products (ZO Skin Health & Professional Lines)",
    "OSHA & Bloodborne Pathogen Certified",
    "Vagaro Verified Business",
  ],
};

export const ctaSection = {
  headline: "Come See Us",
  subheadline:
    "We'd love to meet you. Book a free consultation and let's find the right treatments for your goals.",
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
