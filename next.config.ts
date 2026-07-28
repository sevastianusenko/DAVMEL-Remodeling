import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // www → apex, permanent. Keeps every page on exactly one canonical host.
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.davmelremodeling.com" }],
        destination: "https://davmelremodeling.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
