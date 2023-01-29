const path = require('path')
const webpack = require('webpack')
require('dotenv').config()

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  devIndicators: false
}


module.exports = {
  nextConfig,
  images: {
    domains: ['downloads.ctfassets.net', 'images.ctfassets.net', 'images.contentful.com', 'source.unsplash.com', 'media.umbraco.io'],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  experimental: { images: { layoutRaw: true } },
  webpack: (config) => {
    config.plugins.push(
      new webpack.EnvironmentPlugin(['NODE_ENV'])
    )
    return config
  },
}
