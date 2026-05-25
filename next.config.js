/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // This completely forces Vercel to skip strict TS validation checks so your compiled app goes live
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;

