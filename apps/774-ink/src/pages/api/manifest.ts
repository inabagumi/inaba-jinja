import { NextApiHandler } from 'next'
import { favicon192x192URL, favicon512x512URL } from '@/assets'

const handler: NextApiHandler<WebAppManifest> = (_req, res) => {
  const name = '774 ink.'
  const manifest: WebAppManifest = {
    background_color: '#fff',
    display: 'standalone',
    icons: [
      {
        sizes: '192x192',
        src: favicon192x192URL,
        type: 'image/png'
      },
      {
        sizes: '512x512',
        src: favicon512x512URL,
        type: 'image/png'
      }
    ],
    name,
    scope: '/',
    short_name: name,
    start_url: '/',
    theme_color: '#544643'
  }

  res.setHeader('Cache-Control', 'max-age=60,s-maxage=120')
  res.setHeader('Content-Type', 'application/manifest+json')
  res.status(200).json(manifest)
}

export default handler
