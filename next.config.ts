import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  // ou can easily disable the integrated ESLint
  eslint: {
    ignoreDuringBuilds: true,
  },

  // babel disable swc or it needed for next/font, this script force swc as primary
  experimental: {
    forceSwcTransforms: true,
  },
};

export default nextConfig;
