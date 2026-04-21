import type { Metadata } from "next";
import { seo, hero, ctaSection } from "@/content/tools/treatment-finder";
import { site } from "@/content/global/site";
import { HeroSection } from "@/components/sections/HeroSection";
import { CTASection } from "@/components/sections/CTASection";
import { TreatmentFinder } from "@/components/tools/TreatmentFinder";
import { JsonLd } from "@/components/ui/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  keywords: seo.keywords,
  alternates: { canonical: seo.canonical ?? `${site.url}/tools/treatment-finder` },
  openGraph: {
    title: seo.title,
    description: seo.description,
    url: seo.canonical ?? `${site.url}/tools/treatment-finder`,
    images: seo.ogImage ? [seo.ogImage] : undefined,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
    images: seo.ogImage ? [seo.ogImage] : undefined,
  },
};

export default function TreatmentFinderPage() {
  const breadcrumbs = breadcrumbSchema([
    { name: "Home", url: site.url },
    { name: "Free Tools", url: `${site.url}/tools` },
    { name: "Treatment Finder", url: `${site.url}/tools/treatment-finder` },
  ]);

  return (
    <>
      <JsonLd data={breadcrumbs} />

      <HeroSection data={hero} variant="page" />

      <TreatmentFinder />

      <CTASection
        headline={ctaSection.headline}
        subheadline={ctaSection.subheadline}
        primaryCTA={ctaSection.primaryCTA}
      />
    </>
  );
}
