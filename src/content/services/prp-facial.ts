// src/content/services/prp-facial.ts

import type { ServicePageContent } from "@/types/content";

export const content: ServicePageContent = {
  seo: {
    title: "PRP Facial Chicago | Platelet-Rich Plasma | $550 | Essence Medspa",
    description: "PRP facial treatment at Essence Medspa Chicago. Platelet-rich plasma for fine lines, wrinkle reduction, and youthful radiance. $550. Book your appointment today.",
    keywords: ["PRP facial Chicago", "platelet-rich plasma facial near me", "PRP skin rejuvenation Edgebrook"],
    canonical: "https://www.essence-medspa.com/services/prp-facial",
  },
  hero: {
    eyebrow: "Advanced Aesthetics",
    headline: "Your Own Blood. Your Best Skin.",
    subheadline: "PRP harnesses the regenerative power of your own platelets to rejuvenate skin, reduce fine lines, and restore a youthful radiance — naturally, without synthetic fillers or chemicals.",
    primaryCTA: { text: "Book PRP Facial", href: "https://www.vagaro.com/essencemedspaandwellnesscenter/book-now", variant: "primary" },
    secondaryCTA: { text: "Call (773) 763-1212", href: "tel:+17737631212", variant: "outline" },
    badge: "$550 · 60-min treatment",
    image: { src: "/images/services/prp-facial-hero.jpg", alt: "PRP facial treatment being administered at Essence Medspa Chicago" },
  },
  overview: {
    headline: "What Is a PRP Facial?",
    body: "A PRP (platelet-rich plasma) facial begins with a small blood draw from your arm. We process the blood in a centrifuge to concentrate the platelets — cells packed with growth factors that trigger tissue repair and collagen production. This concentrated plasma is then applied to your face through micro-needling, allowing the growth factors to penetrate deep into the skin.\n\nThe result is a powerful regenerative treatment that uses your body's own healing mechanisms. PRP stimulates new collagen formation, improves blood supply to the skin, and enhances cell turnover. Over the following weeks, you'll see improved skin texture, reduced fine lines, and a more youthful, radiant complexion.",
    keyFacts: [
      { label: "Treatment Time", value: "60 minutes" },
      { label: "Results Timeline", value: "2–4 weeks (progressive)" },
      { label: "Results Last", value: "6–12 months" },
      { label: "Downtime", value: "1–2 days mild redness" },
      { label: "Price", value: "$550" },
      { label: "Sessions Recommended", value: "3 for optimal results" },
    ],
  },
  benefits: {
    headline: "What PRP Facials Treat",
    items: [
      { area: "Fine Lines & Wrinkles", description: "Growth factors stimulate collagen production that plumps skin from within, softening lines over 2–4 weeks." },
      { area: "Dull, Aging Skin", description: "PRP accelerates cell turnover, replacing tired surface cells with fresh, radiant skin." },
      { area: "Uneven Skin Tone", description: "Improved blood supply and collagen remodeling helps even out discoloration and sun damage." },
      { area: "Under-Eye Area", description: "PRP can improve dark circles and thin under-eye skin by regenerating the delicate tissue." },
      { area: "Acne Scarring", description: "Collagen remodeling fills shallow scars from within, smoothing texture over a series of treatments." },
    ],
  },
  process: {
    headline: "Your PRP Facial Experience",
    steps: [
      { step: "01", title: "Blood Draw", description: "A small vial of blood is drawn from your arm — similar to a routine blood test. Quick and well-tolerated." },
      { step: "02", title: "Centrifuge Processing", description: "Your blood is processed in a medical centrifuge to separate and concentrate the platelet-rich plasma." },
      { step: "03", title: "Micro-Needling + PRP Application", description: "PRP is applied to your face and driven into the skin via micro-needling for maximum absorption and collagen stimulation." },
      { step: "04", title: "Recovery & Results", description: "Mild redness for 1–2 days. Progressive improvement over 2–4 weeks as collagen production accelerates. Full results at 6–8 weeks." },
    ],
  },
  faqs: [
    { question: "Is a PRP facial the same as a Vampire Facial?", answer: "They're related but different. A PRP facial uses platelet-rich plasma with micro-needling. Our Vampire Facial is a more comprehensive package that combines multiple advanced techniques. PRP is one component of the Vampire Facial." },
    { question: "How many PRP sessions do I need?", answer: "Most clients see significant improvement after a single session, but we recommend 3 sessions spaced 4–6 weeks apart for optimal collagen rebuilding. Maintenance treatments every 6–12 months sustain the results." },
    { question: "Can I wear makeup after a PRP facial?", answer: "We recommend avoiding makeup for 24 hours after treatment to let the micro-channels close and the PRP fully absorb. After 24 hours, you can resume your normal routine." },
    { question: "Is PRP safe?", answer: "PRP is one of the safest treatments available because it uses your own blood — there's no risk of allergic reaction, rejection, or foreign body reaction. The main risks are temporary redness, swelling, and minor bruising." },
  ],
  relatedServices: {
    headline: "Often Combined With",
    items: [
      { name: "PRF Facial", slug: "prf-facial", tagline: "Slow-release growth factors for extended results" },
      { name: "Hydrofacial", slug: "hydrofacial", tagline: "Deep cleansing before PRP for better absorption" },
      { name: "IV Therapy — Cosmetic", slug: "iv-therapy-cosmetic", tagline: "Nourish skin from the inside while PRP works outside" },
    ],
  },
  finalCTA: {
    headline: "Ready to Harness Your Body's Own Healing Power?",
    subheadline: "Book your PRP facial today. Free consultation included to determine if PRP is the right fit for your skin goals.",
    primaryCTA: { text: "Book PRP Facial", href: "https://www.vagaro.com/essencemedspaandwellnesscenter/book-now", variant: "primary" },
    secondaryCTA: { text: "Call (773) 763-1212", href: "tel:+17737631212", variant: "outline" },
  },
};
