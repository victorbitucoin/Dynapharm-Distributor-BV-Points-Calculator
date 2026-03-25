import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Optimize for Vercel
  swcMinify: true,
};

export default nextConfig;
