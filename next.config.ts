import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  // ou can easily disable the integrated ESLint 
  eslint: {
     ignoreDuringBuilds: true,
   },

    
};

export default nextConfig;
