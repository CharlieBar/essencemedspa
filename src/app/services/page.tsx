import type { Metadata } from "next";
import { seo, hero, intro, hubsSection, ctaSection } from "@/content/pages/services";
import { site } from "@/content/global/site";
import { getHubBySlug } from "@/lib/content";
import { HeroSection } from "@/components/sections/HeroSection";
import { ServiceCategoryGroup } from "@/components/sections/ServiceCategoryGroup";
import { CTASection } from "@/components/sections/CTASection";
import { JsonLd } from "@/components/ui/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { Reveal } from "@/components/ui/Reveal";
import { Headline } from "@/components/ui/Headline";

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  keywords: seo.keywords,
  alternates: { canonical: seo.canonical ?? `${site.url}/services` },
  openGraph: {
    title: seo.title,
    description: seo.description,
    url: seo.canonical ?? `${site.url}/services`,
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

const HUB_ORDER = [
  "advanced-aesthetics",
  "facial-treatments",
  "body-treatments",
  "massage",
  "upgrades",
] as const;

export default function ServicesPage() {
  const breadcrumbs = breadcrumbSchema([
    { name: "Home", url: site.url },
    { name: "Services", url: `${site.url}/services` },
  ]);

  return (
    <>
      <JsonLd data={breadcrumbs} />

      <HeroSection data={hero} variant="page" />

      <section className="bg-essence-black section-y">
        <div className="px-page max-w-3xl">
          <Reveal>
            <Headline
              text={intro.headline}
              className="text-fluid-services leading-[1.05] font-normal"
            />
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-8 text-[1.1rem] leading-[1.9] text-essence-white-off">
              {intro.body}
            </p>
          </Reveal>
        </div>
      </section>

      {HUB_ORDER.map((slug, i) => {
        const hub = getHubBySlug(slug);
        if (!hub) return null;
        return (
          <ServiceCategoryGroup
            key={slug}
            number={String(i + 1).padStart(2, "0")}
            eyebrow={`${hubsSection.categoryEyebrowPrefix} ${i + 1}`}
            hubName={hub.intro.headline}
            hubSlug={slug}
            hubDescription={hub.intro.body}
            services={hub.services}
            viewAllLabel={hubsSection.viewAllPrefix}
            serviceCardCTA={hubsSection.serviceCardCTA}
          />
        );
      })}

      <CTASection
        headline={ctaSection.headline}
        subheadline={ctaSection.subheadline}
        primaryCTA={ctaSection.primaryCTA}
        secondaryCTA={ctaSection.secondaryCTA}
      />
    </>
  );
}
