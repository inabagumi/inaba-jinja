import { type Metadata } from 'next'
import Image from 'next/legacy/image'
import { notFound } from 'next/navigation'
import { title as siteName, twitterAccount } from '@/lib/constants'
import {
  type Fortune,
  getFortune,
  getFortuneIDs,
  getImageURL
} from '@/lib/contentful'
import ShareLinks from '@/ui/ShareLinks'
import SimpleTitle from '@/ui/SimpleTitle'
import styles from './page.module.css'

export function generateFortuneName(fortune: Fortune): string {
  return `第${fortune.fields.number}番『${fortune.fields.blessing}』`
}

export const revalidate = 30

export type Params = {
  id: string
}

export async function generateStaticParams(): Promise<Params[]> {
  const ids = await getFortuneIDs()

  return ids.map((id) => ({ id }))
}

export type Props = {
  params: Params
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const fortune = await getFortune(params.id)

  if (!fortune) {
    return {}
  }

  const name = generateFortuneName(fortune)
  const title = `因幡はねるくじ ${name}`

  return {
    alternates: {
      canonical: `/kuji/${fortune.sys.id}`
    },
    description: fortune.fields.description,
    metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL),
    openGraph: {
      description: fortune.fields.description,
      images: [
        {
          height: fortune.fields.card.fields.file.details.image?.height ?? 630,
          url: getImageURL(fortune.fields.card),
          width: fortune.fields.card.fields.file.details.image?.width ?? 1200
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
  let fortune: Fortune
  try {
    fortune = await getFortune(params.id)
  } catch {
    notFound()
  }

  const name = generateFortuneName(fortune)
  const imageDetails = fortune.fields.paper.fields.file.details.image

  return (
    <>
      <SimpleTitle>{name}</SimpleTitle>

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
