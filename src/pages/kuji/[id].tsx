import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import NextImage from 'next/image'
import { BreadcrumbJsonLd, NextSeo } from 'next-seo'
import styled from 'styled-components'

import Page from '@/components/Layout'
import SingleWindow from '@/components/SimpleWindow'
import getFortune from '@/contentful/getFortune'
import fullPath from '@/helpers/fullPath'
import getTweetLink from '@/helpers/getTweetLink'
import NotFound from '@/pages/404.mdx'
import FortuneEntry from '@/types/FortuneEntry'

const ImageContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
`

type ImageProps = {
  placeholder: string
}

const Image = styled(NextImage).withConfig({
  shouldForwardProp: (prop) => !['placeholder'].includes(prop)
})<ImageProps>`
  display: block;
  overflow: hidden;

  ::before {
    background-color: #fff;
    background-image: url('${(props) => props.placeholder}');
    background-position: center;
    background-size: cover;
    content: '';
    display: block;
    filter: blur(10px);
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
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
  const imageWidth = imageDetails ? imageDetails.width / 2 : 0
  const imageHeight = imageDetails ? imageDetails.height / 2 : 0

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
              height={imageHeight}
              placeholder={fortune.fields.prePaper}
              priority={imageWidth > 0}
              quality="80"
              sizes={imageWidth > 0 ? `${imageWidth}px` : undefined}
              src={imageURL}
              unsized={imageWidth < 1}
              width={imageWidth}
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
    unstable_notFound: true
  }
}

export const getStaticPaths: GetStaticPaths<Params> = () => {
  return Promise.resolve({
    fallback: 'unstable_blocking',
    paths: []
  })
}
