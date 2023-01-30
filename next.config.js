const path = require('path')
const webpack = require('webpack')
require('dotenv').config()



module.exports = {
  images: {
    domains: ['downloads.ctfassets.net', 'images.ctfassets.net', 'images.contentful.com', 'source.unsplash.com', 'media.umbraco.io'],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  webpack: (config) => {
    config.plugins.push(
      new webpack.EnvironmentPlugin(['NODE_ENV'])
    )
    return config
  },
}
