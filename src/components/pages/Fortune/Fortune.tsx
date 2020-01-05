import React, { FC } from 'react'
import FortuneEntry from '../../../types/FortuneEntry'
import SingleDoc from '../../templates/SingleDoc'
import { homepage as siteUrl } from '../../../../package.json'

const half = (number: number | undefined): number | undefined =>
  number && number / 2

const getTweetLink = (fortune: FortuneEntry): string => {
  const text = `わたしの運勢は『${fortune.fields.blessing}』でした！ あなたも挑戦してみてね`
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
  return (
    <>
      <SingleDoc
        title={`第${fortune.fields.number}番 ${fortune.fields.blessing}`}
      >
        <img
          alt={`${fortune.fields.blessing} - ${fortune.fields.description}`}
          className="fortune-paper"
          height={half(fortune.fields.paper.fields.file.details.image?.height)}
          src={`https:${fortune.fields.paper.fields.file.url}`}
          width={half(fortune.fields.paper.fields.file.details.image?.width)}
        />

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
          line-height: 1;
          padding: 0.5rem 1.5rem;
          text-decoration: none;
        }

        .share-button--twitter {
          background-color: #00aced;
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
