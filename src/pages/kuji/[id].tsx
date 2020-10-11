import styled from '@emotion/styled'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { BreadcrumbJsonLd, NextSeo } from 'next-seo'
import React from 'react'

import Image from '@/components/Image'
import Page from '@/components/Layout'
import SingleWindow from '@/components/SimpleWindow'
import getFortune from '@/contentful/getFortune'
import fullPath from '@/helpers/fullPath'
import getTweetLink from '@/helpers/getTweetLink'
import NotFound from '@/pages/404.mdx'
import FortuneEntry from '@/types/FortuneEntry'

const ImageContainer = styled.div`
  max-width: 100%;
  margin: 0 auto;
  width: 254px;
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

  :hover {
    background-color: #005fd1;
    border-color: #005fd1;
    color: #fff;
  }
`

export type Props = {
  fortune: FortuneEntry | null
}

const KujiPage: NextPage<Props> = ({ fortune }) => {
  if (!fortune) return <NotFound />

  const name = `第${fortune.fields.number}番『${fortune.fields.blessing}』`
  const title = `因幡はねるくじ ${name}`
  const imageDetails = fortune.fields.paper.fields.file.details.image
  const imageURL = `https:${fortune.fields.paper.fields.file.url}`

  return (
    <>
      <NextSeo
        canonical={fullPath(`/kuji/${fortune.sys.id}`)}
        description={fortune.fields.description}
        openGraph={{
          images: [
            {
              height: 630,
              url: fullPath(fortune.fields.card.fields.file.url),
              width: 1200
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
          <ImageContainer>
            <Image
              alt={name}
              height={imageDetails?.height || 0}
              preSrc={fortune.fields.prePaper}
              src={imageURL}
              width={imageDetails?.width || 0}
            />
          </ImageContainer>

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
    const fortune = await getFortune(id).catch(() => null)

    return {
      props: {
        fortune
      },
      revalidate: 5
    }
  }

  return {
    props: {
      fortune: null
    },
    revalidate: 5
  }
}

export const getStaticPaths: GetStaticPaths<Params> = () => {
  return Promise.resolve({
    fallback: 'unstable_blocking',
    paths: []
  })
}
