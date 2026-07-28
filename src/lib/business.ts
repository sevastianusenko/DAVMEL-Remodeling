export const BUSINESS = {
  name: "DAVMEL Remodeling",
  legalName: "DAVMEL Remodeling LLC",
  owner: "David Melnychuk",
  phone: "+17172108194",
  phoneDisplay: "(717) 210-8194",
  email: "info@davmelremodeling.com",
  url: "https://davmelremodeling.com",
  license: "PA214721",
  licenseDisplay: "PA HIC #PA214721",
  licenseVerifyUrl:
    "https://hicsearch.attorneygeneral.gov/",
  baseCity: "Denver",
  baseRegion: "PA",
  baseZip: "17517",
  geo: { lat: 40.2334, lng: -76.1372 },
  founded: 2020,
  yearsInTrade: "6+",
  hours: "Mo-Sa 07:00-18:00",
  serviceCounties: ["Lancaster County", "Chester County", "Berks County", "Lebanon County"],
} as const;

export const CITY_SLUGS = [
  "lancaster-pa",
  "denver-pa",
  "ephrata-pa",
  "lititz-pa",
  "reading-pa",
  "lebanon-pa",
  "elizabethtown-pa",
  "west-chester-pa",
  "downingtown-pa",
  "coatesville-pa",
] as const;

export const AREA_SERVED = [
  "Lancaster PA",
  "Denver PA",
  "Ephrata PA",
  "Lititz PA",
  "Reading PA",
  "Lebanon PA",
  "Elizabethtown PA",
  "West Chester PA",
  "Downingtown PA",
  "Coatesville PA",
];

export function telHref() {
  return `tel:${BUSINESS.phone}`;
}

export function mailHref() {
  return `mailto:${BUSINESS.email}`;
}
