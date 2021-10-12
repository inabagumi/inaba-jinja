import Image from 'next/image'
import Page from '@/components/layout'
import SEO from '@/components/seo'
import SingleWindow from '@/components/simple-window'
import { getFortune, getImageURL } from '@/lib/contentful'
import type { Fortune } from '@/lib/contentful'
import { useTweetShareURL } from '@/lib/hooks'
import styles from '@/styles/Kuji.module.css'
import type { GetStaticPaths, GetStaticProps, NextPage } from 'next'

export type Props = {
  fortune: Fortune
}

const KujiPage: NextPage<Props> = ({ fortune }) => {
  const tweetShereURL = useTweetShareURL(fortune)

  const name = `第${fortune.fields.number}番『${fortune.fields.blessing}』`
  const imageDetails = fortune.fields.paper.fields.file.details.image

  return (
    <>
      <SEO
        description={fortune.fields.description}
        image={{
          height: fortune.fields.card.fields.file.details.image?.height,
          url: getImageURL(fortune.fields.card),
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
              blurDataURL={fortune.fields.prePaper}
              height={imageDetails ? imageDetails.height / 2 : 540}
              placeholder="blur"
              priority
              quality={80}
              src={getImageURL(fortune.fields.paper)}
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
