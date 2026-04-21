import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/sections/SectionHeader";
import type { LocationInfo } from "@/types/content";

interface LocationCardProps {
  location: LocationInfo;
  eyebrow?: string;
  number?: string;
  headline: string;
}

export function LocationCard({
  location,
  eyebrow,
  number,
  headline,
}: LocationCardProps) {
  const fullAddress = `${location.address}, ${location.city}, ${location.state} ${location.zip}`;

  return (
    <section className="relative bg-essence-black section-y">
      <div className="px-page">
        <div className="lg:grid lg:grid-cols-2 lg:gap-20 xl:gap-32">
          {/* Left: info */}
          <div>
            <SectionHeader
              number={number}
              eyebrow={eyebrow}
              headline={headline}
              className="mb-12"
            />

            <Reveal delay={0.15}>
              <div className="space-y-8">
                {/* Address */}
                <div>
                  <p className="font-display text-2xl text-essence-white leading-tight">
                    {location.address}
                    <br />
                    {location.city}, {location.state} {location.zip}
                  </p>
                </div>

                {/* Phone */}
                <div>
                  <p className="text-[0.7rem] uppercase tracking-brand text-essence-muted mb-1">
                    Phone
                  </p>
                  <a
                    href={`tel:${location.phone.replace(/\D/g, "")}`}
                    className="font-body text-[1.05rem] text-essence-white transition-colors duration-300 hover:text-essence-accent"
                  >
                    {location.phone}
                  </a>
                </div>

                {/* Email */}
                {location.email && (
                  <div>
                    <p className="text-[0.7rem] uppercase tracking-brand text-essence-muted mb-1">
                      Email
                    </p>
                    <a
                      href={`mailto:${location.email}`}
                      className="font-body text-[1.05rem] text-essence-white transition-colors duration-300 hover:text-essence-accent"
                    >
                      {location.email}
                    </a>
                  </div>
                )}

                {/* Hours */}
                <div>
                  <p className="text-[0.7rem] uppercase tracking-brand text-essence-muted mb-4">
                    Hours
                  </p>
                  <div className="space-y-2">
                    {location.hours.map((row) => (
                      <div key={row.day} className="flex justify-between gap-6">
                        <span className="font-body text-[0.85rem] uppercase tracking-brand text-essence-muted">
                          {row.day}
                        </span>
                        <span className="font-body text-[0.85rem] text-essence-white">
                          {row.hours}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right: map */}
          <Reveal delay={0.2}>
            <div className="mt-12 lg:mt-0">
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-essence-black-soft">
                {location.mapEmbed ? (
                  <div
                    className="absolute inset-0"
                    dangerouslySetInnerHTML={{
                      __html: `<iframe src="${location.mapEmbed}" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="Essence Medspa location map"></iframe>`,
                    }}
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <p className="font-body text-[0.9rem] text-essence-muted">
                      Map: {fullAddress}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
