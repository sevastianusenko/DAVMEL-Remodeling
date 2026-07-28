import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { CITIES, getCity } from "@/lib/cities";
import { getService } from "@/lib/services";
import { photo } from "@/lib/photos";
import { Pic } from "@/components/Pic";
import { Rich } from "@/components/Rich";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SectionRule } from "@/components/SectionRule";
import { FaqList } from "@/components/FaqList";
import { CtaBand } from "@/components/CtaBand";
import { JsonLd } from "@/components/JsonLd";
import { BUSINESS, telHref } from "@/lib/business";
import { SERVICES } from "@/lib/services";

export function generateStaticParams() {
  return CITIES.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const c = getCity(slug);
  if (!c) return {};
  return {
    title: c.metaTitle,
    description: c.metaDescription,
    alternates: { canonical: `/service-areas/${c.slug}` },
    openGraph: { title: c.metaTitle, description: c.metaDescription, images: [photo(c.hero).src] },
  };
}

export default async function CityPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const c = getCity(slug);
  if (!c) notFound();
  const hero = photo(c.hero);
  const nearby = CITIES.filter((x) => x.slug !== c.slug && x.county === c.county).slice(0, 3);

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: `Remodeling in ${c.name}, PA`,
          serviceType: "Home remodeling",
          url: `${BUSINESS.url}/service-areas/${c.slug}`,
          provider: { "@id": BUSINESS.url + "/#business" },
          areaServed: { "@type": "City", name: `${c.name}, PA` },
        }}
      />

      <section className="relative">
        <div className="relative h-[38vh] min-h-[300px] max-h-[440px] w-full">
          <Image src={hero.src} alt={hero.alt} fill priority sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-night/80 via-night/20 to-transparent" />
        </div>
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="relative -mt-24 max-w-2xl border border-line bg-plaster p-7 sm:p-9">
            <Breadcrumbs
              items={[
                { name: "Service Areas", href: "/service-areas" },
                { name: `${c.name}, PA`, href: `/service-areas/${c.slug}` },
              ]}
            />
            <h1 className="text-3xl sm:text-4xl">Remodeling Contractor in {c.name}, PA</h1>
            <div className="chalk mt-4" aria-hidden="true" />
            <p className="spec-plate mt-4">
              {c.county.toUpperCase()} · {c.driveTime.toUpperCase()}
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a href={telHref()} className="btn">Call {BUSINESS.phoneDisplay}</a>
              <Link href="/contact" className="btn btn-ghost">Free Estimate</Link>
            </div>
          </div>
        </div>
      </section>

      <article className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="prose-site max-w-3xl">
          {c.intro.map((p, i) => (
            <p key={i} className={i === 0 ? "text-lg" : undefined}>
              <Rich text={p} />
            </p>
          ))}
        </div>

        <section className="mt-14">
          <SectionRule label={`MOST REQUESTED IN ${c.name.toUpperCase()}`} />
          <div className="grid gap-5 md:grid-cols-3">
            {c.emphasis.map((e) => {
              const s = getService(e.slug)!;
              return (
                <Link key={e.slug} href={`/services/${s.slug}`} className="group border border-line bg-paper transition-colors hover:border-tape">
                  <div className="aspect-[4/3] overflow-hidden">
                    <Pic k={s.hero} sizes="(min-width: 768px) 33vw, 100vw" className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]" />
                  </div>
                  <div className="p-4">
                    <h3 className="font-display font-bold group-hover:text-tape-deep">{s.name}</h3>
                    <p className="mt-1 text-[0.9rem] text-ink-soft">{e.why}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        <section className="mt-14">
          <SectionRule label="EVERYTHING WE DO HERE" />
          <ul className="grid grid-cols-2 gap-x-8 gap-y-2.5 md:grid-cols-3">
            {SERVICES.filter((s) => !s.pillar).map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`} className="text-[0.95rem] text-ink underline decoration-line decoration-2 underline-offset-4 hover:text-tape-deep hover:decoration-tape">
                  {s.name} in {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-14 max-w-3xl">
          <FaqList faqs={c.faqs} heading={`${c.name} questions`} />
        </section>

        {nearby.length > 0 && (
          <section className="mt-14">
            <SectionRule label="ALSO NEARBY" />
            <div className="flex flex-wrap gap-3">
              {nearby.map((n) => (
                <Link key={n.slug} href={`/service-areas/${n.slug}`} className="btn btn-ghost">
                  {n.name}, PA
                </Link>
              ))}
            </div>
          </section>
        )}
      </article>

      <CtaBand
        title={`Remodeling in ${c.name}? Let us look at it.`}
        text="Free written estimate, straight answers, and a crew that shows up when the schedule says."
      />
    </>
  );
}
