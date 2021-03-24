import NextHead from 'next/head'
import { useRouter } from 'next/router'
import { SITE_URL, TwitterURL, TWITTER_USERNAME } from 'lib/constants'

type Props = {
  title: string
  description: string
  image: string
  type: string
  date?: string
}

const Head = ({ title, description, image, type, date }: Props) => {
  const router = useRouter()
  return (
    <NextHead>
      {/* Fonts */}
      <link
        rel="preload"
        href="/fonts/dm-sans-latin-regular.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        href="/fonts/dm-sans-latin-500.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        href="/fonts/dm-sans-latin-700.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        href="/fonts/dm-sans-latin-italic.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />

      {/* SEO */}
      <title>{title}</title>
      <meta name="robots" content="follow, index" />
      <meta name="description" content={description} />
      <link rel="canonical" href={`${SITE_URL}${router.asPath}`} />

      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Fabrizzio Moncada" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={`${SITE_URL}${router.asPath}`} />
      <meta property="og:image" content={image} />

      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />

      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:site" content={TWITTER_USERNAME} />

      <meta name="author" content="Fabrizzio Moncada" />
      <meta property="article:author" content={TwitterURL} />
      {date && <meta property="article:published_time" content={date} />}
    </NextHead>
  )
}

export default Head
