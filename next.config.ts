import type { NextConfig } from "next";

/**
 * CONFIGURATION FOR GITHUB PAGES
 * 
 * If you change your repository name, update the 'repoName' variable below.
 * If you are using a custom domain (e.g., www.yourdomain.com), set repoName to ''.
 */
const repoName = '/akeindilkithnew';

const nextConfig: NextConfig = {
  // Enable static export for GitHub Pages
  output: 'export',
  // Required for static export as GitHub Pages doesn't have an image optimization server
  images: {
    unoptimized: true,
  },
  // Set the base path to match your repository name
  basePath: repoName,
  // Ensure assets are prefixed correctly for sub-path deployment
  assetPrefix: repoName,
};

export default nextConfig;
