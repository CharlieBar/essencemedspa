import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/sections/SectionHeader";
import type { TeamMember } from "@/types/content";

interface TeamGridProps {
  eyebrow?: string;
  number?: string;
  headline: string;
  subheadline?: string;
  members: TeamMember[];
}

export function TeamGrid({
  eyebrow,
  number,
  headline,
  subheadline,
  members,
}: TeamGridProps) {
  return (
    <section className="relative bg-essence-black-soft section-y">
      <div className="px-page">
        <SectionHeader
          number={number}
          eyebrow={eyebrow}
          headline={headline}
          subheadline={subheadline}
          className="mb-20"
        />
        <div className="grid gap-px bg-white/5 md:grid-cols-2 lg:grid-cols-3">
          {members.map((member, i) => (
            <Reveal key={member.name} delay={(i % 3) * 0.08}>
              <div className="group flex h-full flex-col bg-essence-black-soft transition-colors duration-500 hover:bg-essence-black">
                {/* Portrait photo */}
                <div className="relative aspect-[4/5] w-full overflow-hidden">
                  {member.image ? (
                    <Image
                      src={member.image.src}
                      alt={member.image.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 ease-essence group-hover:scale-105"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-essence-black-soft via-essence-black to-essence-accent/10" />
                  )}
                </div>

                {/* Member info */}
                <div className="flex flex-1 flex-col p-10">
                  <h3 className="font-display text-2xl text-essence-white">
                    {member.name}
                  </h3>
                  <p className="mt-1 text-[0.7rem] uppercase tracking-brand text-essence-accent">
                    {member.role}
                  </p>
                  {member.credentials && (
                    <p className="mt-2 text-[0.85rem] italic font-editorial text-essence-gold">
                      {member.credentials}
                    </p>
                  )}
                  <p className="mt-4 text-[0.9rem] leading-[1.8] text-essence-white-off">
                    {member.bio}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
