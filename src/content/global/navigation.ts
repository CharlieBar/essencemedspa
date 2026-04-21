// src/content/global/navigation.ts

export const navigation = {
  primary: [
    {
      label: "Services",
      href: "/services",
      children: [
        {
          label: "Advanced Aesthetics",
          href: "/services/advanced-aesthetics",
          description: "Botox, fillers, PRP, mesotherapy, IV therapy & more",
        },
        {
          label: "Facial Treatments",
          href: "/services/facial-treatments",
          description: "Hydrofacials, peels, microdermabrasion, RF micro-needling",
        },
        {
          label: "Body Treatments",
          href: "/services/body-treatments",
          description: "Back facials, body scrubs, Jet Plasma body areas",
        },
        {
          label: "Therapeutic Massage",
          href: "/services/massage",
          description: "Swedish, deep tissue, hot stone, prenatal, couples",
        },
        {
          label: "Spa Upgrades",
          href: "/services/upgrades",
          description: "Bamboo Suite, wine & platter packages",
        },
      ],
    },
    {
      label: "Concerns",
      href: "/concerns",
      children: [
        {
          label: "Wrinkles & Fine Lines",
          href: "/concerns/wrinkles-fine-lines",
          description: "Turn back time with Botox, fillers & RF treatments",
        },
        {
          label: "Acne Scars & Texture",
          href: "/concerns/acne-texture",
          description: "Smooth your skin with peels, facials & Jet Plasma",
        },
        {
          label: "Dull, Tired-Looking Skin",
          href: "/concerns/dull-tired-skin",
          description: "Reveal your natural glow with brightening treatments",
        },
        {
          label: "Stubborn Fat Pockets",
          href: "/concerns/stubborn-fat",
          description: "Sculpt your dream silhouette without surgery",
        },
        {
          label: "Hair Thinning & Loss",
          href: "/concerns/hair-thinning",
          description: "Reclaim your crown with PRP hair restoration",
        },
        {
          label: "View All Concerns",
          href: "/concerns",
          description: "Find the right treatment for your specific concern",
        },
      ],
    },
    {
      label: "Tools",
      href: "/tools",
      children: [
        {
          label: "Treatment Finder Quiz",
          href: "/tools/treatment-finder",
          description: "4 questions → your top 3 recommended treatments",
        },
        {
          label: "Botox Unit Calculator",
          href: "/tools/botox-calculator",
          description: "Select areas, see instant unit & cost estimate",
        },
        {
          label: "Pre-Event Timeline Planner",
          href: "/tools/pre-event-planner",
          description: "Glow-up schedule from 6 months out to the day of",
        },
        {
          label: "All Free Tools",
          href: "/tools",
          description: "Browse every interactive planning tool",
        },
      ],
    },
    { label: "About", href: "/about" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],
  cta: {
    text: "Book Now",
    href: "https://www.vagaro.com/essencemedspaandwellnesscenter/book-now",
  },
  topBar: {
    phone: "(773) 763-1212",
    phoneHref: "tel:+17737631212",
    address: "6413 N Kinzua Ave, Chicago, IL 60646",
    badge: "4.9 ★ · 463 Google Reviews",
  },
};

export const footer = {
  tagline:
    "Where science meets serenity. Advanced aesthetics, therapeutic massage, and holistic wellness in Chicago's Edgebrook neighborhood.",
  columns: [
    {
      heading: "Advanced Aesthetics",
      links: [
        { label: "Botox", href: "/services/botox" },
        { label: "Juvederm Fillers", href: "/services/juvederm-fillers" },
        { label: "PRP Facial", href: "/services/prp-facial" },
        { label: "Vampire Facial", href: "/services/vampire-facial" },
        { label: "IV Therapy", href: "/services/iv-therapy-cosmetic" },
        { label: "Hair Restoration", href: "/services/hair-restoration" },
        { label: "All Advanced Aesthetics", href: "/services/advanced-aesthetics" },
      ],
    },
    {
      heading: "Facial Treatments",
      links: [
        { label: "Hydrofacial", href: "/services/hydrofacial" },
        { label: "Custom Facial", href: "/services/custom-facial" },
        { label: "RF Micro-Needling", href: "/services/rf-microneedling-facial" },
        { label: "Microdermabrasion", href: "/services/microdermabrasion-facial" },
        { label: "Jet Plasma Facial", href: "/services/jet-plasma-facial" },
        { label: "All Facial Treatments", href: "/services/facial-treatments" },
      ],
    },
    {
      heading: "Massage & Body",
      links: [
        { label: "Swedish Massage", href: "/services/swedish-massage" },
        { label: "Deep Tissue Massage", href: "/services/deep-tissue-massage" },
        { label: "Hot Stone Massage", href: "/services/hot-stone-massage" },
        { label: "Couples Massage", href: "/services/couples-swedish-massage" },
        { label: "Body Scrub", href: "/services/body-scrub" },
        { label: "All Massage", href: "/services/massage" },
      ],
    },
    {
      heading: "Company",
      links: [
        { label: "About Us", href: "/about" },
        { label: "Blog", href: "/blog" },
        { label: "Free Tools", href: "/tools" },
        { label: "Contact", href: "/contact" },
        { label: "Book Online", href: "https://www.vagaro.com/essencemedspaandwellnesscenter/book-now" },
        { label: "Shop Products", href: "https://www.vagaro.com/essencemedspaandwellnesscenter/products" },
      ],
    },
  ],
  legal: {
    copyright: "© 2026 Essence Medspa & Wellness Center. All rights reserved.",
    links: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Sitemap", href: "/sitemap" },
    ],
  },
  contact: {
    phone: "(773) 763-1212",
    phoneHref: "tel:+17737631212",
    email: "keepcalm@essence-medspa.com",
    emailHref: "mailto:keepcalm@essence-medspa.com",
    address: "6413 N Kinzua Ave, Chicago, IL 60646",
  },
  social: [
    { platform: "Instagram", href: "https://www.instagram.com/essencechicago/", icon: "instagram" },
    { platform: "Facebook", href: "https://www.facebook.com/essencemedspainchicago", icon: "facebook" },
    { platform: "TikTok", href: "https://www.tiktok.com/@essencechicago", icon: "tiktok" },
  ],
};
