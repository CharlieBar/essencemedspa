import Link from "next/link";
import { Instagram, Facebook, Phone, Mail, MapPin } from "lucide-react";
import { footer } from "@/content/global/navigation";
import { site } from "@/content/global/site";

const socialIcon: Record<string, typeof Instagram> = {
  instagram: Instagram,
  facebook: Facebook,
  tiktok: Instagram, // lucide doesn't have a tiktok icon by default — fallback
};

export function Footer() {
  return (
    <footer className="relative bg-essence-black border-t border-white/5">
      <div className="px-page pt-40 pb-16">
        <div className="grid gap-12 lg:grid-cols-[2fr_1fr_1fr_1fr]">
          {/* Brand */}
          <div className="max-w-md">
            <div className="font-display text-[1.5rem] uppercase tracking-logo text-essence-white">
              Essence
            </div>
            <p className="mt-6 font-editorial italic text-[1.2rem] leading-relaxed text-essence-gold">
              {footer.tagline}
            </p>
            <div className="mt-8 space-y-4 text-[0.9rem] text-essence-muted">
              <a
                href={footer.contact.phoneHref}
                className="flex items-center gap-3 transition-colors hover:text-essence-white"
              >
                <Phone className="h-4 w-4 text-essence-accent" strokeWidth={1.5} />
                {footer.contact.phone}
              </a>
              <a
                href={footer.contact.emailHref}
                className="flex items-center gap-3 transition-colors hover:text-essence-white"
              >
                <Mail className="h-4 w-4 text-essence-accent" strokeWidth={1.5} />
                {footer.contact.email}
              </a>
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-1 text-essence-accent" strokeWidth={1.5} />
                <span>{footer.contact.address}</span>
              </div>
            </div>
            <div className="mt-8 flex gap-3">
              {footer.social.map((s) => {
                const Icon = socialIcon[s.icon] ?? Instagram;
                return (
                  <a
                    key={s.platform}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.platform}
                    className="flex h-10 w-10 items-center justify-center border border-white/10 text-essence-muted transition-all duration-300 ease-essence hover:border-essence-accent hover:text-essence-accent"
                  >
                    <Icon className="h-4 w-4" strokeWidth={1.5} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Columns */}
          {footer.columns.map((col) => (
            <div key={col.heading}>
              <h3 className="eyebrow mb-8 text-essence-accent">
                {col.heading}
              </h3>
              <ul className="space-y-4">
                {col.links.map((link) => {
                  const isExternal = link.href.startsWith("http");
                  const cls =
                    "text-[0.9rem] text-essence-muted transition-colors hover:text-essence-white";
                  return (
                    <li key={link.href + link.label}>
                      {isExternal ? (
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={cls}
                        >
                          {link.label}
                        </a>
                      ) : (
                        <Link href={link.href} className={cls}>
                          {link.label}
                        </Link>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        {/* Hours strip */}
        <div className="mt-20 grid gap-6 border-t border-white/5 pt-12 sm:grid-cols-2 lg:grid-cols-4 text-[0.8rem] text-essence-muted">
          <div className="eyebrow text-essence-accent">
            Hours
          </div>
          <div className="lg:col-span-3 grid gap-1 sm:grid-cols-2 lg:grid-cols-4">
            {site.hours.map((h) => (
              <div key={h.day} className="flex justify-between gap-2 sm:flex-col sm:justify-start">
                <span className="text-essence-white">{h.day}</span>
                <span>{h.hours}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-white/5 pt-12 md:flex-row md:items-center text-[0.75rem] text-essence-muted">
          <div>{footer.legal.copyright}</div>
          <div className="flex flex-wrap gap-6">
            {footer.legal.links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="uppercase tracking-ls-nav transition-colors hover:text-essence-white"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
