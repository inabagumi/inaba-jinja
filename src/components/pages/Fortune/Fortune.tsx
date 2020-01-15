import clsx from 'clsx'
import React, { FC } from 'react'
import FortuneEntry from '../../../types/FortuneEntry'
import SingleDoc from '../../templates/SingleDoc'
import { homepage as siteUrl } from '../../../../package.json'
import styles from './Fortune.module.css'

const half = (number: number | undefined): number | undefined =>
  number && number / 2

const getTweetLink = (fortune: FortuneEntry): string => {
  const text = `わたしの運勢は『${fortune.fields.blessing}』でした！ あなたもおみくじを引いてみてね`
  const url = new URL('https://twitter.com/intent/tweet')
  url.searchParams.append('hashtags', 'ねるくじ')
  url.searchParams.append('related', 'Haneru_Inaba')
  url.searchParams.append('text', text)
  url.searchParams.append('url', `${siteUrl}/share/${fortune.sys.id}`)

  return url.toString()
}

type Props = {
  fortune: FortuneEntry
}

const Fortune: FC<Props> = ({ fortune }) => {
  const imageDetails = fortune.fields.paper.fields.file.details.image
  const imageWidth = half(imageDetails?.width)
  const imageHeight = half(imageDetails?.height)
  const imageURL = `https:${fortune.fields.paper.fields.file.url}`

  return (
    <SingleDoc
      title={`第${fortune.fields.number}番 ${fortune.fields.blessing}`}
    >
      <picture>
        <source
          srcSet={`${imageURL}?fm=webp&w=254 1x, ${imageURL}?fm=webp 2x`}
          type="image/webp"
        />

        <img
          alt={`${fortune.fields.blessing} - ${fortune.fields.description}`}
          className={styles.paper}
          height={imageHeight}
          src={`${imageURL}w=${imageWidth}`}
          srcSet={`${imageURL}?w=254 1x, ${imageURL} 2x`}
          width={imageWidth}
        />
      </picture>

      <nav className={styles.shareLinks}>
        <ul>
          <li>
            <a
              className={clsx(styles.shareButton, styles.shareButtonTwitter)}
              href={getTweetLink(fortune)}
              rel="noopener noreferrer"
              role="button"
              target="_blank"
            >
              Twitterに共有する
            </a>
          </li>
        </ul>
      </nav>
    </SingleDoc>
  )
}

export default Fortune
