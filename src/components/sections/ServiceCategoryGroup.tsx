import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/sections/SectionHeader";
import type { ServiceCard } from "@/types/content";

interface ServiceCategoryGroupProps {
  number?: string;
  eyebrow?: string;
  hubName: string;
  hubSlug: string;
  hubTagline?: string;
  hubDescription?: string;
  services: ServiceCard[];
  viewAllLabel?: string;
  serviceCardCTA?: string;
}

export function ServiceCategoryGroup({
  number,
  eyebrow,
  hubName,
  hubSlug,
  hubDescription,
  services,
  viewAllLabel = "View All",
  serviceCardCTA = "Learn More",
}: ServiceCategoryGroupProps) {
  return (
    <section className="relative bg-essence-black section-y">
      <div className="px-page">
        <div className="grid items-end gap-12 lg:grid-cols-[1.2fr_1fr] mb-20">
          <SectionHeader
            number={number}
            eyebrow={eyebrow}
            headline={hubName}
            subheadline={hubDescription}
            size="large"
          />
          <Reveal delay={0.2} className="lg:text-right">
            <Link
              href={`/services/${hubSlug}`}
              className="group inline-flex items-center gap-3 font-body text-[0.75rem] uppercase tracking-hero-btn text-essence-white"
            >
              <span className="relative">
                {viewAllLabel} {hubName}
                <span className="absolute -bottom-1 left-0 h-px w-full origin-right scale-x-0 bg-essence-accent transition-transform duration-500 ease-essence group-hover:origin-left group-hover:scale-x-100" />
              </span>
              <ArrowUpRight
                className="h-4 w-4 text-essence-accent transition-transform duration-500 ease-essence group-hover:translate-x-1 group-hover:-translate-y-1"
                strokeWidth={1.5}
              />
            </Link>
          </Reveal>
        </div>

        <div className="grid gap-px bg-white/5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const num = String(i + 1).padStart(2, "0");
            return (
              <Reveal key={service.slug} delay={(i % 3) * 0.05}>
                <Link
                  href={`/services/${service.slug}`}
                  className="group relative flex h-full min-h-[320px] flex-col overflow-hidden bg-essence-black-soft p-8 transition-all duration-500 ease-essence hover:-translate-y-1 hover:bg-essence-black"
                  aria-label={`${serviceCardCTA} about ${service.name}`}
                >
                  <span
                    aria-hidden
                    className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-essence-accent transition-transform duration-500 ease-essence group-hover:scale-x-100"
                  />
                  <span
                    aria-hidden
                    className="pointer-events-none absolute -right-5 -top-4 font-display text-[5.5rem] italic leading-none text-essence-gold/10 transition-all duration-500 ease-essence group-hover:text-essence-gold/25"
                  >
                    {num}
                  </span>

                  <div className="relative">
                    <h3 className="font-display text-2xl font-medium leading-[1.15] text-essence-white">
                      {service.name}
                    </h3>
                    <p className="mt-2 tagline-label text-essence-gold">
                      {service.tagline}
                    </p>
                    <p className="mt-4 text-[0.9rem] leading-[1.7] text-essence-white-off line-clamp-3">
                      {service.description}
                    </p>
                  </div>

                  <div className="mt-auto flex items-end justify-between gap-4 pt-8">
                    {service.startingPrice ? (
                      <span className="font-display text-lg font-medium text-essence-accent">
                        {service.startingPrice}
                      </span>
                    ) : (
                      <span className="eyebrow-sm text-essence-white-off transition-colors duration-500 group-hover:text-essence-white">
                        {serviceCardCTA}
                      </span>
                    )}
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
            );
          })}
        </div>
      </div>
    </section>
  );
}
