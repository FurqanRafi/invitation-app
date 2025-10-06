import type { NextConfig } from "next";
import { type } from "os";

const nextConfig: NextConfig = {
  images: {
    domains: ["localhost"], // dev ke liye allow
  },

};

export default nextConfig;
