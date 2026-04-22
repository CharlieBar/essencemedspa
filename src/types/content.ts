// src/types/content.ts
// Data contract for all Essence Medspa content files

export interface SEOMeta {
  title: string;
  description: string;
  keywords?: string[];
  canonical?: string;
  ogImage?: string;
  noIndex?: boolean;
}

export interface CTA {
  text: string;
  href: string;
  variant?: "primary" | "secondary" | "ghost" | "outline";
}

export interface ImageAsset {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

export interface Stat {
  value: string;
  suffix?: string;
  label: string;
}

export interface HeroSection {
  eyebrow?: string;
  headline: string;
  subheadline?: string;
  body?: string;
  primaryCTA: CTA;
  secondaryCTA?: CTA;
  badge?: string;
  image?: ImageAsset;
  stats?: Stat[];
}

export interface FeatureItem {
  icon: string;
  title: string;
  description: string;
}

export interface ServiceCard {
  name: string;
  slug: string;
  tagline: string;
  description: string;
  icon?: string;
  image?: ImageAsset;
  highlights?: string[];
  startingPrice?: string;
  cta: CTA;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface TestimonialItem {
  quote: string;
  author: string;
  role?: string;
  location?: string;
  rating?: number;
  image?: string;
}

export interface TeamMember {
  name: string;
  role: string;
  credentials?: string;
  bio: string;
  image?: ImageAsset;
}

export interface ArticleMeta {
  title: string;
  slug: string;
  description: string;
  publishDate: string;
  updatedDate?: string;
  author: string;
  authorBio?: string;
  authorImage?: string;
  category: string;
  tags: string[];
  readTime?: string;
  featuredImage?: ImageAsset;
  pillar?: string;
  relatedArticles?: string[];
  seo: SEOMeta;
}

export interface LocationInfo {
  name?: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  phone: string;
  email?: string;
  hours: { day: string; hours: string }[];
  coordinates?: { lat: number; lng: number };
  mapEmbed?: string;
}

export interface KeyFact {
  label: string;
  value: string;
}

export interface BenefitItem {
  area: string;
  description: string;
}

export interface PricingTier {
  name: string;
  price: string;
  description: string;
  includes?: string[];
  popular?: boolean;
}

export interface ConcernLink {
  service: string;
  slug: string;
  price: string;
  description: string;
}

export interface ServicePageContent {
  seo: SEOMeta;
  hero: HeroSection;
  overview: {
    headline: string;
    body: string;
    keyFacts: KeyFact[];
  };
  benefits: {
    headline: string;
    items: BenefitItem[];
  };
  process: {
    headline: string;
    steps: ProcessStep[];
  };
  pricing?: {
    headline: string;
    tiers: PricingTier[];
    disclaimer?: string;
  };
  results?: {
    headline: string;
    stats: Stat[];
  };
  idealCandidates?: {
    headline: string;
    good: string[];
    alternatives?: { concern: string; recommendation: string }[];
  };
  faqs: FAQItem[];
  relatedServices: {
    headline: string;
    items: { name: string; slug: string; tagline: string }[];
  };
  finalCTA: {
    headline: string;
    subheadline: string;
    primaryCTA: CTA;
    secondaryCTA?: CTA;
  };
}

export interface HubSubPillarCard {
  title: string;
  tagline: string;
  description: string;
  href: string;
  image?: ImageAsset;
}

export interface HubPageContent {
  seo: SEOMeta;
  hero: HeroSection;
  intro: {
    headline: string;
    body: string;
  };
  categories?: {
    id: string;
    name: string;
    description: string;
    icon: string;
    services: ServiceCard[];
  }[];
  services?: ServiceCard[];
  // Pillar-grade optional sections (added for topical-authority hub upgrade).
  // Used only on hubs being elevated to pillar status (e.g. facial-treatments).
  deepIntro?: {
    eyebrow?: string;
    headline: string;
    body: string;
  };
  subPillarCards?: HubSubPillarCard[];
  localSignals?: {
    eyebrow?: string;
    headline: string;
    body: string;
  };
  teamSection?: {
    eyebrow?: string;
    headline: string;
    body: string;
    ctaHref: string;
  };
  pillarFaqs?: FAQItem[];
  ctaSection: {
    headline: string;
    subheadline: string;
    primaryCTA: CTA;
    secondaryCTA?: CTA;
  };
}

export interface ConcernPageContent {
  seo: SEOMeta;
  hero: HeroSection;
  intro: {
    headline: string;
    body: string;
  };
  understanding?: {
    eyebrow?: string;
    headline: string;
    body: string;
    causes: { title: string; description: string }[];
  };
  solutions: ConcernLink[];
  journey?: {
    eyebrow?: string;
    headline: string;
    subheadline?: string;
    phases: ProcessStep[];
  };
  whyEssence: {
    headline: string;
    features: FeatureItem[];
  };
  localContext?: {
    eyebrow?: string;
    headline: string;
    body: string;
  };
  relatedArticles?: {
    headline?: string;
    subheadline?: string;
    slugs: string[];
  };
  faqs: FAQItem[];
  ctaSection: {
    headline: string;
    subheadline: string;
    primaryCTA: CTA;
    secondaryCTA?: CTA;
  };
}
