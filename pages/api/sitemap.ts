import { EnumChangefreq, SitemapStream } from 'sitemap'
import pkg from '@/../package.json'
import getFortunes from '@/contentful/getFortunes'
import type { NextApiHandler } from 'next'
import type { SitemapItemLoose } from 'sitemap'

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

const sitemapHandler: NextApiHandler<string> = async (_req, res) => {
  const smStream = new SitemapStream({
    hostname: pkg.homepage
  })

  for (const page of STATIC_PAGES) {
    smStream.write(page)
  }

  const fortunes = await getFortunes().catch((): string[] => [])
  for (const id of fortunes) {
    smStream.write({
      changefreq: EnumChangefreq.MONTHLY,
      priority: 0.7,
      url: `/kuji/${id}`
    })
  }

  res.status(200)
  res.setHeader('Content-Type', 'application/xml')
  res.setHeader('Cache-Control', 'max-age=604800')

  smStream.end()
  smStream.pipe(res).on('close', () => {
    res.end()
  })
}

export default sitemapHandler
