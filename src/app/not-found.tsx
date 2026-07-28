import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-3xl flex-col items-start px-4 py-24 sm:px-6">
      <p className="eyebrow">404 · MEASURED TWICE, PAGE STILL MISSING</p>
      <h1 className="mt-3 text-4xl sm:text-5xl">This page is not on the blueprint</h1>
      <div className="chalk mt-5 w-full max-w-md" aria-hidden="true" />
      <p className="mt-5 max-w-xl text-lg text-ink-soft">
        The address may have changed, or the link was framed a little off plumb.
        Everything we build lives one click away.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link href="/" className="btn">Back to Home</Link>
        <Link href="/services" className="btn btn-ghost">Browse Services</Link>
        <Link href="/contact" className="btn btn-ghost">Contact Us</Link>
      </div>
    </div>
  );
}
