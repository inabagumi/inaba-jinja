import { type NextApiHandler } from 'next'
import {
  EnumChangefreq,
  type SitemapItemLoose,
  SitemapStream,
  streamToPromise
} from 'sitemap'
import { getFortuneIDs } from '@/lib/contentful'
import pkg from '../../package.json'

const STATIC_PAGES: SitemapItemLoose[] = [
  {
    changefreq: EnumChangefreq.MONTHLY,
    priority: 1.0,
    url: '/'
  },
  {
    changefreq: EnumChangefreq.MONTHLY,
    priority: 0.5,
    url: '/about'
  },
  {
    changefreq: EnumChangefreq.MONTHLY,
    priority: 0.5,
    url: '/privacy'
  }
]

async function writeSitemap() {
  const smStream = new SitemapStream({
    hostname: pkg.homepage
  })

  for (const page of STATIC_PAGES) {
    smStream.write(page)
  }

  const fortunes = await getFortuneIDs()
  for (const id of fortunes) {
    smStream.write({
      changefreq: EnumChangefreq.MONTHLY,
      priority: 0.7,
      url: `/kuji/${id}`
    })
  }

  return streamToPromise(smStream)
}

export const handler: NextApiHandler = async (_req, res) => {
  const sitemapBody = await writeSitemap()

  res.setHeader('Cache-Control', 'max-age=604800')
  res.setHeader('Content-Type', 'application/xml')
  res.end(sitemapBody)
}
