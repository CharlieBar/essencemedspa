// src/content/hubs/body-treatments.ts

import type { SEOMeta, ServiceCard } from "@/types/content";

export const seo: SEOMeta = {
  title: "Body Treatments | Back Facials, Body Scrubs & Jet Plasma | Essence Medspa Chicago",
  description: "13 body treatments including back facials, luxury body scrubs, and Jet Plasma for face, neck, hands, arms, stomach, and legs at Essence Medspa in Chicago.",
  keywords: ["body treatments Chicago", "back facial near me", "body scrub Chicago", "Jet Plasma body treatment Edgebrook"],
  canonical: "https://www.essence-medspa.com/services/body-treatments",
};

export const hero = {
  eyebrow: "Body Treatments",
  headline: "Head-to-Toe Rejuvenation and Skin Renewal",
  subheadline: "Your face isn't the only skin that deserves professional care. Our body treatments address everything from back acne to crepey arms to stretch marks — so every part of you looks and feels renewed.",
  primaryCTA: { text: "Book a Treatment", href: "https://www.vagaro.com/essencemedspaandwellnesscenter/book-now", variant: "primary" as const },
  secondaryCTA: { text: "Call (773) 763-1212", href: "tel:+17737631212", variant: "outline" as const },
  image: { src: "/images/hubs/body-treatments-hero.jpg", alt: "Client receiving a luxury body treatment at Essence Medspa Chicago" },
};

export const intro = {
  headline: "Body Treatments at Essence",
  body: "Skin concerns don't stop at the jawline. Our body treatment menu includes targeted facials for the back and chest, a luxury full-body scrub ritual, and Jet Plasma treatments that can address aging, scarring, and skin laxity on nearly any body area. Whether you're prepping for vacation, managing back breakouts, or addressing signs of aging on the neck and hands, we have a treatment designed for that specific area.",
};

export const services: ServiceCard[] = [
  { name: "Back Facial", slug: "back-facial", tagline: "Clear, smooth, blemish-free back skin", description: "50-minute deep cleansing back facial with sulfur mask and peel. Targets back acne, blemishes, and congestion.", startingPrice: "$179", highlights: ["Acne + blemish clearing", "Sulfur mask", "50 minutes"], cta: { text: "Learn More", href: "/services/back-facial" } },
  { name: "Back Microdermabrasion", slug: "back-microdermabrasion", tagline: "Crystal exfoliation for the back", description: "50-minute crystal exfoliation to smooth, refine, and renew back skin. Removes dead cells and reveals softer texture.", startingPrice: "$115", highlights: ["Smooth texture", "Crystal exfoliation", "50 minutes"], cta: { text: "Learn More", href: "/services/back-microdermabrasion" } },
  { name: "Back Stimulator Peel", slug: "back-stimulator-peel", tagline: "Peel away sun damage and spots", description: "30-minute no-downtime back peel for sun damage, age spots, and uneven tone. Stimulates healthy cell growth.", startingPrice: "$149", highlights: ["No downtime", "Sun damage", "30 minutes"], cta: { text: "Learn More", href: "/services/back-stimulator-peel" } },
  { name: "Body Scrub", slug: "body-scrub", tagline: "The Royal Fijian Ritual", description: "85-minute full-body luxury treatment with organic cane sugar, honey masque, hot stones, and coconut milk wrap.", startingPrice: "$189", highlights: ["Full-body ritual", "Hot stones", "85 minutes"], cta: { text: "Learn More", href: "/services/body-scrub" } },
  { name: "Jet Plasma Face & Neck", slug: "jet-plasma-face-neck", tagline: "Comprehensive face and neck rejuvenation", description: "50-minute combined plasma treatment for fine lines, sagging, and dullness across the face and neck.", startingPrice: "$450", highlights: ["Face + neck combined", "Skin tightening", "50 minutes"], cta: { text: "Learn More", href: "/services/jet-plasma-face-neck" } },
  { name: "Jet Plasma Neck Only", slug: "jet-plasma-neck", tagline: "Tighten and firm the neck", description: "20-minute targeted neck plasma treatment for tightening, firming, and rejuvenation.", startingPrice: "$250", highlights: ["Neck tightening", "Quick treatment", "20 minutes"], cta: { text: "Learn More", href: "/services/jet-plasma-neck" } },
  { name: "Jet Plasma Décolleté", slug: "jet-plasma-decollete", tagline: "Renew the chest area", description: "30-minute chest area treatment for sun damage, sun spots, aging, and wrinkles on the décolleté.", startingPrice: "$109", highlights: ["Sun damage repair", "Chest area", "30 minutes"], cta: { text: "Learn More", href: "/services/jet-plasma-decollete" } },
  { name: "Jet Plasma Scalp", slug: "jet-plasma-scalp", tagline: "Optimize your scalp environment", description: "30-minute scalp treatment for hair loss, oily scalp, dry scalp, and dandruff. Creates the ideal conditions for growth.", startingPrice: "$300", highlights: ["Scalp health", "Hair growth support", "30 minutes"], cta: { text: "Learn More", href: "/services/jet-plasma-scalp" } },
  { name: "Jet Plasma Hand", slug: "jet-plasma-hand", tagline: "Rejuvenate aging hands", description: "20-minute hand rejuvenation for sun damage, sun spots, aging, and wrinkles. Hands often show age first.", startingPrice: "$250", highlights: ["Hand rejuvenation", "Sun spot correction", "20 minutes"], cta: { text: "Learn More", href: "/services/jet-plasma-hand" } },
  { name: "Jet Plasma Arm", slug: "jet-plasma-arm", tagline: "Address crepey, aging arm skin", description: "30-minute arm treatment for crepey skin, loss of elasticity, and visible aging on the upper arms.", startingPrice: "$295", highlights: ["Crepey skin", "Elasticity restoration", "30 minutes"], cta: { text: "Learn More", href: "/services/jet-plasma-arm" } },
  { name: "Jet Plasma Breast", slug: "jet-plasma-breast", tagline: "Firm and tighten the breast area", description: "40-minute breast area treatment for fine lines, sagging, and firming.", startingPrice: "$400", highlights: ["Firming", "Fine line reduction", "40 minutes"], cta: { text: "Learn More", href: "/services/jet-plasma-breast" } },
  { name: "Jet Plasma Stomach", slug: "jet-plasma-stomach", tagline: "Smooth stretch marks and texture", description: "30-minute stomach treatment for stretch marks, scarring, texture irregularities, and cellulite.", startingPrice: "$350", highlights: ["Stretch marks", "Texture smoothing", "30 minutes"], cta: { text: "Learn More", href: "/services/jet-plasma-stomach" } },
  { name: "Jet Plasma Legs & Knee", slug: "jet-plasma-legs-knee", tagline: "Restore elasticity and smooth skin", description: "50-minute legs and knees treatment for crepey skin and elasticity loss from aging or weight loss.", startingPrice: "$500", highlights: ["Legs + knees", "Elasticity restoration", "50 minutes"], cta: { text: "Learn More", href: "/services/jet-plasma-legs-knee" } },
];

export const ctaSection = {
  headline: "Ready for Head-to-Toe Skin Renewal?",
  subheadline: "Book a consultation and let us recommend the right body treatment for your specific area and concern.",
  primaryCTA: { text: "Book a Treatment", href: "https://www.vagaro.com/essencemedspaandwellnesscenter/book-now", variant: "primary" as const },
  secondaryCTA: { text: "Call (773) 763-1212", href: "tel:+17737631212", variant: "outline" as const },
};
