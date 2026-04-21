import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/sections/SectionHeader";

interface Concern {
  name: string;
  slug: string;
  tagline: string;
}

interface ConcernsCarouselProps {
  eyebrow?: string;
  headline: string;
  subheadline?: string;
  concerns: Concern[];
  cta?: { text: string; href: string };
}

export function ConcernsCarousel({
  eyebrow,
  headline,
  subheadline,
  concerns,
  cta,
}: ConcernsCarouselProps) {
  return (
    <section className="relative bg-essence-black section-y">
      <div className="px-page">
        <SectionHeader
          number="02"
          eyebrow={eyebrow}
          headline={headline}
          subheadline={subheadline}
          className="mb-20"
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {concerns.map((c, i) => (
            <Reveal key={c.slug} delay={(i % 4) * 0.08}>
              <Link
                href={`/concerns/${c.slug}`}
                className="group relative flex h-full min-h-[300px] flex-col justify-between overflow-hidden border border-white/10 bg-essence-black-soft p-8 transition-all duration-500 ease-essence hover:-translate-y-1 hover:border-essence-accent/60"
              >
                <span
                  aria-hidden
                  className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-essence-accent transition-transform duration-500 ease-essence group-hover:scale-x-100"
                />
                <span
                  aria-hidden
                  className="pointer-events-none absolute -right-6 -top-6 font-display text-[6rem] italic leading-none text-essence-gold/10 transition-all duration-500 ease-essence group-hover:text-essence-gold/25"
                >
                  0{i + 1}
                </span>

                <div className="relative">
                  <div className="eyebrow-sm text-essence-accent">
                    Concern · 0{i + 1}
                  </div>
                  <h3 className="mt-5 font-display text-2xl font-medium leading-[1.15] text-essence-white transition-colors duration-500 group-hover:text-essence-white">
                    {c.name}
                  </h3>
                  <p className="mt-3 tagline-editorial text-[0.95rem] text-essence-gold">
                    {c.tagline}
                  </p>
                </div>

                <div className="mt-8 flex items-center justify-between gap-4">
                  <span className="eyebrow-sm text-essence-white-off transition-colors duration-500 group-hover:text-essence-white">
                    See Solutions
                  </span>
                  <span
                    aria-hidden
                    className="flex h-10 w-10 shrink-0 items-center justify-center border border-essence-accent/30 text-essence-accent transition-all duration-500 ease-essence group-hover:border-essence-accent group-hover:bg-essence-accent group-hover:text-essence-white"
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

        {cta && (
          <Reveal delay={0.2} className="mt-12 text-center">
            <Link
              href={cta.href}
              className="group inline-flex items-center gap-3 font-body text-[0.8rem] uppercase tracking-btn text-essence-white"
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
    </section>
  );
}
