import Head from 'next/head'
import { useRouter } from 'next/router'
import { FC, useContext } from 'react'
import { SiteContext } from '../context/site-context'

type Props = {
  description?: string
  title?: string
}

const Meta: FC<Props> = ({ description, title }) => {
  const {
    baseUrl,
    description: defaultDescription,
    title: siteName
  } = useContext(SiteContext)
  const router = useRouter()

  return (
    <Head>
      <title>{title || siteName}</title>

      <link href={`${baseUrl}${router.pathname}`} rel="canonical" />
      <meta content={description || defaultDescription} name="description" />

      <meta content="website" property="og:type" />
      <meta content={`${baseUrl}${router.pathname}`} property="og:url" />
      <meta content={title || siteName} property="og:title" />
      <meta
        content={description || defaultDescription}
        property="og:description"
      />
      <meta content={`${baseUrl}/img/main-visual.jpg`} property="og:image" />

      <meta content="summary_large_image" name="twitter:card" />
      <meta content={title || siteName} name="twitter:title" />
      <meta
        content={description || defaultDescription}
        name="twitter:description"
      />
      <meta content={`${baseUrl}/img/main-visual.jpg`} name="twitter:image" />
    </Head>
  )
}

export default Meta
