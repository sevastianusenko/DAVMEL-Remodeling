import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Pic } from "@/components/Pic";
import { photo } from "@/lib/photos";
import { SectionRule } from "@/components/SectionRule";
import { CtaBand } from "@/components/CtaBand";
import { FaqList } from "@/components/FaqList";
import { BUSINESS, telHref } from "@/lib/business";
import { SERVICES } from "@/lib/services";
import { CITIES } from "@/lib/cities";
import { POSTS } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Remodeling Contractor in Lancaster County PA | DAVMEL Remodeling",
  description:
    "Licensed remodeling contractor in Lancaster County PA. Bathrooms, basements, drywall, tile, decks, windows and doors, all by one team. Serving Lancaster and Chester County. Free estimates.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "DAVMEL Remodeling | One Contractor. The Whole Job.",
    description:
      "Interior and exterior remodeling across Lancaster and Chester County PA. Licensed, insured, real project photos.",
    images: ["/images/open-concept-living-remodel-lancaster-pa.jpg"],
  },
};

const HOME_FAQS = [
  {
    q: "What areas does DAVMEL Remodeling serve?",
    a: "We are based in Denver PA and work across Lancaster County and Chester County, plus nearby parts of Berks and Lebanon County. Lancaster, Ephrata, Lititz, Reading, Lebanon, Elizabethtown, West Chester, Downingtown and Coatesville are all regular territory.",
  },
  {
    q: "Are you licensed and insured?",
    a: "Yes. We are a registered Pennsylvania Home Improvement Contractor, number PA214721, and fully insured. You can verify the registration free at the PA Attorney General's HIC search, and we send our insurance certificate with every contract.",
  },
  {
    q: "How much do estimates cost?",
    a: "Nothing. We come out, look at the actual conditions, talk through what you want and put a real number in writing. No pressure follows it. The estimate is free whether you hire us or not.",
  },
  {
    q: "What makes you different from other contractors?",
    a: "One crew covers the whole job: framing, drywall, tile, doors, trim, decks and more. No waiting between subcontractors, no blame games between trades, one schedule and one warranty. Also, we answer our phone. In this trade that practically counts as a superpower.",
  },
];

export default function Home() {
  const hero = photo("open-concept-living-remodel-lancaster-pa");
  const interior = SERVICES.filter((s) => !s.pillar).slice(0, 8);
  const exterior = SERVICES.filter(
    (s) => !s.pillar && ["deck-building", "window-door-installation", "porch-deck-refinishing"].includes(s.slug)
  );
  const interiorOnly = interior.filter((s) => !exterior.includes(s));

  return (
    <>
      {/* HERO */}
      <section className="relative">
        <div className="relative h-[62vh] min-h-[420px] max-h-[640px] w-full">
          <Image
            src={hero.src}
            alt={hero.alt}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-night/85 via-night/30 to-transparent" />
        </div>
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="relative -mt-44 max-w-2xl border border-line bg-plaster p-7 sm:-mt-40 sm:p-10">
            <p className="eyebrow mb-3">
              LICENSED CONTRACTOR · DENVER, PA · {BUSINESS.licenseDisplay}
            </p>
            <h1 className="text-4xl sm:text-5xl">
              One contractor.
              <br />
              The whole job.
            </h1>
            <div className="chalk mt-5" aria-hidden="true" />
            <p className="mt-5 max-w-xl text-lg text-ink-soft">
              Interior and exterior remodeling across Lancaster and Chester County.
              Framing, drywall, tile, doors, decks and everything between, done by one
              licensed team on one schedule. You keep your weekends.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a href={telHref()} className="btn">
                Call {BUSINESS.phoneDisplay}
              </a>
              <Link href="/contact" className="btn btn-ghost">
                Request a Free Estimate
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <ul className="spec-plate mt-10 flex flex-wrap gap-x-8 gap-y-2">
          <li>LICENSED &amp; INSURED</li>
          <li>{BUSINESS.yearsInTrade} YEARS IN THE TRADE</li>
          <li>LANCASTER + CHESTER COUNTY</li>
          <li>FREE WRITTEN ESTIMATES</li>
          <li>REAL PHOTOS, OUR JOBS</li>
        </ul>
      </div>

      {/* SERVICES */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <SectionRule label="WHAT WE BUILD" />
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <h2 className="max-w-lg text-3xl sm:text-4xl">
            Every trade a remodel needs, under one roof
          </h2>
          <Link href="/services" className="font-display font-bold text-tape-deep underline decoration-2 underline-offset-4">
            All services
          </Link>
        </div>

        <p className="spec-plate mb-4">INTERIOR</p>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {interiorOnly.map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="group border border-line bg-paper transition-colors hover:border-tape"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <Pic
                  k={s.hero}
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                />
              </div>
              <div className="p-4">
                <h3 className="font-display text-[1.05rem] font-bold group-hover:text-tape-deep">
                  {s.name}
                </h3>
                <p className="mt-1.5 text-[0.9rem] leading-snug text-ink-soft">{s.short}</p>
              </div>
            </Link>
          ))}
        </div>

        <p className="spec-plate mb-4 mt-10">EXTERIOR</p>
        <div className="grid gap-5 sm:grid-cols-3">
          {exterior.map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="group border border-line bg-paper transition-colors hover:border-tape"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <Pic
                  k={s.hero}
                  sizes="(min-width: 640px) 33vw, 100vw"
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                />
              </div>
              <div className="p-4">
                <h3 className="font-display text-[1.05rem] font-bold group-hover:text-tape-deep">
                  {s.name}
                </h3>
                <p className="mt-1.5 text-[0.9rem] leading-snug text-ink-soft">{s.short}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* WHY ONE CONTRACTOR */}
      <section className="bg-paper">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <SectionRule label="WHY IT WORKS" />
          <div className="grid items-start gap-10 lg:grid-cols-2">
            <div className="prose-site">
              <h2 className="text-3xl sm:text-4xl">
                The usual remodel needs six phone numbers. Yours needs one.
              </h2>
              <p>
                Hire trades separately and you become the project manager: chasing
                schedules, translating between the drywaller and the tile setter,
                and owning every gap between them. That job pays nothing and takes
                your evenings.
              </p>
              <p>
                Our crew covers framing, drywall, tile, doors, trim and exterior work
                in house. When a wall closes up, the next trade is already standing
                there, because it is the same people. Projects finish weeks faster,
                and when something needs fixing there is exactly one company to call
                and it is us.
              </p>
              <ul>
                <li>One written scope, one schedule, one warranty</li>
                <li>Licensed PA contractor, verified at the Attorney General&apos;s registry</li>
                <li>Dust protection up first, broom clean site every evening</li>
                <li>Changes priced in writing before the work, not after</li>
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-[3/4] overflow-hidden border border-line">
                <Pic k="shower-framing-cement-board-pa" sizes="(min-width: 1024px) 25vw, 50vw" />
              </div>
              <div className="mt-8 aspect-[3/4] overflow-hidden border border-line">
                <Pic k="marble-shower-mosaic-pan-linear-drain-pa" sizes="(min-width: 1024px) 25vw, 50vw" />
              </div>
              <div className="-mt-8 aspect-[3/4] overflow-hidden border border-line">
                <Pic k="drywall-taping-mudding-pa" sizes="(min-width: 1024px) 25vw, 50vw" />
              </div>
              <div className="aspect-[3/4] overflow-hidden border border-line">
                <Pic k="walk-in-shower-glass-slider-marble-pa" sizes="(min-width: 1024px) 25vw, 50vw" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS TEASER */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <SectionRule label="RECENT WORK" />
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <h2 className="max-w-lg text-3xl sm:text-4xl">Jobs we would show our own mother</h2>
          <Link href="/projects" className="font-display font-bold text-tape-deep underline decoration-2 underline-offset-4">
            Full gallery
          </Link>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { k: "bathroom-remodel-marble-tile-lancaster-pa", cap: "BATHROOM REBUILD · LANCASTER COUNTY" },
            { k: "composite-deck-cable-railing-lancaster-pa", cap: "COMPOSITE DECK · CABLE RAIL · WINTER BUILD" },
            { k: "oak-staircase-renovation-lancaster-pa", cap: "STAIRCASE RENOVATION · OAK + WHITE" },
            { k: "kitchen-remodel-quartz-farmhouse-sink-pa", cap: "KITCHEN · QUARTZ + FARMHOUSE SINK" },
            { k: "porch-steps-refinishing-before-after-pa", cap: "PORCH REFINISH · BEFORE / AFTER" },
            { k: "blue-entry-door-fan-transom-pa", cap: "ENTRY DOOR · FAN TRANSOM" },
          ].map((item) => (
            <figure key={item.k} className="border border-line bg-paper">
              <div className="aspect-[4/3] overflow-hidden">
                <Pic k={item.k} sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" />
              </div>
              <figcaption className="spec-plate px-4 py-3">{item.cap}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* SERVICE AREA */}
      <section className="bg-door-deep text-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <div className="mb-8 flex items-end gap-4">
            <span className="eyebrow whitespace-nowrap pb-[3px] text-vial">WHERE WE WORK</span>
            <span className="rule min-w-0 flex-1 opacity-30" aria-hidden="true" />
          </div>
          <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
            <div>
              <h2 className="text-3xl text-white sm:text-4xl">
                Based in Denver PA. At home in two counties.
              </h2>
              <p className="mt-4 max-w-xl text-white/85">
                Our shop sits in northern Lancaster County, which puts most of Lancaster,
                Berks and Chester County within an easy drive. City rowhomes, borough
                Victorians, township ranches and farmhouses: we know what each one hides
                behind its walls, because we have opened a lot of them.
              </p>
              <p className="spec-plate mt-6 text-white/60">
                TYPICAL RADIUS: 75 MILES FROM DENVER, PA 17517
              </p>
            </div>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-3 self-center">
              {CITIES.map((c) => (
                <li key={c.slug}>
                  <Link
                    href={`/service-areas/${c.slug}`}
                    className="font-display font-semibold text-white/90 underline decoration-white/30 underline-offset-4 hover:text-vial hover:decoration-vial"
                  >
                    {c.name}, PA
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* BLOG TEASER */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <SectionRule label="STRAIGHT ANSWERS" />
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <h2 className="max-w-xl text-3xl sm:text-4xl">
            Real prices and honest advice, published on purpose
          </h2>
          <Link href="/blog" className="font-display font-bold text-tape-deep underline decoration-2 underline-offset-4">
            All articles
          </Link>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {POSTS.slice(0, 3).map((p) => (
            <Link
              key={p.slug}
              href={`/blog/${p.slug}`}
              className="group border border-line bg-paper p-6 transition-colors hover:border-tape"
            >
              <p className="spec-plate">{p.category.toUpperCase()}</p>
              <h3 className="mt-3 font-display text-[1.1rem] font-bold leading-snug group-hover:text-tape-deep">
                {p.title}
              </h3>
              <p className="mt-3 text-[0.92rem] text-ink-soft">{p.description}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 sm:pb-20">
        <FaqList faqs={HOME_FAQS} />
      </section>

      <CtaBand />
    </>
  );
}
