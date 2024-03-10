import { twitterAccount } from '@/lib/constants'

const DEFAULT_HASHTAGS = ['ねるくじ']

type ShareLinkOptions = {
  text?: string
  url: string
  hashtags?: string[]
}

function generateTweetShareURL({
  hashtags = DEFAULT_HASHTAGS,
  text,
  url
}: ShareLinkOptions): string {
  const tweetShareURL = new URL('https://twitter.com/intent/tweet')
  tweetShareURL.searchParams.append('hashtags', hashtags.join(','))
  tweetShareURL.searchParams.append('related', 'Haneru_Inaba')

  if (text) {
    tweetShareURL.searchParams.append('text', text)
  }

  tweetShareURL.searchParams.append('url', url)
  tweetShareURL.searchParams.append('via', twitterAccount)

  return tweetShareURL.toString()
}

type Props = {
  hashtags?: string[]
  text?: string
  url: string
}

export default function ShareLinks({
  hashtags,
  text,
  url
}: Props): JSX.Element {
  const tweetShereURL = generateTweetShareURL({ hashtags, text, url })

  return (
    <nav className="mt-12">
      <ul className="flex items-center justify-center">
        <li>
          <a
            className="inline-block rounded-full bg-[#0f1419] px-6 py-2 text-sm font-semibold tracking-wide text-white"
            href={tweetShereURL}
            rel="noopener noreferrer"
            role="button"
            target="_blank"
          >
            Xに共有する
          </a>
        </li>
      </ul>
    </nav>
  )
}
