// src/types/sub-pillar.ts
// Content contract for facial-treatments sub-pillar pages
// (and future hub sub-pillars once the pattern extends beyond facial-treatments)

import type { SEOMeta, CTA, ImageAsset, FAQItem, ServiceCard } from "@/types/content";

export interface SubPillarSectionBlock {
  eyebrow?: string;
  headline: string;
  body: string; // supports markdown-style paragraph breaks (\n\n)
}

export interface SubPillarClusterCard {
  title: string;
  excerpt: string;
  href: string; // /blog/[slug] — may be a planned URL before its article publishes
  image?: ImageAsset;
  published: boolean; // false until the cluster article lands in Waves 1–4
}

export interface SubPillarRelatedConcern {
  title: string;
  href: string; // /concerns/[slug]
  excerpt: string;
}

export interface SubPillarContent {
  slug: string;
  seo: SEOMeta;
  hero: {
    eyebrow: string;
    headline: string;
    subheadline: string;
    primaryCTA: CTA;
    secondaryCTA?: CTA;
    image?: ImageAsset;
  };
  problemDefinition: SubPillarSectionBlock;
  scienceBlock: SubPillarSectionBlock;
  treatmentLandscape: SubPillarSectionBlock;
  essenceApproach: SubPillarSectionBlock;
  relatedServices: ServiceCard[];
  relatedConcerns: SubPillarRelatedConcern[];
  clusterCards: SubPillarClusterCard[];
  faqs: FAQItem[];
  closingCTA: {
    headline: string;
    subheadline: string;
    primaryCTA: CTA;
    secondaryCTA?: CTA;
  };
  parentHub: {
    title: string;
    href: string;
  };
}
