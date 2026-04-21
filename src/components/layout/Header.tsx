"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { navigation } from "@/content/global/navigation";
import { site } from "@/content/global/site";
import { cn } from "@/lib/cn";
import { Button } from "@/components/ui/Button";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed left-0 right-0 top-0 z-[1000] transition-all duration-500 ease-essence",
          scrolled
            ? "bg-essence-black/90 backdrop-blur-nav py-4"
            : "bg-transparent py-6",
        )}
      >
        <div className="px-page flex items-center justify-between gap-8">
          <Link
            href="/"
            className="font-display text-[1.3rem] uppercase tracking-logo text-essence-white"
            aria-label={`${site.name} home`}
          >
            Essence
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-10">
            {navigation.primary.map((item) => (
              <div
                key={item.label}
                className="relative py-2"
                onMouseEnter={() => item.children && setOpenMenu(item.label)}
                onMouseLeave={() => item.children && setOpenMenu(null)}
              >
                <Link
                  href={item.href}
                  className="group relative inline-flex items-center gap-1 font-body text-[0.75rem] uppercase tracking-ls-nav text-essence-white"
                >
                  <span className="relative">
                    {item.label}
                    <span className="absolute -bottom-1 left-0 h-px w-full origin-right scale-x-0 bg-essence-accent transition-transform duration-500 ease-essence group-hover:origin-left group-hover:scale-x-100" />
                  </span>
                  {item.children && <ChevronDown className="h-3 w-3" strokeWidth={1.5} />}
                </Link>

                {item.children && openMenu === item.label && (
                  <div className="absolute left-1/2 top-full z-50 w-[34rem] -translate-x-1/2 pt-4">
                    <div className="border border-white/10 border-t-2 border-t-essence-accent bg-essence-black-soft/95 p-8 shadow-2xl backdrop-blur-nav">
                      <div className="eyebrow-sm mb-4 text-essence-accent">
                        {item.label}
                      </div>
                      <div className="grid gap-1">
                        {item.children.map((sub) => (
                          <Link
                            key={sub.href}
                            href={sub.href}
                            className="group block border-b border-white/5 py-3 last:border-b-0"
                            onClick={() => setOpenMenu(null)}
                          >
                            <div className="font-display text-base text-essence-white transition-colors group-hover:text-essence-accent">
                              {sub.label}
                            </div>
                            {sub.description && (
                              <div className="mt-1 text-[0.75rem] leading-relaxed text-essence-muted">
                                {sub.description}
                              </div>
                            )}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <Button
              cta={{
                text: navigation.cta.text,
                href: navigation.cta.href,
                variant: "secondary",
              }}
              size="sm"
              className="hidden md:inline-flex"
            />
            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              className="lg:hidden p-2 text-essence-white"
              aria-label="Open menu"
            >
              <Menu className="h-6 w-6" strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[1100] flex flex-col bg-essence-black lg:hidden">
          <div className="px-page flex items-center justify-between border-b border-white/5 py-6">
            <Link
              href="/"
              onClick={() => setMobileOpen(false)}
              className="font-display text-[1.3rem] uppercase tracking-logo text-essence-white"
            >
              Essence
            </Link>
            <button
              type="button"
              onClick={() => setMobileOpen(false)}
              className="p-2 text-essence-white"
              aria-label="Close menu"
            >
              <X className="h-6 w-6" strokeWidth={1.5} />
            </button>
          </div>
          <nav className="flex-1 overflow-y-auto px-page py-10 space-y-8">
            {navigation.primary.map((item) => (
              <div key={item.label}>
                <Link
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="block font-display text-3xl text-essence-white"
                >
                  {item.label}
                </Link>
                {item.children && (
                  <div className="mt-3 space-y-2 border-l border-essence-accent/40 pl-4">
                    {item.children.map((sub) => (
                      <Link
                        key={sub.href}
                        href={sub.href}
                        onClick={() => setMobileOpen(false)}
                        className="block text-[0.85rem] uppercase tracking-ls-nav text-essence-muted hover:text-essence-white"
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
          <div className="px-page py-8 border-t border-white/5">
            <Button
              cta={{
                text: navigation.cta.text,
                href: navigation.cta.href,
                variant: "primary",
              }}
              className="w-full"
            />
          </div>
        </div>
      )}
    </>
  );
}
