import type { NextConfig } from "next";

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});
const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.icons8.com",
      },
      {
        protocol: "https",
        hostname: "pickmyuni-bucket.s3.ap-southeast-2.amazonaws.com",
      },
    ],
  },
};

module.exports = withBundleAnalyzer(nextConfig);
