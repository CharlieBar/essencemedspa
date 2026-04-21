import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getAllArticleSlugs,
  getArticleBySlug,
  getAllArticles,
} from "@/lib/content";
import { categories, articlesSection, ctaSection } from "@/content/pages/blog";
import { site } from "@/content/global/site";
import { ctaSection as homeCtaSection } from "@/content/pages/home";
import { ArticleHeader } from "@/components/sections/ArticleHeader";
import { MDXContent } from "@/components/sections/MDXContent";
import { RelatedArticles } from "@/components/sections/RelatedArticles";
import { BlogPostGrid } from "@/components/sections/BlogPostGrid";
import { HeroSection } from "@/components/sections/HeroSection";
import { CTASection } from "@/components/sections/CTASection";
import { JsonLd } from "@/components/ui/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

// ─── Category configuration ───────────────────────────────────────
const CATEGORY_MAP: Record<
  string,
  { name: string; articleCategory: string; description: string }
> = {
  "advanced-aesthetics": {
    name: "Advanced Aesthetics",
    articleCategory: "Advanced Aesthetics",
    description:
      "Deep dives into Botox, fillers, PRP, mesotherapy, and injectable treatments",
  },
  "facial-peels": {
    name: "Facial Treatments & Peels",
    articleCategory: "Facial Treatments & Peels",
    description:
      "Everything about facials, peels, microdermabrasion, and skin rejuvenation",
  },
  "massage-body": {
    name: "Massage & Body Treatments",
    articleCategory: "Massage & Body Treatments",
    description: "Massage modalities, body treatments, and physical wellness",
  },
  "skincare-wellness": {
    name: "Skincare & Wellness",
    articleCategory: "Skincare & Wellness",
    description:
      "Daily skincare routines, nutrition, seasonal tips, and holistic wellness",
  },
  "news-events": {
    name: "Essence News & Events",
    articleCategory: "Essence Medspa News & Events",
    description:
      "Team updates, new treatments, specials, and community events",
  },
};

const CATEGORY_SLUGS = Object.keys(CATEGORY_MAP);

// ─── Static params ────────────────────────────────────────────────
interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const articleSlugs = getAllArticleSlugs().map((slug) => ({ slug }));
  const categorySlugs = CATEGORY_SLUGS.map((slug) => ({ slug }));
  return [...articleSlugs, ...categorySlugs];
}

export const dynamicParams = false;

// ─── Metadata ─────────────────────────────────────────────────────
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;

  // Category page metadata
  const catMeta = CATEGORY_MAP[slug];
  if (catMeta) {
    const title = `${catMeta.name} Articles | Essence Medspa Blog`;
    const description = `${catMeta.description}. Expert skincare insights from the team at Essence Medspa in Chicago.`;
    const canonical = `${site.url}/blog/${slug}`;
    return {
      title,
      description,
      alternates: { canonical },
      openGraph: {
        title,
        description,
        url: canonical,
        type: "website",
      },
      twitter: {
        card: "summary_large_image",
        title,
        description,
      },
    };
  }

  // Article page metadata
  const article = getArticleBySlug(slug);
  if (!article) return {};

  const title = article.seo?.title ?? article.title;
  const description = article.seo?.description ?? article.description;
  const canonical = article.seo?.canonical ?? `${site.url}/blog/${slug}`;

  return {
    title,
    description,
    keywords: article.seo?.keywords ?? article.tags,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      images: article.featuredImage ? [article.featuredImage.src] : undefined,
      type: "article",
      publishedTime: article.publishDate,
      authors: [article.author],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: article.featuredImage ? [article.featuredImage.src] : undefined,
    },
  };
}

// ─── Page component ───────────────────────────────────────────────
export default async function BlogSlugPage({ params }: PageProps) {
  const { slug } = await params;

  // ── Category view ──────────────────────────────────────────────
  const catMeta = CATEGORY_MAP[slug];
  if (catMeta) {
    const allArticles = getAllArticles();
    const filtered = allArticles.filter(
      (a) => a.category === catMeta.articleCategory,
    );

    const breadcrumbs = breadcrumbSchema([
      { name: "Home", url: site.url },
      { name: "Blog", url: `${site.url}/blog` },
      { name: catMeta.name, url: `${site.url}/blog/${slug}` },
    ]);

    const heroData = {
      eyebrow: "The Essence Blog",
      headline: catMeta.name,
      subheadline: catMeta.description,
      primaryCTA: { text: "All Articles", href: "/blog", variant: "secondary" as const },
    };

    return (
      <>
        <JsonLd data={breadcrumbs} />

        <HeroSection data={heroData} variant="page" />

        <BlogPostGrid
          number={articlesSection.number}
          eyebrow={catMeta.name}
          headline={
            filtered.length > 0
              ? `${filtered.length} Article${filtered.length === 1 ? "" : "s"} in ${catMeta.name}`
              : `No Articles Yet in ${catMeta.name}`
          }
          cardCTA={articlesSection.cardCTA}
          posts={filtered}
        />

        <CTASection
          headline={ctaSection.headline}
          subheadline={ctaSection.subheadline}
          primaryCTA={ctaSection.primaryCTA}
        />
      </>
    );
  }

  // ── Article view ───────────────────────────────────────────────
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const relatedSlugs = article.relatedArticles ?? [];
  const allArticles = getAllArticles();
  const related = allArticles.filter((a) => relatedSlugs.includes(a.slug));

  const breadcrumbs = breadcrumbSchema([
    { name: "Home", url: site.url },
    { name: "Blog", url: `${site.url}/blog` },
    { name: article.title, url: `${site.url}/blog/${slug}` },
  ]);

  const blogPosting = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    description: article.description,
    datePublished: article.publishDate,
    author: {
      "@type": "Person",
      name: article.author,
    },
    image: article.featuredImage
      ? `${site.url}${article.featuredImage.src}`
      : undefined,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${site.url}/blog/${slug}`,
    },
    publisher: {
      "@type": "MedicalBusiness",
      "@id": `${site.url}/#medicalspa`,
      name: site.name,
    },
  };

  return (
    <>
      <JsonLd data={[blogPosting, breadcrumbs]} />

      <ArticleHeader
        category={article.category}
        title={article.title}
        description={article.description}
        publishDate={article.publishDate}
        author={article.author}
        readTime={article.computedReadTime}
        image={article.featuredImage}
      />

      <section className="relative bg-essence-black section-y">
        <div className="px-page">
          <MDXContent source={article.content} />
        </div>
      </section>

      <RelatedArticles articles={related} />

      <CTASection
        headline={homeCtaSection.headline}
        subheadline={homeCtaSection.subheadline}
        primaryCTA={homeCtaSection.primaryCTA}
        secondaryCTA={homeCtaSection.secondaryCTA}
      />
    </>
  );
}
