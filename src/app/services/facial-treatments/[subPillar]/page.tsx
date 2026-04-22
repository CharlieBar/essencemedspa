import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getAllFacialSubPillarSlugs,
  getFacialSubPillarBySlug,
} from "@/lib/sub-pillars";
import { site } from "@/content/global/site";
import { SubPillarTemplate } from "@/components/sections/SubPillarTemplate";
import { JsonLd } from "@/components/ui/JsonLd";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";

interface PageProps {
  params: Promise<{ subPillar: string }>;
}

export async function generateStaticParams() {
  return getAllFacialSubPillarSlugs().map((subPillar) => ({ subPillar }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { subPillar } = await params;
  const content = getFacialSubPillarBySlug(subPillar);
  if (!content) return {};
  const { seo } = content;
  const canonical =
    seo.canonical ?? `${site.url}/services/facial-treatments/${subPillar}`;
  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    alternates: { canonical },
    openGraph: {
      title: seo.title,
      description: seo.description,
      url: canonical,
      images: seo.ogImage ? [seo.ogImage] : undefined,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description,
      images: seo.ogImage ? [seo.ogImage] : undefined,
    },
  };
}

export default async function SubPillarPage({ params }: PageProps) {
  const { subPillar } = await params;
  const content = getFacialSubPillarBySlug(subPillar);
  if (!content) notFound();

  const canonical =
    content.seo.canonical ??
    `${site.url}/services/facial-treatments/${subPillar}`;

  const breadcrumbs = breadcrumbSchema([
    { name: "Home", url: site.url },
    { name: "Services", url: `${site.url}/services` },
    { name: "Facial Treatments", url: `${site.url}/services/facial-treatments` },
    { name: content.hero.headline, url: canonical },
  ]);

  const medicalWebPage = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: content.seo.title,
    description: content.seo.description,
    url: canonical,
    specialty: "Dermatology",
    about: { "@type": "MedicalProcedure", name: content.hero.headline },
  };

  const jsonLdPayload: unknown[] = [breadcrumbs, medicalWebPage];
  if (content.faqs.length > 0) {
    jsonLdPayload.push(faqSchema(content.faqs));
  }

  return (
    <>
      <JsonLd data={jsonLdPayload} />
      <SubPillarTemplate content={content} />
    </>
  );
}
