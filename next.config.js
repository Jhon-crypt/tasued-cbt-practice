/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
      appDir: true,
    },
    images: {
      domains: ["shuffle.dev"],
    },
  }
  
module.exports = nextConfig