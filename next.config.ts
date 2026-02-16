import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/maintenance', // Matches your folder name in the screenshot
        permanent: false, // Use false so search engines know this is temporary
      },
    ];
  },
};

export default nextConfig;