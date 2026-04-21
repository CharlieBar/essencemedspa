import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import {
  seo,
  hero,
  categories,
  categoriesSection,
  articlesSection,
  newsletter,
  ctaSection,
} from "@/content/pages/blog";
import { site } from "@/content/global/site";
import { getAllArticles } from "@/lib/content";
import { HeroSection } from "@/components/sections/HeroSection";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { BlogPostGrid } from "@/components/sections/BlogPostGrid";
import { NewsletterCTA } from "@/components/sections/NewsletterCTA";
import { CTASection } from "@/components/sections/CTASection";
import { Reveal } from "@/components/ui/Reveal";
import { JsonLd } from "@/components/ui/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  keywords: seo.keywords,
  alternates: { canonical: seo.canonical ?? `${site.url}/blog` },
  openGraph: {
    title: seo.title,
    description: seo.description,
    url: seo.canonical ?? `${site.url}/blog`,
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

const heroWithCTA = {
  ...hero,
  primaryCTA: hero.browseArticlesCTA,
};

export default function BlogPage() {
  const breadcrumbs = breadcrumbSchema([
    { name: "Home", url: site.url },
    { name: "Blog", url: `${site.url}/blog` },
  ]);

  const posts = getAllArticles();

  return (
    <>
      <JsonLd data={breadcrumbs} />

      <HeroSection data={heroWithCTA} variant="page" />

      {/* Category strip */}
      <section className="bg-essence-black section-y">
        <div className="px-page">
          <SectionHeader
            number={categoriesSection.number}
            eyebrow={categoriesSection.eyebrow}
            headline={categoriesSection.headline}
            className="mb-20"
          />

          <div className="grid gap-px bg-white/5 md:grid-cols-3 lg:grid-cols-5">
            {categories.map((cat, i) => (
              <Reveal key={cat.slug} delay={(i % 5) * 0.05}>
                <Link
                  href={`/blog/${cat.slug}`}
                  className="group relative flex h-full flex-col bg-essence-black-soft p-6 transition-all duration-500 hover:bg-essence-black"
                  aria-label={`Browse ${cat.name} articles`}
                >
                  <span aria-hidden className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-essence-accent transition-transform duration-500 ease-essence group-hover:scale-x-100" />
                  <h3 className="font-display text-lg leading-tight text-essence-white">
                    {cat.name}
                  </h3>
                  <p className="mt-3 text-[0.85rem] leading-[1.6] text-essence-white-off">
                    {cat.description}
                  </p>
                  <div className="mt-auto pt-6 flex items-center justify-end">
                    <ArrowUpRight
                      className="h-4 w-4 text-essence-accent transition-transform duration-500 ease-essence group-hover:translate-x-1 group-hover:-translate-y-1"
                      strokeWidth={1.5}
                    />
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Articles grid */}
      <div id="articles">
        <BlogPostGrid
          number={articlesSection.number}
          eyebrow={articlesSection.eyebrow}
          headline={articlesSection.headline}
          cardCTA={articlesSection.cardCTA}
          posts={posts}
        />
      </div>

      <NewsletterCTA
        headline={newsletter.headline}
        subheadline={newsletter.subheadline}
        placeholder={newsletter.placeholder}
        submitText={newsletter.submitText}
        privacyNote={newsletter.privacyNote}
        successMessage={newsletter.successMessage}
      />

      <CTASection
        headline={ctaSection.headline}
        subheadline={ctaSection.subheadline}
        primaryCTA={ctaSection.primaryCTA}
      />
    </>
  );
}
