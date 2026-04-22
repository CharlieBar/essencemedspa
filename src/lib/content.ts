import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import readingTime from "reading-time";
import type {
  ConcernPageContent,
  FAQItem,
  HeroSection,
  HubSubPillarCard,
  SEOMeta,
  ServiceCard,
  ServicePageContent,
} from "@/types/content";

// ─── Service registry ────────────────────────────────────────────
// Explicit service registry. All 71 service content files are imported and
// statically registered so Next can prerender every /services/[slug] route.
import { content as fourDFaceLiftingMassage } from "@/content/services/4d-face-lifting-massage";
import { content as acneFacial } from "@/content/services/acne-facial";
import { content as athletesMassage } from "@/content/services/athletes-massage";
import { content as backFacial } from "@/content/services/back-facial";
import { content as backMicrodermabrasion } from "@/content/services/back-microdermabrasion";
import { content as backStimulatorPeel } from "@/content/services/back-stimulator-peel";
import { content as bambooMassage } from "@/content/services/bamboo-massage";
import { content as bambooSuiteUpgrade } from "@/content/services/bamboo-suite-upgrade";
import { content as bodyScrub } from "@/content/services/body-scrub";
import { content as botox } from "@/content/services/botox";
import { content as brighteningFacial } from "@/content/services/brightening-facial";
import { content as collagenEyeContour } from "@/content/services/collagen-eye-contour";
import { content as collagenInductionTherapy } from "@/content/services/collagen-induction-therapy";
import { content as couplesDeepTissueMassage } from "@/content/services/couples-deep-tissue-massage";
import { content as couplesSwedishMassage } from "@/content/services/couples-swedish-massage";
import { content as couplesWinePlatterSuite } from "@/content/services/couples-wine-platter-suite";
import { content as couplesWinePlatter } from "@/content/services/couples-wine-platter";
import { content as cuppingMassage } from "@/content/services/cupping-massage";
import { content as customFacial } from "@/content/services/custom-facial";
import { content as customPeel } from "@/content/services/custom-peel";
import { content as deepPoreCleansingFacial } from "@/content/services/deep-pore-cleansing-facial";
import { content as deepTissueMassage } from "@/content/services/deep-tissue-massage";
import { content as essenceSignatureFaceliftFacial } from "@/content/services/essence-signature-facelift-facial";
import { content as essenceSignatureFaceliftPeel } from "@/content/services/essence-signature-facelift-peel";
import { content as faceLiftingGuaSha } from "@/content/services/face-lifting-gua-sha";
import { content as faceLymphaticDrainage } from "@/content/services/face-lymphatic-drainage";
import { content as firmingFacial } from "@/content/services/firming-facial";
import { content as footReflexology } from "@/content/services/foot-reflexology";
import { content as glutathioneBrightening } from "@/content/services/glutathione-brightening";
import { content as hairRestoration } from "@/content/services/hair-restoration";
import { content as hotStoneMassage } from "@/content/services/hot-stone-massage";
import { content as hyaluronidaseDissolve } from "@/content/services/hyaluronidase-dissolve";
import { content as hydratingFacial } from "@/content/services/hydrating-facial";
import { content as hydrofacial } from "@/content/services/hydrofacial";
import { content as ivTherapyCosmetic } from "@/content/services/iv-therapy-cosmetic";
import { content as ivTherapyHydration } from "@/content/services/iv-therapy-hydration";
import { content as ivTherapyRecovery } from "@/content/services/iv-therapy-recovery";
import { content as jetPlasmaArm } from "@/content/services/jet-plasma-arm";
import { content as jetPlasmaBreast } from "@/content/services/jet-plasma-breast";
import { content as jetPlasmaDecollete } from "@/content/services/jet-plasma-decollete";
import { content as jetPlasmaFaceNeck } from "@/content/services/jet-plasma-face-neck";
import { content as jetPlasmaFacial } from "@/content/services/jet-plasma-facial";
import { content as jetPlasmaHand } from "@/content/services/jet-plasma-hand";
import { content as jetPlasmaLegsKnee } from "@/content/services/jet-plasma-legs-knee";
import { content as jetPlasmaNeck } from "@/content/services/jet-plasma-neck";
import { content as jetPlasmaScalp } from "@/content/services/jet-plasma-scalp";
import { content as jetPlasmaStomach } from "@/content/services/jet-plasma-stomach";
import { content as juvedermFillers } from "@/content/services/juvederm-fillers";
import { content as lipoSculpt } from "@/content/services/lipo-sculpt";
import { content as mesoBrightening } from "@/content/services/meso-brightening";
import { content as mesoContour } from "@/content/services/meso-contour";
import { content as mesoFirm } from "@/content/services/meso-firm";
import { content as mesoGlow } from "@/content/services/meso-glow";
import { content as mesoLift } from "@/content/services/meso-lift";
import { content as microdermabrasionChest } from "@/content/services/microdermabrasion-chest";
import { content as microdermabrasionFacial } from "@/content/services/microdermabrasion-facial";
import { content as microdermabrasionNeck } from "@/content/services/microdermabrasion-neck";
import { content as oxygenFacial } from "@/content/services/oxygen-facial";
import { content as prenatalMassage } from "@/content/services/prenatal-massage";
import { content as prfFacial } from "@/content/services/prf-facial";
import { content as prfUnderEyes } from "@/content/services/prf-under-eyes";
import { content as prpFacial } from "@/content/services/prp-facial";
import { content as redCarpetAntiAgingFacial } from "@/content/services/red-carpet-anti-aging-facial";
import { content as redCarpetCollagenFacial } from "@/content/services/red-carpet-collagen-facial";
import { content as rfMicroneedlingFacial } from "@/content/services/rf-microneedling-facial";
import { content as swedishMassage } from "@/content/services/swedish-massage";
import { content as teenFacial } from "@/content/services/teen-facial";
import { content as thaiHerbalMassage } from "@/content/services/thai-herbal-massage";
import { content as vampireFacial } from "@/content/services/vampire-facial";
import { content as winePlatterSuiteUpgrade } from "@/content/services/wine-platter-suite-upgrade";
import { content as winePlatterUpgrade } from "@/content/services/wine-platter-upgrade";

const SERVICE_REGISTRY: Record<string, ServicePageContent> = {
  "4d-face-lifting-massage": fourDFaceLiftingMassage,
  "acne-facial": acneFacial,
  "athletes-massage": athletesMassage,
  "back-facial": backFacial,
  "back-microdermabrasion": backMicrodermabrasion,
  "back-stimulator-peel": backStimulatorPeel,
  "bamboo-massage": bambooMassage,
  "bamboo-suite-upgrade": bambooSuiteUpgrade,
  "body-scrub": bodyScrub,
  botox,
  "brightening-facial": brighteningFacial,
  "collagen-eye-contour": collagenEyeContour,
  "collagen-induction-therapy": collagenInductionTherapy,
  "couples-deep-tissue-massage": couplesDeepTissueMassage,
  "couples-swedish-massage": couplesSwedishMassage,
  "couples-wine-platter-suite": couplesWinePlatterSuite,
  "couples-wine-platter": couplesWinePlatter,
  "cupping-massage": cuppingMassage,
  "custom-facial": customFacial,
  "custom-peel": customPeel,
  "deep-pore-cleansing-facial": deepPoreCleansingFacial,
  "deep-tissue-massage": deepTissueMassage,
  "essence-signature-facelift-facial": essenceSignatureFaceliftFacial,
  "essence-signature-facelift-peel": essenceSignatureFaceliftPeel,
  "face-lifting-gua-sha": faceLiftingGuaSha,
  "face-lymphatic-drainage": faceLymphaticDrainage,
  "firming-facial": firmingFacial,
  "foot-reflexology": footReflexology,
  "glutathione-brightening": glutathioneBrightening,
  "hair-restoration": hairRestoration,
  "hot-stone-massage": hotStoneMassage,
  "hyaluronidase-dissolve": hyaluronidaseDissolve,
  "hydrating-facial": hydratingFacial,
  hydrofacial,
  "iv-therapy-cosmetic": ivTherapyCosmetic,
  "iv-therapy-hydration": ivTherapyHydration,
  "iv-therapy-recovery": ivTherapyRecovery,
  "jet-plasma-arm": jetPlasmaArm,
  "jet-plasma-breast": jetPlasmaBreast,
  "jet-plasma-decollete": jetPlasmaDecollete,
  "jet-plasma-face-neck": jetPlasmaFaceNeck,
  "jet-plasma-facial": jetPlasmaFacial,
  "jet-plasma-hand": jetPlasmaHand,
  "jet-plasma-legs-knee": jetPlasmaLegsKnee,
  "jet-plasma-neck": jetPlasmaNeck,
  "jet-plasma-scalp": jetPlasmaScalp,
  "jet-plasma-stomach": jetPlasmaStomach,
  "juvederm-fillers": juvedermFillers,
  "lipo-sculpt": lipoSculpt,
  "meso-brightening": mesoBrightening,
  "meso-contour": mesoContour,
  "meso-firm": mesoFirm,
  "meso-glow": mesoGlow,
  "meso-lift": mesoLift,
  "microdermabrasion-chest": microdermabrasionChest,
  "microdermabrasion-facial": microdermabrasionFacial,
  "microdermabrasion-neck": microdermabrasionNeck,
  "oxygen-facial": oxygenFacial,
  "prenatal-massage": prenatalMassage,
  "prf-facial": prfFacial,
  "prf-under-eyes": prfUnderEyes,
  "prp-facial": prpFacial,
  "red-carpet-anti-aging-facial": redCarpetAntiAgingFacial,
  "red-carpet-collagen-facial": redCarpetCollagenFacial,
  "rf-microneedling-facial": rfMicroneedlingFacial,
  "swedish-massage": swedishMassage,
  "teen-facial": teenFacial,
  "thai-herbal-massage": thaiHerbalMassage,
  "vampire-facial": vampireFacial,
  "wine-platter-suite-upgrade": winePlatterSuiteUpgrade,
  "wine-platter-upgrade": winePlatterUpgrade,
};

// ─── Hub registry ────────────────────────────────────────────────
import * as advancedAestheticsHub from "@/content/hubs/advanced-aesthetics";
import * as bodyTreatmentsHub from "@/content/hubs/body-treatments";
import * as facialTreatmentsHub from "@/content/hubs/facial-treatments";
import * as massageHub from "@/content/hubs/massage";
import * as upgradesHub from "@/content/hubs/upgrades";

export interface HubData {
  seo: SEOMeta;
  hero: HeroSection;
  intro: { headline: string; body: string };
  services: ServiceCard[];
  occasions?: {
    headline: string;
    items: { occasion: string; description: string }[];
  };
  // Pillar-grade optional fields — present on hubs elevated to pillar status.
  deepIntro?: {
    eyebrow?: string;
    headline: string;
    body: string;
  };
  subPillarCards?: HubSubPillarCard[];
  localSignals?: {
    eyebrow?: string;
    headline: string;
    body: string;
  };
  teamSection?: {
    eyebrow?: string;
    headline: string;
    body: string;
    ctaHref: string;
  };
  pillarFaqs?: FAQItem[];
  ctaSection: {
    headline: string;
    subheadline: string;
    primaryCTA: { text: string; href: string; variant?: string };
    secondaryCTA?: { text: string; href: string; variant?: string };
  };
}

const HUB_REGISTRY: Record<string, HubData> = {
  "advanced-aesthetics": advancedAestheticsHub as unknown as HubData,
  "body-treatments": bodyTreatmentsHub as unknown as HubData,
  "facial-treatments": facialTreatmentsHub as unknown as HubData,
  massage: massageHub as unknown as HubData,
  upgrades: { ...(upgradesHub as unknown as HubData) },
};

// ─── Concern registry ────────────────────────────────────────────
import { content as concernAcneTexture } from "@/content/concerns/acne-texture";
import { content as concernDarkSpots } from "@/content/concerns/dark-spots";
import { content as concernDullTiredSkin } from "@/content/concerns/dull-tired-skin";
import { content as concernHairThinning } from "@/content/concerns/hair-thinning";
import { content as concernHollowUnderEyes } from "@/content/concerns/hollow-under-eyes";
import { content as concernMuscleTension } from "@/content/concerns/muscle-tension";
import { content as concernStubbornFat } from "@/content/concerns/stubborn-fat";
import { content as concernWrinklesFineLines } from "@/content/concerns/wrinkles-fine-lines";

const CONCERN_REGISTRY: Record<string, ConcernPageContent> = {
  "acne-texture": concernAcneTexture,
  "dark-spots": concernDarkSpots,
  "dull-tired-skin": concernDullTiredSkin,
  "hair-thinning": concernHairThinning,
  "hollow-under-eyes": concernHollowUnderEyes,
  "muscle-tension": concernMuscleTension,
  "stubborn-fat": concernStubbornFat,
  "wrinkles-fine-lines": concernWrinklesFineLines,
};

// ─── Filesystem-backed accessors (services / articles) ───────────
const SERVICES_DIR = path.join(process.cwd(), "src", "content", "services");
const ARTICLES_DIR = path.join(process.cwd(), "src", "content", "articles");

export function getAllServiceSlugs(): string[] {
  if (!fs.existsSync(SERVICES_DIR)) return Object.keys(SERVICE_REGISTRY);
  return fs
    .readdirSync(SERVICES_DIR)
    .filter((f) => f.endsWith(".ts"))
    .map((f) => f.replace(/\.ts$/, ""));
}

export function getRegisteredServiceSlugs(): string[] {
  return Object.keys(SERVICE_REGISTRY);
}

export async function getServiceBySlug(
  slug: string,
): Promise<ServicePageContent | null> {
  return SERVICE_REGISTRY[slug] ?? null;
}

// ─── Hub accessors ───────────────────────────────────────────────
export function getAllHubSlugs(): string[] {
  return Object.keys(HUB_REGISTRY);
}

export function getHubBySlug(slug: string): HubData | null {
  return HUB_REGISTRY[slug] ?? null;
}

export function isHubSlug(slug: string): boolean {
  return slug in HUB_REGISTRY;
}

// ─── Concern accessors ───────────────────────────────────────────
export function getAllConcernSlugs(): string[] {
  return Object.keys(CONCERN_REGISTRY);
}

export function getConcernBySlug(slug: string): ConcernPageContent | null {
  return CONCERN_REGISTRY[slug] ?? null;
}

// ─── Article accessors (MDX) ─────────────────────────────────────

export interface ArticleFrontmatter {
  title: string;
  slug: string;
  description: string;
  publishDate: string;
  updatedDate?: string;
  author: string;
  authorBio?: string;
  authorImage?: string;
  category: string;
  tags?: string[];
  readTime?: string;
  featuredImage?: { src: string; alt: string };
  pillar?: string;
  relatedArticles?: string[];
  seo?: SEOMeta;
}

export interface ArticleSummary extends ArticleFrontmatter {
  computedReadTime: string;
}

export interface ArticleFull extends ArticleSummary {
  content: string;
}

export function getAllArticleSlugs(): string[] {
  if (!fs.existsSync(ARTICLES_DIR)) return [];
  return fs
    .readdirSync(ARTICLES_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}

export function getAllArticles(): ArticleSummary[] {
  return getAllArticleSlugs()
    .map((slug) => loadArticle(slug, false))
    .filter((a): a is ArticleSummary => a !== null)
    .sort(
      (a, b) =>
        new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime(),
    );
}

export function getArticleBySlug(slug: string): ArticleFull | null {
  return loadArticle(slug, true) as ArticleFull | null;
}

function loadArticle(
  slug: string,
  includeBody: boolean,
): ArticleFull | ArticleSummary | null {
  const filePath = path.join(ARTICLES_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content: rawBody } = matter(raw);
  // Strip HTML-style comments (<!-- ... -->). Authors sometimes use these in
  // MDX, but MDX only supports JSX-style comments ({/* ... */}). Stripping is
  // safe because these comments are author notes not meant to render.
  const content = rawBody.replace(/<!--[\s\S]*?-->/g, "");
  const fm = data as Partial<ArticleFrontmatter>;
  const computedReadTime = fm.readTime ?? readingTime(content).text;
  const summary: ArticleSummary = {
    title: fm.title ?? slug,
    slug: fm.slug ?? slug,
    description: fm.description ?? "",
    publishDate: fm.publishDate ?? new Date().toISOString().slice(0, 10),
    updatedDate: fm.updatedDate,
    author: fm.author ?? "Essence Medspa Team",
    authorBio: fm.authorBio,
    authorImage: fm.authorImage,
    category: fm.category ?? "Skincare & Wellness",
    tags: fm.tags ?? [],
    readTime: fm.readTime,
    featuredImage: fm.featuredImage,
    pillar: fm.pillar,
    relatedArticles: fm.relatedArticles,
    seo: fm.seo,
    computedReadTime,
  };
  if (!includeBody) return summary;
  return { ...summary, content };
}
