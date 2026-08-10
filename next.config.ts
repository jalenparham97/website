import type { NextConfig } from "next";
import { sanity } from "next-sanity/live/cache-life";
import "./src/env";

const nextConfig: NextConfig = {
  cacheComponents: true,
  cacheLife: { default: sanity },
  experimental: {
    turbopackFileSystemCacheForDev: true,
    turbopackFileSystemCacheForBuild: true,
  },
};

export default nextConfig;
