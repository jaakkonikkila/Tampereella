import createNextIntlPlugin from "next-intl/plugin";
import withBundleAnalyzer from "@next/bundle-analyzer";

const withNextIntl = createNextIntlPlugin();

const withAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

/** @type {import('next').NextConfig} */
const nextConfig = withAnalyzer(
  withNextIntl({
    experimental: {
      optimizePackageImports: ["@chakra-ui/react"],
    },
    images: {
      domains: ["flagcdn.com"], // Allow images from flagcdn.com
    },
  }),
);

export default nextConfig;
