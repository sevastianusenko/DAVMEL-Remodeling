import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SectionRule } from "@/components/SectionRule";
import { SERVICES } from "@/lib/services";
import { CITIES } from "@/lib/cities";
import { PROJECTS } from "@/lib/projects";
import { POSTS } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Site Map",
  description:
    "Every page on davmelremodeling.com in one place: services, service areas, project case studies, guides and company pages.",
  alternates: { canonical: "/site-map" },
};

const MAIN: [string, string][] = [
  ["/", "Home"],
  ["/services", "Services"],
  ["/service-areas", "Service Areas"],
  ["/projects", "Projects"],
  ["/blog", "Blog"],
  ["/about", "About"],
  ["/reviews", "Reviews"],
  ["/faq", "FAQ"],
  ["/contact", "Contact"],
  ["/privacy", "Privacy Policy"],
  ["/terms", "Terms of Use"],
];

function LinkList({ items }: { items: [string, string][] }) {
  return (
    <ul className="grid gap-x-8 gap-y-2 sm:grid-cols-2 lg:grid-cols-3">
      {items.map(([href, label]) => (
        <li key={href}>
          <Link
            href={href}
            className="text-[0.95rem] text-ink underline decoration-line decoration-2 underline-offset-4 hover:text-tape-deep hover:decoration-tape"
          >
            {label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default function SiteMapPage() {
  const services: [string, string][] = SERVICES.map((s) => [`/services/${s.slug}`, s.name]);
  const cities: [string, string][] = CITIES.map((c) => [
    `/service-areas/${c.slug}`,
    `Remodeling in ${c.name}, PA`,
  ]);
  const projects: [string, string][] = PROJECTS.map((p) => [`/projects/${p.slug}`, p.title]);
  const posts: [string, string][] = POSTS.map((p) => [`/blog/${p.slug}`, p.title]);

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <Breadcrumbs items={[{ name: "Site Map", href: "/site-map" }]} />
      <h1 className="text-4xl sm:text-5xl">Site map</h1>
      <div className="chalk mt-5 max-w-2xl" aria-hidden="true" />
      <p className="mt-5 max-w-2xl text-lg text-ink-soft">
        Every page on this site, in one place. Looking for the machine readable
        version? That one lives at{" "}
        <a href="/sitemap.xml" className="text-tape-deep underline underline-offset-2">
          /sitemap.xml
        </a>
        .
      </p>

      <section className="mt-12">
        <SectionRule label="MAIN PAGES" />
        <LinkList items={MAIN} />
      </section>

      <section className="mt-12">
        <SectionRule label={`SERVICES (${services.length})`} />
        <LinkList items={services} />
      </section>

      <section className="mt-12">
        <SectionRule label={`SERVICE AREAS (${cities.length})`} />
        <LinkList items={cities} />
      </section>

      <section className="mt-12">
        <SectionRule label={`PROJECT CASE STUDIES (${projects.length})`} />
        <LinkList items={projects} />
      </section>

      <section className="mt-12">
        <SectionRule label={`GUIDES & ARTICLES (${posts.length})`} />
        <LinkList items={posts} />
      </section>
    </div>
  );
}
