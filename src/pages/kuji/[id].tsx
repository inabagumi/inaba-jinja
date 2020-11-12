import type { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import NextImage from 'next/image'
import { BreadcrumbJsonLd, NextSeo } from 'next-seo'
import styled from 'styled-components'

import Page from '@/components/layout'
import Placeholder from '@/components/placeholder'
import SingleWindow from '@/components/simple-window'
import getFortune from '@/contentful/getFortune'
import fullPath from '@/helpers/fullPath'
import getTweetLink from '@/helpers/getTweetLink'
import NotFound from '@/pages/404.mdx'
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

const Image = styled(NextImage)`
  margin: 0 auto;
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
  fortune?: FortuneEntry
}

const KujiPage: NextPage<Props> = ({ fortune }) => {
  if (!fortune) return <NotFound />

  const name = `第${fortune.fields.number}番『${fortune.fields.blessing}』`
  const title = `因幡はねるくじ ${name}`
  const imageDetails = fortune.fields.paper.fields.file.details.image
  const imageURL = `https:${fortune.fields.paper.fields.file.url}`
  const imageWidth = imageDetails?.width && imageDetails.width / 2
  const imageHeight = imageDetails?.height && imageDetails.height / 2

  return (
    <>
      <NextSeo
        canonical={fullPath(`/kuji/${fortune.sys.id}`)}
        description={fortune.fields.description}
        openGraph={{
          images: [
            {
              height: fortune.fields.card.fields.file.details.image?.height,
              url: fullPath(fortune.fields.card.fields.file.url),
              width: fortune.fields.card.fields.file.details.image?.width
            }
          ],
          title
        }}
        title={title}
      />

      <BreadcrumbJsonLd
        itemListElements={[
          {
            item: fullPath('/lottery'),
            name: 'ねるくじ',
            position: 1
          },
          {
            item: fullPath(`/kuji/${fortune.sys.id}`),
            name,
            position: 2
          }
        ]}
      />

      <Page>
        <SingleWindow title={name}>
          <Content>
            <ImageWrapper>
              <Placeholder src={fortune.fields.prePaper} />
              <Image
                alt={name}
                height={imageHeight}
                priority={!!imageWidth}
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
  const id = params?.id

  if (id) {
    const fortune = await getFortune(id).catch(() => undefined)

    return {
      props: {
        fortune
      },
      revalidate: 5
    }
  }

  return {
    notFound: true
  }
}

export const getStaticPaths: GetStaticPaths<Params> = () => {
  return Promise.resolve({
    fallback: 'blocking',
    paths: []
  })
}
