import Image from 'next/legacy/image'
import { notFound } from 'next/navigation'
import { getFortune, getFortuneIDs, getImageURL } from '@/lib/contentful'
import { type Fortune } from '@/lib/contentful'
import DynamicTitle from '@/ui/DynamicTitle'
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

export default async function Page({ params }: Props): Promise<JSX.Element> {
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
      <DynamicTitle>{`因幡はねるくじ ${name}`}</DynamicTitle>
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
