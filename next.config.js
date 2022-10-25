/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['www.clipartmax.com','www.physology.co.uk'],
  },
}

module.exports = nextConfig
