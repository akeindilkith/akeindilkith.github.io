import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable static export for GitHub Pages
  output: 'export',
  // Required for static export as GitHub Pages doesn't have an image optimization server
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
