import { MetadataRoute } from 'next'
import { description, themeColor, title } from '@/lib/constants'
import favicon512x512 from './icon1.png'
import favicon192x192 from './icon2.png'

const INABA_JINJA_ICONS = [favicon192x192, favicon512x512]

export default function manifest(): MetadataRoute.Manifest {
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

  return {
    background_color: '#ffffff',
    description: description,
    display: 'standalone',
    icons,
    name: title,
    scope: '/',
    short_name: title,
    shortcuts,
    start_url: '.',
    theme_color: themeColor
  }
}
