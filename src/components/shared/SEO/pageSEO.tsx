import Head from 'next/head'

import config from 'config'

export default function PageSEO({
  title,
  description,
  url,
}: {
  title: string
  description: string
  url: string
}) {
  return (
    <Head>
      <title>{`${title} – ${config.title}`}</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="title" content={title} />
      <meta name="subject" content={config.title} />
      <meta name="description" content={description} />
      <meta name="author" content={config.author.name} />
      <meta name="keywords" content={config.title} />
      <meta property="og:title" content={config.title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={config.thumbnail} />
      <meta property="og:locale" content="ko_KR" />
      <meta property="og:type" content="website" />
      <meta property="og:type" content="blog" />
      {typeof window !== 'undefined' && <meta property="og:url" content={url} />}
      {typeof window !== 'undefined' && <link rel="canonical" href={window.location.href} />}
    </Head>
  )
}
