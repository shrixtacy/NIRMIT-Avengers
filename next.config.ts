import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/webp"],
    qualities: [75, 85, 90],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
    deviceSizes: [360, 414, 768, 1080, 1280, 1920],
    imageSizes: [64, 128, 256, 384],
  },
  allowedDevOrigins: ["192.168.29.30"],
};

export default nextConfig;
