import { type MetadataRoute } from 'next'
import { getFortuneIDs } from '@/lib/contentful'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const items: MetadataRoute.Sitemap = [
    {
      changeFrequency: 'monthly',
      priority: 1.0,
      url: new URL('/', process.env.NEXT_PUBLIC_BASE_URL).toString()
    },
    {
      changeFrequency: 'monthly',
      priority: 0.5,
      url: new URL('/about', process.env.NEXT_PUBLIC_BASE_URL).toString()
    },
    {
      changeFrequency: 'monthly',
      priority: 0.5,
      url: new URL('/privacy', process.env.NEXT_PUBLIC_BASE_URL).toString()
    }
  ]

  const fortuneIDs = await getFortuneIDs()

  for (const fortuneID of fortuneIDs) {
    items.push({
      changeFrequency: 'monthly',
      priority: 0.7,
      url: new URL(
        `/kuji/${fortuneID}`,
        process.env.NEXT_PUBLIC_BASE_URL
      ).toString()
    })
  }

  return items
}
