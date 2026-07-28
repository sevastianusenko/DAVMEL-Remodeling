import manifest from "./photo-manifest.json";

export type Photo = { src: string; width: number; height: number; alt: string };

const photos = manifest as Record<string, Photo>;

export function photo(key: string): Photo {
  const p = photos[key];
  if (!p) throw new Error(`Unknown photo key: ${key}`);
  return p;
}

export function hasPhoto(key: string): boolean {
  return key in photos;
}
