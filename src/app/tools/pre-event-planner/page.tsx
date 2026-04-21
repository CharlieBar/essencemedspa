import type { Metadata } from "next";
import { seo, hero, ctaSection } from "@/content/tools/pre-event-planner";
import { site } from "@/content/global/site";
import { HeroSection } from "@/components/sections/HeroSection";
import { CTASection } from "@/components/sections/CTASection";
import { PreEventPlanner } from "@/components/tools/PreEventPlanner";
import { JsonLd } from "@/components/ui/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  keywords: seo.keywords,
  alternates: { canonical: seo.canonical ?? `${site.url}/tools/pre-event-planner` },
  openGraph: {
    title: seo.title,
    description: seo.description,
    url: seo.canonical ?? `${site.url}/tools/pre-event-planner`,
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

export default function PreEventPlannerPage() {
  const breadcrumbs = breadcrumbSchema([
    { name: "Home", url: site.url },
    { name: "Free Tools", url: `${site.url}/tools` },
    { name: "Pre-Event Planner", url: `${site.url}/tools/pre-event-planner` },
  ]);

  return (
    <>
      <JsonLd data={breadcrumbs} />

      <HeroSection data={hero} variant="page" />

      <PreEventPlanner />

      <CTASection
        headline={ctaSection.headline}
        subheadline={ctaSection.subheadline}
        primaryCTA={ctaSection.primaryCTA}
      />
    </>
  );
}
