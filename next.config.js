/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'books.google.com'
      },
      {
        protocol: 'https',
        hostname: 'encrypted-tbn0.gstatic.com'
      },
    ],
  },
}

module.exports = nextConfig
