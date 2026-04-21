import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Target, Calculator, Calendar, type LucideIcon } from "lucide-react";
import { seo, hero, toolCards, toolsIntro, ctaSection } from "@/content/tools/index";
import { site } from "@/content/global/site";
import { HeroSection } from "@/components/sections/HeroSection";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { CTASection } from "@/components/sections/CTASection";
import { Reveal } from "@/components/ui/Reveal";
import { JsonLd } from "@/components/ui/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  keywords: seo.keywords,
  alternates: { canonical: seo.canonical ?? `${site.url}/tools` },
  openGraph: {
    title: seo.title,
    description: seo.description,
    url: seo.canonical ?? `${site.url}/tools`,
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

const iconMap: Record<string, LucideIcon> = {
  Target,
  Calculator,
  Calendar,
};

export default function ToolsPage() {
  const breadcrumbs = breadcrumbSchema([
    { name: "Home", url: site.url },
    { name: "Free Tools", url: `${site.url}/tools` },
  ]);

  return (
    <>
      <JsonLd data={breadcrumbs} />

      <HeroSection data={hero} variant="page" />

      {/* Intro section */}
      <section className="bg-essence-black section-y">
        <div className="px-page">
          <SectionHeader
            eyebrow={toolsIntro.eyebrow}
            headline={toolsIntro.headline}
            subheadline={toolsIntro.subheadline}
            align="center"
            className="mb-20 mx-auto"
          />

          {/* Tool cards grid */}
          <div className="grid gap-px bg-white/5 md:grid-cols-3">
            {toolCards.map((card, i) => {
              const Icon = iconMap[card.icon];
              return (
                <Reveal key={card.id} delay={i * 0.1}>
                  <Link
                    href={card.href}
                    className="group relative flex h-full flex-col bg-essence-black-soft p-8 transition-all duration-500 hover:bg-essence-black"
                    aria-label={`Open ${card.headline}`}
                  >
                    <span aria-hidden className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-essence-accent transition-transform duration-500 ease-essence group-hover:scale-x-100" />
                    {/* Eyebrow + icon */}
                    <div className="mb-6 flex items-center justify-between">
                      <span className="eyebrow-sm text-essence-muted">
                        {card.eyebrow}
                      </span>
                      {Icon && (
                        <Icon
                          className="h-5 w-5 text-essence-accent transition-transform duration-500 ease-essence group-hover:scale-110"
                          strokeWidth={1.5}
                        />
                      )}
                    </div>

                    {/* Content */}
                    <h2 className="font-display text-xl leading-tight text-essence-white">
                      {card.headline}
                    </h2>
                    <p className="mt-4 flex-1 text-[0.875rem] leading-[1.7] text-essence-white-off">
                      {card.description}
                    </p>

                    {/* Badge + CTA row */}
                    <div className="mt-8 flex items-end justify-between">
                      <span className="eyebrow-sm border border-white/10 px-3 py-1 text-essence-muted">
                        {card.badge}
                      </span>
                      <div className="inline-flex items-center gap-2 text-[0.75rem] uppercase tracking-eyebrow text-essence-accent transition-all duration-300 group-hover:gap-3">
                        {card.cta}
                        <ArrowUpRight
                          className="h-3.5 w-3.5 transition-transform duration-500 ease-essence group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                          strokeWidth={1.5}
                        />
                      </div>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection
        eyebrow={ctaSection.eyebrow}
        headline={ctaSection.headline}
        subheadline={ctaSection.subheadline}
        primaryCTA={ctaSection.primaryCTA}
        secondaryCTA={ctaSection.secondaryCTA}
      />
    </>
  );
}
