import type { NextConfig } from "next";

/**
 * CONFIGURATION FOR GITHUB PAGES
 * 
 * For User/Organization sites (e.g., username.github.io), repoName must be ''.
 * For Project sites (e.g., username.github.io/repo-name), repoName must be '/repo-name'.
 */
const repoName = ''; 

const nextConfig: NextConfig = {
  // Enable static export for GitHub Pages
  output: 'export',
  // Required for static export as GitHub Pages doesn't have an image optimization server
  images: {
    unoptimized: true,
  },
  // Set the base path
  basePath: repoName,
  // Ensure assets are prefixed correctly
  assetPrefix: repoName ? repoName : undefined,
};

export default nextConfig;
