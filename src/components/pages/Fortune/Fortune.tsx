import React, { FC } from 'react'
import FortuneEntry from '../../../types/FortuneEntry'
import SingleDoc from '../../templates/SingleDoc'
import { homepage as siteUrl } from '../../../../package.json'

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
    <>
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
            className="fortune-paper"
            height={imageHeight}
            src={`${imageURL}w=${imageWidth}`}
            srcSet={`${imageURL}?w=254 1x, ${imageURL} 2x`}
            width={imageWidth}
          />
        </picture>

        <nav className="share-links">
          <ul>
            <li>
              <a
                className="share-button share-button--twitter"
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

      <style jsx>{`
        .fortune-paper {
          background-color: #fff;
          display: block;
          height: auto;
          margin: 0 auto;
          max-width: 100%;
        }

        .share-button {
          border: 1px solid #fff;
          border-radius: 1rem;
          color: #fff;
          display: inline-block;
          font-size: 0.95rem;
          font-weight: 700;
          letter-spacing: 0.025em;
          line-height: 1;
          padding: 0.5rem 1.5rem;
          text-decoration: none;
        }

        .share-button--twitter {
          background-color: #1da1f2;
          border-color: #1da1f2;
          transition: background-color ease 0.3s, border-color ease 0.3s;
        }

        .share-button--twitter:hover {
          background-color: #005fd1;
          border-color: #005fd1;
        }

        .share-links {
          margin-top: 3rem;
        }

        .share-links ul {
          align-items: center;
          display: flex;
          justify-content: center;
          list-style-type: none;
          margin: 0;
          padding: 0;
        }
      `}</style>
    </>
  )
}

export default Fortune
