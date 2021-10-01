import useBaseURLUtils from './use-base-url-utils'
import { FortuneEntry } from '@/types/fortune'

function useTweetShareURL(fortune: FortuneEntry): string {
  const { withBaseURL } = useBaseURLUtils()

  const url = new URL('https://twitter.com/intent/tweet')
  url.searchParams.append('hashtags', 'ねるくじ')
  url.searchParams.append('related', 'Haneru_Inaba')
  url.searchParams.append(
    'text',
    `わたしの運勢は『${fortune.fields.blessing}』でした！ あなたもおみくじを引いてみてね`
  )
  url.searchParams.append('url', withBaseURL(`/share/${fortune.sys.id}`))
  url.searchParams.append('via', 'Inaba_Jinja')

  return url.toString()
}

export default useTweetShareURL
