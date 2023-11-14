import { type Metadata } from 'next'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { title as siteName, twitterAccount } from '@/lib/constants'
import { type FortuneEntry, getFortune, getFortuneIDs } from '@/lib/contentful'
import { generateFortuneName, getImageURL } from '@/lib/fortune'
import { fromAsync } from '@/lib/polyfills/array'
import ShareLinks from './_components/share-links'
import styles from './page.module.css'

// export const runtime = 'edge'
export const revalidate = 30

export type Params = {
  id: string
}

export async function generateStaticParams(): Promise<Params[]> {
  const ids = await fromAsync(getFortuneIDs())

  return ids.map((id) => ({ id }))
}

export type Props = {
  params: Params
}

export async function generateMetadata({
  params
}: Props): Promise<Metadata | null> {
  let fortune: FortuneEntry
  try {
    fortune = await getFortune(params.id)
  } catch {
    notFound()
  }

  const name = generateFortuneName(fortune)
  const card = fortune.fields.card

  if (!card?.fields.file) {
    notFound()
  }

  const title = `因幡はねるくじ ${name}`

  return {
    alternates: {
      canonical: `/kuji/${fortune.sys.id}`
    },
    description: fortune.fields.description,
    openGraph: {
      description: fortune.fields.description,
      images: [
        {
          height: card.fields.file.details.image?.height ?? 630,
          url: getImageURL(card),
          width: card.fields.file.details.image?.width ?? 1200
        }
      ],
      siteName,
      title,
      type: 'article',
      url: `/kuji/${fortune.sys.id}`
    },
    title,
    twitter: {
      card: 'summary_large_image',
      site: `@${twitterAccount}`,
      title: `${title} - ${siteName}`
    }
  }
}

export default async function Page({ params }: Props) {
  let fortune: FortuneEntry
  try {
    fortune = await getFortune(params.id)
  } catch {
    notFound()
  }

  const paper = fortune.fields.paper

  if (!paper?.fields.file) {
    notFound()
  }

  const name = generateFortuneName(fortune)
  const imageDetails = paper.fields.file.details.image

  return (
    <>
      <div className={styles.content}>
        <Image
          alt={name}
          blurDataURL={fortune.fields.prePaper}
          className={styles.kujiImage}
          height={imageDetails ? imageDetails.height / 2 : 540}
          placeholder="blur"
          priority
          quality={80}
          src={getImageURL(paper)}
          width={imageDetails ? imageDetails.width / 2 : 254}
        />
      </div>

      <ShareLinks
        text={`わたしの運勢は『${fortune.fields.blessing}』でした！ あなたもおみくじを引いてみてね`}
        url={new URL(
          `/share/${fortune.sys.id}`,
          process.env.NEXT_PUBLIC_BASE_URL
        ).toString()}
      />
    </>
  )
}
