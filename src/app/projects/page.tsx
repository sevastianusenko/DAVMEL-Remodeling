import type { Metadata } from "next";
import Link from "next/link";
import { PROJECTS } from "@/lib/projects";
import { CITIES } from "@/lib/cities";
import { Pic } from "@/components/Pic";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SectionRule } from "@/components/SectionRule";
import { CtaBand } from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Project Stories | Real Remodeling Work in Lancaster & Chester County",
  description:
    "23 real remodeling projects across Lancaster and Chester County PA, told honestly: bathrooms, decks, doors, basements and porches, with process photos and advice from each job.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsIndex() {
  const byCounty = [
    { label: "LANCASTER COUNTY", cities: ["lancaster-pa", "denver-pa", "ephrata-pa", "lititz-pa", "elizabethtown-pa"] },
    { label: "CHESTER COUNTY", cities: ["west-chester-pa", "downingtown-pa", "coatesville-pa"] },
    { label: "BERKS + LEBANON", cities: ["reading-pa", "lebanon-pa"] },
  ];

  return (
    <>
      <div className="mx-auto max-w-6xl px-4 pt-10 sm:px-6">
        <Breadcrumbs items={[{ name: "Projects", href: "/projects" }]} />
        <h1 className="max-w-2xl text-4xl sm:text-5xl">Every job has a story. Here are ours.</h1>
        <div className="chalk mt-5 max-w-2xl" aria-hidden="true" />
        <p className="mt-5 max-w-2xl text-lg text-ink-soft">
          Not a photo dump. Each project below is written up honestly: what we walked
          into, what we did about it, what it cost in time, and the advice we would
          give anyone facing the same job. All photos are from our own sites, most
          taken on a phone between tasks.
        </p>
      </div>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        {byCounty.map((group) => {
          const projects = PROJECTS.filter((p) => group.cities.includes(p.city.slug));
          if (!projects.length) return null;
          return (
            <div key={group.label} className="mb-14 last:mb-0">
              <SectionRule label={group.label} />
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {projects.map((p) => (
                  <Link
                    key={p.slug}
                    href={`/projects/${p.slug}`}
                    className="group flex flex-col border border-line bg-paper transition-colors hover:border-tape"
                  >
                    <div className="aspect-[4/3] overflow-hidden">
                      <Pic
                        k={p.hero}
                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                      />
                    </div>
                    <div className="flex flex-1 flex-col p-4">
                      <p className="spec-plate">
                        {p.city.name.toUpperCase()}, PA · {p.duration.toUpperCase()}
                      </p>
                      <h2 className="mt-2 font-display text-[1.05rem] font-bold leading-snug group-hover:text-tape-deep">
                        {p.title}
                      </h2>
                      <p className="mt-2 text-[0.9rem] leading-snug text-ink-soft">
                        {p.scope.slice(0, 3).join(" · ")}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          );
        })}

        <p className="spec-plate mt-6">
          {PROJECTS.length} PROJECTS AND COUNTING. CITY PAGES:{" "}
          {CITIES.map((c, i) => (
            <span key={c.slug}>
              {i > 0 && " · "}
              <Link href={`/service-areas/${c.slug}`} className="underline hover:text-tape-deep">
                {c.name.toUpperCase()}
              </Link>
            </span>
          ))}
        </p>
      </section>

      <CtaBand title="The next story could be your house" />
    </>
  );
}
