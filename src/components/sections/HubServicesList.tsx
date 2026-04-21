import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/sections/SectionHeader";
import type { ServiceCard } from "@/types/content";

interface HubServicesListProps {
  number?: string;
  eyebrow?: string;
  headline: string;
  subheadline?: string;
  services: ServiceCard[];
}

export function HubServicesList({
  number,
  eyebrow,
  headline,
  subheadline,
  services,
}: HubServicesListProps) {
  return (
    <section className="bg-essence-black section-y">
      <div className="px-page">
        <SectionHeader
          number={number}
          eyebrow={eyebrow}
          headline={headline}
          subheadline={subheadline}
          className="mb-16"
        />
        <div className="grid gap-px bg-white/5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const num = String(i + 1).padStart(2, "0");
            return (
              <Reveal key={service.slug} delay={(i % 3) * 0.05}>
                <Link
                  href={`/services/${service.slug}`}
                  className="group relative flex h-full min-h-[360px] flex-col overflow-hidden bg-essence-black-soft p-10 transition-all duration-500 ease-essence hover:-translate-y-1 hover:bg-essence-black"
                  aria-label={`Learn more about ${service.name}`}
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

                  <div className="relative flex flex-1 flex-col">
                    <h3 className="font-display text-2xl font-medium leading-[1.15] text-essence-white">
                      {service.name}
                    </h3>
                    <p className="tagline-label text-essence-gold mt-2">
                      {service.tagline}
                    </p>
                    <p className="text-[0.9rem] leading-[1.7] text-essence-white-off mt-4">
                      {service.description}
                    </p>

                    {service.highlights && service.highlights.length > 0 && (
                      <ul className="mt-4 grid gap-1.5 text-[0.8rem] text-essence-muted">
                        {service.highlights.map((h) => (
                          <li key={h} className="flex items-start gap-2">
                            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-essence-accent" />
                            {h}
                          </li>
                        ))}
                      </ul>
                    )}

                    <div className="mt-auto flex items-end justify-between gap-4 pt-8">
                      {service.startingPrice ? (
                        <span className="font-display text-lg font-medium text-essence-accent">
                          {service.startingPrice}
                        </span>
                      ) : (
                        <span />
                      )}
                      <span
                        aria-hidden
                        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-essence-accent text-essence-accent transition-all duration-500 ease-essence group-hover:bg-essence-accent group-hover:text-essence-white"
                      >
                        <ArrowUpRight
                          className="h-4 w-4 transition-transform duration-500 ease-essence group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                          strokeWidth={1.5}
                        />
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

