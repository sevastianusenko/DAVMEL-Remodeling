import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { SERVICES, getService } from "@/lib/services";
import { photo } from "@/lib/photos";
import { Pic } from "@/components/Pic";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SectionRule } from "@/components/SectionRule";
import { FaqList } from "@/components/FaqList";
import { CtaBand } from "@/components/CtaBand";
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

      {/* Hero */}
      <section className="relative">
        <div className="relative h-[42vh] min-h-[320px] max-h-[480px] w-full">
          <Image src={hero.src} alt={hero.alt} fill priority sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-night/80 via-night/20 to-transparent" />
        </div>
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="relative -mt-28 max-w-2xl border border-line bg-plaster p-7 sm:p-9">
            <Breadcrumbs items={[{ name: "Services", href: "/services" }, { name: s.name, href: `/services/${s.slug}` }]} />
            <h1 className="text-3xl sm:text-4xl">{s.name}</h1>
            <div className="chalk mt-4" aria-hidden="true" />
            <p className="mt-4 text-lg text-ink-soft">{s.short}</p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a href={telHref()} className="btn">Call {BUSINESS.phoneDisplay}</a>
              <Link href="/contact" className="btn btn-ghost">Free Estimate</Link>
            </div>
          </div>
        </div>
      </section>

      <article className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        {/* Intro */}
        <div className="prose-site max-w-3xl">
          {s.intro.map((p, i) => (
            <p key={i} className={i === 0 ? "text-lg" : undefined}>{p}</p>
          ))}
        </div>

        {/* Pillar children */}
        {children.length > 0 && (
          <section className="mt-14">
            <SectionRule label="THE SERVICES" />
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {children.map((c) => (
                <Link key={c.slug} href={`/services/${c.slug}`} className="group border border-line bg-paper transition-colors hover:border-tape">
                  <div className="aspect-[4/3] overflow-hidden">
                    <Pic k={c.hero} sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw" className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]" />
                  </div>
                  <div className="p-4">
                    <h3 className="font-display font-bold group-hover:text-tape-deep">{c.name}</h3>
                    <p className="mt-1 text-[0.88rem] leading-snug text-ink-soft">{c.short}</p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Included */}
        <section className="mt-14">
          <SectionRule label="WHAT WE DO" />
          <div className="grid gap-x-10 gap-y-7 sm:grid-cols-2 lg:grid-cols-3">
            {s.included.map((item) => (
              <div key={item.t}>
                <h3 className="flex items-baseline gap-2.5 font-display text-[1.05rem] font-bold">
                  <span className="inline-block h-[3px] w-5 shrink-0 translate-y-[-3px] bg-oak" aria-hidden="true" />
                  {item.t}
                </h3>
                <p className="mt-1.5 text-[0.95rem] text-ink-soft">{item.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Process */}
        {s.process && (
          <section className="mt-14">
            <SectionRule label="HOW IT GOES" />
            <ol className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {s.process.map((step, i) => (
                <li key={step.t} className="border border-line bg-paper p-5">
                  <p className="spec-plate">STEP {String(i + 1).padStart(2, "0")}</p>
                  <h3 className="mt-2 font-display text-[1.05rem] font-bold">{step.t}</h3>
                  <p className="mt-1.5 text-[0.92rem] text-ink-soft">{step.d}</p>
                </li>
              ))}
            </ol>
          </section>
        )}

        {/* Price */}
        {s.price && (
          <section className="mt-14">
            <SectionRule label="HONEST NUMBERS" />
            <div className="max-w-2xl border border-line bg-paper">
              <table className="w-full">
                <caption className="sr-only">{s.name} price ranges</caption>
                <tbody>
                  {s.price.rows.map((r) => (
                    <tr key={r.label} className="border-b border-line-soft last:border-0">
                      <th scope="row" className="px-5 py-3.5 text-left font-display text-[0.95rem] font-semibold">
                        {r.label}
                      </th>
                      <td className="px-5 py-3.5 text-right font-mono text-[0.9rem] font-medium text-door-deep">
                        {r.range}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 max-w-2xl text-[0.9rem] text-ink-soft">{s.price.note}</p>
          </section>
        )}

        {/* Gallery */}
        <section className="mt-14">
          <SectionRule label="FROM OUR JOBS" />
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-3">
            {s.photos.map((k) => (
              <div key={k} className="aspect-[4/3] overflow-hidden border border-line">
                <Pic k={k} sizes="(min-width: 1024px) 33vw, 50vw" />
              </div>
            ))}
          </div>
          <p className="spec-plate mt-3">EVERY PHOTO: OUR CREW, OUR CLIENTS&apos; HOMES. NO STOCK.</p>
        </section>

        {/* FAQ */}
        <section className="mt-14 max-w-3xl">
          <FaqList faqs={s.faqs} />
        </section>

        {/* Related */}
        {related.length > 0 && (
          <section className="mt-14">
            <SectionRule label="OFTEN COMBINED WITH" />
            <div className="flex flex-wrap gap-3">
              {related.map((r) => (
                <Link key={r.slug} href={`/services/${r.slug}`} className="btn btn-ghost">
                  {r.name}
                </Link>
              ))}
            </div>
          </section>
        )}
      </article>

      <CtaBand
        title={`Planning ${s.name.toLowerCase()}?`}
        text="Tell us what you have in mind. We will look at it, give you a real number in writing, and you decide from there."
      />
    </>
  );
}
