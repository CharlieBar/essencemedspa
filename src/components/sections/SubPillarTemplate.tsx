import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { SubPillarContent } from "@/types/sub-pillar";
import { HeroSection } from "@/components/sections/HeroSection";
import { HubServicesList } from "@/components/sections/HubServicesList";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { CTASection } from "@/components/sections/CTASection";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import type { CTA } from "@/types/content";

interface Props {
  content: SubPillarContent;
}

function ProseSection({
  number,
  eyebrow,
  headline,
  body,
  surface,
}: {
  number: string;
  eyebrow?: string;
  headline: string;
  body: string;
  surface: "black" | "soft";
}) {
  const bg = surface === "black" ? "bg-essence-black" : "bg-essence-black-soft";
  return (
    <section className={`${bg} section-y`}>
      <div className="px-page max-w-4xl">
        <SectionHeader
          number={number}
          eyebrow={eyebrow}
          headline={headline}
          className="mb-12"
        />
        <Reveal delay={0.1}>
          <div className="space-y-6 text-[1.05rem] leading-[1.9] text-essence-white-off">
            {body.split("\n\n").map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function SubPillarTemplate({ content }: Props) {
  return (
    <>
      {/* Breadcrumb strip */}
      <nav
        className="border-b border-white/10 bg-essence-black py-4"
        aria-label="Breadcrumb"
      >
        <div className="px-page">
          <ol className="eyebrow-sm flex flex-wrap items-center gap-2 text-essence-muted">
            <li>
              <Link href="/" className="transition-colors hover:text-essence-accent">
                Home
              </Link>
            </li>
            <li aria-hidden>·</li>
            <li>
              <Link
                href="/services"
                className="transition-colors hover:text-essence-accent"
              >
                Services
              </Link>
            </li>
            <li aria-hidden>·</li>
            <li>
              <Link
                href={content.parentHub.href}
                className="transition-colors hover:text-essence-accent"
              >
                {content.parentHub.title}
              </Link>
            </li>
            <li aria-hidden>·</li>
            <li className="text-essence-white">{content.hero.headline}</li>
          </ol>
        </div>
      </nav>

      <HeroSection
        data={{
          eyebrow: content.hero.eyebrow,
          headline: content.hero.headline,
          subheadline: content.hero.subheadline,
          primaryCTA: content.hero.primaryCTA,
          secondaryCTA: content.hero.secondaryCTA,
          image: content.hero.image,
        }}
        variant="page"
      />

      <ProseSection
        number="01"
        eyebrow={content.problemDefinition.eyebrow ?? "The Problem"}
        headline={content.problemDefinition.headline}
        body={content.problemDefinition.body}
        surface="soft"
      />

      <ProseSection
        number="02"
        eyebrow={content.scienceBlock.eyebrow ?? "The Science"}
        headline={content.scienceBlock.headline}
        body={content.scienceBlock.body}
        surface="black"
      />

      <ProseSection
        number="03"
        eyebrow={content.treatmentLandscape.eyebrow ?? "The Landscape"}
        headline={content.treatmentLandscape.headline}
        body={content.treatmentLandscape.body}
        surface="soft"
      />

      <ProseSection
        number="04"
        eyebrow={content.essenceApproach.eyebrow ?? "Our Approach"}
        headline={content.essenceApproach.headline}
        body={content.essenceApproach.body}
        surface="black"
      />

      {content.relatedServices.length > 0 && (
        <HubServicesList
          number="05"
          eyebrow="Treatments"
          headline="Facials in this cluster"
          services={content.relatedServices}
        />
      )}

      {content.relatedConcerns.length > 0 && (
        <section className="bg-essence-black-soft section-y">
          <div className="px-page">
            <SectionHeader
              number="06"
              eyebrow="Related Concerns"
              headline="Skin concerns in this cluster"
              className="mb-12"
            />
            <div className="grid gap-px bg-white/5 md:grid-cols-2">
              {content.relatedConcerns.map((concern) => (
                <Reveal key={concern.href}>
                  <Link
                    href={concern.href}
                    className="group relative block bg-essence-black p-10 transition-all duration-500 ease-essence hover:-translate-y-1 hover:bg-essence-black-soft"
                  >
                    <span
                      aria-hidden
                      className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-essence-accent transition-transform duration-500 ease-essence group-hover:scale-x-100"
                    />
                    <h3 className="font-display text-2xl font-medium leading-[1.15] text-essence-white transition-colors group-hover:text-essence-accent">
                      {concern.title}
                    </h3>
                    <p className="mt-4 text-[0.95rem] leading-[1.8] text-essence-white-off">
                      {concern.excerpt}
                    </p>
                    <div className="mt-8 flex items-center justify-between">
                      <span className="eyebrow-sm text-essence-gold">
                        View concern
                      </span>
                      <span
                        aria-hidden
                        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-essence-accent text-essence-accent transition-all duration-500 ease-essence group-hover:bg-essence-accent group-hover:text-essence-white"
                      >
                        <ArrowUpRight
                          className="h-4 w-4 transition-transform duration-500 ease-essence group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                          strokeWidth={1.5}
                        />
                      </span>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {content.clusterCards.some((c) => c.published) && (
        <section className="bg-essence-black section-y">
          <div className="px-page">
            <SectionHeader
              number="07"
              eyebrow="Deep Dive"
              headline="Learn more"
              className="mb-16"
            />
            <div className="grid gap-px bg-white/5 md:grid-cols-2 lg:grid-cols-3">
              {content.clusterCards
                .filter((c) => c.published)
                .map((card) => (
                  <Reveal key={card.href}>
                    <Link
                      href={card.href}
                      className="group relative block overflow-hidden bg-essence-black-soft transition-all duration-500 ease-essence hover:-translate-y-1 hover:bg-essence-black"
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
                      <div className="p-8">
                        <h3 className="font-display text-xl font-medium leading-[1.2] text-essence-white transition-colors group-hover:text-essence-accent">
                          {card.title}
                        </h3>
                        <p className="mt-3 text-[0.9rem] leading-[1.7] text-essence-white-off">
                          {card.excerpt}
                        </p>
                      </div>
                    </Link>
                  </Reveal>
                ))}
            </div>
          </div>
        </section>
      )}

      {content.faqs.length > 0 && (
        <FAQAccordion
          number="08"
          eyebrow="Common Questions"
          headline="Frequently Asked Questions"
          faqs={content.faqs}
          surface="soft"
        />
      )}

      <CTASection
        headline={content.closingCTA.headline}
        subheadline={content.closingCTA.subheadline}
        primaryCTA={content.closingCTA.primaryCTA as CTA}
        secondaryCTA={content.closingCTA.secondaryCTA as CTA | undefined}
      />
    </>
  );
}
