import cardImage from '@/assets/card.jpg'
import { description } from '@/lib/constants'
import SEO from '@/ui/SEO'

export default function Head(): JSX.Element {
  return (
    <SEO description={description} image={cardImage} path="/" type="website" />
  )
}
