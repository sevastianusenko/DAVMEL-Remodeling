import type { Metadata } from "next";
import Link from "next/link";
import { Pic } from "@/components/Pic";
import { FaqList } from "@/components/FaqList";
import { LeadForm } from "@/components/LeadForm";
import { Reveal } from "@/components/Reveal";
import { RadiusMap } from "@/components/RadiusMap";
import { BUSINESS, telHref } from "@/lib/business";
import { CITIES } from "@/lib/cities";

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

const MOSAIC = [
  "bathroom-remodel-marble-tile-lancaster-pa",
  "composite-deck-cable-railing-lancaster-pa",
  "kitchen-remodel-quartz-farmhouse-sink-pa",
  "oak-staircase-renovation-lancaster-pa",
  "blue-entry-door-fan-transom-pa",
  "walk-in-shower-glass-slider-marble-pa",
];

const INDOOR = [
  { slug: "bathroom-remodeling", k: "bathroom-jetted-tub-marble-surround-pa", label: "Bathroom Remodeling" },
  { slug: "kitchen-remodeling", k: "kitchen-remodel-quartz-farmhouse-sink-pa", label: "Kitchen Remodeling" },
  { slug: "basement-finishing", k: "basement-remodel-framing-spray-foam-pa", label: "Basement Finishing" },
  { slug: "drywall-installation-repair", k: "drywall-taping-mudding-pa", label: "Drywall & Plaster" },
  { slug: "tile-installation", k: "marble-shower-mosaic-pan-linear-drain-pa", label: "Tile Installation" },
  { slug: "full-room-renovation", k: "geometric-accent-wall-lvp-flooring-pa", label: "Full Room Renovation" },
];

const OUTDOOR = [
  { slug: "deck-building", k: "elevated-composite-deck-brick-ranch-pa", label: "Deck Building" },
  { slug: "window-door-installation", k: "modern-front-door-sidelites-stone-pa", label: "Windows & Doors" },
  { slug: "porch-deck-refinishing", k: "porch-steps-refinishing-before-after-pa", label: "Porch & Deck Refinishing" },
];

const GALLERY = [
  { slug: "marble-bathroom-remodel-lancaster-pa", k: "bathroom-remodel-marble-tile-lancaster-pa" },
  { slug: "winter-composite-deck-elizabethtown-pa", k: "composite-deck-cable-railing-lancaster-pa" },
  { slug: "full-interior-remodel-lititz-pa", k: "open-concept-living-remodel-lancaster-pa" },
  { slug: "kitchen-remodel-downingtown-pa", k: "kitchen-remodel-quartz-farmhouse-sink-pa" },
  { slug: "porch-refinishing-lancaster-pa", k: "porch-steps-refinishing-before-after-pa" },
  { slug: "gold-black-bathroom-lititz-pa", k: "bathroom-gold-fixtures-black-vanity-pa" },
  { slug: "elevated-composite-deck-denver-pa", k: "elevated-composite-deck-brick-ranch-pa" },
  { slug: "rowhome-entry-door-coatesville-pa", k: "exterior-entry-door-brick-install-pa" },
];

const PROMISES = [
  {
    t: "The estimate is free and written",
    d: "Scope, price and schedule on paper before any work starts. Changes get priced in writing before we do them, not discovered on the invoice.",
    tag: "OUR WORD, IN WRITING",
  },
  {
    t: "Deposits follow PA law",
    d: "No more than one third up front on standard projects, exactly as the PA consumer protection act requires. Milestones after that, tied to visible progress.",
    tag: "PA HIC #PA214721",
  },
  {
    t: "Problems get fixed, not defended",
    d: "Something not right? We come back and make it right. One company did the whole job, so there is nobody to point at except the mirror.",
    tag: "ONE CREW, ONE WARRANTY",
  },
  {
    t: "Verify everything",
    d: "Our license checks out at the Attorney General's registry in two minutes. Insurance certificate comes with the contract. References on request.",
    tag: "LICENSED & INSURED",
  },
];

function SectionHead({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="mb-10 text-center">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="h-section mx-auto mt-2 max-w-3xl">{title}</h2>
    </div>
  );
}

export default function Home() {
  return (
    <>
      {/* HERO: photo mosaic with centered panel */}
      <section className="relative overflow-hidden bg-night">
        <div className="grid h-[540px] grid-cols-2 gap-1.5 opacity-[0.88] sm:h-[560px] sm:grid-cols-3">
          {MOSAIC.map((k, i) => (
            <div key={k} className={`relative overflow-hidden ${i > 3 ? "hidden sm:block" : ""}`}>
              <Pic
                k={k}
                sizes="(min-width: 640px) 33vw, 50vw"
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <div className="rise max-w-xl rounded-xl bg-paper/97 p-8 text-center shadow-2xl sm:p-10">
            <p className="eyebrow">SERVING LANCASTER &amp; CHESTER COUNTY</p>
            <h1 className="mt-3 text-3xl uppercase tracking-wide text-door sm:text-4xl">
              One Contractor.
              <br />
              The Whole Job.
            </h1>
            <p className="mx-auto mt-4 max-w-md text-ink-soft">
              Licensed remodeling company for interior and exterior work. Framing,
              drywall, tile, doors, decks and everything between, on one schedule.
            </p>
            <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
              <a href="#estimate" className="btn">
                Contact Us
              </a>
              <a href={telHref()} className="btn btn-ghost">
                {BUSINESS.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* NAVY STRIP */}
      <div className="bg-door">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-5 sm:flex-row sm:px-6">
          <p className="text-center font-display text-lg font-bold uppercase tracking-wide text-white sm:text-left">
            Why homeowners choose DAVMEL Remodeling
          </p>
          <a href="#estimate" className="btn shrink-0">
            Get a Quote
          </a>
        </div>
      </div>

      {/* THREE FEATURES */}
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-3">
          {[
            {
              t: "One Crew, Every Trade",
              d: "Framing, drywall, tile, doors, trim and exterior work by the same in-house team.",
              icon: (
                <path d="M14 30 30 14m-9-3 8-1 6-6-2 6 6-2-6 6-1 8m-16 4-6 6m10-2-8 8m0-12-6 6" strokeLinecap="round" />
              ),
            },
            {
              t: "Licensed & Insured",
              d: `Registered PA contractor ${BUSINESS.licenseDisplay}, verifiable at the Attorney General's registry.`,
              icon: (
                <path d="M24 6 10 12v10c0 9 6 15 14 20 8-5 14-11 14-20V12L24 6Zm-6 18 4.5 4.5L31 20" strokeLinecap="round" strokeLinejoin="round" />
              ),
            },
            {
              t: "Real Photos, Real Projects",
              d: "43 documented jobs on this site, every photo from our own crew on our own sites.",
              icon: (
                <path d="M8 16h8l3-4h10l3 4h8v22H8V16Zm16 17a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z" strokeLinecap="round" strokeLinejoin="round" />
              ),
            },
          ].map((f, i) => (
            <Reveal key={f.t} delay={i * 80}>
              <div className="flex flex-col items-center text-center">
                <span className="flex h-20 w-20 items-center justify-center rounded-full bg-door text-white">
                  <svg viewBox="0 0 48 48" className="h-10 w-10" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden="true">
                    {f.icon}
                  </svg>
                </span>
                <h3 className="mt-4 font-display text-[1.05rem] font-bold uppercase tracking-wide text-door">
                  {f.t}
                </h3>
                <p className="mt-2 max-w-xs text-[0.95rem] text-ink-soft">{f.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* NAVY TRUST CARD */}
      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
        <Reveal>
          <div className="rounded-2xl bg-door p-8 text-white shadow-xl sm:p-12">
            <p className="eyebrow text-vial">EST. 2020 · DENVER, PA</p>
            <h2 className="mt-2 max-w-2xl text-2xl font-extrabold uppercase tracking-wide sm:text-3xl">
              Lancaster County&apos;s one-call remodeling company
            </h2>
            <p className="mt-4 max-w-2xl text-white/85">
              DAVMEL Remodeling is built on a simple bet: one licensed crew that covers
              the whole job beats a parade of subcontractors every time. Six plus years
              in the Pennsylvania trades, a few hundred finished projects, and a
              schedule that holds because no outside company can blow it up. We show up
              when we said, protect your house like we live there, and put every number
              in writing.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link href="/about" className="btn">
                Get to Know Us
              </Link>
              <Link href="/projects" className="btn btn-ghost-light">
                See Our Work
              </Link>
            </div>
          </div>
        </Reveal>
      </section>

      {/* SERVICES */}
      <section className="bg-paper py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHead
            eyebrow="YOUR MOST RELIABLE REMODELING SERVICES"
            title="Comprehensive remodeling services"
          />

          <p className="spec-plate mb-4 text-center text-door">INDOOR SERVICES</p>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {INDOOR.map((s, i) => (
              <Reveal key={s.slug} delay={i * 60}>
                <Link href={`/services/${s.slug}`} className="group relative block overflow-hidden rounded-xl shadow-md">
                  <div className="aspect-[4/3]">
                    <Pic
                      k={s.k}
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                    />
                  </div>
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-night/85 to-transparent pt-12">
                    <p className="rounded-tr-lg bg-door/95 px-4 py-2.5 font-display text-[0.95rem] font-bold uppercase tracking-wide text-white sm:inline-block">
                      {s.label}
                    </p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>

          <p className="spec-plate mb-4 mt-12 text-center text-door">OUTDOOR SERVICES</p>
          <div className="grid gap-5 sm:grid-cols-3">
            {OUTDOOR.map((s, i) => (
              <Reveal key={s.slug} delay={i * 60}>
                <Link href={`/services/${s.slug}`} className="group relative block overflow-hidden rounded-xl shadow-md">
                  <div className="aspect-[4/3]">
                    <Pic
                      k={s.k}
                      sizes="(min-width: 640px) 33vw, 100vw"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                    />
                  </div>
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-night/85 to-transparent pt-12">
                    <p className="rounded-tr-lg bg-door/95 px-4 py-2.5 font-display text-[0.95rem] font-bold uppercase tracking-wide text-white sm:inline-block">
                      {s.label}
                    </p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link href="/services" className="btn">
              All 13 Services
            </Link>
          </div>
        </div>
      </section>

      {/* BATHROOM BANNER */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <Reveal>
          <div className="grid items-stretch overflow-hidden rounded-2xl border border-line bg-paper shadow-lg lg:grid-cols-2">
            <div className="flex flex-col justify-center p-8 sm:p-12">
              <p className="eyebrow">FLAGSHIP TRADE</p>
              <h2 className="mt-2 text-2xl font-extrabold uppercase tracking-wide text-door sm:text-3xl">
                Luxurious bathroom transformations
              </h2>
              <p className="mt-4 max-w-md text-ink-soft">
                Waterproofed as a system, tiled like we sign it. From tub to shower
                conversions to full primary baths with marble, glass and heated floors.
                Most projects run two to three weeks, with honest prices published
                right on the site.
              </p>
              <div className="mt-6">
                <Link href="/services/bathroom-remodeling" className="btn">
                  Get Service Today
                </Link>
              </div>
            </div>
            <div className="min-h-[280px]">
              <Pic
                k="walk-in-shower-glass-slider-marble-pa"
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </Reveal>
      </section>

      {/* DECK BANNER (dark) */}
      <section className="relative overflow-hidden bg-night">
        <div className="absolute inset-0 opacity-30">
          <Pic
            k="composite-deck-cable-railing-lancaster-pa"
            sizes="100vw"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="relative mx-auto max-w-6xl px-4 py-20 text-center sm:px-6">
          <p className="eyebrow text-vial">BUILT FOR PENNSYLVANIA WEATHER</p>
          <h2 className="mx-auto mt-2 max-w-2xl text-2xl font-extrabold uppercase tracking-wide text-white sm:text-3xl">
            Durable decks, windows and doors
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/85">
            Composite decks on engineered frames, replacement windows with aluminum
            capping, entry doors flashed to survive thirty winters. Same crew, same
            license, same phone number as our interior work.
          </p>
          <div className="mt-6">
            <Link href="/services/exterior-remodeling" className="btn">
              Explore Exterior Work
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICE AREA */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <SectionHead
          eyebrow="WHERE WE WORK"
          title="Your best remodeling services in Lancaster & Chester County"
        />
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <p className="max-w-xl text-ink-soft">
              Home base is Denver, PA in northern Lancaster County. From there we cover
              about 75 miles in every direction: city rowhomes, borough Victorians,
              township ranches and farmhouses. Every town below links to a local page
              with notes on the housing and what it usually needs.
            </p>
            <ul className="mt-6 grid grid-cols-2 gap-x-6 gap-y-2.5">
              {CITIES.map((c) => (
                <li key={c.slug}>
                  <Link
                    href={`/service-areas/${c.slug}`}
                    className="group flex items-center gap-2 font-display text-[0.95rem] font-semibold text-ink hover:text-tape-deep"
                  >
                    <svg viewBox="0 0 16 16" className="h-4 w-4 shrink-0 text-tape" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden="true">
                      <path d="M3 8.5 6.5 12 13 4.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {c.name}, PA
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Link href="/service-areas" className="btn">
                All Service Areas
              </Link>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="hidden rounded-2xl bg-night p-6 shadow-xl sm:block">
              <RadiusMap />
            </div>
          </Reveal>
        </div>
      </section>

      {/* GALLERY */}
      <section className="bg-paper py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHead eyebrow="RECENT WORK" title="Let's bring your vision to life" />
        </div>
        <Reveal>
          <div className="snap-row flex gap-5 overflow-x-auto px-4 pb-4 sm:px-[max(1.5rem,calc((100vw-72rem)/2+1.5rem))]">
            {GALLERY.map((item) => (
              <Link
                key={item.slug}
                href={`/projects/${item.slug}`}
                className="group block w-[75vw] shrink-0 overflow-hidden rounded-xl shadow-md sm:w-[380px]"
              >
                <div className="h-[240px] sm:h-[260px]">
                  <Pic
                    k={item.k}
                    sizes="(min-width: 640px) 380px, 75vw"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                  />
                </div>
              </Link>
            ))}
            <div className="w-2 shrink-0" aria-hidden="true" />
          </div>
        </Reveal>
        <div className="mt-8 text-center">
          <Link href="/projects" className="btn">
            Read the Stories Behind These Photos
          </Link>
        </div>
      </section>

      {/* PROMISES (testimonial-style cards) */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <SectionHead
          eyebrow="NO REVIEWS BOUGHT, NONE INVENTED"
          title="Our side of every deal, in writing"
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PROMISES.map((p, i) => (
            <Reveal key={p.t} delay={i * 70}>
              <div className="flex h-full flex-col rounded-xl border border-line bg-paper p-6 shadow-sm">
                <svg viewBox="0 0 24 24" className="h-6 w-6 text-tape" fill="currentColor" aria-hidden="true">
                  <path d="M12 2 3 6v6c0 5.2 3.8 9 9 12 5.2-3 9-6.8 9-12V6l-9-4Zm-1.2 13.6-3.4-3.4 1.4-1.4 2 2 4.4-4.4 1.4 1.4-5.8 5.8Z" />
                </svg>
                <h3 className="mt-3 font-display text-[1rem] font-bold text-door">{p.t}</h3>
                <p className="mt-2 flex-1 text-[0.9rem] text-ink-soft">{p.d}</p>
                <p className="spec-plate mt-4 text-tape">{p.tag}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <p className="mt-6 text-center text-[0.95rem] text-ink-soft">
          This website is new and so is our review page. First Google reviews land here
          the honest way: one finished job at a time.{" "}
          <Link href="/reviews" className="font-semibold text-tape-deep underline underline-offset-2">
            Read our full promises
          </Link>
        </p>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-4 pb-16 sm:px-6">
        <SectionHead eyebrow="GOOD QUESTIONS" title="Frequently asked questions" />
        <FaqList faqs={HOME_FAQS} heading="" />
      </section>

      {/* CONTACT / PHOTO ESTIMATE */}
      <section id="estimate" className="bg-door">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <div className="mb-10 text-center">
            <p className="eyebrow text-vial">CONTACT US TODAY</p>
            <h2 className="h-section mt-2 text-white">Send photos, get a preliminary quote</h2>
            <p className="mx-auto mt-3 max-w-xl text-white/85">
              Snap 2 to 4 pictures of the project, fill the form in under a minute, and
              we call back with a real ballpark the same business day. Prefer to talk
              first?{" "}
              <a href={telHref()} className="font-display font-bold text-vial underline underline-offset-4">
                {BUSINESS.phoneDisplay}
              </a>
            </p>
          </div>
          <div className="mx-auto max-w-2xl">
            <LeadForm />
          </div>
          <p className="spec-plate mt-6 text-center text-white/60">
            {BUSINESS.licenseDisplay} · LICENSED &amp; INSURED · SERVING LANCASTER + CHESTER COUNTY
          </p>
        </div>
      </section>
    </>
  );
}
