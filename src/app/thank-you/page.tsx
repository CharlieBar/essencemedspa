import type { Metadata } from "next";
import { site } from "@/content/global/site";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Thank You",
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <section className="relative isolate flex min-h-[640px] items-center bg-essence-black">
      <div className="px-page max-w-3xl mx-auto text-center w-full py-40">
        {/* Eyebrow */}
        <Reveal>
          <div className="eyebrow mb-8 inline-flex items-center gap-3 text-essence-accent">
            <span className="h-px w-8 bg-essence-accent" aria-hidden />
            <span>Confirmation</span>
          </div>
        </Reveal>

        {/* Headline */}
        <Reveal delay={0.1}>
          <h1 className="font-display text-fluid-services leading-[1.05] text-essence-white">
            Thank You. We&rsquo;ll Be In Touch.
          </h1>
        </Reveal>

        {/* Subheadline */}
        <Reveal delay={0.2}>
          <p className="mt-8 text-[1.1rem] leading-[1.9] text-essence-white-off">
            Your message has been received. A member of our team will reply
            within one business day. In the meantime, feel free to explore our
            services or give us a call directly.
          </p>
        </Reveal>

        {/* CTA buttons */}
        <Reveal delay={0.3}>
          <div className="mt-12 flex flex-wrap justify-center gap-6">
            <Button href="/services" variant="primary">
              Browse Services
            </Button>
            <Button href="/blog" variant="ghost">
              Read the Blog
            </Button>
            <Button href={`tel:${site.phoneRaw}`} variant="outline">
              Call Us
            </Button>
          </div>
        </Reveal>

        {/* Assistance note */}
        <Reveal delay={0.4}>
          <p className="mt-10 text-[0.85rem] text-essence-muted">
            Need immediate assistance? Call us at{" "}
            <a
              href={`tel:${site.phoneRaw}`}
              className="text-essence-white-off hover:text-essence-accent transition-colors duration-300"
            >
              {site.phone}
            </a>
            .
          </p>
        </Reveal>
      </div>
    </section>
  );
}
