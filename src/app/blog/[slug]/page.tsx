import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { POSTS, getPost } from "@/lib/blog";
import { photo } from "@/lib/photos";
import { Rich } from "@/components/Rich";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FaqList } from "@/components/FaqList";
import { CtaBand } from "@/components/CtaBand";
import { JsonLd } from "@/components/JsonLd";
import { BUSINESS } from "@/lib/business";

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const p = getPost(slug);
  if (!p) return {};
  return {
    title: p.title,
    description: p.description,
    alternates: { canonical: `/blog/${p.slug}` },
    openGraph: {
      type: "article",
      title: p.title,
      description: p.description,
      images: [photo(p.hero).src],
      publishedTime: p.date,
    },
  };
}

function fmtDate(iso: string) {
  return new Date(iso + "T12:00:00Z").toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = getPost(slug);
  if (!p) notFound();
  const hero = photo(p.hero);
  const more = POSTS.filter((x) => x.slug !== p.slug).slice(0, 3);

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: p.title,
          description: p.description,
          datePublished: p.date,
          image: BUSINESS.url + hero.src,
          author: { "@type": "Person", name: BUSINESS.owner },
          publisher: { "@id": BUSINESS.url + "/#business" },
          mainEntityOfPage: `${BUSINESS.url}/blog/${p.slug}`,
        }}
      />

      <article className="mx-auto max-w-3xl px-4 pt-10 sm:px-6">
        <Breadcrumbs items={[{ name: "Blog", href: "/blog" }, { name: p.title, href: `/blog/${p.slug}` }]} />
        <p className="spec-plate">
          {p.category.toUpperCase()} · {fmtDate(p.date).toUpperCase()} · BY {BUSINESS.owner.toUpperCase()}
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

        {p.faqs && (
          <div className="mt-12">
            <FaqList faqs={p.faqs} />
          </div>
        )}

        <div className="mt-12 border-t border-line pt-8">
          <p className="spec-plate mb-4">KEEP READING</p>
          <ul className="space-y-3">
            {more.map((m) => (
              <li key={m.slug}>
                <Link href={`/blog/${m.slug}`} className="font-display font-bold text-tape-deep underline decoration-2 underline-offset-4">
                  {m.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </article>

      <div className="mt-14">
        <CtaBand
          title="Rather talk it through?"
          text="Articles are free and so are estimates. Tell us what your house needs and we will give you a real answer."
        />
      </div>
    </>
  );
}
