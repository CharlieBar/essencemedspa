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
                <div className="group relative flex flex-col bg-essence-black-soft p-10 hover:bg-essence-black transition-colors duration-500 ease-essence h-full min-h-[360px]">
                  <span aria-hidden className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-essence-accent transition-transform duration-500 ease-essence group-hover:scale-x-100" />
                  {/* Ghost number */}
                  <div className="flex justify-end">
                    <span
                      aria-hidden
                      className="font-display text-5xl text-essence-accent/10"
                    >
                      {num}
                    </span>
                  </div>

                  {/* Service name */}
                  <h3 className="font-display text-2xl text-essence-white leading-tight mt-2">
                    {service.name}
                  </h3>

                  {/* Tagline */}
                  <p className="tagline-label text-essence-gold mt-2">
                    {service.tagline}
                  </p>

                  {/* Description */}
                  <p className="text-[0.9rem] leading-[1.7] text-essence-white-off mt-4">
                    {service.description}
                  </p>

                  {/* Highlights */}
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

                  {/* Footer row */}
                  <div className="mt-auto pt-8 flex items-center justify-between">
                    {service.startingPrice ? (
                      <span className="font-display text-essence-accent text-lg">
                        {service.startingPrice}
                      </span>
                    ) : (
                      <span />
                    )}
                    <Link
                      href={`/services/${service.slug}`}
                      className="flex h-12 w-12 items-center justify-center border border-essence-accent rounded-full text-essence-accent hover:bg-essence-accent hover:text-essence-white transition-colors duration-500 ease-essence"
                      aria-label={`Learn more about ${service.name}`}
                    >
                      <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
                    </Link>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

