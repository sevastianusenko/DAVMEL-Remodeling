import Link from "next/link";
import { BUSINESS, telHref } from "@/lib/business";

// Mobile-only bottom bar. Phone left, estimate right.
export function StickyCall() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-px border-t border-line bg-line sm:hidden">
      <a
        href={telHref()}
        className="flex items-center justify-center gap-2 bg-ink py-3.5 font-display text-[0.95rem] font-bold text-white"
      >
        Call {BUSINESS.phoneDisplay}
      </a>
      <Link
        href="/contact"
        className="flex items-center justify-center bg-tape py-3.5 font-display text-[0.95rem] font-bold text-white"
      >
        Free Estimate
      </Link>
    </div>
  );
}
