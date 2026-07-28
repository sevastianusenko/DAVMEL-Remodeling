import Link from "next/link";
import { BUSINESS, telHref } from "@/lib/business";

export function CtaBand({
  title = "Tell us about your project",
  text = "Free written estimates. Straight answers. A schedule we actually keep.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="bg-door-deep text-white">
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-4 py-14 sm:px-6 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="font-display text-3xl font-extrabold">{title}</h2>
          <p className="mt-2 max-w-xl text-white/85">{text}</p>
          <p className="spec-plate mt-3 text-white/60">
            {BUSINESS.licenseDisplay} · Serving Lancaster &amp; Chester County
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <a href={telHref()} className="btn">
            Call {BUSINESS.phoneDisplay}
          </a>
          <Link href="/contact" className="btn btn-ghost-light">
            Request an Estimate
          </Link>
        </div>
      </div>
    </section>
  );
}
