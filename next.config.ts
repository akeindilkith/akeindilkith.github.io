
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* 
   * 'export' mode is required for GitHub Pages. 
   * Note: This disables Server Actions and standard Next.js redirects.
   */
  output: 'export',
  images: {
    /* 
     * GitHub Pages doesn't support the default Next.js Image Optimization API.
     * We must disable it or use a custom loader.
     */
    unoptimized: true,
  },
};

export default nextConfig;
