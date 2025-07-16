/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "cdn.jsdelivr.net",
      "aceternity.com",
      "assets.aceternity.com",
      "upload.wikimedia.org",
    ],
  },
  experimental: {
    optimizePackageImports: ["framer-motion", "motion", "lucide-react"],
  },
};

export default nextConfig;
