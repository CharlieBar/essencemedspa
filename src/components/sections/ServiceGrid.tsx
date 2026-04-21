import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/sections/SectionHeader";

interface ServiceCategory {
  name: string;
  slug: string;
  tagline: string;
  description: string;
  icon?: string;
  highlights?: string[];
  cta: { text: string; href: string };
}

interface ServiceGridProps {
  eyebrow?: string;
  headline: string;
  subheadline?: string;
  categories: ServiceCategory[];
  cta?: { text: string; href: string };
}

export function ServiceGrid({
  eyebrow,
  headline,
  subheadline,
  categories,
  cta,
}: ServiceGridProps) {
  return (
    <section className="relative bg-essence-black-soft section-y">
      <div className="px-page">
        <div className="grid items-end gap-12 lg:grid-cols-[1.2fr_1fr] mb-20">
          <SectionHeader
            number="01"
            eyebrow={eyebrow}
            headline={headline}
            subheadline={subheadline}
            size="large"
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
                <ArrowUpRight className="h-4 w-4 text-essence-accent transition-transform duration-500 ease-essence group-hover:translate-x-1 group-hover:-translate-y-1" strokeWidth={1.5} />
              </Link>
            </Reveal>
          )}
        </div>

        <div className="grid gap-px bg-white/5 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat, i) => {
            const num = String(i + 1).padStart(2, "0");
            return (
              <Reveal key={cat.slug} delay={i * 0.05}>
                <Link
                  href={cat.cta.href}
                  className="group relative block h-full overflow-hidden bg-essence-black-soft p-12 transition-colors duration-500 ease-essence min-h-[420px]"
                >
                  {/* Hover gradient */}
                  <div
                    aria-hidden
                    className="absolute inset-0 opacity-0 transition-opacity duration-500 ease-essence group-hover:opacity-100"
                    style={{
                      background:
                        "linear-gradient(135deg, #FF3D00 0%, #CC3100 100%)",
                    }}
                  />
                  {/* Ghost number */}
                  <span
                    aria-hidden
                    className="absolute right-12 top-12 font-display text-[6rem] leading-none text-white/[0.03] group-hover:text-black/10 transition-colors duration-500"
                  >
                    {num}
                  </span>
                  <div className="relative z-10 flex h-full flex-col">
                    <div className="mb-8 flex h-16 w-16 items-center justify-center border border-white/20 transition-all duration-500 ease-essence group-hover:border-white/40 group-hover:bg-white/10 rounded-full">
                      <span className="font-display text-2xl text-essence-white">
                        {num.charAt(1)}
                      </span>
                    </div>
                    <h3 className="font-display text-[2rem] leading-tight text-essence-white">
                      {cat.name}
                    </h3>
                    <p className="mt-3 text-[0.85rem] uppercase tracking-brand text-essence-gold group-hover:text-essence-white transition-colors">
                      {cat.tagline}
                    </p>
                    <p className="mt-6 max-w-service-desc text-[0.95rem] leading-[1.8] text-essence-white-off">
                      {cat.description}
                    </p>

                    {cat.highlights && (
                      <ul className="mt-6 grid gap-1.5 text-[0.8rem] text-essence-muted group-hover:text-white/80 transition-colors">
                        {cat.highlights.slice(0, 4).map((h) => (
                          <li key={h} className="flex items-start gap-2">
                            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-essence-accent group-hover:bg-essence-white" />
                            {h}
                          </li>
                        ))}
                      </ul>
                    )}

                    <div className="mt-auto pt-10 flex items-center justify-between">
                      <span className="text-[0.7rem] uppercase tracking-brand text-essence-white">
                        {cat.cta.text}
                      </span>
                      <span className="flex h-12 w-12 items-center justify-center border border-essence-accent text-essence-accent group-hover:border-essence-white group-hover:bg-essence-white group-hover:text-essence-accent transition-all duration-500 ease-essence rounded-full">
                        <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
                      </span>
                    </div>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
