const { withContentlayer } = require('next-contentlayer');

/** @type {import('next').NextConfig} */

const nextConfig = { 
  output: 'export',
  reactStrictMode: true, 
  swcMinify: true, 
  images: {
    domains: ["samiti.dev", "samiti3d.github.io"],
    unoptimized: true 
  },
  env: {
    baseUrl: 'https://samiti.dev',
    discordLink: 'https://discord.gg/xGn6pzVBmz',
  }
}

module.exports = withContentlayer(nextConfig)
