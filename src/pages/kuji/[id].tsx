import type { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import Image from 'next/image'

import Page from '@/components/layout'
import Placeholder from '@/components/placeholder'
import SEO from '@/components/seo'
import SingleWindow from '@/components/simple-window'
import getFortune from '@/contentful/getFortune'
import getTweetLink from '@/helpers/getTweetLink'
import styles from '@/styles/pages/kuji/[id].module.css'
import { FortuneEntry } from '@/types/fortune'

export type Props = {
  fortune: FortuneEntry
}

const KujiPage: NextPage<Props> = ({ fortune }) => {
  const name = `第${fortune.fields.number}番『${fortune.fields.blessing}』`
  const imageDetails = fortune.fields.paper.fields.file.details.image
  const imageURL = `https:${fortune.fields.paper.fields.file.url}`
  const imageWidth = imageDetails ? imageDetails.width / 2 : 254
  const imageHeight = imageDetails ? imageDetails.height / 2 : 540

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
        title={`因幡はねるくじ ${name}`}
        type="article"
      />

      <Page>
        <SingleWindow title={name}>
          <div className={styles.content}>
            <div className={styles.imageWrapper}>
              <Placeholder src={fortune.fields.prePaper} />
              <Image
                alt={name}
                height={imageHeight}
                priority
                quality={80}
                src={imageURL}
                width={imageWidth}
              />
            </div>
          </div>

          <nav className={styles.shareLinks}>
            <ul className={styles.shareLinksList}>
              <li>
                <a
                  className={styles.shareButton}
                  href={getTweetLink(fortune)}
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
