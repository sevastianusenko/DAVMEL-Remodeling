import type { NextConfig } from "next";

// NOTE: www/apex redirect is handled at the Vercel domain level, not here.
// An app-level host redirect fought Vercel's primary-domain redirect and
// caused ERR_TOO_MANY_REDIRECTS. Keep host canonicalization in Vercel only.
const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
    ];
  },
};

export default nextConfig;
