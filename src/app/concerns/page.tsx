import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { seo, hero, concerns, concernsGrid, ctaSection } from "@/content/pages/concerns";
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
  alternates: { canonical: seo.canonical ?? `${site.url}/concerns` },
  openGraph: {
    title: seo.title,
    description: seo.description,
    url: seo.canonical ?? `${site.url}/concerns`,
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

export default function ConcernsPage() {
  const breadcrumbs = breadcrumbSchema([
    { name: "Home", url: site.url },
    { name: "Concerns", url: `${site.url}/concerns` },
  ]);

  return (
    <>
      <JsonLd data={breadcrumbs} />

      <HeroSection data={hero} variant="page" />

      <section className="bg-essence-black-soft section-y">
        <div className="px-page">
          <SectionHeader
            number={concernsGrid.number}
            eyebrow={concernsGrid.eyebrow}
            headline={concernsGrid.headline}
            subheadline={concernsGrid.subheadline}
            className="mb-20"
          />

          <div className="grid gap-px bg-white/5 md:grid-cols-2 lg:grid-cols-3">
            {concerns.map((concern, i) => (
              <Reveal key={concern.slug} delay={(i % 3) * 0.05}>
                <Link
                  href={`/concerns/${concern.slug}`}
                  className="group flex h-full flex-col bg-essence-black-soft transition-all duration-500 hover:bg-essence-black"
                  aria-label={`Explore solutions for ${concern.name}`}
                >
                  {concern.image && (
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={concern.image.src}
                        alt={concern.image.alt}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition-transform duration-500 ease-essence group-hover:scale-105"
                      />
                    </div>
                  )}
                  <div className="flex flex-1 flex-col p-8">
                    <h3 className="font-display text-2xl leading-tight text-essence-white">
                      {concern.name}
                    </h3>
                    <p className="mt-2 text-[0.7rem] uppercase tracking-brand text-essence-gold">
                      {concern.tagline}
                    </p>
                    <p className="mt-4 text-[0.9rem] leading-[1.7] text-essence-white-off">
                      {concern.description}
                    </p>
                    <p className="mt-4 text-[0.75rem] uppercase text-essence-accent">
                      {concern.treatmentCount} {concernsGrid.treatmentCountSuffix}
                    </p>
                    <div className="mt-auto pt-8 flex items-center justify-between text-[0.7rem] uppercase tracking-brand text-essence-white-off">
                      <span>{concernsGrid.cardCTA}</span>
                      <ArrowUpRight
                        className="h-4 w-4 text-essence-accent transition-transform duration-500 ease-essence group-hover:translate-x-1 group-hover:-translate-y-1"
                        strokeWidth={1.5}
                      />
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        headline={ctaSection.headline}
        subheadline={ctaSection.subheadline}
        primaryCTA={ctaSection.primaryCTA}
        secondaryCTA={ctaSection.secondaryCTA}
      />
    </>
  );
}
