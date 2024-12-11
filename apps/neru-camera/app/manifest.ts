import { type MetadataRoute } from 'next'
import { title } from '@/lib/constants'
import favicon512x512 from './icon1.png'
import favicon192x192 from './icon2.png'

export default function manifest(): MetadataRoute.Manifest {
  return {
    background_color: '#000',
    display: 'standalone',
    icons: [
      {
        src: favicon192x192.src,
        sizes: [favicon192x192.width, favicon192x192.height].join('x'),
        type: 'image/png'
      },
      {
        src: favicon512x512.src,
        sizes: [favicon512x512.width, favicon512x512.height].join('x'),
        type: 'image/png'
      }
    ],
    name: title,
    short_name: title,
    start_url: '/',
    theme_color: '#ff9800'
  }
}
