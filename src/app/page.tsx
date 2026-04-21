import type { Metadata } from "next";
import {
  seo,
  hero,
  servicesOverview,
  concernsSection,
  whyUsSection,
  resultsStats,
  toolsSection,
  testimonialsSection,
  blogSection,
  instagramSection,
  ctaSection,
} from "@/content/pages/home";
import { testimonials } from "@/content/global/testimonials";
import { site } from "@/content/global/site";
import { getAllArticles } from "@/lib/content";
import { HeroSection } from "@/components/sections/HeroSection";
import { MarqueeStrip } from "@/components/sections/MarqueeStrip";
import { ServiceGrid } from "@/components/sections/ServiceGrid";
import { ConcernsCarousel } from "@/components/sections/ConcernsCarousel";
import { WhyUsFeatures } from "@/components/sections/WhyUsFeatures";
import { StatsBar } from "@/components/sections/StatsBar";
import { ToolsShowcase } from "@/components/sections/ToolsShowcase";
import { TestimonialSlider } from "@/components/sections/TestimonialSlider";
import { BlogTeaser } from "@/components/sections/BlogTeaser";
import { InstagramFeed } from "@/components/sections/InstagramFeed";
import { CTASection } from "@/components/sections/CTASection";
import { JsonLd } from "@/components/ui/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  keywords: seo.keywords,
  alternates: { canonical: seo.canonical ?? site.url },
  openGraph: {
    title: seo.title,
    description: seo.description,
    url: seo.canonical ?? site.url,
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


export default function HomePage() {
  const breadcrumbs = breadcrumbSchema([{ name: "Home", url: site.url }]);
  const latestPosts = getAllArticles().slice(0, 3);

  return (
    <>
      <JsonLd data={breadcrumbs} />

      <HeroSection data={hero} variant="home" />

      <MarqueeStrip />

      <ServiceGrid
        eyebrow={servicesOverview.eyebrow}
        headline={servicesOverview.headline}
        subheadline={servicesOverview.subheadline}
        categories={servicesOverview.categories}
        cta={servicesOverview.cta}
      />

      <ConcernsCarousel
        eyebrow={concernsSection.eyebrow}
        headline={concernsSection.headline}
        subheadline={concernsSection.subheadline}
        concerns={concernsSection.concerns}
        cta={concernsSection.cta}
      />

      <WhyUsFeatures
        eyebrow={whyUsSection.eyebrow}
        headline={whyUsSection.headline}
        features={whyUsSection.features}
      />

      <StatsBar stats={resultsStats} variant="dark" />

      <ToolsShowcase
        eyebrow={toolsSection.eyebrow}
        headline={toolsSection.headline}
        subheadline={toolsSection.subheadline}
        tools={toolsSection.tools}
        cta={toolsSection.cta}
      />

      <TestimonialSlider
        eyebrow={testimonialsSection.eyebrow}
        headline={testimonialsSection.headline}
        subheadline={testimonialsSection.subheadline}
        testimonials={testimonials}
      />

      <BlogTeaser
        eyebrow={blogSection.eyebrow}
        headline={blogSection.headline}
        subheadline={blogSection.subheadline}
        posts={latestPosts}
        cta={blogSection.cta}
      />

      <InstagramFeed
        eyebrow={instagramSection.eyebrow}
        headline={instagramSection.headline}
        handle={instagramSection.handle}
        href={instagramSection.href}
        cta={instagramSection.cta}
      />

      <CTASection
        headline={ctaSection.headline}
        subheadline={ctaSection.subheadline}
        primaryCTA={ctaSection.primaryCTA}
        secondaryCTA={ctaSection.secondaryCTA}
        badge={ctaSection.badge}
      />
    </>
  );
}
