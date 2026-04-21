import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getAllArticles,
  getAllConcernSlugs,
  getConcernBySlug,
} from "@/lib/content";
import { site } from "@/content/global/site";
import { HeroSection } from "@/components/sections/HeroSection";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { SolutionsList } from "@/components/sections/SolutionsList";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { WhyUsFeatures } from "@/components/sections/WhyUsFeatures";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { CTASection } from "@/components/sections/CTASection";
import { RelatedArticles } from "@/components/sections/RelatedArticles";
import { JsonLd } from "@/components/ui/JsonLd";
import { Reveal } from "@/components/ui/Reveal";
import { Headline } from "@/components/ui/Headline";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllConcernSlugs().map((slug) => ({ slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const content = getConcernBySlug(slug);
  if (!content) return {};
  const { seo } = content;
  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    alternates: { canonical: seo.canonical ?? `${site.url}/concerns/${slug}` },
    openGraph: {
      title: seo.title,
      description: seo.description,
      url: seo.canonical ?? `${site.url}/concerns/${slug}`,
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

export default async function ConcernPage({ params }: PageProps) {
  const { slug } = await params;
  const content = getConcernBySlug(slug);
  if (!content) notFound();

  const breadcrumbs = breadcrumbSchema([
    { name: "Home", url: site.url },
    { name: "Concerns", url: `${site.url}/concerns` },
    { name: content.hero.headline, url: `${site.url}/concerns/${slug}` },
  ]);

  // Resolve related article slugs to full article summaries
  const relatedArticles = content.relatedArticles?.slugs.length
    ? getAllArticles().filter((a) =>
        content.relatedArticles!.slugs.includes(a.slug),
      )
    : [];

  return (
    <>
      <JsonLd data={[breadcrumbs, faqSchema(content.faqs)]} />

      <HeroSection data={content.hero} variant="page" />

      <TrustStrip />

      {/* Intro */}
      <section className="bg-essence-black section-y">
        <div className="px-page max-w-3xl">
          <Reveal>
            <Headline
              text={content.intro.headline}
              className="text-fluid-services leading-[1.05] font-normal"
            />
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-8 text-[1.1rem] leading-[1.9] text-essence-white-off">
              {content.intro.body}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Understanding: science + causes */}
      {content.understanding && (
        <section className="bg-essence-black-soft section-y">
          <div className="px-page">
            <SectionHeader
              number="02"
              eyebrow={content.understanding.eyebrow ?? "The Science"}
              headline={content.understanding.headline}
              className="mb-12"
            />
            <div className="max-w-3xl">
              <Reveal>
                <p className="text-[1.05rem] leading-[1.9] text-essence-white-off">
                  {content.understanding.body}
                </p>
              </Reveal>
            </div>

            <div className="mt-16 grid gap-px bg-white/5 md:grid-cols-2 lg:grid-cols-3">
              {content.understanding.causes.map((cause, i) => (
                <Reveal key={cause.title} delay={(i % 3) * 0.05}>
                  <div className="flex h-full flex-col bg-essence-black-soft p-8">
                    <span className="text-[0.65rem] uppercase tracking-brand text-essence-accent">
                      Cause {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mt-4 font-display text-xl leading-tight text-essence-white">
                      {cause.title}
                    </h3>
                    <p className="mt-3 text-[0.95rem] leading-[1.75] text-essence-white-off">
                      {cause.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Surface rhythm: Intro(B) → Understanding(S) → Solutions(B) → Journey(S) → WhyUs(B) → LocalContext(S) → FAQ(B) → Related(S) → CTA(B) */}
      <SolutionsList
        number="03"
        eyebrow="Treatments"
        headline="Solutions That Work"
        subheadline="Each treatment targets this concern from a different angle."
        items={content.solutions}
        surface="black"
      />

      {/* Journey / Timeline */}
      {content.journey && (
        <ProcessSteps
          number="04"
          eyebrow={content.journey.eyebrow ?? "Your Journey"}
          headline={content.journey.headline}
          subheadline={content.journey.subheadline}
          steps={content.journey.phases}
          surface="soft"
        />
      )}

      <WhyUsFeatures
        eyebrow="Why Essence"
        headline={content.whyEssence.headline}
        features={content.whyEssence.features}
        surface="black"
      />

      {/* Local SEO context */}
      {content.localContext && (
        <section className="bg-essence-black-soft section-y">
          <div className="px-page max-w-3xl">
            <SectionHeader
              number="06"
              eyebrow={content.localContext.eyebrow ?? "Serving Chicago & Edgebrook"}
              headline={content.localContext.headline}
              className="mb-10"
            />
            <Reveal>
              <p className="text-[1.05rem] leading-[1.9] text-essence-white-off">
                {content.localContext.body}
              </p>
            </Reveal>
          </div>
        </section>
      )}

      <FAQAccordion
        number="07"
        eyebrow="Common Questions"
        headline="Frequently Asked Questions"
        faqs={content.faqs}
        surface="black"
      />

      {/* Related articles */}
      {relatedArticles.length > 0 && (
        <RelatedArticles articles={relatedArticles} surface="soft" />
      )}

      <CTASection
        headline={content.ctaSection.headline}
        subheadline={content.ctaSection.subheadline}
        primaryCTA={content.ctaSection.primaryCTA}
        secondaryCTA={content.ctaSection.secondaryCTA}
        surface="black"
      />
    </>
  );
}
