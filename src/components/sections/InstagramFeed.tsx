import { Instagram } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/sections/SectionHeader";

interface InstagramFeedProps {
  eyebrow?: string;
  headline: string;
  handle: string;
  href: string;
  cta?: { text: string; href: string };
}

const PLACEHOLDER_TILES = Array.from({ length: 6 }, (_, i) => ({
  alt: `Essence Medspa Instagram post ${i + 1}`,
  // gradients used as elegant placeholder tiles until real Instagram API integration
  gradient: [
    "from-essence-black-soft via-essence-black to-essence-accent/30",
    "from-essence-black via-essence-gold/20 to-essence-black-soft",
    "from-essence-accent/40 via-essence-accent-dark to-essence-black",
    "from-essence-black-soft via-essence-gold/15 to-essence-black",
    "from-essence-black via-essence-accent/30 to-essence-black-soft",
    "from-essence-gold/20 via-essence-black-soft to-essence-black",
  ][i],
}));

export function InstagramFeed({ eyebrow, headline, handle, href, cta }: InstagramFeedProps) {
  return (
    <section className="relative bg-essence-black section-y">
      <div className="px-page">
        <SectionHeader
          eyebrow={eyebrow}
          headline={headline}
          align="center"
          className="mb-16"
        />

        <div className="grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-6">
          {PLACEHOLDER_TILES.map((t, i) => (
            <Reveal key={i} delay={(i % 6) * 0.04}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t.alt}
                className={`group relative flex aspect-square items-center justify-center overflow-hidden bg-gradient-to-br ${t.gradient}`}
              >
                <div className="absolute inset-0 bg-essence-black/30 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <Instagram
                  className="h-8 w-8 text-essence-white opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  strokeWidth={1.25}
                />
              </a>
            </Reveal>
          ))}
        </div>

        {cta && (
          <Reveal delay={0.2} className="mt-12 text-center">
            <a
              href={cta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 font-body text-[0.8rem] uppercase tracking-btn text-essence-white"
            >
              <Instagram className="h-4 w-4 text-essence-accent" strokeWidth={1.5} />
              <span className="relative">
                {handle}
                <span className="absolute -bottom-1 left-0 h-px w-full origin-right scale-x-0 bg-essence-accent transition-transform duration-500 ease-essence hover:origin-left hover:scale-x-100" />
              </span>
            </a>
          </Reveal>
        )}
      </div>
    </section>
  );
}
