import Image from "next/image";
import { photo } from "@/lib/photos";

type Props = {
  k: string;
  sizes?: string;
  priority?: boolean;
  className?: string;
  caption?: string;
};

export function Pic({ k, sizes = "(min-width: 1024px) 33vw, 100vw", priority, className, caption }: Props) {
  const p = photo(k);
  const img = (
    <Image
      src={p.src}
      width={p.width}
      height={p.height}
      alt={p.alt}
      sizes={sizes}
      priority={priority}
      className={className ?? "h-full w-full object-cover"}
    />
  );
  if (!caption) return img;
  return (
    <figure>
      {img}
      <figcaption className="spec-plate mt-2">{caption}</figcaption>
    </figure>
  );
}
