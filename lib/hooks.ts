import pkg from '../package.json'
import { type Fortune } from './contentful'

export type BaseURLUtils = {
  withBaseURL: (path: string) => string
}

export function useBaseURLUtils(): BaseURLUtils {
  const { homepage: baseURL } = pkg

  return {
    withBaseURL: (path) => {
      return new URL(path, baseURL).toString()
    }
  }
}

export function useTweetShareURL(fortune: Fortune): string {
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
