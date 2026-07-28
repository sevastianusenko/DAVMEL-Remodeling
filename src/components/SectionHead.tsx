import { Reveal } from "./Reveal";

export function SectionHead({
  eyebrow,
  title,
  light = false,
}: {
  eyebrow: string;
  title: string;
  light?: boolean;
}) {
  return (
    <Reveal>
      <div className="mb-10 text-center">
        <p className={`eyebrow ${light ? "text-vial" : ""}`}>{eyebrow}</p>
        <h2 className={`h-section mx-auto mt-2 max-w-3xl ${light ? "text-white" : ""}`}>{title}</h2>
      </div>
    </Reveal>
  );
}
