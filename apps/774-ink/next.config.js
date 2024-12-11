const nextConfig = {
  async rewrites() {
    return [
      {
        destination: '/api/manifest',
        source: '/manifest.webmanifest'
      }
    ]
  }
}

module.exports = nextConfig
