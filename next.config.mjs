import path from 'node:path'

const configuredDistDir = process.env.NEXT_DIST_DIR
const distDir =
  configuredDistDir && !path.isAbsolute(configuredDistDir)
    ? configuredDistDir
    : '.next'

/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
      },
    ],
  },
}

export default nextConfig
