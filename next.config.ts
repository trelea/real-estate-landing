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
  },
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
