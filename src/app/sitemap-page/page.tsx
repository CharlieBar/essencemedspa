import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/content/global/site";
import { categories } from "@/content/pages/blog";
import {
  getAllServiceSlugs,
  getAllHubSlugs,
  getAllConcernSlugs,
  getAllArticleSlugs,
} from "@/lib/content";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Sitemap | Essence Medspa",
  description: "Browse all pages on the Essence Medspa website.",
  robots: { index: false, follow: false },
};

const MAIN_PAGES = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Concerns", href: "/concerns" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
  { label: "Book Appointment", href: site.booking.url },
];

const UTILITY_PAGES = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Thank You", href: "/thank-you" },
];

function SitemapSection({
  title,
  items,
  delay = 0,
}: {
  title: string;
  items: { label: string; href: string }[];
  delay?: number;
}) {
  return (
    <Reveal delay={delay}>
      <div className="mb-12">
        <h2 className="font-display text-xl text-essence-white mb-4 pb-3 border-b border-white/10">
          {title}
          <span className="ml-3 text-sm font-body text-essence-muted">
            ({items.length})
          </span>
        </h2>
        <ul className="grid gap-y-2 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="text-[0.875rem] text-essence-white-off hover:text-essence-accent transition-colors duration-300"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Reveal>
  );
}

export default function SitemapPage() {
  const serviceSlugs = getAllServiceSlugs();
  const hubSlugs = getAllHubSlugs();
  const concernSlugs = getAllConcernSlugs();
  const articleSlugs = getAllArticleSlugs();

  const serviceItems = serviceSlugs.map((slug) => ({
    label: slug
      .split("-")
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(" "),
    href: `/services/${slug}`,
  }));

  const hubItems = hubSlugs.map((slug) => ({
    label: slug
      .split("-")
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(" "),
    href: `/services/${slug}`,
  }));

  const concernItems = concernSlugs.map((slug) => ({
    label: slug
      .split("-")
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(" "),
    href: `/concerns/${slug}`,
  }));

  const articleItems = articleSlugs.map((slug) => ({
    label: slug
      .split("-")
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(" "),
    href: `/blog/${slug}`,
  }));

  const blogCategoryItems = categories.map((cat) => ({
    label: cat.name,
    href: `/blog/${cat.slug}`,
  }));

  return (
    <>
      {/* Page Header */}
      <section className="bg-essence-black pt-40 pb-16">
        <div className="px-page max-w-5xl">
          <Reveal>
            <div className="eyebrow mb-6 inline-flex items-center gap-3 text-essence-accent">
              <span className="h-px w-8 bg-essence-accent" aria-hidden />
              <span>Navigation</span>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="font-display text-fluid-about leading-[1.05] text-essence-white">
              Sitemap
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-4 text-[0.9rem] leading-[1.7] text-essence-white-off max-w-xl">
              A complete directory of all pages on the Essence Medspa website.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Sitemap Content */}
      <section className="bg-essence-black pb-32">
        <div className="px-page max-w-5xl">
          <SitemapSection title="Main Pages" items={MAIN_PAGES} delay={0} />
          <SitemapSection
            title="Service Categories"
            items={hubItems}
            delay={0.05}
          />
          <SitemapSection
            title="Individual Services"
            items={serviceItems}
            delay={0.1}
          />
          <SitemapSection
            title="Skin Concerns"
            items={concernItems}
            delay={0.15}
          />
          <SitemapSection
            title="Blog Categories"
            items={blogCategoryItems}
            delay={0.2}
          />
          <SitemapSection
            title="Blog Posts"
            items={articleItems}
            delay={0.25}
          />
          <SitemapSection
            title="Interactive Tools"
            items={[
              { label: "Free Tools — Overview", href: "/tools" },
              { label: "Treatment Finder Quiz", href: "/tools/treatment-finder" },
              { label: "Botox Unit Calculator", href: "/tools/botox-calculator" },
              { label: "Pre-Event Timeline Planner", href: "/tools/pre-event-planner" },
            ]}
            delay={0.3}
          />
          <SitemapSection
            title="Utility Pages"
            items={UTILITY_PAGES}
            delay={0.35}
          />
        </div>
      </section>
    </>
  );
}
