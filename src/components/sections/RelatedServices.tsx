import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/sections/SectionHeader";

interface RelatedItem {
  name: string;
  slug: string;
  tagline: string;
}

interface RelatedServicesProps {
  eyebrow?: string;
  headline: string;
  items: RelatedItem[];
  number?: string;
  surface?: "black" | "soft";
}

export function RelatedServices({ eyebrow, headline, items, number, surface = "black" }: RelatedServicesProps) {
  const isBlack = surface === "black";
  const sectionBg = isBlack ? "bg-essence-black" : "bg-essence-black-soft";
  const cardBg = isBlack ? "bg-essence-black-soft" : "bg-essence-black";
  const cardHoverBg = isBlack ? "hover:bg-essence-black" : "hover:bg-essence-black-soft";
  return (
    <section className={`relative ${sectionBg} section-y`}>
      <div className="px-page">
        <SectionHeader
          number={number}
          eyebrow={eyebrow}
          headline={headline}
          className="mb-16"
        />

        <div className="grid gap-px bg-white/5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => (
            <Reveal key={item.slug} delay={(i % 4) * 0.06}>
              <Link
                href={`/services/${item.slug}`}
                className={`group relative flex h-full flex-col justify-between ${cardBg} p-8 transition-colors duration-500 ${cardHoverBg}`}
              >
                <span aria-hidden className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-essence-accent transition-transform duration-500 ease-essence group-hover:scale-x-100" />
                <div>
                  <div className="text-[0.65rem] uppercase tracking-brand text-essence-accent">
                    Service
                  </div>
                  <h3 className="mt-4 font-display text-xl leading-tight text-essence-white">
                    {item.name}
                  </h3>
                  <p className="mt-3 tagline-editorial text-essence-gold/80">
                    {item.tagline}
                  </p>
                </div>
                <div className="mt-10 flex items-center justify-between text-[0.7rem] uppercase tracking-brand text-essence-white-off">
                  <span>Learn More</span>
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
