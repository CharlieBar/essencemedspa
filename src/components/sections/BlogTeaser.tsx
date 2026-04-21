import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/sections/SectionHeader";

interface BlogPost {
  title: string;
  slug: string;
  description: string;
  category: string;
  readTime?: string;
  publishDate?: string;
}

interface BlogTeaserProps {
  eyebrow?: string;
  headline: string;
  subheadline?: string;
  posts: BlogPost[];
  cta?: { text: string; href: string };
}

export function BlogTeaser({ eyebrow, headline, subheadline, posts, cta }: BlogTeaserProps) {
  return (
    <section className="relative bg-essence-black-soft section-y">
      <div className="px-page">
        <div className="grid items-end gap-12 lg:grid-cols-[1.2fr_1fr] mb-20">
          <SectionHeader
            number="05"
            eyebrow={eyebrow}
            headline={headline}
            subheadline={subheadline}
          />
          {cta && (
            <Reveal delay={0.2} className="lg:text-right">
              <Link
                href={cta.href}
                className="group inline-flex items-center gap-3 font-body text-[0.75rem] uppercase tracking-hero-btn text-essence-white"
              >
                <span className="relative">
                  {cta.text}
                  <span className="absolute -bottom-1 left-0 h-px w-full origin-right scale-x-0 bg-essence-accent transition-transform duration-500 ease-essence group-hover:origin-left group-hover:scale-x-100" />
                </span>
                <ArrowUpRight className="h-4 w-4 text-essence-accent" strokeWidth={1.5} />
              </Link>
            </Reveal>
          )}
        </div>

        <div className="grid gap-px bg-white/5 md:grid-cols-3">
          {posts.map((post, i) => (
            <Reveal key={post.slug} delay={i * 0.05}>
              <Link
                href={`/blog/${post.slug}`}
                className="group relative flex h-full flex-col bg-essence-black-soft p-10 transition-all duration-500 hover:bg-essence-black min-h-[320px]"
              >
                <span aria-hidden className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-essence-accent transition-transform duration-500 ease-essence group-hover:scale-x-100" />
                <div className="text-[0.65rem] uppercase tracking-brand text-essence-accent">
                  {post.category}
                  {post.readTime && (
                    <span className="ml-3 text-essence-muted">· {post.readTime}</span>
                  )}
                </div>
                <h3 className="mt-6 font-display text-2xl leading-tight text-essence-white">
                  {post.title}
                </h3>
                <p className="mt-4 text-[0.9rem] leading-[1.7] text-essence-white-off line-clamp-3">
                  {post.description}
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
