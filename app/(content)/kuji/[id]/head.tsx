import { type Fortune, getFortune, getImageURL } from '@/lib/contentful'
import SEO from '@/ui/SEO'
import { type Props, generateFortuneName } from './page'

export default async function Head({ params }: Props) {
  let fortune: Fortune
  try {
    fortune = await getFortune(params.id)
  } catch {
    return <></>
  }

  const name = generateFortuneName(fortune)
  const title = `因幡はねるくじ ${name}`

  return (
    <SEO
      description={fortune.fields.description}
      image={{
        height: fortune.fields.card.fields.file.details.image?.height ?? 630,
        src: getImageURL(fortune.fields.card),
        width: fortune.fields.card.fields.file.details.image?.width ?? 1200
      }}
      path={`/kuji/${fortune.sys.id}`}
      title={title}
    />
  )
}
