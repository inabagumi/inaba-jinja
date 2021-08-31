import type { NextApiHandler } from 'next'
import type { WebAppManifest } from 'web-app-manifest'

import favicon192x192 from '@/assets/icons/favicon-192x192.png'
import favicon512x512 from '@/assets/icons/favicon-512x512.png'

const INABA_JINJA_SITE_NAME = '因幡神社'
const INABA_JINJA_DESCRIPTION =
  '因幡神社は因幡はねる様をご祭神としてお祀りする東京都北区赤羽のどこかにある神社です。'
const INABA_JINJA_ICONS = [favicon192x192, favicon512x512]

const manifestHandler: NextApiHandler<WebAppManifest> = (_req, res) => {
  const icons = INABA_JINJA_ICONS.map((icon) => ({
    sizes: `${icon.width}x${icon.height}`,
    src: icon.src,
    type: 'image/png'
  }))
  const shortcuts = [
    {
      name: 'おみくじを引く',
      url: '/lottery'
    }
  ]

  res.setHeader('Content-Type', 'application/manifest+json')
  res.json({
    background_color: '#fafafa',
    description: INABA_JINJA_DESCRIPTION,
    display: 'standalone',
    icons,
    lang: 'ja',
    name: INABA_JINJA_SITE_NAME,
    scope: '/',
    short_name: INABA_JINJA_SITE_NAME,
    shortcuts,
    start_url: '.',
    theme_color: '#ff5722'
  })
}

export default manifestHandler
