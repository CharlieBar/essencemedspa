// src/lib/sub-pillars.ts
// Lookup helpers for facial-treatments sub-pillar content
// (extensible to other hubs if/when they're elevated to pillar status)

import type { SubPillarContent } from "@/types/sub-pillar";
import { antiAgingSubPillar } from "@/content/sub-pillars/anti-aging";
import { acneClaritySubPillar } from "@/content/sub-pillars/acne-clarity";
import { glowBrighteningSubPillar } from "@/content/sub-pillars/glow-brightening";

const FACIAL_SUB_PILLARS: Record<string, SubPillarContent> = {
  "anti-aging": antiAgingSubPillar,
  "acne-clarity": acneClaritySubPillar,
  "glow-brightening": glowBrighteningSubPillar,
};

export function getAllFacialSubPillarSlugs(): string[] {
  return Object.keys(FACIAL_SUB_PILLARS);
}

export function getFacialSubPillarBySlug(
  slug: string,
): SubPillarContent | undefined {
  return FACIAL_SUB_PILLARS[slug];
}
