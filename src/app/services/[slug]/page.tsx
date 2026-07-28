import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { SERVICES, getService } from "@/lib/services";
import { PROJECTS } from "@/lib/projects";
import { photo } from "@/lib/photos";
import { Pic } from "@/components/Pic";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SectionHead } from "@/components/SectionHead";
import { FaqList } from "@/components/FaqList";
import { LeadForm } from "@/components/LeadForm";
import { Reveal } from "@/components/Reveal";
import { JsonLd } from "@/components/JsonLd";
import { BUSINESS, AREA_SERVED, telHref } from "@/lib/business";

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) return {};
  return {
    title: s.metaTitle,
    description: s.metaDescription,
    alternates: { canonical: `/services/${s.slug}` },
    openGraph: {
      title: s.metaTitle,
      description: s.metaDescription,
      images: [photo(s.hero).src],
    },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) notFound();
  const hero = photo(s.hero);
  const related = s.related.map((r) => getService(r)!).filter(Boolean);
  const children = (s.children ?? []).map((c) => getService(c)!).filter(Boolean);
  const cases = PROJECTS.filter((p) => p.serviceSlugs.includes(s.slug)).slice(0, 3);

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: s.name,
          serviceType: s.name,
          description: s.metaDescription,
          url: `${BUSINESS.url}/services/${s.slug}`,
          provider: { "@id": BUSINESS.url + "/#business" },
          areaServed: AREA_SERVED.map((name) => ({ "@type": "City", name })),
        }}
      />

      {/* HERO: photo with centered floating panel, home style */}
      <section className="relative overflow-hidden bg-night">
        <div className="relative h-[420px] sm:h-[460px]">
          <Image src={hero.src} alt={hero.alt} fill priority sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-night/35" />
        </div>
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <div className="rise max-w-2xl rounded-2xl bg-paper/97 p-8 text-center shadow-2xl sm:p-10">
            <Breadcrumbs
              items={[
                { name: "Services", href: "/services" },
                { name: s.name, href: `/services/${s.slug}` },
              ]}
            />
            <h1 className="text-2xl uppercase tracking-wide text-door sm:text-4xl">{s.name}</h1>
            <p className="mx-auto mt-3 max-w-xl text-ink-soft">{s.short}</p>
            <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
              <a href={telHref()} className="btn">
                Call {BUSINESS.phoneDisplay}
              </a>
              <a href="#contact" className="btn btn-ghost">
                Get a Photo Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="mx-auto max-w-3xl px-4 pt-14 sm:px-6">
        <Reveal>
          <div className="prose-site">
            {s.intro.map((p, i) => (
              <p key={i} className={i === 0 ? "text-lg" : undefined}>
                {p}
              </p>
            ))}
          </div>
        </Reveal>
      </section>

      {/* PILLAR CHILDREN */}
      {children.length > 0 && (
        <section className="mx-auto max-w-6xl px-4 pt-14 sm:px-6">
          <SectionHead eyebrow="THE FULL MENU" title={`Every ${s.slug === "exterior-remodeling" ? "exterior" : "interior"} service`} />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {children.map((c, i) => (
              <Reveal key={c.slug} delay={i * 60} dir="zoom" className="h-full">
                <Link href={`/services/${c.slug}`} className="lift group flex h-full flex-col overflow-hidden rounded-xl shadow-md">
                  <div className="aspect-[16/10] overflow-hidden">
                    <Pic
                      k={c.hero}
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                    />
                  </div>
                  <p className="flex flex-1 items-center justify-center gap-2 bg-door px-4 py-3.5 text-center font-display text-[0.9rem] font-bold uppercase tracking-wide text-white transition-colors group-hover:bg-door-deep">
                    {c.name}
                    <span aria-hidden="true" className="text-vial">➤</span>
                  </p>
                </Link>
              </Reveal>
            ))}
          </div>
        </section>
      )}

      {/* WHAT WE DO */}
      <section className="mx-auto max-w-6xl px-4 pt-16 sm:px-6">
        <SectionHead eyebrow="WHAT WE DO" title={`${s.name}: the full scope`} />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {s.included.map((item, i) => (
            <Reveal key={item.t} delay={i * 60} dir="zoom" className="h-full">
              <div className="lift flex h-full flex-col rounded-xl border border-line bg-paper p-6 shadow-sm">
                <svg viewBox="0 0 24 24" className="h-7 w-7 text-tape" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
                  <circle cx="12" cy="12" r="10" />
                  <path d="m7.5 12.5 3 3 6-6.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <h3 className="mt-3 font-display text-[1.02rem] font-bold text-door">{item.t}</h3>
                <p className="mt-2 flex-1 text-[0.92rem] text-ink-soft">{item.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      {s.process && (
        <section className="mx-auto max-w-6xl px-4 pt-16 sm:px-6">
          <SectionHead eyebrow="HOW IT GOES" title="Our process, step by step" />
          <ol className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {s.process.map((step, i) => (
              <Reveal key={step.t} delay={i * 80} className="h-full">
                <li className="lift flex h-full flex-col rounded-xl border border-line bg-paper p-6 shadow-sm">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-door font-display text-lg font-extrabold text-white">
                    {i + 1}
                  </span>
                  <h3 className="mt-4 font-display text-[1rem] font-bold text-door">{step.t}</h3>
                  <p className="mt-2 text-[0.9rem] text-ink-soft">{step.d}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </section>
      )}

      {/* PRICE */}
      {s.price && (
        <section className="mx-auto max-w-6xl px-4 pt-16 sm:px-6">
          <SectionHead eyebrow="HONEST NUMBERS" title="What it costs around here" />
          <Reveal dir="zoom">
            <div className="mx-auto max-w-2xl overflow-hidden rounded-2xl border border-line bg-paper shadow-lg">
              <p className="bg-door px-6 py-3.5 text-center font-display text-[0.95rem] font-bold uppercase tracking-wide text-white">
                2026 ranges, written quotes are free and exact
              </p>
              <table className="w-full">
                <caption className="sr-only">{s.name} price ranges</caption>
                <tbody>
                  {s.price.rows.map((r) => (
                    <tr key={r.label} className="border-b border-line-soft last:border-0">
                      <th scope="row" className="px-6 py-4 text-left font-display text-[0.95rem] font-semibold">
                        {r.label}
                      </th>
                      <td className="px-6 py-4 text-right font-display text-[0.95rem] font-bold text-door">
                        {r.range}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mx-auto mt-4 max-w-2xl text-center text-[0.9rem] text-ink-soft">{s.price.note}</p>
          </Reveal>
        </section>
      )}

      {/* COMPLETED PROJECTS */}
      {cases.length > 0 && (
        <section className="mx-auto max-w-6xl px-4 pt-16 sm:px-6">
          <SectionHead eyebrow="FROM THE JOB LOG" title="Projects we completed in this trade" />
          <div className="grid gap-5 md:grid-cols-3">
            {cases.map((p, i) => (
              <Reveal key={p.slug} delay={i * 80} dir="zoom" className="h-full">
                <Link href={`/projects/${p.slug}`} className="lift group flex h-full flex-col overflow-hidden rounded-xl border border-line bg-paper shadow-md">
                  <div className="aspect-[16/10] overflow-hidden">
                    <Pic
                      k={p.hero}
                      sizes="(min-width: 768px) 33vw, 100vw"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <p className="spec-plate text-tape">
                      {p.city.name.toUpperCase()}, PA · {p.duration.toUpperCase()}
                    </p>
                    <h3 className="mt-2 font-display text-[1.02rem] font-bold leading-snug text-door group-hover:text-tape-deep">
                      {p.title}
                    </h3>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/projects" className="btn btn-ghost">
              All {PROJECTS.length} Project Stories
            </Link>
          </div>
        </section>
      )}

      {/* GALLERY */}
      <section className="mx-auto max-w-6xl px-4 pt-16 sm:px-6">
        <SectionHead eyebrow="FROM OUR JOBS" title="Photos from real sites" />
        <Reveal>
          <div className="columns-2 gap-4 lg:columns-3 [&>div]:mb-4">
            {s.photos.map((k) => (
              <div key={k} className="overflow-hidden rounded-xl shadow-sm">
                <Pic k={k} sizes="(min-width: 1024px) 33vw, 50vw" className="h-auto w-full" />
              </div>
            ))}
          </div>
          <p className="spec-plate mt-3 text-center">
            EVERY PHOTO: OUR CREW, OUR CLIENTS&apos; HOMES. NO STOCK.
          </p>
        </Reveal>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-4 pt-16 sm:px-6">
        <SectionHead eyebrow="GOOD QUESTIONS" title="Questions we hear a lot" />
        <Reveal>
          <FaqList faqs={s.faqs} heading="" />
        </Reveal>
      </section>

      {/* RELATED */}
      {related.length > 0 && (
        <section className="mx-auto max-w-6xl px-4 pt-14 sm:px-6">
          <Reveal>
            <p className="spec-plate mb-4 text-center text-door">OFTEN COMBINED WITH</p>
            <div className="flex flex-wrap justify-center gap-3">
              {related.map((r) => (
                <Link key={r.slug} href={`/services/${r.slug}`} className="btn btn-ghost">
                  {r.name}
                </Link>
              ))}
            </div>
          </Reveal>
        </section>
      )}

      {/* CONTACT / PHOTO QUOTE */}
      <section id="contact" className="relative mt-16 overflow-hidden">
        <Image
          src="/images/stock-house-blossom.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-door/70" />
        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <div className="mb-10 text-center">
            <Reveal>
              <p className="eyebrow text-vial">FREE WRITTEN ESTIMATES</p>
              <h2 className="h-section mt-2 text-white">
                Planning {s.name.toLowerCase()}? Send photos.
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-white/90">
                Snap the room or the problem, send the form, and we call back with a
                real ballpark the same business day. Or talk first:{" "}
                <a href={telHref()} className="font-display font-bold text-vial underline underline-offset-4">
                  {BUSINESS.phoneDisplay}
                </a>
              </p>
            </Reveal>
          </div>
          <Reveal dir="zoom">
            <div className="mx-auto max-w-2xl overflow-hidden rounded-2xl shadow-2xl">
              <LeadForm />
            </div>
          </Reveal>
          <p className="spec-plate mt-6 text-center text-white/70">
            {BUSINESS.licenseDisplay} · LICENSED &amp; INSURED · SERVING LANCASTER + CHESTER COUNTY
          </p>
        </div>
      </section>
    </>
  );
}
