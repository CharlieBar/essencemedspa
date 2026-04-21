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
                className="group relative flex h-full flex-col justify-between border border-white/10 bg-essence-black-soft/60 p-8 transition-all duration-500 ease-essence hover:border-essence-accent hover:bg-essence-black-soft hover:-translate-y-0.5 min-h-[260px]"
              >
                <div>
                  <div className="text-[0.65rem] uppercase tracking-brand text-essence-accent">
                    Concern · 0{i + 1}
                  </div>
                  <h3 className="mt-4 font-display text-xl leading-tight text-essence-white">
                    {c.name}
                  </h3>
                  <p className="mt-3 tagline-editorial text-essence-gold">
                    {c.tagline}
                  </p>
                </div>
                <div className="mt-8 flex items-center justify-between text-[0.7rem] uppercase tracking-brand text-essence-white-off">
                  <span>See Solutions</span>
                  <ArrowUpRight
                    className="h-4 w-4 text-essence-accent transition-transform duration-500 ease-essence group-hover:translate-x-1 group-hover:-translate-y-1"
                    strokeWidth={1.5}
                  />
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
