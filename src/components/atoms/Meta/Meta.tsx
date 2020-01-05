import Head from 'next/head'
import React, { FC } from 'react'
import { homepage as siteUrl } from '../../../../package.json'

type Props = {
  description?: string
  image?: string
  pathname: string
  title?: string
}

const Meta: FC<Props> = ({ description, image, pathname, title }) => {
  const url = new URL(pathname, siteUrl).toString()
  const imageUrl = image && new URL(image, siteUrl).toString()

  return (
    <Head>
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
    </Head>
  )
}

export default Meta
