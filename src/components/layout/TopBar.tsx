import { Phone, MapPin, Star } from "lucide-react";
import { navigation } from "@/content/global/navigation";

export function TopBar() {
  const { topBar } = navigation;
  return (
    <div className="hidden md:block w-full border-b border-white/5 bg-essence-black-soft/60 backdrop-blur-sm text-essence-muted">
      <div className="px-page flex items-center justify-between py-2 text-[0.7rem] uppercase tracking-ls-nav">
        <div className="flex items-center gap-6">
          <a
            href={topBar.phoneHref}
            className="flex items-center gap-2 transition-colors hover:text-essence-white"
          >
            <Phone className="h-3 w-3 text-essence-accent" strokeWidth={1.5} />
            <span>{topBar.phone}</span>
          </a>
          <span className="hidden lg:flex items-center gap-2">
            <MapPin className="h-3 w-3 text-essence-accent" strokeWidth={1.5} />
            <span>{topBar.address}</span>
          </span>
        </div>
        <div className="flex items-center gap-2 text-essence-gold">
          <Star className="h-3 w-3 fill-essence-gold" strokeWidth={1.5} />
          <span>{topBar.badge}</span>
        </div>
      </div>
    </div>
  );
}
