import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/sections/SectionHeader";
import type { ArticleSummary } from "@/lib/content";

interface RelatedArticlesProps {
  articles: ArticleSummary[];
  surface?: "black" | "soft";
}

export function RelatedArticles({ articles, surface = "soft" }: RelatedArticlesProps) {
  if (articles.length === 0) return null;

  const isBlack = surface === "black";
  const sectionBg = isBlack ? "bg-essence-black" : "bg-essence-black-soft";
  const cardBg = isBlack ? "bg-essence-black-soft" : "bg-essence-black";
  const cardHoverBg = isBlack ? "hover:bg-essence-black" : "hover:bg-essence-black-soft";

  return (
    <section className={`${sectionBg} section-y`}>
      <div className="px-page">
        <SectionHeader
          number=""
          eyebrow="Continue Reading"
          headline="Related Articles"
          className="mb-16"
        />

        <div className="grid gap-px bg-white/5 md:grid-cols-3">
          {articles.map((article, i) => (
            <Reveal key={article.slug} delay={i * 0.05}>
              <Link
                href={`/blog/${article.slug}`}
                className={`group relative flex h-full flex-col ${cardBg} p-10 transition-all duration-500 ${cardHoverBg} min-h-[320px]`}
              >
                <span aria-hidden className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-essence-accent transition-transform duration-500 ease-essence group-hover:scale-x-100" />
                <div className="text-[0.65rem] uppercase tracking-brand text-essence-accent">
                  {article.category}
                  {article.computedReadTime && (
                    <span className="ml-3 text-essence-muted">
                      · {article.computedReadTime}
                    </span>
                  )}
                </div>
                <h3 className="mt-6 font-display text-2xl leading-tight text-essence-white">
                  {article.title}
                </h3>
                <p className="mt-4 text-[0.9rem] leading-[1.7] text-essence-white-off line-clamp-3">
                  {article.description}
                </p>
                <div className="mt-auto pt-8 flex items-center justify-between text-[0.7rem] uppercase tracking-brand text-essence-white-off">
                  <span>Read Article</span>
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
  );
}
