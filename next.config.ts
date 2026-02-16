import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable static export for GitHub Pages
  output: 'export',
  // Required for static export as GitHub Pages doesn't have an image optimization server
  images: {
    unoptimized: true,
  },
  // If your repo name is NOT your username (e.g. username.github.io/repo-name), 
  // you would need to add basePath: '/repo-name' here.
  // Since you are using akeindilkith.github.io, we keep it as default.
};

export default nextConfig;
