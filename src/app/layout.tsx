import type { Metadata, Viewport } from "next";
import { Archivo, Public_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { StickyCall } from "@/components/StickyCall";
import { JsonLd } from "@/components/JsonLd";
import { BUSINESS, AREA_SERVED } from "@/lib/business";

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  display: "swap",
});

const publicSans = Public_Sans({
  subsets: ["latin"],
  variable: "--font-public-sans",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(BUSINESS.url),
  title: {
    default: "Remodeling Contractor in Lancaster County PA | DAVMEL Remodeling",
    template: "%s | DAVMEL Remodeling",
  },
  description:
    "DAVMEL Remodeling is a licensed contractor in Denver PA serving Lancaster and Chester County. Bathrooms, basements, drywall, tile, decks, windows and doors. One team, the whole job. PA #PA214721.",
  openGraph: {
    type: "website",
    siteName: BUSINESS.name,
    locale: "en_US",
  },
};

export const viewport: Viewport = {
  themeColor: "#16232b",
};

const businessSchema = {
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  "@id": BUSINESS.url + "/#business",
  name: BUSINESS.name,
  legalName: BUSINESS.legalName,
  url: BUSINESS.url,
  telephone: BUSINESS.phone,
  email: BUSINESS.email,
  logo: BUSINESS.url + "/logo.png",
  image: BUSINESS.url + "/images/open-concept-living-remodel-lancaster-pa.jpg",
  founder: { "@type": "Person", name: BUSINESS.owner },
  foundingDate: String(BUSINESS.founded),
  address: {
    "@type": "PostalAddress",
    addressLocality: BUSINESS.baseCity,
    addressRegion: BUSINESS.baseRegion,
    postalCode: BUSINESS.baseZip,
    addressCountry: "US",
  },
  geo: { "@type": "GeoCoordinates", latitude: 40.23342, longitude: -76.13716 },
  areaServed: AREA_SERVED.map((name) => ({ "@type": "City", name })),
  openingHours: BUSINESS.hours,
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "07:00",
    closes: "18:00",
  },
  priceRange: "$$",
  hasCredential: {
    "@type": "EducationalOccupationalCredential",
    credentialCategory: "license",
    name: `Pennsylvania Home Improvement Contractor Registration ${BUSINESS.license}`,
  },
  knowsAbout: [
    "bathroom remodeling",
    "kitchen remodeling",
    "basement finishing",
    "drywall installation and repair",
    "tile installation",
    "deck building",
    "window and door installation",
    "porch restoration",
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${archivo.variable} ${publicSans.variable} ${plexMono.variable}`}>
      <body className="pb-[52px] sm:pb-0">
        <script
          dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }}
        />
        <JsonLd data={businessSchema} />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-tape focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <StickyCall />
      </body>
    </html>
  );
}
