import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/sections/SectionHeader";

interface StorySectionProps {
  eyebrow?: string;
  number?: string;
  headline: string;
  sections: { heading: string; body: string }[];
  image?: { src: string; alt: string };
}

export function StorySection({
  eyebrow,
  number,
  headline,
  sections,
  image,
}: StorySectionProps) {
  return (
    <section className="relative bg-essence-black section-y">
      <div className="px-page">
        <div className="lg:grid lg:grid-cols-[1fr_380px] lg:gap-20 xl:gap-32">
          {/* Text column */}
          <div>
            <SectionHeader
              number={number}
              eyebrow={eyebrow}
              headline={headline}
              className="mb-16"
            />
            <div className="space-y-12">
              {sections.map((section, i) => (
                <Reveal key={section.heading} delay={i * 0.1}>
                  <div>
                    <h3 className="font-display text-2xl leading-tight text-essence-white mb-4">
                      {section.heading}
                    </h3>
                    <div className="space-y-4">
                      {section.body.split("\n\n").map((paragraph, j) => (
                        <p
                          key={j}
                          className="font-body text-[1.05rem] leading-[1.9] text-essence-white-off"
                        >
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Sticky image column */}
          {image && (
            <div className="hidden lg:block">
              <div className="sticky top-24">
                <Reveal delay={0.2}>
                  <div className="relative aspect-[4/5] w-full overflow-hidden">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="380px"
                      className="object-cover"
                    />
                  </div>
                </Reveal>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
