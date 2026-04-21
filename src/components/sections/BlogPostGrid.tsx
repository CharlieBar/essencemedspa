import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/sections/SectionHeader";
import type { ArticleSummary } from "@/lib/content";

interface BlogPostGridProps {
  number?: string;
  eyebrow?: string;
  headline: string;
  subheadline?: string;
  posts: ArticleSummary[];
  cardCTA?: string;
}

export function BlogPostGrid({
  number,
  eyebrow,
  headline,
  subheadline,
  posts,
  cardCTA = "Read Article",
}: BlogPostGridProps) {
  return (
    <section className="relative bg-essence-black-soft section-y">
      <div className="px-page">
        <SectionHeader
          number={number}
          eyebrow={eyebrow}
          headline={headline}
          subheadline={subheadline}
          className="mb-20"
        />

        <div className="grid gap-px bg-white/5 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, i) => (
            <Reveal key={post.slug} delay={(i % 3) * 0.05}>
              <Link
                href={`/blog/${post.slug}`}
                className="group relative flex h-full flex-col bg-essence-black-soft p-10 transition-all duration-500 hover:bg-essence-black min-h-[320px]"
              >
                <span aria-hidden className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-essence-accent transition-transform duration-500 ease-essence group-hover:scale-x-100" />
                <div className="text-[0.65rem] uppercase tracking-brand text-essence-accent">
                  {post.category}
                  <span className="ml-3 text-essence-muted">
                    · {post.computedReadTime}
                  </span>
                </div>
                <h3 className="mt-6 font-display text-2xl leading-tight text-essence-white">
                  {post.title}
                </h3>
                <p className="mt-4 text-[0.9rem] leading-[1.7] text-essence-white-off line-clamp-3">
                  {post.description}
                </p>
                <div className="mt-auto pt-8 flex items-center justify-between text-[0.7rem] uppercase tracking-brand text-essence-white-off">
                  <span>{cardCTA}</span>
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
