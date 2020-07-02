const nextConfig = {
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  rewrites: () => [
    {
      destination: '/api/manifest',
      source: '/manifest.webmanifest'
    }
  ],
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  webpack(config, { defaultLoaders, dev }) {
    config.module.rules.push({
      test: /\.png$/,
      use: [
        defaultLoaders.babel,
        {
          loader: 'file-loader',
          options: {
            name: dev
              ? '[name].[ext]?[contenthash:8]'
              : '[name].[contenthash:8].[ext]',
            outputPath: 'static/media',
            publicPath: '/_next/static/media'
          }
        }
      ]
    })

    return config
  }
}

module.exports = nextConfig
