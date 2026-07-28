import Link from "next/link";
import { LogoMark } from "./Logo";
import { BUSINESS, telHref, mailHref } from "@/lib/business";
import { SERVICES } from "@/lib/services";
import { CITIES } from "@/lib/cities";

export function Footer() {
  return (
    <footer className="bg-night text-white/80">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-[1.3fr_1fr_1fr_1fr]">
          <div>
            <span className="flex items-center gap-2.5 text-white">
              <LogoMark className="h-9 w-9 text-white" />
              <span className="leading-none">
                <span className="block font-display text-xl font-extrabold tracking-tight">DAVMEL</span>
                <span className="spec-plate block text-[0.58rem] tracking-[0.28em] text-white/60">
                  REMODELING
                </span>
              </span>
            </span>
            <p className="mt-4 max-w-xs text-[0.95rem] leading-relaxed">
              Licensed residential remodeling contractor based in Denver, PA. Interior and
              exterior work across Lancaster and Chester County. One team, the whole job.
            </p>
            <p className="spec-plate mt-4 text-white/60">
              {BUSINESS.licenseDisplay} · Licensed &amp; Insured
            </p>
            <div className="mt-5 space-y-1.5 font-display text-[0.95rem] font-semibold text-white">
              <p>
                <a href={telHref()} className="hover:text-vial">
                  {BUSINESS.phoneDisplay}
                </a>
              </p>
              <p>
                <a href={mailHref()} className="hover:text-vial">
                  {BUSINESS.email}
                </a>
              </p>
            </div>
          </div>

          <nav aria-label="Interior services">
            <p className="spec-plate mb-3 text-white/50">INTERIOR</p>
            <ul className="space-y-2 text-[0.92rem]">
              {SERVICES.filter((s) => !s.pillar && s.slug !== "deck-building" && s.slug !== "window-door-installation" && s.slug !== "porch-deck-refinishing").map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="hover:text-white">
                    {s.navName ?? s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Exterior services and company">
            <p className="spec-plate mb-3 text-white/50">EXTERIOR</p>
            <ul className="space-y-2 text-[0.92rem]">
              {["deck-building", "window-door-installation", "porch-deck-refinishing", "exterior-remodeling"].map((slug) => {
                const s = SERVICES.find((x) => x.slug === slug)!;
                return (
                  <li key={slug}>
                    <Link href={`/services/${slug}`} className="hover:text-white">
                      {s.navName ?? s.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <p className="spec-plate mt-6 mb-3 text-white/50">COMPANY</p>
            <ul className="space-y-2 text-[0.92rem]">
              <li><Link href="/projects" className="hover:text-white">Projects</Link></li>
              <li><Link href="/reviews" className="hover:text-white">Reviews</Link></li>
              <li><Link href="/about" className="hover:text-white">About</Link></li>
              <li><Link href="/faq" className="hover:text-white">FAQ</Link></li>
              <li><Link href="/blog" className="hover:text-white">Blog</Link></li>
            </ul>
          </nav>

          <nav aria-label="Service areas">
            <p className="spec-plate mb-3 text-white/50">SERVICE AREAS</p>
            <ul className="space-y-2 text-[0.92rem]">
              {CITIES.map((c) => (
                <li key={c.slug}>
                  <Link href={`/service-areas/${c.slug}`} className="hover:text-white">
                    {c.name}, PA
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/15 pt-6 text-[0.82rem] text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {BUSINESS.legalName} · Denver, PA ·{" "}
            <Link href="/privacy" className="hover:text-white">Privacy Policy</Link> ·{" "}
            <Link href="/terms" className="hover:text-white">Terms of Use</Link> ·{" "}
            <Link href="/site-map" className="hover:text-white">Site Map</Link>
          </p>
          <p>
            Website by{" "}
            <a href="https://seva-web-studio.com" className="underline decoration-white/30 underline-offset-2 hover:text-white">
              Seva Web Studio
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
