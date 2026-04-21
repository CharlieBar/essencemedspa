// src/content/hubs/upgrades.ts

import type { SEOMeta, ServiceCard } from "@/types/content";

export const seo: SEOMeta = {
  title: "Spa Upgrades | Bamboo Suite, Wine & Platter | Essence Medspa Chicago",
  description: "Elevate any treatment at Essence Medspa. Add a private Bamboo Suite ($40), wine and cheese platter in our Oasis Lounge ($40), or the full couples experience ($100).",
  keywords: ["spa upgrades Chicago", "couples spa experience", "private spa suite Chicago", "wine and cheese spa Edgebrook"],
  canonical: "https://www.essence-medspa.com/services/upgrades",
};

export const hero = {
  eyebrow: "Spa Upgrades",
  headline: "Elevate Any Treatment into a Full Retreat",
  subheadline: "Transform your visit with a private suite, artisan refreshments in our Oasis Lounge, or the complete couples experience. Because sometimes, you deserve the extra touches.",
  primaryCTA: { text: "Book with Upgrades", href: "https://www.vagaro.com/essencemedspaandwellnesscenter/book-now", variant: "primary" as const },
  secondaryCTA: { text: "Call (773) 763-1212", href: "tel:+17737631212", variant: "outline" as const },
  image: { src: "/images/hubs/upgrades-hero.jpg", alt: "Wine and fruit platter in the Oasis Lounge at Essence Medspa Chicago" },
};

export const intro = {
  headline: "Make It Special",
  body: "Every treatment at Essence is already an experience. But for birthdays, anniversaries, date nights, or those times when you just want to treat yourself to something extra — our spa upgrades turn a great treatment into an unforgettable one. Enjoy our private Bamboo Suite with its intimate atmosphere, sip wine and graze on artisan cheeses in the Oasis Lounge, or combine both for the ultimate visit.",
};

export const services: ServiceCard[] = [
  { name: "Bamboo Suite Upgrade", slug: "bamboo-suite-upgrade", tagline: "Your own private spa sanctuary", description: "Upgrade any treatment to our private Bamboo Suite — a serene, intimate setting designed for complete relaxation. Perfect for individuals or couples who want extra privacy.", startingPrice: "$40/guest", highlights: ["Private suite", "Intimate setting", "Any treatment"], cta: { text: "Learn More", href: "/services/bamboo-suite-upgrade" } },
  { name: "Wine & Platter (Individual)", slug: "wine-platter-upgrade", tagline: "Savor the moment", description: "Add a curated wine and artisan platter to your visit. Enjoy seasonal fruits, imported cheeses, chocolates, and wine in our Oasis Lounge before or after your treatment.", startingPrice: "$40/guest", highlights: ["Oasis Lounge", "Wine + cheese + chocolate", "Pre or post-treatment"], cta: { text: "Learn More", href: "/services/wine-platter-upgrade" } },
  { name: "Wine, Platter & Suite (Individual)", slug: "wine-platter-suite-upgrade", tagline: "The full individual experience", description: "The complete upgrade: private Bamboo Suite treatment plus wine and artisan platter in the Oasis Lounge. The ultimate solo retreat.", startingPrice: "$50/guest", highlights: ["Private suite + lounge", "Full retreat", "Best value"], cta: { text: "Learn More", href: "/services/wine-platter-suite-upgrade" } },
  { name: "Couples Wine & Platter", slug: "couples-wine-platter", tagline: "Share something special", description: "Wine and artisan platter for two in the Oasis Lounge — seasonal fruits, imported cheeses, chocolates, and wine. Perfect addition to any couples massage.", startingPrice: "$80 for 2 guests", highlights: ["For 2 guests", "Oasis Lounge", "Couples experience"], cta: { text: "Learn More", href: "/services/couples-wine-platter" } },
  { name: "Couples Wine, Platter & Suite", slug: "couples-wine-platter-suite", tagline: "The ultimate couples escape", description: "Private Bamboo Suite for your couples treatment plus wine and artisan platter for two in the Oasis Lounge. The most complete experience we offer.", startingPrice: "$100 for 2 guests", highlights: ["Private suite + lounge", "Full couples retreat", "Best value"], cta: { text: "Learn More", href: "/services/couples-wine-platter-suite" } },
];

export const occasions = {
  headline: "Perfect For",
  items: [
    { occasion: "Anniversaries", description: "Couples massage in the Bamboo Suite with wine and platter. An intimate celebration without leaving Chicago." },
    { occasion: "Birthdays", description: "Treat the birthday person to a facial or massage with the full suite and refreshments upgrade. Make it a day they'll remember." },
    { occasion: "Date Nights", description: "Swap the restaurant for a couples massage. The Oasis Lounge wine and platter is your appetizer, the treatment is the main course." },
    { occasion: "Bachelorette Parties", description: "Book group treatments and reserve the Oasis Lounge for a private SPArty. We handle the details so the bridal party just relaxes." },
    { occasion: "Self-Care Days", description: "Sometimes you don't need an occasion. Book the solo suite and platter upgrade and give yourself the afternoon off. You've earned it." },
  ],
};

export const ctaSection = {
  headline: "Ready to Elevate Your Visit?",
  subheadline: "Add any upgrade when booking online or mention it when you call. We'll have everything ready when you arrive.",
  primaryCTA: { text: "Book with Upgrades", href: "https://www.vagaro.com/essencemedspaandwellnesscenter/book-now", variant: "primary" as const },
  secondaryCTA: { text: "Call (773) 763-1212", href: "tel:+17737631212", variant: "outline" as const },
};
