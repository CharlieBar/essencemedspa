import Link from "next/link";
import { ArrowUpRight, Calculator, Calendar, Target, type LucideIcon } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { SectionHeader } from "@/components/sections/SectionHeader";

const iconMap: Record<string, LucideIcon> = {
  Target,
  Calculator,
  Calendar,
};

interface Tool {
  id: string;
  number: string;
  icon: string;
  label: string;
  tagline: string;
  description: string;
  meta: string;
  href: string;
  cta: string;
}

interface ToolsShowcaseProps {
  eyebrow: string;
  headline: string;
  subheadline?: string;
  tools: Tool[];
  cta?: { text: string; href: string; variant?: "primary" | "secondary" | "ghost" };
  surface?: "black" | "soft";
  number?: string;
}

export function ToolsShowcase({
  eyebrow,
  headline,
  subheadline,
  tools,
  cta,
  surface = "black",
  number = "05",
}: ToolsShowcaseProps) {
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
          subheadline={subheadline}
          className="mb-20"
        />

        <div className="grid gap-px bg-white/5 md:grid-cols-3">
          {tools.map((tool, i) => {
            const Icon = iconMap[tool.icon] ?? Target;
            return (
              <Reveal key={tool.id} delay={i * 0.08}>
                <Link
                  href={tool.href}
                  className={`group relative flex h-full flex-col ${cardBg} p-10 transition-all duration-500 ease-essence ${cardHoverBg} hover:-translate-y-1`}
                  aria-label={`Open ${tool.label}`}
                >
                  <span
                    aria-hidden
                    className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-essence-accent transition-transform duration-500 ease-essence group-hover:scale-x-100"
                  />

                  <div className="mb-8 flex items-start justify-between">
                    <span className="eyebrow-sm text-essence-muted pt-4">
                      Tool {tool.number}
                    </span>
                    <div className="flex h-14 w-14 items-center justify-center border border-essence-accent/40 text-essence-accent transition-all duration-500 ease-essence group-hover:border-essence-accent group-hover:bg-essence-accent group-hover:text-essence-white group-hover:rotate-3">
                      <Icon className="h-6 w-6" strokeWidth={1.25} />
                    </div>
                  </div>

                  <div className="tagline-editorial text-essence-gold text-[1rem] mb-2">
                    {tool.tagline}
                  </div>
                  <h3 className="font-display text-2xl font-medium leading-tight text-essence-white">
                    {tool.label}
                  </h3>
                  <p className="mt-4 flex-1 text-[0.95rem] leading-[1.8] text-essence-white-off">
                    {tool.description}
                  </p>

                  <div className="mt-10 flex items-end justify-between gap-4">
                    <span className="eyebrow-sm text-essence-muted">
                      {tool.meta}
                    </span>
                    <span className="inline-flex items-center gap-2 text-[0.8rem] uppercase tracking-eyebrow font-medium text-essence-accent transition-all duration-300 group-hover:gap-3">
                      {tool.cta}
                      <ArrowUpRight
                        className="h-4 w-4 transition-transform duration-500 ease-essence group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        strokeWidth={1.5}
                      />
                    </span>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>

        {cta && (
          <Reveal delay={0.2}>
            <div className="mt-16 flex justify-center">
              <Button cta={cta} />
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
