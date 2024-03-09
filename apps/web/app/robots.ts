import { type MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      allow: '/',
      userAgent: '*'
    },
    sitemap: new URL(
      '/sitemap.xml',
      process.env.NEXT_PUBLIC_BASE_URL
    ).toString()
  }
}
