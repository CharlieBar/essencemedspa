// src/content/services/juvederm-fillers.ts

import type { ServicePageContent } from "@/types/content";

export const content: ServicePageContent = {
  seo: {
    title: "Juvederm Fillers Chicago | Lip, Cheek & Jawline | Essence Medspa",
    description: "Juvederm Ultra XC and Voluma dermal fillers at Essence Medspa Chicago. Lip augmentation, cheek volume, nasolabial folds, and chin augmentation. $650–$1,000. Free consultation.",
    keywords: ["Juvederm Chicago", "dermal fillers near me", "lip fillers Chicago", "cheek fillers Edgebrook", "Juvederm Voluma Chicago"],
    canonical: "https://www.essence-medspa.com/services/juvederm-fillers",
  },
  hero: {
    eyebrow: "Advanced Aesthetics",
    headline: "Restore Volume. Enhance Contours. Look Like You — Only Better.",
    subheadline: "Juvederm hyaluronic acid fillers restore lost volume, sculpt facial contours, and plump lips with immediate, natural-looking results that last 6–18 months.",
    primaryCTA: { text: "Book Filler Consultation", href: "https://www.vagaro.com/essencemedspaandwellnesscenter/book-now", variant: "primary" },
    secondaryCTA: { text: "Call (773) 763-1212", href: "tel:+17737631212", variant: "outline" },
    badge: "$650–$1,000 per syringe · Free Consultation",
    image: { src: "/images/services/juvederm-hero.jpg", alt: "Natural lip and cheek enhancement with Juvederm fillers at Essence Medspa Chicago" },
    stats: [
      { value: "6–18", label: "Months Results Last" },
      { value: "30", suffix: " min", label: "Treatment Time" },
      { value: "0", label: "Days Downtime" },
    ],
  },
  overview: {
    headline: "What Are Juvederm Fillers?",
    body: "Juvederm is a family of FDA-approved hyaluronic acid (HA) dermal fillers designed to add volume, smooth lines, and enhance facial contours. Hyaluronic acid occurs naturally in your skin — it's the molecule responsible for maintaining hydration and plumpness. As you age, HA levels decline, leading to volume loss, deeper folds, and thinner lips.\n\nJuvederm fillers replace that lost volume precisely where you need it. Different formulations are engineered for different areas: Juvederm Ultra XC for lips and fine lines, Juvederm Voluma for cheeks and midface structure. Because HA is a natural substance, the body absorbs it safely over time — and if you ever want to reverse the results, we can dissolve the filler with hyaluronidase.",
    keyFacts: [
      { label: "Treatment Time", value: "20–45 minutes" },
      { label: "Results Visible", value: "Immediately" },
      { label: "Results Last", value: "6–18 months" },
      { label: "Downtime", value: "Minimal (mild swelling 1–3 days)" },
      { label: "Price", value: "$650–$1,000 per syringe" },
      { label: "Reversible", value: "Yes, with hyaluronidase" },
    ],
  },
  benefits: {
    headline: "What Fillers Treat",
    items: [
      { area: "Lips (Ultra XC)", description: "Add volume, define the border, smooth vertical lip lines, and create symmetry. From subtle enhancement to fuller lips — your preference drives the result." },
      { area: "Cheeks (Voluma)", description: "Restore the midface volume that gives your face a youthful, lifted structure. Voluma's thicker formulation provides natural lift that lasts up to 18 months." },
      { area: "Nasolabial Folds", description: "The \"parenthesis lines\" running from nose to mouth. Filler softens these deep creases without looking overfilled." },
      { area: "Marionette Lines", description: "The lines from the corners of your mouth to the chin that create a downturned expression. Filler lifts these and restores a neutral, pleasant resting expression." },
      { area: "Chin Augmentation", description: "Add projection and definition to a weak or recessed chin. Fillers can balance the profile without surgery." },
      { area: "Jawline Contouring", description: "Define and sharpen the jawline with strategically placed filler. Creates a more sculpted, angular appearance." },
    ],
  },
  process: {
    headline: "Your Filler Experience at Essence",
    steps: [
      { step: "01", title: "Free Consultation & Assessment", description: "We analyze your facial structure, discuss your goals, and recommend which Juvederm product and volume will achieve the most natural result. You'll see pricing before we begin." },
      { step: "02", title: "Numbing & Preparation", description: "Juvederm contains lidocaine for comfort. For lip treatments, we also apply topical numbing cream. Most clients find the process very tolerable." },
      { step: "03", title: "Precise Injection", description: "Your injector places filler using a combination of needles and/or cannulas depending on the area. You'll see results forming in real-time and can provide feedback throughout." },
      { step: "04", title: "Sculpting & Aftercare", description: "The injector gently molds the filler for optimal placement. You'll receive aftercare instructions — expect mild swelling for 1–3 days. Final results settle in at 2 weeks." },
    ],
  },
  pricing: {
    headline: "Juvederm Pricing",
    tiers: [
      { name: "Juvederm Ultra XC", price: "$650", description: "Ideal for lips, fine lines, and smaller volume corrections. Lasts 6–12 months.", includes: ["Free consultation", "Lidocaine included", "Follow-up appointment"] },
      { name: "Juvederm Voluma XC", price: "$1,000", description: "Designed for cheeks, midface, and jawline with deeper volume restoration. Lasts 12–18 months.", includes: ["Free consultation", "Maximum lift and structure", "Follow-up appointment"], popular: true },
    ],
    disclaimer: "Number of syringes needed varies by area and desired result. Most lip treatments require 1 syringe. Cheeks and jawline may require 1–2 syringes per side. Exact plan provided during consultation.",
  },
  faqs: [
    { question: "How long do Juvederm fillers last?", answer: "Ultra XC lasts 6–12 months in most areas. Voluma lasts 12–18 months in the cheeks. Duration depends on the area treated, your metabolism, and the amount of filler used." },
    { question: "Do fillers look natural?", answer: "When injected by an experienced provider, absolutely. We follow the principle of enhancing your existing features rather than creating new ones. The goal is always \"you, but better\" — not a different face." },
    { question: "What if I don't like the results?", answer: "Juvederm is reversible. We can dissolve hyaluronic acid fillers with an enzyme called hyaluronidase. Results from dissolution are visible within 24–48 hours." },
    { question: "Can I get Botox and fillers at the same appointment?", answer: "Yes — and many clients do. This combination is sometimes called a \"liquid facelift.\" Botox addresses dynamic wrinkles while fillers restore volume for comprehensive rejuvenation." },
    { question: "How painful is the injection?", answer: "Juvederm contains built-in lidocaine numbing. Most clients rate the discomfort 2–3 out of 10. For lip injections, we apply additional topical numbing for maximum comfort." },
    { question: "When will I see final results?", answer: "You'll see immediate volume, but there's typically mild swelling for 1–3 days. The final, settled result is visible at about 2 weeks when all swelling has resolved." },
  ],
  relatedServices: {
    headline: "Often Combined With",
    items: [
      { name: "Botox", slug: "botox", tagline: "Smooth dynamic wrinkles while fillers restore volume" },
      { name: "Hyaluronidase Dissolve", slug: "hyaluronidase-dissolve", tagline: "Dissolve previous filler if correction is needed" },
      { name: "PRP Facial", slug: "prp-facial", tagline: "Regenerative skin quality improvement alongside volume" },
      { name: "Hydrofacial", slug: "hydrofacial", tagline: "Maintain skin health between filler appointments" },
    ],
  },
  finalCTA: {
    headline: "Ready to Restore Your Natural Volume?",
    subheadline: "Book a free filler consultation. We'll analyze your facial structure, show you what's possible, and give you exact pricing — no commitment, no pressure.",
    primaryCTA: { text: "Book a Free Consultation", href: "https://www.vagaro.com/essencemedspaandwellnesscenter/book-now", variant: "primary" },
    secondaryCTA: { text: "Call (773) 763-1212", href: "tel:+17737631212", variant: "outline" },
  },
};
