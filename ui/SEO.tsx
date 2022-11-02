import { title as siteName, twitterAccount } from '@/lib/constants'

type Image = {
  height?: number
  src: string
  type?: 'image/gif' | 'image/jpeg' | 'image/png'
  width?: number
}

type Props = {
  description?: string
  image?: Image
  noIndex?: boolean
  path?: `/${string}`
  title?: string
  type?: 'article' | 'website'
}

export default function SEO({
  description,
  image,
  noIndex = false,
  path,
  title,
  type = 'article'
}: Props): JSX.Element {
  return (
    <>
      <title>{title ? `${title} - ${siteName}` : siteName}</title>
      {description && <meta content={description} name="description" />}
      {noIndex && <meta content="follow,noindex" name="robots" />}

      {description && <meta content={description} property="og:description" />}
      {image && (
        <>
          <meta
            content={new URL(
              image.src,
              process.env.NEXT_PUBLIC_BASE_URL
            ).toString()}
            property="og:image"
          />
          {image.height && (
            <meta
              content={image.height.toString()}
              property="og:image:height"
            />
          )}
          {image.type && <meta content={image.type} property="og:image:type" />}
          {image.width && (
            <meta content={image.width.toString()} property="og:image:width" />
          )}
        </>
      )}
      {title && <meta content={siteName} property="og:site_name" />}
      <meta content={title ?? siteName} property="og:title" />
      <meta content={type} property="og:type" />
      {path && (
        <meta
          href={new URL(path, process.env.NEXT_PUBLIC_BASE_URL).toString()}
          rel="og:url"
        />
      )}

      <meta content="summary_large_image" name="twitter:card" />
      <meta content={`@${twitterAccount}`} name="twitter:site" />
      <meta
        content={title ? `${title} - ${siteName}` : title}
        name="twitter:title"
      />

      {path && (
        <link
          href={new URL(path, process.env.NEXT_PUBLIC_BASE_URL).toString()}
          rel="canonical"
        />
      )}
    </>
  )
}
