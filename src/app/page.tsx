import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Pic } from "@/components/Pic";
import { photo } from "@/lib/photos";
import { SectionRule } from "@/components/SectionRule";
import { CtaBand } from "@/components/CtaBand";
import { FaqList } from "@/components/FaqList";
import { Reveal } from "@/components/Reveal";
import { Marquee } from "@/components/Marquee";
import { RadiusMap } from "@/components/RadiusMap";
import { BUSINESS, telHref } from "@/lib/business";
import { SERVICES } from "@/lib/services";
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

const STRIP: { slug: string; k: string; cap: string; title: string; w: string }[] = [
  { slug: "marble-bathroom-remodel-lancaster-pa", k: "bathroom-remodel-marble-tile-lancaster-pa", cap: "BATHROOM · LANCASTER · 3 WKS", title: "A 60 year old bathroom learns marble", w: "w-[78vw] sm:w-[420px]" },
  { slug: "winter-composite-deck-elizabethtown-pa", k: "composite-deck-cable-railing-lancaster-pa", cap: "DECK · ELIZABETHTOWN · BUILT IN SNOW", title: "Yes, we build decks in February", w: "w-[78vw] sm:w-[500px]" },
  { slug: "full-interior-remodel-lititz-pa", k: "oak-staircase-renovation-lancaster-pa", cap: "FULL FLOOR · LITITZ · 6 WKS", title: "The whole first floor, one crew", w: "w-[78vw] sm:w-[360px]" },
  { slug: "porch-refinishing-lancaster-pa", k: "porch-steps-refinishing-before-after-pa", cap: "PORCH · LANCASTER · BEFORE / AFTER", title: "One week, one porch, no rebuild", w: "w-[78vw] sm:w-[420px]" },
  { slug: "kitchen-remodel-downingtown-pa", k: "kitchen-remodel-quartz-farmhouse-sink-pa", cap: "KITCHEN · DOWNINGTOWN · 4 WKS", title: "The 2003 kitchen retires", w: "w-[78vw] sm:w-[500px]" },
  { slug: "leaking-shower-rebuild-downingtown-pa", k: "shower-pan-liner-install-pa", cap: "SHOWER · DOWNINGTOWN · DIAGNOSED + REBUILT", title: "The shower that lied, twice", w: "w-[78vw] sm:w-[360px]" },
  { slug: "rowhome-entry-door-coatesville-pa", k: "exterior-entry-door-brick-install-pa", cap: "ENTRY DOOR · COATESVILLE · 1.5 DAYS", title: "Front door diplomacy in brick", w: "w-[78vw] sm:w-[360px]" },
  { slug: "elevated-composite-deck-denver-pa", k: "elevated-composite-deck-brick-ranch-pa", cap: "ELEVATED DECK · DENVER · 2 WKS", title: "A deck eight feet closer to summer", w: "w-[78vw] sm:w-[500px]" },
];

export default function Home() {
  const hero = photo("open-concept-living-remodel-lancaster-pa");
  const featured = SERVICES.find((s) => s.slug === "bathroom-remodeling")!;
  const interiorRest = SERVICES.filter(
    (s) =>
      !s.pillar &&
      !["bathroom-remodeling", "deck-building", "window-door-installation", "porch-deck-refinishing"].includes(s.slug)
  );
  const exterior = ["deck-building", "window-door-installation", "porch-deck-refinishing"].map(
    (slug) => SERVICES.find((s) => s.slug === slug)!
  );

  return (
    <>
      {/* HERO: the job-site drawing */}
      <section className="bg-graph overflow-hidden border-b border-line">
        <div className="mx-auto grid max-w-6xl items-stretch gap-0 px-4 sm:px-6 lg:grid-cols-[1.02fr_1fr]">
          <div className="flex flex-col justify-center py-14 lg:py-20 lg:pr-12">
            <p className="rise eyebrow">
              LICENSED CONTRACTOR · DENVER, PA · {BUSINESS.licenseDisplay}
            </p>
            <h1 className="rise rise-2 mt-4 text-[clamp(2.9rem,7vw,5.4rem)] leading-[0.95] tracking-[-0.02em]">
              One contractor.
              <br />
              The whole job<span className="text-tape">.</span>
            </h1>
            <div className="chalk mt-6" aria-hidden="true" />
            <p className="rise rise-3 mt-6 max-w-xl text-lg text-ink-soft">
              Interior and exterior remodeling across Lancaster and Chester County.
              Framing, drywall, tile, doors, decks and everything between, done by one
              licensed team on one schedule. You keep your weekends.
            </p>
            <div className="rise rise-3 mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={telHref()} className="btn">
                Call {BUSINESS.phoneDisplay}
                <span className="btn-arrow" aria-hidden="true">→</span>
              </a>
              <Link href="/contact" className="btn btn-ghost">
                Request a Free Estimate
              </Link>
            </div>
            <ul className="rise rise-4 spec-plate mt-10 flex flex-wrap gap-x-7 gap-y-2">
              <li className="flex items-center gap-2">
                <span className="inline-block h-2 w-2 bg-vial" aria-hidden="true" />
                NOW BOOKING · AUG 2026
              </li>
              <li>6+ YEARS IN THE TRADE</li>
              <li>REAL PHOTOS, OUR JOBS</li>
            </ul>
          </div>

          <div className="relative my-8 lg:my-12">
            <div className="cropmarks h-full">
              <div className="relative h-[320px] w-full overflow-hidden border border-line sm:h-[420px] lg:h-full lg:min-h-[520px]">
                <Image
                  src={hero.src}
                  alt={hero.alt}
                  fill
                  priority
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="hero-photo object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-4 bg-night/85 px-4 py-3 backdrop-blur-[2px]">
                  <span className="spec-plate text-white/80">
                    FULL FIRST-FLOOR REMODEL · LANCASTER COUNTY
                  </span>
                  <Link
                    href="/projects/full-interior-remodel-lititz-pa"
                    className="spec-plate whitespace-nowrap text-vial underline underline-offset-2 hover:text-white"
                  >
                    THE STORY
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THE JOB WIRE */}
      <Marquee />

      {/* SERVICES */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <Reveal>
          <SectionRule label="WHAT WE BUILD" />
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <h2 className="max-w-xl text-3xl sm:text-4xl">
              Every trade a remodel needs, under one roof
            </h2>
            <Link
              href="/services"
              className="font-display font-bold text-tape-deep underline decoration-2 underline-offset-4"
            >
              All 13 services
            </Link>
          </div>
        </Reveal>

        <div className="grid gap-5 lg:grid-cols-3">
          {/* Featured: bathrooms */}
          <Reveal className="lg:col-span-2 lg:row-span-2">
            <Link
              href={`/services/${featured.slug}`}
              className="group relative block h-full min-h-[340px] overflow-hidden border border-line lg:min-h-[520px]"
            >
              <Pic
                k={featured.hero}
                sizes="(min-width: 1024px) 66vw, 100vw"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-night/90 via-night/40 to-transparent pt-24">
                <div className="p-6 sm:p-8">
                  <p className="spec-plate text-vial">FLAGSHIP TRADE</p>
                  <h3 className="mt-2 font-display text-2xl font-extrabold text-white sm:text-3xl">
                    {featured.name}
                  </h3>
                  <p className="mt-2 max-w-md text-[0.95rem] text-white/85">
                    Waterproofed as a system, tiled like we sign it. Our most requested
                    work, from tub conversions to full primary baths.
                  </p>
                </div>
              </div>
            </Link>
          </Reveal>

          {interiorRest.slice(0, 2).map((s, i) => (
            <Reveal key={s.slug} delay={i * 80}>
              <Link
                href={`/services/${s.slug}`}
                className="group block border border-line bg-paper transition-colors hover:border-tape"
              >
                <div className="aspect-[16/9] overflow-hidden">
                  <Pic
                    k={s.hero}
                    sizes="(min-width: 1024px) 33vw, 100vw"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-display text-[1.05rem] font-bold group-hover:text-tape-deep">
                    {s.name}
                  </h3>
                  <p className="mt-1.5 text-[0.9rem] leading-snug text-ink-soft">{s.short}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {interiorRest.slice(2, 6).map((s, i) => (
            <Reveal key={s.slug} delay={i * 60}>
              <Link
                href={`/services/${s.slug}`}
                className="group flex h-full flex-col border border-line bg-paper transition-colors hover:border-tape"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <Pic
                    k={s.hero}
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-display text-[1rem] font-bold group-hover:text-tape-deep">
                    {s.navName ?? s.name}
                  </h3>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        {/* Full Room Renovation: the combine-everything banner */}
        <Reveal className="mt-5">
          <Link
            href="/services/full-room-renovation"
            className="group grid overflow-hidden border border-line bg-paper transition-colors hover:border-tape sm:grid-cols-[1fr_1.6fr]"
          >
            <div className="h-full min-h-[180px] overflow-hidden">
              <Pic
                k="geometric-accent-wall-lvp-flooring-pa"
                sizes="(min-width: 640px) 38vw, 100vw"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </div>
            <div className="flex flex-col justify-center p-6 sm:p-8">
              <p className="spec-plate">ALL OF THE ABOVE, IN ORDER</p>
              <h3 className="mt-2 font-display text-xl font-extrabold group-hover:text-tape-deep sm:text-2xl">
                Full Room Renovation
              </h3>
              <p className="mt-2 max-w-xl text-[0.95rem] text-ink-soft">
                Floors, walls, ceiling, doors, trim and light for one room, sequenced by
                one crew in one continuous run. Done together it is a renovation. Done
                separately over two years it is a hobby.
              </p>
            </div>
          </Link>
        </Reveal>

        <Reveal className="mt-12">
          <p className="spec-plate mb-4">EXTERIOR DIVISION</p>
        </Reveal>
        <div className="grid gap-5 sm:grid-cols-3">
          {exterior.map((s, i) => (
            <Reveal key={s.slug} delay={i * 80}>
              <Link
                href={`/services/${s.slug}`}
                className="group block border border-line bg-paper transition-colors hover:border-tape"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <Pic
                    k={s.hero}
                    sizes="(min-width: 640px) 33vw, 100vw"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-display text-[1.05rem] font-bold group-hover:text-tape-deep">
                    {s.name}
                  </h3>
                  <p className="mt-1.5 text-[0.9rem] leading-snug text-ink-soft">{s.short}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* WHY ONE CONTRACTOR */}
      <section className="border-y border-line bg-paper">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
          <Reveal>
            <SectionRule label="WHY IT WORKS" />
          </Reveal>
          <div className="grid items-start gap-12 lg:grid-cols-2">
            <Reveal>
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
            </Reveal>
            <div className="grid grid-cols-2 gap-5 pt-2">
              {[
                { k: "shower-framing-cement-board-pa", cap: "DAY 3 · FRAMING", cls: "cropmarks" },
                { k: "marble-shower-mosaic-pan-linear-drain-pa", cap: "DAY 9 · TILE", cls: "mt-10" },
                { k: "drywall-taping-mudding-pa", cap: "DAY 5 · DRYWALL", cls: "-mt-10" },
                { k: "walk-in-shower-glass-slider-marble-pa", cap: "DAY 14 · DONE", cls: "cropmarks" },
              ].map((item, i) => (
                <Reveal key={item.k} delay={i * 90} className={item.cls}>
                  <figure>
                    <div className="aspect-[3/4] overflow-hidden border border-line">
                      <Pic k={item.k} sizes="(min-width: 1024px) 25vw, 50vw" />
                    </div>
                    <figcaption className="spec-plate mt-2">{item.cap}</figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CASE-STUDY STRIP */}
      <section className="overflow-hidden py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <Reveal>
            <SectionRule label="FROM THE JOB LOG" />
            <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
              <h2 className="max-w-xl text-3xl sm:text-4xl">
                43 documented jobs. Each one a story with advice inside.
              </h2>
              <Link
                href="/projects"
                className="font-display font-bold text-tape-deep underline decoration-2 underline-offset-4"
              >
                Read the job log
              </Link>
            </div>
          </Reveal>
        </div>
        <Reveal>
          <div className="snap-row flex gap-5 overflow-x-auto px-4 pb-4 sm:px-[max(1.5rem,calc((100vw-72rem)/2+1.5rem))]">
            {STRIP.map((item) => (
              <Link
                key={item.slug}
                href={`/projects/${item.slug}`}
                className={`group block shrink-0 ${item.w} border border-line bg-paper transition-colors hover:border-tape`}
              >
                <div className="h-[240px] overflow-hidden sm:h-[280px]">
                  <Pic
                    k={item.k}
                    sizes="(min-width: 640px) 500px, 78vw"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                </div>
                <div className="p-4">
                  <p className="spec-plate">{item.cap}</p>
                  <h3 className="mt-1.5 font-display text-[1.05rem] font-bold leading-snug group-hover:text-tape-deep">
                    {item.title}
                  </h3>
                </div>
              </Link>
            ))}
            <div className="w-2 shrink-0" aria-hidden="true" />
          </div>
        </Reveal>
      </section>

      {/* SERVICE RADIUS: the site plan */}
      <section className="bg-graph-dark bg-night text-white">
        <div className="tick-edge h-[7px] w-full opacity-60" aria-hidden="true" />
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.15fr]">
            <Reveal>
              <div className="mb-8 flex items-end gap-4">
                <span className="eyebrow whitespace-nowrap pb-[3px] text-vial">THE SITE PLAN</span>
                <span className="rule min-w-0 flex-1 opacity-25" aria-hidden="true" />
              </div>
              <h2 className="text-3xl text-white sm:text-4xl">
                Based in Denver PA. At home in two counties.
              </h2>
              <p className="mt-5 max-w-xl text-white/80">
                Our shop sits in northern Lancaster County, which puts most of Lancaster,
                Berks and Chester County within an easy drive. City rowhomes, borough
                Victorians, township ranches and farmhouses: we know what each one hides
                behind its walls, because we have opened a lot of them.
              </p>
              <p className="spec-plate mt-6 text-white/50">
                EVERY DOT LINKS TO ITS LOCAL PAGE. NOT ON THE MAP? CALL ANYWAY, THE
                RADIUS IS A GUIDELINE, NOT A FENCE.
              </p>
              <div className="mt-8">
                <Link href="/service-areas" className="btn">
                  All service areas
                  <span className="btn-arrow" aria-hidden="true">→</span>
                </Link>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="hidden sm:block">
                <RadiusMap />
              </div>
              {/* Small screens: tappable city chips instead of the drawing */}
              <ul className="grid grid-cols-2 gap-2.5 sm:hidden">
                {[
                  ["lancaster-pa", "Lancaster"],
                  ["denver-pa", "Denver"],
                  ["ephrata-pa", "Ephrata"],
                  ["lititz-pa", "Lititz"],
                  ["reading-pa", "Reading"],
                  ["lebanon-pa", "Lebanon"],
                  ["elizabethtown-pa", "Elizabethtown"],
                  ["west-chester-pa", "West Chester"],
                  ["downingtown-pa", "Downingtown"],
                  ["coatesville-pa", "Coatesville"],
                ].map(([slug, name]) => (
                  <li key={slug}>
                    <Link
                      href={`/service-areas/${slug}`}
                      className="block border border-white/25 px-3 py-2.5 text-center font-display text-[0.9rem] font-semibold text-white/90 transition-colors hover:border-vial hover:text-vial"
                    >
                      {name}, PA
                    </Link>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* BLOG TEASER */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <Reveal>
          <SectionRule label="STRAIGHT ANSWERS" />
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <h2 className="max-w-xl text-3xl sm:text-4xl">
              Real prices and honest advice, published on purpose
            </h2>
            <Link
              href="/blog"
              className="font-display font-bold text-tape-deep underline decoration-2 underline-offset-4"
            >
              All articles
            </Link>
          </div>
        </Reveal>
        <div className="grid gap-5 md:grid-cols-3">
          {POSTS.slice(0, 3).map((p, i) => (
            <Reveal key={p.slug} delay={i * 80}>
              <Link
                href={`/blog/${p.slug}`}
                className="group flex h-full flex-col border border-line bg-paper p-6 transition-colors hover:border-tape"
              >
                <p className="spec-plate">{p.category.toUpperCase()}</p>
                <h3 className="mt-3 font-display text-[1.1rem] font-bold leading-snug group-hover:text-tape-deep">
                  {p.title}
                </h3>
                <p className="mt-3 flex-1 text-[0.92rem] text-ink-soft">{p.description}</p>
                <p className="spec-plate mt-4 text-tape-deep">
                  READ IT <span aria-hidden="true">→</span>
                </p>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 sm:pb-24">
        <Reveal>
          <FaqList faqs={HOME_FAQS} />
        </Reveal>
      </section>

      <CtaBand />
    </>
  );
}
