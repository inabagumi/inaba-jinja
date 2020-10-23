import fullPath from '@/helpers/fullPath'
import { FortuneEntry } from '@/types/fortune'

function getTweetLink(fortune: FortuneEntry): string {
  const text = `わたしの運勢は『${fortune.fields.blessing}』でした！ あなたもおみくじを引いてみてね`
  const url = new URL('https://twitter.com/intent/tweet')

  url.searchParams.append('hashtags', 'ねるくじ')
  url.searchParams.append('related', 'Haneru_Inaba')
  url.searchParams.append('text', text)
  url.searchParams.append('url', fullPath(`/share/${fortune.sys.id}`))
  url.searchParams.append('via', 'Inaba_Jinja')

  return url.toString()
}

export default getTweetLink
