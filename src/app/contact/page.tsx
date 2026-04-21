import type { Metadata } from "next";
import { seo, hero, location, directions, form, quickActions, ctaSection } from "@/content/pages/contact";
import { site } from "@/content/global/site";
import { HeroSection } from "@/components/sections/HeroSection";
import { QuickActions } from "@/components/sections/QuickActions";
import { LocationCard } from "@/components/sections/LocationCard";
import { DirectionsList } from "@/components/sections/DirectionsList";
import { ContactForm } from "@/components/sections/ContactForm";
import { CTASection } from "@/components/sections/CTASection";
import { JsonLd } from "@/components/ui/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  keywords: seo.keywords,
  alternates: { canonical: seo.canonical ?? `${site.url}/contact` },
  openGraph: {
    title: seo.title,
    description: seo.description,
    url: seo.canonical ?? `${site.url}/contact`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
  },
};

export default function ContactPage() {
  const breadcrumbs = breadcrumbSchema([
    { name: "Home", url: site.url },
    { name: "Contact", url: `${site.url}/contact` },
  ]);

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "@id": `${site.url}/#medicalspa`,
    name: site.name,
    url: site.url,
    telephone: site.phone,
    email: site.email,
    description: site.description,
    priceRange: site.schema.priceRange,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      addressRegion: site.address.state,
      postalCode: site.address.zip,
      addressCountry: "US",
    },
    geo: location.coordinates
      ? {
          "@type": "GeoCoordinates",
          latitude: location.coordinates.lat,
          longitude: location.coordinates.lng,
        }
      : undefined,
    openingHoursSpecification: site.hours
      .filter((h) => h.hours.toLowerCase() !== "by appointment")
      .map((h) => ({
        "@type": "OpeningHoursSpecification",
        dayOfWeek: h.day,
      })),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: site.googleReviews.rating,
      reviewCount: site.googleReviews.count,
    },
    sameAs: [site.social.instagram, site.social.facebook, site.social.tiktok],
  };

  return (
    <>
      <JsonLd data={[breadcrumbs, localBusinessSchema]} />

      <HeroSection data={hero} variant="page" />

      <QuickActions items={quickActions} />

      <LocationCard
        number="01"
        eyebrow="Visit Us"
        headline="Find Our Studio"
        location={location}
      />

      <DirectionsList
        number="02"
        eyebrow="Getting Here"
        headline={directions.headline}
        items={directions.items}
      />

      <ContactForm
        number="03"
        eyebrow="Get In Touch"
        headline={form.headline}
        subheadline={form.subheadline}
        fields={form.fields}
        submitText={form.submitText}
        privacyNote={form.privacyNote}
      />

      <CTASection
        headline={ctaSection.headline}
        subheadline={ctaSection.subheadline}
        primaryCTA={ctaSection.primaryCTA}
      />
    </>
  );
}
