import type { Asset } from 'contentful'
import type { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import Image from 'next/image'

import Page from '@/components/layout'
import SEO from '@/components/seo'
import SingleWindow from '@/components/simple-window'
import getFortune from '@/contentful/getFortune'
import useBlurKujiURL from '@/hooks/use-blur-kuji-url'
import useTweetShareURL from '@/hooks/use-tweet-share-url'
import styles from '@/styles/pages/kuji/[id].module.css'
import { FortuneEntry } from '@/types/fortune'

function getContentfulImageURL(asset: Asset): string {
  const updatedAt = new Date(asset.sys.updatedAt)
  const version = `v${Math.floor(updatedAt.getTime() / 1000)}`

  return `/images/contentful/${version}/${asset.sys.id}`
}

export type Props = {
  fortune: FortuneEntry
}

const KujiPage: NextPage<Props> = ({ fortune }) => {
  const blurDataURL = useBlurKujiURL(fortune)
  const tweetShereURL = useTweetShareURL(fortune)

  const name = `第${fortune.fields.number}番『${fortune.fields.blessing}』`
  const imageDetails = fortune.fields.paper.fields.file.details.image

  return (
    <>
      <SEO
        description={fortune.fields.description}
        image={{
          height: fortune.fields.card.fields.file.details.image?.height,
          url: getContentfulImageURL(fortune.fields.card),
          width: fortune.fields.card.fields.file.details.image?.width
        }}
        path={`/kuji/${fortune.sys.id}`}
        title={`因幡はねるくじ ${name}`}
        type="article"
      />

      <Page>
        <SingleWindow title={name}>
          <div className={styles.content}>
            <Image
              alt={name}
              blurDataURL={blurDataURL}
              height={imageDetails ? imageDetails.height / 2 : 540}
              placeholder="blur"
              priority
              quality={80}
              src={getContentfulImageURL(fortune.fields.paper)}
              width={imageDetails ? imageDetails.width / 2 : 254}
            />
          </div>

          <nav className={styles.shareLinks}>
            <ul className={styles.shareLinksList}>
              <li>
                <a
                  className={styles.shareButton}
                  href={tweetShereURL}
                  rel="noopener noreferrer"
                  role="button"
                  target="_blank"
                >
                  Twitterに共有する
                </a>
              </li>
            </ul>
          </nav>
        </SingleWindow>
      </Page>
    </>
  )
}

export default KujiPage

export type Params = {
  id: string
}

export const getStaticProps: GetStaticProps<Props, Params> = async ({
  params
}) => {
  const fortune = await getFortune(params?.id).catch(() => undefined)

  if (fortune) {
    return {
      props: {
        fortune
      },
      revalidate: 30
    }
  }

  return {
    notFound: true,
    revalidate: 5
  }
}

export const getStaticPaths: GetStaticPaths<Params> = () => {
  return Promise.resolve({
    fallback: 'blocking',
    paths: []
  })
}
