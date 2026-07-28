import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { PROJECTS, getProject } from "@/lib/projects";
import { getService } from "@/lib/services";
import { photo } from "@/lib/photos";
import { Pic } from "@/components/Pic";
import { Rich } from "@/components/Rich";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SectionRule } from "@/components/SectionRule";
import { CtaBand } from "@/components/CtaBand";
import { JsonLd } from "@/components/JsonLd";
import { BUSINESS } from "@/lib/business";

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) return {};
  return {
    title: p.metaTitle,
    description: p.metaDescription,
    alternates: { canonical: `/projects/${p.slug}` },
    openGraph: {
      type: "article",
      title: p.metaTitle,
      description: p.metaDescription,
      images: [photo(p.hero).src],
    },
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) notFound();
  const hero = photo(p.hero);
  const services = p.serviceSlugs.map((s) => getService(s)!).filter(Boolean);
  const more = PROJECTS.filter(
    (x) => x.slug !== p.slug && (x.city.slug === p.city.slug || x.serviceSlugs.some((s) => p.serviceSlugs.includes(s)))
  ).slice(0, 3);

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: p.title,
          description: p.metaDescription,
          image: BUSINESS.url + hero.src,
          author: { "@type": "Person", name: BUSINESS.owner },
          publisher: { "@id": BUSINESS.url + "/#business" },
          mainEntityOfPage: `${BUSINESS.url}/projects/${p.slug}`,
          about: services.map((s) => ({ "@type": "Service", name: s.name })),
          contentLocation: { "@type": "City", name: `${p.city.name}, PA` },
        }}
      />

      <article className="mx-auto max-w-3xl px-4 pt-10 sm:px-6">
        <Breadcrumbs
          items={[
            { name: "Projects", href: "/projects" },
            { name: p.title, href: `/projects/${p.slug}` },
          ]}
        />
        <p className="spec-plate">
          CASE STUDY ·{" "}
          <Link href={`/service-areas/${p.city.slug}`} className="underline hover:text-tape-deep">
            {p.city.name.toUpperCase()}, PA
          </Link>{" "}
          · {p.duration.toUpperCase()}
        </p>
        <h1 className="mt-3 text-3xl sm:text-4xl">{p.title}</h1>
        <div className="chalk mt-5" aria-hidden="true" />

        <div className="mt-8 overflow-hidden border border-line">
          <Image
            src={hero.src}
            alt={hero.alt}
            width={hero.width}
            height={hero.height}
            priority
            sizes="(min-width: 768px) 768px, 100vw"
            className="h-auto w-full"
          />
        </div>

        {/* Job card */}
        <div className="mt-6 border border-line bg-paper p-5">
          <p className="spec-plate mb-3">JOB CARD</p>
          <div className="flex flex-wrap gap-x-8 gap-y-2 text-[0.92rem]">
            <div>
              <span className="font-display font-bold">Scope: </span>
              {p.scope.join(" · ")}
            </div>
            <div>
              <span className="font-display font-bold">Services: </span>
              {services.map((s, i) => (
                <span key={s.slug}>
                  {i > 0 && ", "}
                  <Link href={`/services/${s.slug}`} className="text-tape-deep underline underline-offset-2">
                    {s.name}
                  </Link>
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="prose-site mt-8">
          {p.intro.map((t, i) => (
            <p key={i} className="text-lg">
              <Rich text={t} />
            </p>
          ))}
          {p.sections.map((s) => (
            <section key={s.h2}>
              <h2>{s.h2}</h2>
              {s.ps.map((t, i) => (
                <p key={i}>
                  <Rich text={t} />
                </p>
              ))}
              {s.list && (
                <ul>
                  {s.list.map((item, i) => (
                    <li key={i}>
                      <Rich text={item} />
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>

        {/* Gallery */}
        {p.photos.length > 1 && (
          <div className="mt-10">
            <SectionRule label="PROJECT PHOTOS" />
            <div className="grid grid-cols-2 gap-4">
              {p.photos.map((k) => (
                <div key={k} className="overflow-hidden border border-line">
                  <Pic k={k} sizes="(min-width: 768px) 384px, 50vw" className="h-full w-full object-cover" />
                </div>
              ))}
            </div>
            <p className="spec-plate mt-3">SHOT ON SITE BY OUR CREW. NO STOCK, NO STAGING.</p>
          </div>
        )}

        {/* More */}
        {more.length > 0 && (
          <div className="mt-12 border-t border-line pt-8">
            <p className="spec-plate mb-4">MORE LIKE THIS</p>
            <ul className="space-y-3">
              {more.map((m) => (
                <li key={m.slug}>
                  <Link href={`/projects/${m.slug}`} className="font-display font-bold text-tape-deep underline decoration-2 underline-offset-4">
                    {m.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </article>

      <div className="mt-14">
        <CtaBand
          title={`Want this done in ${p.city.name}?`}
          text="Same crew, same standard, your address. Estimates are free and written."
        />
      </div>
    </>
  );
}
