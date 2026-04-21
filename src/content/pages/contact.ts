// src/content/pages/contact.ts

import type { SEOMeta, LocationInfo } from "@/types/content";

export const seo: SEOMeta = {
  title: "Contact Essence Medspa | Book an Appointment | Chicago Edgebrook",
  description:
    "Contact Essence Medspa & Wellness Center in Chicago's Edgebrook neighborhood. Call (773) 763-1212, email keepcalm@essence-medspa.com, or book online. Walk-ins welcome.",
  keywords: [
    "Essence Medspa contact",
    "Chicago medspa appointment",
    "book medspa Chicago",
    "Edgebrook medspa hours",
    "medspa near me",
  ],
  canonical: "https://www.essence-medspa.com/contact",
};

export const hero = {
  eyebrow: "Get in Touch",
  headline: "We'd Love to Hear from You",
  subheadline:
    "Book online, give us a call, or stop by our Edgebrook studio. Free consultations available for all injectable and advanced treatments.",
  primaryCTA: {
    text: "Book Online",
    href: "https://www.vagaro.com/essencemedspaandwellnesscenter/book-now",
    variant: "primary" as const,
  },
  secondaryCTA: {
    text: "Call Us",
    href: "tel:+17737631212",
    variant: "outline" as const,
  },
};

export const location: LocationInfo = {
  name: "Essence Medspa & Wellness Center",
  address: "6413 N Kinzua Ave",
  city: "Chicago",
  state: "IL",
  zip: "60646",
  phone: "(773) 763-1212",
  email: "keepcalm@essence-medspa.com",
  hours: [
    { day: "Monday", hours: "10:00 AM – 7:00 PM" },
    { day: "Tuesday", hours: "10:00 AM – 7:00 PM" },
    { day: "Wednesday", hours: "10:00 AM – 7:00 PM" },
    { day: "Thursday", hours: "10:00 AM – 7:00 PM" },
    { day: "Friday", hours: "10:00 AM – 7:00 PM" },
    { day: "Saturday", hours: "9:00 AM – 5:00 PM" },
    { day: "Sunday", hours: "By Appointment" },
  ],
  coordinates: {
    lat: 41.9975,
    lng: -87.7564,
    // ASSUMPTION: Coordinates for 6413 N Kinzua Ave — verify with Google Maps
  },
  mapEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2963.1!2d-87.7564!3d41.9975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sEssence+Medspa+%26+Wellness+Center!5e0!3m2!1sen!2sus!4v1",
  // ASSUMPTION: Map embed URL — replace with actual Google Maps embed code
};

export const directions = {
  headline: "Getting Here",
  items: [
    {
      method: "By Car",
      description:
        "Located on N Kinzua Ave in Chicago's Edgebrook neighborhood. Free street parking available directly in front of the building. We're easily accessible from the Edens Expressway (I-94) — take the Peterson/Touhy exit.",
    },
    {
      method: "By Public Transit",
      description:
        "The CTA #81W Lawrence bus stops within a 5-minute walk. The Metra UP-N line stops at Edgebrook station, a short walk from our studio.",
    },
    {
      method: "Landmarks",
      description:
        "We're in the Edgebrook neighborhood, near the intersection of Devon Ave and Lehigh Ave. If you reach the Forest Preserve, you've gone too far north.",
    },
  ],
};

export const form = {
  headline: "Send Us a Message",
  subheadline:
    "Have a question about a treatment? Want to know which service is right for you? Drop us a message and we'll get back to you within 24 hours.",
  fields: [
    { name: "firstName", label: "First Name", type: "text", required: true },
    { name: "lastName", label: "Last Name", type: "text", required: true },
    { name: "email", label: "Email Address", type: "email", required: true },
    { name: "phone", label: "Phone Number", type: "tel", required: false },
    {
      name: "interest",
      label: "I'm Interested In",
      type: "select",
      required: false,
      options: [
        "Advanced Aesthetics (Botox, Fillers, PRP)",
        "Facial Treatments",
        "Body Treatments",
        "Therapeutic Massage",
        "Couples Experience",
        "IV Therapy",
        "Not Sure — Need a Consultation",
        "Other",
      ],
    },
    { name: "message", label: "Your Message", type: "textarea", required: true },
  ],
  submitText: "Send Message",
  privacyNote: "Your information is private and never shared. We'll respond within 24 hours.",
};

export const quickActions = [
  {
    icon: "calendar",
    title: "Book Online",
    description: "Schedule any treatment in under 60 seconds",
    cta: {
      text: "Book Now",
      href: "https://www.vagaro.com/essencemedspaandwellnesscenter/book-now",
    },
  },
  {
    icon: "phone",
    title: "Call Us",
    description: "Talk to our team directly",
    cta: { text: "(773) 763-1212", href: "tel:+17737631212" },
  },
  {
    icon: "mail",
    title: "Email Us",
    description: "Questions? We'll reply within 24 hours",
    cta: { text: "keepcalm@essence-medspa.com", href: "mailto:keepcalm@essence-medspa.com" },
  },
];

export const ctaSection = {
  headline: "Prefer to Book Directly?",
  subheadline:
    "Skip the form — book your treatment online in under a minute.",
  primaryCTA: {
    text: "Book Your Appointment",
    href: "https://www.vagaro.com/essencemedspaandwellnesscenter/book-now",
    variant: "primary" as const,
  },
};
