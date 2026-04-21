import {
  Award,
  UserCheck,
  ShieldCheck,
  Shield,
  Leaf,
  Clock,
  Heart,
  Sparkles,
  Target,
  Users,
  Eye,
  Layers,
  Sun,
  Droplet,
  Zap,
  Scan,
  Microscope,
  RefreshCw,
  TrendingUp,
  Syringe,
  DollarSign,
  Repeat,
  Thermometer,
  Palette,
  Ruler,
  type LucideIcon,
} from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/sections/SectionHeader";
import type { FeatureItem } from "@/types/content";

const iconMap: Record<string, LucideIcon> = {
  award: Award,
  "user-check": UserCheck,
  "shield-check": ShieldCheck,
  shield: Shield,
  leaf: Leaf,
  clock: Clock,
  heart: Heart,
  sparkles: Sparkles,
  target: Target,
  users: Users,
  eye: Eye,
  layers: Layers,
  sun: Sun,
  droplet: Droplet,
  zap: Zap,
  scan: Scan,
  microscope: Microscope,
  "refresh-cw": RefreshCw,
  "trending-up": TrendingUp,
  syringe: Syringe,
  "dollar-sign": DollarSign,
  repeat: Repeat,
  thermometer: Thermometer,
  palette: Palette,
  ruler: Ruler,
};

interface WhyUsFeaturesProps {
  eyebrow?: string;
  headline: string;
  subheadline?: string;
  features: FeatureItem[];
  surface?: "black" | "soft";
  number?: string;
}

export function WhyUsFeatures({
  eyebrow,
  headline,
  subheadline,
  features,
  surface = "soft",
  number = "03",
}: WhyUsFeaturesProps) {
  const isBlack = surface === "black";
  const sectionBg = isBlack ? "bg-essence-black" : "bg-essence-black-soft";
  const cardBg = isBlack ? "bg-essence-black-soft" : "bg-essence-black";
  const cardHoverBg = isBlack ? "hover:bg-essence-black" : "hover:bg-essence-black-soft";
  return (
    <section className={`relative ${sectionBg} section-y`}>
      <div className="px-page">
        <SectionHeader
          number={number}
          eyebrow={eyebrow}
          headline={headline}
          subheadline={subheadline}
          className="mb-20"
        />
        <div className="grid gap-px bg-white/5 md:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => {
            const Icon = iconMap[f.icon] ?? Sparkles;
            return (
              <Reveal key={f.title} delay={(i % 3) * 0.08}>
                <div className={`group relative flex h-full flex-col ${cardBg} p-12 transition-colors duration-500 ${cardHoverBg}`}>
                  <span aria-hidden className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-essence-accent transition-transform duration-500 ease-essence group-hover:scale-x-100" />
                  <div className="mb-6 flex h-14 w-14 items-center justify-center border border-essence-accent/40 text-essence-accent transition-all duration-500 ease-essence group-hover:border-essence-accent group-hover:bg-essence-accent group-hover:text-essence-white">
                    <Icon className="h-6 w-6" strokeWidth={1.25} />
                  </div>
                  <h3 className="font-display text-2xl leading-tight text-essence-white">
                    {f.title}
                  </h3>
                  <p className="mt-4 text-[0.95rem] leading-[1.8] text-essence-white-off">
                    {f.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
