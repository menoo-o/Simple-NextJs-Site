import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'wembleypark.com',
      },
      {
        protocol: 'https',
        hostname: 'hydeparkwinterwonderland.com',
      },
    ],
  },
};

export default nextConfig;
