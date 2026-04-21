import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: { index: false, follow: false },
};

// The four primary destination tiles shown on the 404 page
const linkTiles = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function NotFound() {
  return (
    <section className="relative isolate flex min-h-screen items-center justify-center bg-essence-black">
      <div className="px-page mx-auto max-w-3xl w-full text-center">
        {/* Ghost 404 */}
        <Reveal>
          <div
            aria-hidden
            className="font-display leading-none text-essence-accent/15 select-none"
            style={{ fontSize: "clamp(8rem,20vw,16rem)" }}
          >
            404
          </div>
        </Reveal>

        {/* Eyebrow */}
        <Reveal delay={0.1}>
          <div className="eyebrow mt-4 inline-flex items-center gap-3 text-essence-accent">
            <span className="h-px w-8 bg-essence-accent" aria-hidden />
            <span>Page Not Found</span>
          </div>
        </Reveal>

        {/* Headline */}
        <Reveal delay={0.2}>
          <h1 className="font-display text-fluid-services leading-[1.05] text-essence-white mt-6">
            We&rsquo;ve lost the trail.
          </h1>
        </Reveal>

        {/* Body */}
        <Reveal delay={0.3}>
          <p className="text-[1.05rem] text-essence-white-off mt-6">
            The page you&rsquo;re looking for doesn&rsquo;t exist or has moved.
            Try one of these instead:
          </p>
        </Reveal>

        {/* Link tiles */}
        <Reveal delay={0.4}>
          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {linkTiles.map((tile) => (
              <Link
                key={tile.href}
                href={tile.href}
                className="group flex items-center justify-center border border-white/10 bg-white/5 px-6 py-5 text-[0.75rem] uppercase tracking-hero-btn font-medium text-essence-white-off transition-colors duration-500 ease-essence hover:border-essence-accent hover:text-essence-white"
              >
                {tile.label}
              </Link>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
