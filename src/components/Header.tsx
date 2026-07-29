"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { LogoWordmark } from "./Logo";
import { BUSINESS, telHref } from "@/lib/business";
import { SERVICES } from "@/lib/services";

const NAV = [
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

function useServiceColumns() {
  const interiorPillar = SERVICES.find((s) => s.slug === "interior-remodeling");
  const exteriorPillar = SERVICES.find((s) => s.slug === "exterior-remodeling");
  const byName = (slug: string) => {
    const s = SERVICES.find((x) => x.slug === slug);
    return s ? { slug: s.slug, label: s.navName ?? s.name } : null;
  };
  const interior = (interiorPillar?.children ?? []).map(byName).filter(Boolean) as {
    slug: string;
    label: string;
  }[];
  const exterior = (exteriorPillar?.children ?? []).map(byName).filter(Boolean) as {
    slug: string;
    label: string;
  }[];
  const half = Math.ceil(interior.length / 2);
  return { interiorA: interior.slice(0, half), interiorB: interior.slice(half), exterior };
}

export function Header() {
  const [open, setOpen] = useState(false);
  const [mega, setMega] = useState(false);
  const pathname = usePathname();
  const { interiorA, interiorB, exterior } = useServiceColumns();

  useEffect(() => {
    setOpen(false);
    setMega(false);
  }, [pathname]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMega(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const MegaColumn = ({
    title,
    items,
    allHref,
  }: {
    title: string;
    items: { slug: string; label: string }[];
    allHref: string;
  }) => (
    <div>
      <p className="spec-plate mb-3 text-door">{title}</p>
      <ul className="space-y-1.5">
        {items.map((it) => (
          <li key={it.slug}>
            <Link
              href={`/services/${it.slug}`}
              className="block rounded px-2 py-1 text-[0.88rem] text-ink hover:bg-plaster hover:text-tape-deep"
            >
              {it.label}
            </Link>
          </li>
        ))}
        <li>
          <Link
            href={allHref}
            className="block rounded px-2 py-1 text-[0.88rem] font-semibold text-tape-deep hover:bg-plaster"
          >
            View all →
          </Link>
        </li>
      </ul>
    </div>
  );

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/95 backdrop-blur-sm">
      <div className="relative mx-auto flex h-[72px] max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link href="/" aria-label="DAVMEL Remodeling, home" onClick={() => setOpen(false)}>
          <LogoWordmark />
        </Link>

        <nav className="hidden h-full items-center gap-6 lg:flex" aria-label="Main">
          {NAV.map((item) => {
            const active = pathname === item.href || pathname.startsWith(item.href + "/");
            const cls = `font-display text-[0.9rem] font-semibold tracking-wide transition-colors hover:text-tape-deep ${
              active ? "text-tape-deep underline decoration-2 underline-offset-8" : "text-ink"
            }`;
            if (item.href === "/services") {
              return (
                <div
                  key={item.href}
                  className="flex h-full items-center"
                  onMouseEnter={() => setMega(true)}
                  onMouseLeave={() => setMega(false)}
                >
                  <Link
                    href="/services"
                    className={`${cls} inline-flex items-center gap-1.5`}
                    aria-expanded={mega}
                    aria-haspopup="true"
                    onFocus={() => setMega(true)}
                  >
                    {item.label}
                    <svg
                      viewBox="0 0 12 8"
                      className={`h-2 w-3 transition-transform ${mega ? "rotate-180" : ""}`}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      aria-hidden="true"
                    >
                      <path d="m1 1.5 5 5 5-5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                </div>
              );
            }
            return (
              <Link key={item.href} href={item.href} className={cls}>
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <a href={telHref()} className="btn hidden sm:inline-flex" aria-label={`Call ${BUSINESS.phoneDisplay}`}>
            <PhoneIcon />
            {BUSINESS.phoneDisplay}
          </a>
          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center rounded-lg border-2 border-ink lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen(!open)}
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.5">
              {open ? <path d="M5 5l14 14M19 5L5 19" /> : <path d="M3 6.5h18M3 12h18M3 17.5h12" />}
            </svg>
          </button>
        </div>
      </div>

      {/* MEGA MENU (desktop) */}
      <div
        className={`absolute inset-x-0 top-full hidden border-b border-line bg-paper shadow-2xl lg:block ${
          mega ? "" : "pointer-events-none opacity-0"
        } transition-opacity duration-150`}
        onMouseEnter={() => setMega(true)}
        onMouseLeave={() => setMega(false)}
      >
        <div className="mx-auto grid max-w-6xl grid-cols-[1fr_1fr_1fr_1.15fr] gap-8 px-6 py-8">
          <MegaColumn title="INTERIOR REMODELING" items={interiorA} allHref="/services/interior-remodeling" />
          <MegaColumn title="INTERIOR, CONTINUED" items={interiorB} allHref="/services/interior-remodeling" />
          <MegaColumn title="EXTERIOR REMODELING" items={exterior} allHref="/services/exterior-remodeling" />
          <div className="self-start overflow-hidden rounded-xl border border-line">
            <div className="relative h-36">
              <Image
                src="/images/bathroom-remodel-marble-tile-lancaster-pa.jpg"
                alt="Marble bathroom remodel in Lancaster County"
                fill
                sizes="300px"
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <p className="spec-plate text-tape">FREE WRITTEN ESTIMATES</p>
              <p className="mt-1.5 font-display text-[0.98rem] font-bold text-door">
                Send photos, get a preliminary quote the same day
              </p>
              <Link href="/#estimate" className="btn mt-3 w-full !py-2.5 text-[0.85rem]">
                Get a Photo Quote
              </Link>
              <a
                href={telHref()}
                className="mt-2 block text-center font-display text-[0.9rem] font-bold text-door hover:text-tape-deep"
              >
                {BUSINESS.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="border-t border-line bg-paper lg:hidden">
          <ul className="mx-auto max-w-6xl px-4 py-3 sm:px-6">
            {NAV.map((item) => (
              <li key={item.href} className="border-b border-line-soft last:border-0">
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block py-3.5 font-display text-lg font-semibold"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="pt-4 pb-2">
              <a href={telHref()} className="btn w-full">
                <PhoneIcon />
                Call {BUSINESS.phoneDisplay}
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
      <path d="M6.6 2.8c.5-.5 1.3-.5 1.8 0l2.4 2.5c.5.5.5 1.3 0 1.8l-1.2 1.2c-.3.3-.3.7-.1 1a13 13 0 0 0 5.2 5.2c.3.2.7.1 1-.1l1.2-1.2c.5-.5 1.3-.5 1.8 0l2.5 2.4c.5.5.5 1.3 0 1.8l-1.5 1.5c-.8.8-2 1.2-3.1.9C10.5 18.3 5.7 13.5 4.2 7.4c-.3-1.1.1-2.3.9-3.1l1.5-1.5Z" />
    </svg>
  );
}
