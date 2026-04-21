import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/sections/SectionHeader";
import type { ConcernLink } from "@/types/content";

interface SolutionsListProps {
  number?: string;
  eyebrow?: string;
  headline: string;
  subheadline?: string;
  items: ConcernLink[];
  surface?: "black" | "soft";
}

export function SolutionsList({
  number,
  eyebrow,
  headline,
  subheadline,
  items,
  surface = "black",
}: SolutionsListProps) {
  const isBlack = surface === "black";
  const sectionBg = isBlack ? "bg-essence-black" : "bg-essence-black-soft";
  const cardBg = isBlack ? "bg-essence-black-soft" : "bg-essence-black";
  const cardHoverBg = isBlack ? "hover:bg-essence-black" : "hover:bg-essence-black-soft";
  return (
    <section className={`${sectionBg} section-y`}>
      <div className="px-page">
        <SectionHeader
          number={number}
          eyebrow={eyebrow}
          headline={headline}
          subheadline={subheadline}
          className="mb-16"
        />
        <div className="grid gap-px bg-white/5 md:grid-cols-2">
          {items.map((item, i) => (
            <Reveal key={item.slug} delay={(i % 2) * 0.05}>
              <div className={`group relative flex flex-col ${cardBg} p-10 ${cardHoverBg} transition-colors duration-500 ease-essence h-full`}>
                <span aria-hidden className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-essence-accent transition-transform duration-500 ease-essence group-hover:scale-x-100" />
                {/* Top row: name + price */}
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-display text-2xl text-essence-white leading-tight">
                    {item.service}
                  </h3>
                  <span className="font-display text-essence-accent text-xl shrink-0">
                    {item.price}
                  </span>
                </div>

                {/* Description */}
                <p className="text-[0.95rem] leading-[1.8] text-essence-white-off mt-4">
                  {item.description}
                </p>

                {/* Footer link */}
                <div className="mt-auto pt-8">
                  <Link
                    href={`/services/${item.slug}`}
                    className="group/link inline-flex items-center gap-3 font-body text-[0.75rem] uppercase tracking-hero-btn text-essence-white"
                  >
                    <span className="relative">
                      Learn More
                      <span className="absolute -bottom-1 left-0 h-px w-full origin-right scale-x-0 bg-essence-accent transition-transform duration-500 ease-essence group-hover/link:origin-left group-hover/link:scale-x-100" />
                    </span>
                    <ArrowUpRight
                      className="h-4 w-4 text-essence-accent transition-transform duration-500 ease-essence group-hover/link:translate-x-1 group-hover/link:-translate-y-1"
                      strokeWidth={1.5}
                    />
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
