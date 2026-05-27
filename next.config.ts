import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cameronwitkowski.com",
        pathname: "/wp-content/uploads/**",
      },
      {
        protocol: "http",
        hostname: "cameronwitkowski.com",
        pathname: "/wp-content/uploads/**",
      },
    ],
  },
};

export default nextConfig;
