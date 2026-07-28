import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import manifest from "@/lib/photo-manifest.json";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Photo Gallery | Real Remodeling Work in Lancaster & Chester County",
  description:
    "Every photo from DAVMEL Remodeling job sites: bathrooms, kitchens, basements, decks, doors, windows and the craft behind the walls. No stock, all our own work.",
  alternates: { canonical: "/gallery" },
};

type Photo = { src: string; width: number; height: number; alt: string };
const ALL = manifest as Record<string, Photo>;

const GROUPS: { title: string; match: (k: string) => boolean }[] = [
  {
    title: "Bathrooms & Tile",
    match: (k) =>
      /bathroom|shower|tub|vanity|tile|marble|mosaic|hex-marble/.test(k),
  },
  {
    title: "Kitchens & Living Spaces",
    match: (k) =>
      /kitchen|open-concept|staircase|accent-wall|bookcase|wainscoting|sitting-room/.test(k),
  },
  {
    title: "Decks, Porches & Steps",
    match: (k) => /deck|porch|steps|stairs|railing|landing|concrete/.test(k),
  },
  {
    title: "Windows & Doors",
    match: (k) => /window|door|storm|capping|marvin|transom|flashing/.test(k),
  },
  {
    title: "The Craft Behind the Walls",
    match: (k) => /drywall|ceiling|framing|skim|insulation|access-panel|basement|plumbing/.test(k),
  },
];

const EXCLUDE = /^archive-|^david-melnychuk|^stock-/;

function buildGroups() {
  const used = new Set<string>();
  return GROUPS.map((g) => {
    const items = Object.entries(ALL).filter(
      ([k]) => !EXCLUDE.test(k) && !used.has(k) && g.match(k)
    );
    items.forEach(([k]) => used.add(k));
    return { title: g.title, items };
  }).filter((g) => g.items.length > 0);
}

export default function GalleryPage() {
  const groups = buildGroups();
  const total = groups.reduce((n, g) => n + g.items.length, 0);

  return (
    <>
      <div className="mx-auto max-w-6xl px-4 pt-10 sm:px-6">
        <Breadcrumbs items={[{ name: "Gallery", href: "/gallery" }]} />
        <div className="text-center">
          <p className="eyebrow">EVERY PHOTO FROM OUR OWN JOB SITES</p>
          <h1 className="h-section mx-auto mt-2 max-w-3xl !text-[2rem] sm:!text-[2.6rem]">
            Photo gallery
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-ink-soft">
            {total} photos, all taken by our crew on our clients&apos; projects across
            Lancaster and Chester County. No stock, no staging, and yes, we show the
            in-progress shots too, because the part behind the tile is the part you
            are paying for. Click any photo for the full size, or{" "}
            <Link href="/projects" className="font-semibold text-tape-deep underline underline-offset-2">
              read the stories behind these jobs
            </Link>
            .
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
        {groups.map((g) => (
          <section key={g.title} className="mt-14">
            <Reveal>
              <h2 className="h-section mb-8 !text-[1.4rem]">{g.title}</h2>
            </Reveal>
            <Reveal>
              <div className="columns-2 gap-4 sm:columns-3 lg:columns-4 [&>a]:mb-4 [&>a]:block">
                {g.items.map(([k, p]) => (
                  <a
                    key={k}
                    href={p.src}
                    target="_blank"
                    rel="noopener"
                    className="group overflow-hidden rounded-lg shadow-sm transition-shadow hover:shadow-xl"
                    aria-label={`${p.alt} (open full size)`}
                  >
                    <Image
                      src={p.src}
                      width={p.width}
                      height={p.height}
                      alt={p.alt}
                      sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
                      className="h-auto w-full break-inside-avoid transition-transform duration-500 group-hover:scale-[1.04]"
                    />
                  </a>
                ))}
              </div>
            </Reveal>
          </section>
        ))}

        <div className="mt-14 text-center">
          <a href="/#estimate" className="btn">
            Want Yours in This Gallery?
          </a>
        </div>
      </div>
    </>
  );
}
