import type { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import Image from 'next/image'
import styled from 'styled-components'

import Page from '@/components/layout'
import Placeholder from '@/components/placeholder'
import SEO from '@/components/seo'
import SingleWindow from '@/components/simple-window'
import getFortune from '@/contentful/getFortune'
import getTweetLink from '@/helpers/getTweetLink'
import { FortuneEntry } from '@/types/fortune'

const Content = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
`

const ImageWrapper = styled.div`
  position: relative;

  & > :last-of-type {
    vertical-align: bottom;
  }
`

const ShareLinks = styled.nav`
  margin-top: 3rem;
`

const ShareLinksList = styled.ul`
  align-items: center;
  display: flex;
  justify-content: center;
  list-style-type: none;
  margin: 0;
  padding: 0;
`

const ShareButton = styled.a`
  background-color: #1da1f2;
  border-radius: 1.2em;
  color: #fff;
  display: inline-block;
  font-size: 0.95rem;
  font-weight: 700;
  letter-spacing: 0.025em;
  line-height: 1;
  padding: 0.6em 1.5em;
  text-decoration: none;
  transition: background-color 0.5s ease;

  :hover {
    background-color: #005fd1;
  }
`

export type Props = {
  fortune: FortuneEntry
}

const KujiPage: NextPage<Props> = ({ fortune }) => {
  const name = `第${fortune.fields.number}番『${fortune.fields.blessing}』`
  const imageDetails = fortune.fields.paper.fields.file.details.image
  const imageURL = `https:${fortune.fields.paper.fields.file.url}`
  const imageWidth = imageDetails ? imageDetails.width / 2 : 254
  const imageHeight = imageDetails ? imageDetails.height / 2 : 540

  return (
    <>
      <SEO
        description={fortune.fields.description}
        image={{
          height: fortune.fields.card.fields.file.details.image?.height,
          url: fortune.fields.card.fields.file.url,
          width: fortune.fields.card.fields.file.details.image?.width
        }}
        path={`/kuji/${fortune.sys.id}`}
        title={`因幡はねるくじ ${name}`}
        type="article"
      />

      <Page>
        <SingleWindow title={name}>
          <Content>
            <ImageWrapper>
              <Placeholder src={fortune.fields.prePaper} />
              <Image
                alt={name}
                height={imageHeight}
                priority
                quality={80}
                src={imageURL}
                width={imageWidth}
              />
            </ImageWrapper>
          </Content>

          <ShareLinks>
            <ShareLinksList>
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
            </ShareLinksList>
          </ShareLinks>
        </SingleWindow>
      </Page>
    </>
  )
}

export default KujiPage

export type Params = {
  id: string
}

export const getStaticProps: GetStaticProps<Props, Params> = async ({
  params
}) => {
  const fortune = await getFortune(params?.id).catch(() => undefined)

  if (fortune) {
    return {
      props: {
        fortune
      },
      revalidate: 30
    }
  }

  return {
    notFound: true,
    revalidate: 5
  }
}

export const getStaticPaths: GetStaticPaths<Params> = () => {
  return Promise.resolve({
    fallback: 'blocking',
    paths: []
  })
}
