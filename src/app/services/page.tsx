import type { Metadata } from "next";
import Link from "next/link";
import { SERVICES } from "@/lib/services";
import { Pic } from "@/components/Pic";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SectionRule } from "@/components/SectionRule";
import { CtaBand } from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Remodeling Services in Lancaster & Chester County PA",
  description:
    "Every remodeling service DAVMEL offers: bathrooms, kitchens, basements, drywall, tile, framing, doors and trim, decks, windows and porch restoration. One licensed team.",
  alternates: { canonical: "/services" },
};

export default function ServicesIndex() {
  const interiorPillar = SERVICES.find((s) => s.slug === "interior-remodeling")!;
  const exteriorPillar = SERVICES.find((s) => s.slug === "exterior-remodeling")!;
  const interior = interiorPillar.children!.map((c) => SERVICES.find((s) => s.slug === c)!);
  const exterior = exteriorPillar.children!.map((c) => SERVICES.find((s) => s.slug === c)!);

  return (
    <>
      <div className="mx-auto max-w-6xl px-4 pt-10 sm:px-6">
        <Breadcrumbs items={[{ name: "Services", href: "/services" }]} />
        <h1 className="max-w-2xl text-4xl sm:text-5xl">
          One crew. Thirteen trades. Zero phone tag.
        </h1>
        <div className="chalk mt-5 max-w-2xl" aria-hidden="true" />
        <p className="mt-5 max-w-2xl text-lg text-ink-soft">
          Everything below is done by our own team under one license and one schedule.
          Pick a service to see real photos, honest price ranges and how the work
          actually goes.
        </p>
      </div>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <SectionRule label="INTERIOR" />
        <div className="mb-8">
          <Link href={`/services/${interiorPillar.slug}`} className="font-display text-xl font-bold text-tape-deep underline decoration-2 underline-offset-4">
            {interiorPillar.name}: the full picture
          </Link>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {interior.map((s) => (
            <Link key={s.slug} href={`/services/${s.slug}`} className="group border border-line bg-paper transition-colors hover:border-tape">
              <div className="aspect-[4/3] overflow-hidden">
                <Pic k={s.hero} sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw" className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]" />
              </div>
              <div className="p-4">
                <h2 className="font-display text-[1.05rem] font-bold group-hover:text-tape-deep">{s.name}</h2>
                <p className="mt-1.5 text-[0.9rem] leading-snug text-ink-soft">{s.short}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-14">
          <SectionRule label="EXTERIOR" />
        </div>
        <div className="mb-8">
          <Link href={`/services/${exteriorPillar.slug}`} className="font-display text-xl font-bold text-tape-deep underline decoration-2 underline-offset-4">
            {exteriorPillar.name}: the full picture
          </Link>
        </div>
        <div className="grid gap-5 sm:grid-cols-3">
          {exterior.map((s) => (
            <Link key={s.slug} href={`/services/${s.slug}`} className="group border border-line bg-paper transition-colors hover:border-tape">
              <div className="aspect-[16/10] overflow-hidden">
                <Pic k={s.hero} sizes="(min-width: 640px) 33vw, 100vw" className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]" />
              </div>
              <div className="p-4">
                <h2 className="font-display text-[1.05rem] font-bold group-hover:text-tape-deep">{s.name}</h2>
                <p className="mt-1.5 text-[0.9rem] leading-snug text-ink-soft">{s.short}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
