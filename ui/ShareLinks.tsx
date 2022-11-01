import styles from './ShareLinks.module.css'

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
  tweetShareURL.searchParams.append('via', 'Inaba_Jinja')

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
  )
}
