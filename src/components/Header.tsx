"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { LogoWordmark } from "./Logo";
import { BUSINESS, telHref } from "@/lib/business";

const NAV = [
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/service-areas", label: "Service Areas" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/95 backdrop-blur-sm">
      <div className="mx-auto flex h-[72px] max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link href="/" aria-label="DAVMEL Remodeling, home" onClick={() => setOpen(false)}>
          <LogoWordmark />
        </Link>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Main">
          {NAV.map((item) => {
            const active = pathname === item.href || pathname.startsWith(item.href + "/");
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`font-display text-[0.9rem] font-semibold tracking-wide transition-colors hover:text-tape-deep ${
                  active ? "text-tape-deep underline decoration-2 underline-offset-8" : "text-ink"
                }`}
              >
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
            className="flex h-11 w-11 items-center justify-center rounded-[3px] border-2 border-ink lg:hidden"
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
