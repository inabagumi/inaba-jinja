import styled from '@emotion/styled'
import React, { FC } from 'react'
import Image from 'components/atoms/Image'
import SingleDoc from 'components/templates/SingleDoc'
import fullPath from 'helpers/fullPath'
import FortuneEntry from 'types/FortuneEntry'

const Paper = styled(Image)`
  background-color: #fff;
  background-image: url("${({ src }): string => src}?w=10");
  background-position: center;
  background-size: contain;
  display: block;
  height: auto;
  margin: 0 auto;
  max-width: 100%;
`

const ShareButton = styled.a`
  background-color: #1da1f2;
  border: 1px solid #1da1f2;
  border-radius: 1rem;
  color: #fff;
  display: inline-block;
  font-size: 0.95rem;
  font-weight: 700;
  letter-spacing: 0.025em;
  line-height: 1;
  padding: 0.5rem 1.5rem;
  text-decoration: none;

  &:hover {
    background-color: #005fd1;
    border-color: #005fd1;
    color: #fff;
  }
`

const ShareLinks = styled.nav`
  margin-top: 3rem;

  ul {
    align-items: center;
    display: flex;
    justify-content: center;
    list-style-type: none;
    margin: 0;
    padding: 0;
  }
`

const getTweetLink = (fortune: FortuneEntry): string => {
  const text = `わたしの運勢は『${fortune.fields.blessing}』でした！ あなたもおみくじを引いてみてね`
  const url = new URL('https://twitter.com/intent/tweet')
  url.searchParams.append('hashtags', 'ねるくじ')
  url.searchParams.append('related', 'Haneru_Inaba')
  url.searchParams.append('text', text)
  url.searchParams.append('url', fullPath(`/share/${fortune.sys.id}`))
  url.searchParams.append('via', 'Inaba_Jinja')

  return url.toString()
}

type Props = {
  fortune: FortuneEntry
}

const Fortune: FC<Props> = ({ fortune }) => {
  const imageDetails = fortune.fields.paper.fields.file.details.image
  const imageURL = `https:${fortune.fields.paper.fields.file.url}`

  return (
    <SingleDoc
      title={`第${fortune.fields.number}番 ${fortune.fields.blessing}`}
    >
      <Paper
        alt={`${fortune.fields.blessing} - ${fortune.fields.description}`}
        height={imageDetails?.height || 0}
        src={imageURL}
        width={imageDetails?.width || 0}
      />

      <ShareLinks>
        <ul>
          <li>
            <ShareButton
              href={getTweetLink(fortune)}
              rel="noopener noreferrer"
              role="button"
              target="_blank"
            >
              Twitterに共有する
            </ShareButton>
          </li>
        </ul>
      </ShareLinks>
    </SingleDoc>
  )
}

export default Fortune
