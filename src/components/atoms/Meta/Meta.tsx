import { graphql, useStaticQuery } from 'gatsby'
import React, { FC } from 'react'
import Helmet from 'react-helmet'
import SiteMetadata from '../../../types/SiteMetadata'

type Props = {
  description?: string
  image?: string
  pathname: string
  title?: string
}

type TData = {
  site: {
    siteMetadata: SiteMetadata
  }
}

const Meta: FC<Props> = ({ description, image, pathname, title }) => {
  const { site } = useStaticQuery<TData>(
    graphql`
      query {
        site {
          siteMetadata {
            siteUrl
          }
        }
      }
    `
  )

  const url = new URL(pathname, site.siteMetadata.siteUrl).toString()
  const imageUrl = image && new URL(image, site.siteMetadata.siteUrl).toString()

  return (
    <Helmet>
      <title>{title}</title>
      {description && <meta content={description} name="description" />}

      {description && <meta content={description} property="og:description" />}
      {image && <meta content={imageUrl} property="og:image" />}
      <meta content={title} property="og:title" />
      <meta content="website" property="og:type" />
      <meta content={url} property="og:url" />

      <meta
        content={image ? 'summary_large_image' : 'summary'}
        name="twitter:card"
      />

      <link href={url} rel="canonical" />
    </Helmet>
  )
}

export default Meta
