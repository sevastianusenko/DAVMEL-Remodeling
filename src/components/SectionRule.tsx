// Signature element: the story-pole rule. A measured level line that opens
// every major section, with a mono label riding on it.
export function SectionRule({ label, id }: { label: string; id?: string }) {
  return (
    <div id={id} className="mb-8 flex items-end gap-4">
      <span className="eyebrow whitespace-nowrap pb-[3px]">{label}</span>
      <span className="rule min-w-0 flex-1" aria-hidden="true" />
    </div>
  );
}
