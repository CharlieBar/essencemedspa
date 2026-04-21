// src/content/pages/home.ts

import type { SEOMeta, HeroSection, FeatureItem, Stat } from "@/types/content";

export const seo: SEOMeta = {
  title: "Essence Medspa & Wellness Center | Chicago's Premier Medspa",
  description:
    "Advanced aesthetics, facials, therapeutic massage & IV therapy in Chicago's Edgebrook neighborhood. 4.9 stars from 463+ Google reviews. Book your appointment today.",
  keywords: [
    "medspa Chicago",
    "Chicago medspa",
    "med spa near me",
    "facial treatments Chicago",
    "Botox Chicago",
    "massage Chicago Edgebrook",
    "IV therapy Chicago",
    "best medspa Chicago",
  ],
  canonical: "https://www.essence-medspa.com",
  ogImage: "/images/og/home.jpg",
};

export const hero: HeroSection = {
  eyebrow: "Chicago's Top-Rated Medspa · Edgebrook",
  headline: "Your Skin Deserves More Than Ordinary",
  subheadline:
    "Advanced aesthetics, rejuvenating facials, and therapeutic massage — all in one serene Chicago retreat. Results you can see. Relaxation you can feel.",
  primaryCTA: {
    text: "Book Your Appointment",
    href: "https://www.vagaro.com/essencemedspaandwellnesscenter/book-now",
    variant: "primary",
  },
  secondaryCTA: {
    text: "Explore Treatments",
    href: "/services",
    variant: "ghost",
  },
  badge: "⭐ 4.9 Stars · 463 Google Reviews",
  image: {
    src: "/images/hero/home-hero.jpg",
    alt: "Interior of Essence Medspa & Wellness Center in Chicago showing a calm treatment room with warm lighting",
  },
  stats: [
    { value: "463", suffix: "+", label: "5-Star Reviews" },
    { value: "65", suffix: "+", label: "Treatments Offered" },
    { value: "4.9", label: "Google Rating" },
  ],
};

export const servicesOverview = {
  eyebrow: "Our Treatments",
  headline: "Expert Care for Every Goal",
  subheadline:
    "From wrinkle-smoothing Botox to deep-tissue massage, we offer 65+ treatments tailored to your unique needs.",
  categories: [
    {
      name: "Advanced Aesthetics",
      slug: "advanced-aesthetics",
      tagline: "Medical-grade treatments for visible transformation",
      description:
        "Botox, dermal fillers, PRP facials, mesotherapy, IV therapy, and hair restoration — delivered by trained specialists.",
      icon: "sparkles",
      image: {
        src: "/images/categories/advanced-aesthetics.jpg",
        alt: "Client receiving advanced aesthetic treatment at Essence Medspa Chicago",
      },
      highlights: ["Botox ($15/unit)", "Juvederm Fillers ($650+)", "PRP Facial ($550)", "IV Therapy ($175+)"],
      cta: { text: "View Advanced Aesthetics", href: "/services/advanced-aesthetics" },
    },
    {
      name: "Facial Treatments",
      slug: "facial-treatments",
      tagline: "Customized facials for every skin type and concern",
      description:
        "21 unique facials including Hydrofacial, RF micro-needling, Jet Plasma, chemical peels, and our Signature Facelift Facial.",
      icon: "heart",
      image: {
        src: "/images/categories/facial-treatments.jpg",
        alt: "Close-up of a client receiving a luxury facial treatment at Essence Medspa",
      },
      highlights: ["Hydrofacial ($229)", "Custom Facial ($169)", "RF Micro-Needling ($399)", "Jet Plasma ($350)"],
      cta: { text: "View Facial Treatments", href: "/services/facial-treatments" },
    },
    {
      name: "Body Treatments",
      slug: "body-treatments",
      tagline: "Head-to-toe rejuvenation and skin renewal",
      description:
        "Back facials, luxury body scrubs, and Jet Plasma treatments for the neck, décolleté, hands, arms, stomach, and more.",
      icon: "body",
      image: {
        src: "/images/categories/body-treatments.jpg",
        alt: "Client relaxing during a body treatment at Essence Medspa in Chicago",
      },
      highlights: ["Body Scrub ($189)", "Back Facial ($179)", "Jet Plasma Face & Neck ($450)"],
      cta: { text: "View Body Treatments", href: "/services/body-treatments" },
    },
    {
      name: "Therapeutic Massage",
      slug: "massage",
      tagline: "Tension dissolves. Balance restores. You, renewed.",
      description:
        "13 massage modalities from classic Swedish to deep tissue, hot stone, cupping, prenatal, Thai herbal, and couples experiences.",
      icon: "hands",
      image: {
        src: "/images/categories/massage.jpg",
        alt: "Therapist performing deep tissue massage at Essence Medspa wellness center",
      },
      highlights: ["Swedish ($109+)", "Deep Tissue ($130+)", "Hot Stone ($160+)", "Couples ($318+)"],
      cta: { text: "View Massage Services", href: "/services/massage" },
    },
    {
      name: "Spa Upgrades",
      slug: "upgrades",
      tagline: "Elevate any treatment into a full retreat",
      description:
        "Add the private Bamboo Suite, a wine and cheese platter in our Oasis Lounge, or the full couples experience.",
      icon: "wine",
      image: {
        src: "/images/categories/upgrades.jpg",
        alt: "Wine and fruit platter served in the Oasis Lounge at Essence Medspa",
      },
      highlights: ["Bamboo Suite ($40)", "Wine & Platter ($40–$80)", "Full Couples Package ($100)"],
      cta: { text: "View Upgrades", href: "/services/upgrades" },
    },
  ],
  cta: { text: "See All 65+ Treatments", href: "/services" },
};

export const concernsSection = {
  eyebrow: "Your Concerns, Our Solutions",
  headline: "Tell Us What Bothers You — We'll Show You the Fix",
  subheadline:
    "Not sure which treatment is right for you? Start with what you want to change and we'll match you to the best solution.",
  concerns: [
    {
      name: "Hollow Under Eyes & Dark Circles",
      slug: "hollow-under-eyes",
      tagline: "Look As Awake As You Feel",
      image: { src: "/images/concerns/under-eyes.jpg", alt: "Before and after treatment for dark circles under eyes" },
    },
    {
      name: "Wrinkles & Fine Lines",
      slug: "wrinkles-fine-lines",
      tagline: "Turn Back Time, Naturally",
      image: { src: "/images/concerns/wrinkles.jpg", alt: "Before and after anti-aging treatment showing reduced fine lines" },
    },
    {
      name: "Acne Scars & Texture Issues",
      slug: "acne-texture",
      tagline: "Your Smoothest Canvas Yet",
      image: { src: "/images/concerns/acne-scars.jpg", alt: "Before and after treatment for acne scars and uneven skin texture" },
    },
    {
      name: "Dull, Tired-Looking Skin",
      slug: "dull-tired-skin",
      tagline: "Reveal Your Inner Glow",
      image: { src: "/images/concerns/dull-skin.jpg", alt: "Radiant glowing skin after brightening facial treatment" },
    },
    {
      name: "Stubborn Fat Pockets",
      slug: "stubborn-fat",
      tagline: "Sculpt Your Dream Silhouette",
      image: { src: "/images/concerns/body-contouring.jpg", alt: "Body contouring treatment results showing sculpted silhouette" },
    },
    {
      name: "Hair Thinning & Hair Loss",
      slug: "hair-thinning",
      tagline: "Reclaim Your Crown",
      image: { src: "/images/concerns/hair-thinning.jpg", alt: "Before and after PRP hair restoration treatment showing new growth" },
    },
    {
      name: "Chronic Tension & Muscle Pain",
      slug: "muscle-tension",
      tagline: "Release, Relax, Restore",
      image: { src: "/images/concerns/tension.jpg", alt: "Deep tissue massage therapy for chronic muscle tension relief" },
    },
    {
      name: "Hyperpigmentation & Dark Spots",
      slug: "dark-spots",
      tagline: "Even Out Your Glow",
      image: { src: "/images/concerns/dark-spots.jpg", alt: "Before and after skin brightening treatment for dark spots" },
    },
  ],
  cta: { text: "View All Concerns", href: "/concerns" },
};

export const whyUsSection = {
  eyebrow: "Why Essence",
  headline: "What Sets Us Apart in Chicago",
  features: [
    {
      icon: "award",
      title: "4.9 Stars from 463+ Reviews",
      description:
        "Our clients consistently rate us among the highest-reviewed medspas in Chicago. Real results earn real trust.",
    },
    {
      icon: "user-check",
      title: "Personalized Treatment Plans",
      description:
        "No cookie-cutter approaches. Every treatment is customized after a thorough consultation to match your skin, your goals, and your lifestyle.",
    },
    {
      icon: "shield-check",
      title: "Licensed, Trained Specialists",
      description:
        "Every injection, facial, and massage is performed by a licensed professional with ongoing advanced training in their specialty.",
    },
    {
      icon: "leaf",
      title: "Science Meets Serenity",
      description:
        "Medical-grade results in a spa-like environment. Our Edgebrook space was designed so you feel calm from the moment you walk in.",
    },
    {
      icon: "clock",
      title: "65+ Treatments, One Destination",
      description:
        "Advanced aesthetics, facials, body treatments, massage, and IV therapy — all under one roof. No referrals, no running around.",
    },
    {
      icon: "heart",
      title: "Transparent Pricing, No Pressure",
      description:
        "Prices listed upfront on every service. Free consultations for injectables and advanced treatments. We recommend what works, not what costs the most.",
    },
  ] satisfies FeatureItem[],
};

export const resultsStats: Stat[] = [
  { value: "463", suffix: "+", label: "5-Star Google Reviews" },
  { value: "65", suffix: "+", label: "Treatments Available" },
  { value: "10", suffix: "+", label: "Years Serving Chicago" },
  { value: "15,000", suffix: "+", label: "Treatments Performed" },
  // ASSUMPTION: Years in practice and treatment count — update with actual numbers
];

export const toolsSection = {
  eyebrow: "Free Interactive Tools",
  headline: "Plan Before You *Book*",
  subheadline:
    "Three free tools to help you arrive at your consultation informed — no guesswork, no pressure, just clarity.",
  tools: [
    {
      id: "treatment-finder",
      number: "01",
      icon: "Target",
      label: "Treatment Finder Quiz",
      tagline: "Find your match",
      description:
        "Four quick questions about your concerns, timeline, and budget — get your top three recommended treatments.",
      meta: "2 minutes · Personalized",
      href: "/tools/treatment-finder",
      cta: "Take the Quiz",
    },
    {
      id: "botox-calculator",
      number: "02",
      icon: "Calculator",
      label: "Botox Unit Calculator",
      tagline: "Know your cost",
      description:
        "Select the treatment areas you're curious about and see an instant unit & cost estimate at Essence's per-unit rate.",
      meta: "Instant · Transparent pricing",
      href: "/tools/botox-calculator",
      cta: "Calculate Estimate",
    },
    {
      id: "pre-event-planner",
      number: "03",
      icon: "Calendar",
      label: "Pre-Event Timeline Planner",
      tagline: "Plan the glow-up",
      description:
        "Enter your event date — wedding, reunion, photoshoot — and receive a tailored treatment timeline starting up to six months out.",
      meta: "Date-based · Up to 6 months",
      href: "/tools/pre-event-planner",
      cta: "Build My Timeline",
    },
  ],
  cta: {
    text: "Explore All Free Tools",
    href: "/tools",
    variant: "ghost" as const,
  },
};

export const testimonialsSection = {
  eyebrow: "Client Stories",
  headline: "Real People. Real Results. Real Reviews.",
  subheadline:
    "Don't just take our word for it — hear what our Chicago clients have to say.",
};

export const blogSection = {
  eyebrow: "From the Blog",
  headline: "Expert Skincare Tips & Treatment Guides",
  subheadline:
    "Stay informed with the latest in aesthetics, skincare routines, and wellness advice from our team.",
  cta: { text: "Read the Blog", href: "/blog" },
};

export const instagramSection = {
  eyebrow: "Follow @essencechicago",
  headline: "See Our Work on Instagram",
  handle: "@essencechicago",
  href: "https://www.instagram.com/essencechicago/",
  cta: { text: "Follow Us on Instagram", href: "https://www.instagram.com/essencechicago/" },
};

export const ctaSection = {
  headline: "Ready to Experience the Essence Difference?",
  subheadline:
    "Book your appointment online in under 60 seconds — or call us to chat about which treatment is right for you.",
  primaryCTA: {
    text: "Book Your Appointment",
    href: "https://www.vagaro.com/essencemedspaandwellnesscenter/book-now",
    variant: "primary" as const,
  },
  secondaryCTA: {
    text: "Call (773) 763-1212",
    href: "tel:+17737631212",
    variant: "outline" as const,
  },
  badge: "Free consultations · No commitment required",
};
