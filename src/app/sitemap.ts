import type { MetadataRoute } from "next";
import { site } from "@/content/global/site";
import {
  getAllServiceSlugs,
  getAllHubSlugs,
  getAllConcernSlugs,
  getAllArticles,
} from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: site.url, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${site.url}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${site.url}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${site.url}/services`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${site.url}/concerns`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${site.url}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    // Interactive tools
    { url: `${site.url}/tools`, lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    { url: `${site.url}/tools/treatment-finder`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${site.url}/tools/botox-calculator`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${site.url}/tools/pre-event-planner`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
  ];

  const services = getAllServiceSlugs().map((s) => ({
    url: `${site.url}/services/${s}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const hubs = getAllHubSlugs().map((s) => ({
    url: `${site.url}/services/${s}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  const concerns = getAllConcernSlugs().map((s) => ({
    url: `${site.url}/concerns/${s}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const articles = getAllArticles().map((a) => ({
    url: `${site.url}/blog/${a.slug}`,
    lastModified: a.updatedDate ? new Date(a.updatedDate) : new Date(a.publishDate),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...hubs, ...services, ...concerns, ...articles];
}
