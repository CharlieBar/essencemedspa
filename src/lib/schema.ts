import { site } from "@/content/global/site";
import type { ServicePageContent, FAQItem } from "@/types/content";

export function medicalSpaSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "@id": `${site.url}/#medicalspa`,
    name: site.name,
    description: site.description,
    url: site.url,
    telephone: site.phone,
    email: site.email,
    image: `${site.url}/images/og/home.jpg`,
    priceRange: site.schema.priceRange,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      addressRegion: site.address.state,
      postalCode: site.address.zip,
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 41.999,
      longitude: -87.762,
    },
    openingHoursSpecification: site.hours
      .filter((h) => h.hours.toLowerCase() !== "by appointment")
      .map((h) => ({
        "@type": "OpeningHoursSpecification",
        dayOfWeek: h.day,
        opens: parseOpens(h.hours),
        closes: parseCloses(h.hours),
      })),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: site.googleReviews.rating,
      reviewCount: site.googleReviews.count,
    },
    sameAs: [site.social.instagram, site.social.facebook, site.social.tiktok],
    areaServed: site.schema.areaServed,
  };
}

function parseOpens(range: string): string {
  const m = range.match(/(\d+):(\d+)\s*(AM|PM)/i);
  if (!m) return "10:00";
  const [, h, mm, ap] = m;
  let hour = parseInt(h, 10);
  if (ap.toUpperCase() === "PM" && hour !== 12) hour += 12;
  return `${hour.toString().padStart(2, "0")}:${mm}`;
}

function parseCloses(range: string): string {
  const parts = range.split(/[–-]/);
  if (parts.length < 2) return "19:00";
  const m = parts[1].trim().match(/(\d+):(\d+)\s*(AM|PM)/i);
  if (!m) return "19:00";
  const [, h, mm, ap] = m;
  let hour = parseInt(h, 10);
  if (ap.toUpperCase() === "PM" && hour !== 12) hour += 12;
  return `${hour.toString().padStart(2, "0")}:${mm}`;
}

export function serviceSchema(content: ServicePageContent, slug: string) {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    name: content.hero.headline,
    description: content.seo.description,
    url: `${site.url}/services/${slug}`,
    provider: {
      "@type": "MedicalBusiness",
      "@id": `${site.url}/#medicalspa`,
      name: site.name,
    },
    ...(content.pricing && {
      offers: content.pricing.tiers.map((tier) => ({
        "@type": "Offer",
        name: tier.name,
        price: tier.price,
        priceCurrency: "USD",
        description: tier.description,
      })),
    }),
  };
}

export function faqSchema(faqs: FAQItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };
}

export function breadcrumbSchema(crumbs: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: c.url,
    })),
  };
}
