import type { NextPage } from 'next'
import { NextSeo } from 'next-seo'

import Refresh from '@/components/refresh'
import fullPath from '@/helpers/fullPath'
import NotFound from '@/pages/404.mdx'
import { Props as KujiProps } from '@/pages/kuji/[id]'

const SharePage: NextPage<KujiProps> = ({ fortune }) => {
  if (!fortune) return <NotFound />

  const title = `因幡はねるくじ 第${fortune.fields.number}番『${fortune.fields.blessing}』`

  return (
    <>
      <NextSeo
        canonical={fullPath(`/kuji/${fortune.sys.id}`)}
        description={fortune.fields.description}
        openGraph={{
          images: [
            {
              height: 630,
              url: fullPath(fortune.fields.card.fields.file.url),
              width: 1200
            }
          ],
          title
        }}
        title={title}
      />

      <Refresh path="/" />
    </>
  )
}

export default SharePage

export { getStaticPaths, getStaticProps } from '@/pages/kuji/[id]'
