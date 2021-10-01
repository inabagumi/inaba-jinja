import Refresh from '@/components/refresh'
import SEO from '@/components/seo'
import NotFound from '@/pages/404.mdx'
import { Props as KujiProps } from '@/pages/kuji/[id]'
import type { NextPage } from 'next'

const SharePage: NextPage<KujiProps> = ({ fortune }) => {
  if (!fortune) return <NotFound />

  const title = `因幡はねるくじ 第${fortune.fields.number}番『${fortune.fields.blessing}』`

  return (
    <>
      <SEO
        description={fortune.fields.description}
        image={{
          height: fortune.fields.card.fields.file.details.image?.height,
          url: fortune.fields.card.fields.file.url,
          width: fortune.fields.card.fields.file.details.image?.width
        }}
        path={`/kuji/${fortune.sys.id}`}
        title={title}
        type="article"
      />

      <Refresh path="/" />
    </>
  )
}

export default SharePage

export { getStaticPaths, getStaticProps } from '@/pages/kuji/[id]'
