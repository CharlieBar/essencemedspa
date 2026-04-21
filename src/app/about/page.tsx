import type { Metadata } from "next";
import { seo, hero, story, values, team, credentials, ctaSection } from "@/content/pages/about";
import { site } from "@/content/global/site";
import { HeroSection } from "@/components/sections/HeroSection";
import { StorySection } from "@/components/sections/StorySection";
import { WhyUsFeatures } from "@/components/sections/WhyUsFeatures";
import { TeamGrid } from "@/components/sections/TeamGrid";
import { CredentialsList } from "@/components/sections/CredentialsList";
import { CTASection } from "@/components/sections/CTASection";
import { JsonLd } from "@/components/ui/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  keywords: seo.keywords,
  alternates: { canonical: seo.canonical ?? `${site.url}/about` },
  openGraph: {
    title: seo.title,
    description: seo.description,
    url: seo.canonical ?? `${site.url}/about`,
    images: seo.ogImage ? [seo.ogImage] : undefined,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
    images: seo.ogImage ? [seo.ogImage] : undefined,
  },
};

export default function AboutPage() {
  const breadcrumbs = breadcrumbSchema([
    { name: "Home", url: site.url },
    { name: "About", url: `${site.url}/about` },
  ]);

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${site.url}/#organization`,
    name: site.name,
    url: site.url,
    logo: `${site.url}/images/logo.png`,
    description: site.description,
    telephone: site.phone,
    email: site.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      addressRegion: site.address.state,
      postalCode: site.address.zip,
      addressCountry: "US",
    },
    sameAs: [site.social.instagram, site.social.facebook, site.social.tiktok],
  };

  return (
    <>
      <JsonLd data={[breadcrumbs, organizationSchema]} />

      <HeroSection data={hero} variant="page" />

      <StorySection
        number="01"
        eyebrow="Our Story"
        headline={story.headline}
        sections={story.sections}
      />

      <WhyUsFeatures
        eyebrow="Our Values"
        headline={values.headline}
        features={values.items}
      />

      <div id="team">
        <TeamGrid
          number="03"
          eyebrow="The Team"
          headline={team.headline}
          subheadline={team.subheadline}
          members={team.members}
        />
      </div>

      <CredentialsList
        number="04"
        eyebrow="Credentials"
        headline={credentials.headline}
        items={credentials.items}
      />

      <CTASection
        headline={ctaSection.headline}
        subheadline={ctaSection.subheadline}
        primaryCTA={ctaSection.primaryCTA}
        secondaryCTA={ctaSection.secondaryCTA}
      />
    </>
  );
}
