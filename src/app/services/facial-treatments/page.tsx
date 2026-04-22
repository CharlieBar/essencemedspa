import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { getHubBySlug } from "@/lib/content";
import { site } from "@/content/global/site";
import { HeroSection } from "@/components/sections/HeroSection";
import { HubServicesList } from "@/components/sections/HubServicesList";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { CTASection } from "@/components/sections/CTASection";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { JsonLd } from "@/components/ui/JsonLd";
import { Reveal } from "@/components/ui/Reveal";
import { Headline } from "@/components/ui/Headline";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import type { CTA } from "@/types/content";

const SLUG = "facial-treatments";

export async function generateMetadata(): Promise<Metadata> {
  const hub = getHubBySlug(SLUG);
  if (!hub) return {};
  const { seo } = hub;
  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    alternates: { canonical: seo.canonical ?? `${site.url}/services/${SLUG}` },
    openGraph: {
      title: seo.title,
      description: seo.description,
      url: seo.canonical ?? `${site.url}/services/${SLUG}`,
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
}

export default function FacialTreatmentsHubPage() {
  const hub = getHubBySlug(SLUG);
  if (!hub) notFound();

  const breadcrumbs = breadcrumbSchema([
    { name: "Home", url: site.url },
    { name: "Services", url: `${site.url}/services` },
    { name: hub.hero.headline, url: `${site.url}/services/${SLUG}` },
  ]);

  const medicalWebPageSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: hub.seo.title,
    description: hub.seo.description,
    url: hub.seo.canonical ?? `${site.url}/services/${SLUG}`,
    specialty: "Dermatology",
    about: { "@type": "MedicalProcedure", name: "Facial Treatments" },
  };

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: hub.services.map((service, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `${site.url}/services/${service.slug}`,
      name: service.name,
    })),
  };

  const jsonLdPayload: unknown[] = [breadcrumbs, medicalWebPageSchema, itemListSchema];
  if (hub.pillarFaqs && hub.pillarFaqs.length > 0) {
    jsonLdPayload.push(faqSchema(hub.pillarFaqs));
  }

  return (
    <>
      <JsonLd data={jsonLdPayload} />

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

      {/* Deep Intro — "The Essence Approach" */}
      {hub.deepIntro && (
        <section className="bg-essence-black-soft section-y">
          <div className="px-page max-w-4xl">
            <SectionHeader
              number="01"
              eyebrow={hub.deepIntro.eyebrow ?? "The Essence Approach"}
              headline={hub.deepIntro.headline}
              className="mb-12"
            />
            <Reveal delay={0.1}>
              <div className="prose-essence space-y-6 text-[1.05rem] leading-[1.9] text-essence-white-off">
                {hub.deepIntro.body.split("\n\n").map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </Reveal>
          </div>
        </section>
      )}

      {/* Sub-Pillar Cards — the 3 branches of the pillar */}
      {hub.subPillarCards && hub.subPillarCards.length > 0 && (
        <section className="bg-essence-black section-y">
          <div className="px-page">
            <SectionHeader
              number="02"
              eyebrow="Choose Your Path"
              headline="Three paths to the skin you want"
              className="mb-16"
            />
            <div className="grid gap-px bg-white/5 md:grid-cols-3">
              {hub.subPillarCards.map((card, i) => (
                <Reveal key={card.href} delay={(i % 3) * 0.05}>
                  <Link
                    href={card.href}
                    className="group relative flex h-full min-h-[420px] flex-col overflow-hidden bg-essence-black-soft transition-all duration-500 ease-essence hover:-translate-y-1 hover:bg-essence-black"
                    aria-label={`Explore ${card.title}`}
                  >
                    <span
                      aria-hidden
                      className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-essence-accent transition-transform duration-500 ease-essence group-hover:scale-x-100 z-10"
                    />
                    {card.image && (
                      <div className="relative aspect-[4/3] overflow-hidden">
                        <Image
                          src={card.image.src}
                          alt={card.image.alt}
                          fill
                          sizes="(max-width: 768px) 100vw, 33vw"
                          className="object-cover transition-transform duration-500 ease-essence group-hover:scale-105"
                        />
                      </div>
                    )}
                    <div className="relative flex flex-1 flex-col p-10">
                      <h3 className="font-display text-[1.75rem] font-medium leading-[1.15] text-essence-white">
                        {card.title}
                      </h3>
                      <p className="tagline-label text-essence-gold mt-2">
                        {card.tagline}
                      </p>
                      <p className="text-[0.95rem] leading-[1.8] text-essence-white-off mt-4">
                        {card.description}
                      </p>
                      <div className="mt-auto flex items-end justify-end pt-8">
                        <span
                          aria-hidden
                          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-essence-accent text-essence-accent transition-all duration-500 ease-essence group-hover:bg-essence-accent group-hover:text-essence-white"
                        >
                          <ArrowUpRight
                            className="h-4 w-4 transition-transform duration-500 ease-essence group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                            strokeWidth={1.5}
                          />
                        </span>
                      </div>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <HubServicesList
        number="03"
        eyebrow="All Treatments"
        headline="Choose Your Treatment"
        services={hub.services}
      />

      {/* Local Signals — Chicago / Jefferson Park */}
      {hub.localSignals && (
        <section className="bg-essence-black-soft section-y">
          <div className="px-page max-w-4xl">
            <SectionHeader
              number="04"
              eyebrow={hub.localSignals.eyebrow ?? "Chicago · Jefferson Park"}
              headline={hub.localSignals.headline}
              className="mb-12"
            />
            <Reveal delay={0.1}>
              <div className="prose-essence space-y-6 text-[1.05rem] leading-[1.9] text-essence-white-off">
                {hub.localSignals.body.split("\n\n").map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </Reveal>
          </div>
        </section>
      )}

      {/* Team CTA */}
      {hub.teamSection && (
        <section className="bg-essence-black section-y">
          <div className="px-page max-w-4xl">
            <SectionHeader
              number="05"
              eyebrow={hub.teamSection.eyebrow ?? "Your Aesthetician"}
              headline={hub.teamSection.headline}
              className="mb-8"
            />
            <Reveal delay={0.1}>
              <div className="prose-essence space-y-6 text-[1.05rem] leading-[1.9] text-essence-white-off">
                {hub.teamSection.body.split("\n\n").map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <Link
                href={hub.teamSection.ctaHref}
                className="eyebrow group mt-10 inline-flex items-center gap-3 text-essence-accent"
              >
                <span>Meet the team</span>
                <ArrowUpRight
                  className="h-4 w-4 transition-transform duration-300 ease-essence group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  strokeWidth={1.5}
                />
              </Link>
            </Reveal>
          </div>
        </section>
      )}

      {/* Pillar FAQs */}
      {hub.pillarFaqs && hub.pillarFaqs.length > 0 && (
        <FAQAccordion
          number="06"
          eyebrow="Common Questions"
          headline="Frequently Asked Questions"
          faqs={hub.pillarFaqs}
          surface="soft"
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
