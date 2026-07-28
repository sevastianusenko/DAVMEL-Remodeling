import type { NextConfig } from "next";

// NOTE: www/apex redirect is handled at the Vercel domain level, not here.
// An app-level host redirect fought Vercel's primary-domain redirect and
// caused ERR_TOO_MANY_REDIRECTS. Keep host canonicalization in Vercel only.
const nextConfig: NextConfig = {};

export default nextConfig;
