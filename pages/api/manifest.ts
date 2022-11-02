import { type NextApiHandler } from 'next'
import { type WebAppManifest } from 'web-app-manifest'
import favicon192x192 from '@/assets/icons/favicon-192x192.png'
import favicon512x512 from '@/assets/icons/favicon-512x512.png'
import { description, themeColor, title } from '@/lib/constants'

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
    background_color: '#ffffff',
    description: description,
    display: 'standalone',
    icons,
    lang: 'ja',
    name: title,
    scope: '/',
    short_name: title,
    shortcuts,
    start_url: '.',
    theme_color: themeColor
  })
}

export default manifestHandler
