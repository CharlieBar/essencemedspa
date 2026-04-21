// src/content/services/botox.ts

import type { ServicePageContent } from "@/types/content";

export const content: ServicePageContent = {
  seo: {
    title: "Botox in Chicago | $15/Unit | Essence Medspa & Wellness Center",
    description: "Natural-looking Botox injections at $15/unit in Chicago's Edgebrook neighborhood. Smooth forehead lines, crow's feet, and frown lines. Free consultation. 4.9 stars, 463+ reviews.",
    keywords: ["Botox Chicago", "Botox near me", "Botox $15 per unit", "Botox Edgebrook Chicago", "wrinkle treatment Chicago"],
    canonical: "https://www.essence-medspa.com/services/botox",
  },
  hero: {
    eyebrow: "Advanced Aesthetics",
    headline: "Smooth Lines. Keep Your Expressions.",
    subheadline: "Botox at Essence Medspa is about looking refreshed, not frozen. Our experienced injectors use precise dosing tailored to your unique facial anatomy for results that look natural — and last 3–4 months.",
    primaryCTA: { text: "Book Botox Consultation", href: "https://www.vagaro.com/essencemedspaandwellnesscenter/book-now", variant: "primary" },
    secondaryCTA: { text: "Call (773) 763-1212", href: "tel:+17737631212", variant: "outline" },
    badge: "$15/unit · Free Consultation",
    image: { src: "/images/services/botox-hero.jpg", alt: "Natural-looking Botox results showing smooth forehead at Essence Medspa Chicago" },
    stats: [
      { value: "3–5", label: "Days to See Results" },
      { value: "3–4", label: "Months of Lasting Effect" },
      { value: "15", suffix: " min", label: "Treatment Time" },
    ],
  },
  overview: {
    headline: "What Is Botox?",
    body: "Botox Cosmetic (botulinum toxin type A) is an FDA-approved injectable that temporarily relaxes the muscles responsible for dynamic wrinkles — the lines that form when you frown, squint, or raise your eyebrows. By precisely targeting these muscles, Botox smooths existing lines and prevents new ones from forming, all while preserving your natural expressions.\n\nAt Essence Medspa, we take a conservative, anatomy-driven approach. Your injector maps your facial muscles during the consultation, determines exactly how many units each area needs, and places each injection with precision. The result is a refreshed, well-rested look — not a \"frozen\" face. Every Botox session begins with a free consultation so you understand the plan, the pricing, and the expected results before a single needle is used.",
    keyFacts: [
      { label: "Treatment Time", value: "10–15 minutes" },
      { label: "Results Visible", value: "3–5 days" },
      { label: "Results Last", value: "3–4 months" },
      { label: "Downtime", value: "None" },
      { label: "Price", value: "$15 per unit" },
      { label: "Consultation", value: "Free" },
    ],
  },
  benefits: {
    headline: "What Botox Treats",
    items: [
      { area: "Forehead Lines", description: "Horizontal lines that deepen every time you raise your eyebrows. Botox relaxes the frontalis muscle for a smoother forehead while maintaining natural movement." },
      { area: "Frown Lines (11s)", description: "The vertical lines between your eyebrows that make you look angry or stressed. Botox relaxes the corrugator and procerus muscles to soften these without eliminating expression." },
      { area: "Crow's Feet", description: "Fan-shaped lines at the corners of your eyes that appear when you smile. Botox softens them while preserving the natural crinkle of a genuine smile." },
      { area: "Bunny Lines", description: "Diagonal lines on the sides of your nose that appear when you scrunch your face. A small amount of Botox smooths these subtle but aging lines." },
      { area: "Lip Lines & Lip Flip", description: "Fine vertical lines above the lip and a subtle lip flip that makes the upper lip appear slightly fuller by relaxing the orbicularis oris muscle." },
      { area: "Chin Dimpling", description: "The \"orange peel\" texture on the chin caused by an overactive mentalis muscle. Botox smooths the chin for a cleaner jawline profile." },
    ],
  },
  process: {
    headline: "Your Botox Experience at Essence",
    steps: [
      { step: "01", title: "Free Consultation", description: "We assess your facial anatomy, discuss your goals, and map the treatment areas. You'll know exactly how many units you need and the total cost before we begin." },
      { step: "02", title: "Preparation", description: "The treatment areas are cleaned. We use an ultra-fine needle (32-gauge) so most clients describe the sensation as a brief pinch. No topical anesthesia is typically needed." },
      { step: "03", title: "Precise Injection", description: "Your injector places Botox into the targeted muscles using the plan from your consultation. The entire injection process takes 10–15 minutes." },
      { step: "04", title: "Aftercare & Results", description: "You can return to normal activities immediately. Avoid rubbing the treated area and strenuous exercise for 24 hours. Results appear in 3–5 days and peak at 2 weeks." },
    ],
  },
  pricing: {
    headline: "Botox Pricing",
    tiers: [
      { name: "Per Unit", price: "$15", description: "Botox is priced per unit. The number of units depends on the treatment area and your muscle strength.", includes: ["Free consultation", "Customized dosing", "Follow-up included"] },
      { name: "Forehead + Frown Lines", price: "$225–$375", description: "Typical range for forehead and frown lines (15–25 units). Your exact number is determined during consultation.", includes: ["Most common treatment area", "Natural movement preserved"], popular: true },
      { name: "Full Upper Face", price: "$300–$525", description: "Forehead, frown lines, and crow's feet combined (20–35 units). The most comprehensive anti-aging option.", includes: ["Three zones treated", "Maximum smoothing effect"] },
    ],
    disclaimer: "Exact unit count varies by individual. Your injector will provide a precise estimate during your free consultation. No hidden fees.",
  },
  results: {
    headline: "Botox by the Numbers",
    stats: [
      { value: "463", suffix: "+", label: "5-Star Google Reviews" },
      { value: "3–5", label: "Days to Visible Results" },
      { value: "3–4", label: "Months Per Treatment" },
      { value: "0", label: "Days of Downtime" },
    ],
  },
  idealCandidates: {
    headline: "Is Botox Right for You?",
    good: [
      "You have dynamic wrinkles that appear when you make facial expressions",
      "You want to prevent fine lines from deepening before they become permanent",
      "You're looking for a quick, no-downtime treatment with subtle results",
      "You want to soften existing lines while still looking natural and expressive",
      "You're 21 or older and in general good health",
    ],
    alternatives: [
      { concern: "Lines visible even at rest (static wrinkles)", recommendation: "Juvederm fillers or RF Micro-Needling may be more effective for static lines" },
      { concern: "Volume loss in cheeks or lips", recommendation: "Juvederm Voluma or Ultra XC is designed for volume restoration, not Botox" },
      { concern: "Skin texture, scars, or pigmentation", recommendation: "Consider a facial treatment like Microdermabrasion, Custom Peel, or Jet Plasma instead" },
    ],
  },
  faqs: [
    { question: "Does Botox hurt?", answer: "Most clients describe it as a brief pinch. We use ultra-fine 32-gauge needles and the injections take just seconds per site. If you're sensitive, we can apply a topical numbing cream beforehand." },
    { question: "How many units of Botox will I need?", answer: "It varies by area and muscle strength. Common ranges: forehead lines (10–20 units), frown lines (15–25 units), crow's feet (10–15 units per side). Your injector provides an exact count during the free consultation." },
    { question: "Will people be able to tell I got Botox?", answer: "Not when it's done well. Our approach is conservative and anatomy-specific. You'll look like a well-rested version of yourself, not like you've had \"work done.\"" },
    { question: "Can I get Botox on my lunch break?", answer: "Absolutely. The treatment takes 10–15 minutes with no downtime. Many of our clients come in during lunch and return to work immediately." },
    { question: "How often do I need Botox maintenance?", answer: "Every 3–4 months for most clients. Over time, some people find they can extend the interval as the muscles become trained to relax." },
    { question: "What's the difference between Botox and fillers?", answer: "Botox relaxes muscles to smooth dynamic wrinkles (expression lines). Fillers add volume to fill static wrinkles, plump lips, or restore cheek volume. They work differently and are often used together for comprehensive rejuvenation." },
  ],
  relatedServices: {
    headline: "Often Combined With",
    items: [
      { name: "Juvederm Fillers", slug: "juvederm-fillers", tagline: "Add volume where Botox smooths lines" },
      { name: "RF Micro-Needling", slug: "rf-microneedling-facial", tagline: "Rebuild collagen for long-term skin quality" },
      { name: "Red Carpet Anti-Aging Facial", slug: "red-carpet-anti-aging-facial", tagline: "Non-invasive anti-aging between Botox sessions" },
      { name: "Hydrofacial", slug: "hydrofacial", tagline: "Deep hydration for glowing, plump skin" },
    ],
  },
  finalCTA: {
    headline: "Ready to See What Botox Can Do for You?",
    subheadline: "Book a free consultation. We'll map your facial muscles, discuss your goals, and give you an exact price — no commitment required.",
    primaryCTA: { text: "Book a Free Botox Consultation", href: "https://www.vagaro.com/essencemedspaandwellnesscenter/book-now", variant: "primary" },
    secondaryCTA: { text: "Call (773) 763-1212", href: "tel:+17737631212", variant: "outline" },
  },
};
