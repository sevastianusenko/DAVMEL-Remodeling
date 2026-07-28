import type { Metadata } from "next";
import Link from "next/link";
import { CITIES } from "@/lib/cities";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SectionRule } from "@/components/SectionRule";
import { CtaBand } from "@/components/CtaBand";
import { Pic } from "@/components/Pic";

export const metadata: Metadata = {
  title: "Service Areas | Remodeling in Lancaster & Chester County PA",
  description:
    "DAVMEL Remodeling serves Lancaster, Denver, Ephrata, Lititz, Reading, Lebanon, Elizabethtown, West Chester, Downingtown and Coatesville PA. Based in Denver PA, licensed and insured.",
  alternates: { canonical: "/service-areas" },
};

export default function ServiceAreasIndex() {
  const lancaster = CITIES.filter((c) => c.county === "Lancaster County");
  const chester = CITIES.filter((c) => c.county === "Chester County");
  const berks = CITIES.filter((c) => c.county === "Berks County");
  const other = CITIES.filter(
    (c) => !["Lancaster County", "Chester County", "Berks County"].includes(c.county)
  );

  return (
    <>
      <div className="mx-auto max-w-6xl px-4 pt-10 sm:px-6">
        <Breadcrumbs items={[{ name: "Service Areas", href: "/service-areas" }]} />
        <h1 className="max-w-2xl text-4xl sm:text-5xl">Where we swing hammers</h1>
        <div className="chalk mt-5 max-w-2xl" aria-hidden="true" />
        <p className="mt-5 max-w-2xl text-lg text-ink-soft">
          Home base is Denver, PA, in northern Lancaster County. From there we cover
          about 75 miles in every direction. These pages cover the towns we work in
          most, with local notes on the housing and what it usually needs.
        </p>
      </div>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        {[
          { label: "LANCASTER COUNTY", list: lancaster },
          { label: "CHESTER COUNTY", list: chester },
          { label: "BERKS COUNTY", list: berks },
          { label: "LEBANON · YORK · DAUPHIN", list: other },
        ].map((group) => (
          <div key={group.label} className="mb-12 last:mb-0">
            <SectionRule label={group.label} />
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {group.list.map((c) => (
                <Link key={c.slug} href={`/service-areas/${c.slug}`} className="group border border-line bg-paper transition-colors hover:border-tape">
                  <div className="aspect-[16/9] overflow-hidden">
                    <Pic k={c.hero} sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]" />
                  </div>
                  <div className="p-4">
                    <h2 className="font-display text-[1.1rem] font-bold group-hover:text-tape-deep">
                      {c.name}, PA
                    </h2>
                    <p className="spec-plate mt-1">{c.driveTime.toUpperCase()}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
        <p className="mt-4 max-w-2xl text-ink-soft">
          Not on the list? If you are within an hour and a bit of Denver PA, call anyway.
          The radius is a guideline, not a fence.
        </p>
      </section>

      <CtaBand />
    </>
  );
}
