import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable static export for GitHub Pages
  output: 'export',
  // Required for static export as GitHub Pages doesn't have an image optimization server
  images: {
    unoptimized: true,
  },
  // Since the repository name is 'akeindilkithnew', we must specify the basePath
  // so that assets (JS, CSS, Images) are correctly routed.
  basePath: '/akeindilkithnew',
  // assetPrefix is also required for static exports on GitHub Pages sub-paths
  assetPrefix: '/akeindilkithnew',
};

export default nextConfig;
