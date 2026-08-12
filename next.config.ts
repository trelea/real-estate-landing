import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: { ignoreDuringBuilds: true },
  // experimental: {
  //   useCache: true,
  //   cacheLife: {},
  // },
  images: {
    remotePatterns: [{ hostname: "*" }],
    // S3 objects are served without a Cache-Control header, so the image
    // optimizer falls back to its 60s default and emits
    // `max-age=60, must-revalidate` — which Cloudflare refuses to edge-cache.
    // Upload keys are `randomUUID()-Date.now()-name`, so an image URL never
    // changes content and is safe to cache for a year.
    minimumCacheTTL: 31536000,
  },
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
