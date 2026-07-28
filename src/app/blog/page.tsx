import type { Metadata } from "next";
import Link from "next/link";
import { POSTS } from "@/lib/blog";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CtaBand } from "@/components/CtaBand";
import { Pic } from "@/components/Pic";

export const metadata: Metadata = {
  title: "Remodeling Advice & Real Prices | DAVMEL Blog",
  description:
    "Honest remodeling advice for Lancaster and Chester County PA homeowners: real 2026 prices, permit rules, contractor hiring guides and repair or replace decisions.",
  alternates: { canonical: "/blog" },
};

export default function BlogIndex() {
  return (
    <>
      <div className="mx-auto max-w-6xl px-4 pt-10 sm:px-6">
        <Breadcrumbs items={[{ name: "Blog", href: "/blog" }]} />
        <h1 className="max-w-2xl text-4xl sm:text-5xl">Straight answers, written down</h1>
        <div className="chalk mt-5 max-w-2xl" aria-hidden="true" />
        <p className="mt-5 max-w-2xl text-lg text-ink-soft">
          Real prices, permit rules and repair or replace decisions for Pennsylvania
          homes. The advice we give clients across the kitchen table, published for
          everyone.
        </p>
      </div>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {POSTS.map((p) => (
            <Link key={p.slug} href={`/blog/${p.slug}`} className="group border border-line bg-paper transition-colors hover:border-tape">
              <div className="aspect-[16/9] overflow-hidden">
                <Pic k={p.hero} sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw" className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]" />
              </div>
              <div className="p-5">
                <p className="spec-plate">{p.category.toUpperCase()}</p>
                <h2 className="mt-2 font-display text-[1.1rem] font-bold leading-snug group-hover:text-tape-deep">
                  {p.title}
                </h2>
                <p className="mt-2 text-[0.92rem] text-ink-soft">{p.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
