import Head from 'next/head'
import { useRouter } from 'next/router'
import React, { FC } from 'react'
import { defineMessages, useIntl } from 'react-intl'
import { homepage } from '../../../../package.json'

const messages = defineMessages({
  title: {
    ldefaultMessage: '因幡神社',
    id: 'app.title'
  }
})

type Props = {
  description?: string
  image?: string
  title?: string
}

const Meta: FC<Props> = ({ description, image, title: defaultTitle }) => {
  const router = useRouter()
  const intl = useIntl()

  const title = defaultTitle || intl.formatMessage(messages.title)
  const url = new URL(router.pathname, homepage).toString()

  return (
    <Head>
      <title>{title}</title>
      {description && <meta content={description} name="description" />}

      {description && <meta content={description} property="og:description" />}
      {image && (
        <meta
          content={new URL(image, homepage).toString()}
          property="og:image"
        />
      )}
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
