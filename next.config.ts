// next.config.ts
import type { NextConfig } from "next";
import dotenvFlow from "dotenv-flow";

dotenvFlow.config();

const nextConfig: NextConfig = {
  reactStrictMode: process.env.NODE_ENV === "production",
  env: {
    NEXT_PUBLIC_API_BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL,
  },
  images: {
    domains: ["localhost", "stage.com", "production.com"],
  },
};

export default nextConfig;
