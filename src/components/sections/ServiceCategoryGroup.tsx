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
          {services.map((service, i) => (
            <Reveal key={service.slug} delay={(i % 3) * 0.05}>
              <div className="group relative flex h-full flex-col bg-essence-black-soft p-8 transition-colors duration-500 ease-essence hover:bg-essence-black min-h-[300px]">
                <span aria-hidden className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-essence-accent transition-transform duration-500 ease-essence group-hover:scale-x-100" />
                <h3 className="font-display text-xl leading-tight text-essence-white">
                  {service.name}
                </h3>
                <p className="mt-2 tagline-label text-essence-gold">
                  {service.tagline}
                </p>
                <p className="mt-4 text-[0.9rem] leading-[1.7] text-essence-white-off line-clamp-3">
                  {service.description}
                </p>
                {service.startingPrice && (
                  <p className="mt-4 font-display text-essence-accent">
                    {service.startingPrice}
                  </p>
                )}
                <div className="mt-auto pt-8">
                  <Link
                    href={`/services/${service.slug}`}
                    className="group/link inline-flex items-center gap-2 text-[0.7rem] uppercase tracking-brand text-essence-white-off transition-colors duration-300 hover:text-essence-white"
                    aria-label={`${serviceCardCTA} about ${service.name}`}
                  >
                    <span>{serviceCardCTA}</span>
                    <ArrowUpRight
                      className="h-3.5 w-3.5 text-essence-accent transition-transform duration-500 ease-essence group-hover/link:translate-x-1 group-hover/link:-translate-y-1"
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
