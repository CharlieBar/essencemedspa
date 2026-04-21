import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllServiceSlugs, getServiceBySlug, getAllHubSlugs, getHubBySlug } from "@/lib/content";
import { site } from "@/content/global/site";
import { HeroSection } from "@/components/sections/HeroSection";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { ServiceOverview } from "@/components/sections/ServiceOverview";
import { BenefitsGrid } from "@/components/sections/BenefitsGrid";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { PricingCards } from "@/components/sections/PricingCards";
import { StatsBar } from "@/components/sections/StatsBar";
import { IdealCandidates } from "@/components/sections/IdealCandidates";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { RelatedServices } from "@/components/sections/RelatedServices";
import { CTASection } from "@/components/sections/CTASection";
import { HubServicesList } from "@/components/sections/HubServicesList";
import { OccasionsList } from "@/components/sections/OccasionsList";
import { JsonLd } from "@/components/ui/JsonLd";
import { Reveal } from "@/components/ui/Reveal";
import { Headline } from "@/components/ui/Headline";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema";
import type { CTA } from "@/types/content";

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Statically generate every /services/[slug] route by enumerating the content
// directory at build time. All 71 services + 5 hubs are registered in src/lib/content.ts.
export async function generateStaticParams() {
  return [
    ...getAllServiceSlugs().map((slug) => ({ slug })),
    ...getAllHubSlugs().map((slug) => ({ slug })),
  ];
}

export const dynamicParams = false;

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;

  // Try service first
  const service = await getServiceBySlug(slug);
  if (service) {
    const { seo } = service;
    return {
      title: seo.title,
      description: seo.description,
      keywords: seo.keywords,
      alternates: { canonical: seo.canonical ?? `${site.url}/services/${slug}` },
      openGraph: {
        title: seo.title,
        description: seo.description,
        url: seo.canonical ?? `${site.url}/services/${slug}`,
        images: seo.ogImage ? [seo.ogImage] : undefined,
        type: "article",
      },
      twitter: {
        card: "summary_large_image",
        title: seo.title,
        description: seo.description,
        images: seo.ogImage ? [seo.ogImage] : undefined,
      },
      robots: seo.noIndex ? { index: false, follow: false } : undefined,
    };
  }

  // Try hub
  const hub = getHubBySlug(slug);
  if (hub) {
    const { seo } = hub;
    return {
      title: seo.title,
      description: seo.description,
      keywords: seo.keywords,
      alternates: { canonical: seo.canonical ?? `${site.url}/services/${slug}` },
      openGraph: {
        title: seo.title,
        description: seo.description,
        url: seo.canonical ?? `${site.url}/services/${slug}`,
        images: seo.ogImage ? [seo.ogImage] : undefined,
        type: "article",
      },
      twitter: {
        card: "summary_large_image",
        title: seo.title,
        description: seo.description,
        images: seo.ogImage ? [seo.ogImage] : undefined,
      },
    };
  }

  return {};
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;

  // ─── Service branch ───────────────────────────────────────────────
  const content = await getServiceBySlug(slug);
  if (content) {
    const breadcrumbs = breadcrumbSchema([
      { name: "Home", url: site.url },
      { name: "Services", url: `${site.url}/services` },
      { name: content.hero.headline, url: `${site.url}/services/${slug}` },
    ]);

    return (
      <>
        <JsonLd data={[serviceSchema(content, slug), breadcrumbs, faqSchema(content.faqs)]} />

        <HeroSection data={content.hero} variant="page" />

        <TrustStrip />

        {/* Surface rhythm: B → S → B → S → B → S → B → S → B */}
        <ServiceOverview
          headline={content.overview.headline}
          body={content.overview.body}
          keyFacts={content.overview.keyFacts}
          number="01"
          eyebrow="Overview"
        />

        <BenefitsGrid
          eyebrow="What It Treats"
          headline={content.benefits.headline}
          items={content.benefits.items}
          number="02"
          surface="soft"
        />

        <ProcessSteps
          eyebrow="The Process"
          headline={content.process.headline}
          steps={content.process.steps}
          number="03"
          surface="black"
        />

        {content.pricing && (
          <PricingCards
            eyebrow="Investment"
            headline={content.pricing.headline}
            tiers={content.pricing.tiers}
            disclaimer={content.pricing.disclaimer}
            number="04"
            surface="soft"
          />
        )}

        {content.idealCandidates && (
          <IdealCandidates
            eyebrow="Right For You?"
            headline={content.idealCandidates.headline}
            good={content.idealCandidates.good}
            alternatives={content.idealCandidates.alternatives}
            number="05"
            surface="black"
          />
        )}

        {content.results && <StatsBar stats={content.results.stats} variant="dark" />}

        <FAQAccordion
          eyebrow="Common Questions"
          headline="Frequently Asked Questions"
          faqs={content.faqs}
          number="06"
          surface="soft"
        />

        <RelatedServices
          eyebrow="Pair It With"
          headline={content.relatedServices.headline}
          items={content.relatedServices.items}
          number="07"
          surface="black"
        />

        <CTASection
          headline={content.finalCTA.headline}
          subheadline={content.finalCTA.subheadline}
          primaryCTA={content.finalCTA.primaryCTA}
          secondaryCTA={content.finalCTA.secondaryCTA}
          surface="soft"
        />
      </>
    );
  }

  // ─── Hub branch ───────────────────────────────────────────────────
  const hub = getHubBySlug(slug);
  if (hub) {
    const breadcrumbs = breadcrumbSchema([
      { name: "Home", url: site.url },
      { name: "Services", url: `${site.url}/services` },
      { name: hub.hero.headline, url: `${site.url}/services/${slug}` },
    ]);

    return (
      <>
        <JsonLd data={breadcrumbs} />

        <HeroSection data={hub.hero} variant="page" />

        {/* Intro */}
        <section className="bg-essence-black section-y">
          <div className="px-page max-w-3xl">
            <Reveal>
              <Headline
                text={hub.intro.headline}
                className="text-fluid-services leading-[1.05] font-normal"
              />
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-8 text-[1.1rem] leading-[1.9] text-essence-white-off">
                {hub.intro.body}
              </p>
            </Reveal>
          </div>
        </section>

        <HubServicesList
          number="01"
          eyebrow="Treatments"
          headline="Choose Your Treatment"
          services={hub.services}
        />

        {hub.occasions && (
          <OccasionsList
            number="02"
            eyebrow="Perfect For"
            headline={hub.occasions.headline}
            items={hub.occasions.items}
          />
        )}

        <CTASection
          headline={hub.ctaSection.headline}
          subheadline={hub.ctaSection.subheadline}
          primaryCTA={hub.ctaSection.primaryCTA as CTA}
          secondaryCTA={hub.ctaSection.secondaryCTA as CTA | undefined}
        />
      </>
    );
  }

  notFound();
}
