
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { hostname: 'img.clerk.com' }
    ]
  },
  eslint: {
    ignoreDuringBuilds: true, // ✅ This disables blocking deploys on ESLint errors
  }
};
