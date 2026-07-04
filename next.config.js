/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/enovoweb",
  assetPrefix: "/enovoweb/",
  trailingSlash: true,

  eslint: {
    ignoreDuringBuilds: true,
  },

  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
