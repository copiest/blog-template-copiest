import Head from 'next/head'

import config from 'config'

export default function DefaultSEO() {
  return (
    <Head>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="title" content={config.title} />
      <meta name="subject" content={config.title} />
      <meta name="description" content={config.description} />
      <meta name="author" content={config.author.name} />
      <meta name="keywords" content={config.title} />
      <meta property="og:title" content={config.title} />
      <meta property="og:description" content={config.description} />
      <meta property="og:image" content={config.thumbnail} />
      <meta property="og:type" content="website" />
      {typeof window !== 'undefined' && <meta property="og:url" content={window.location.href} />}
      <link rel="canonical" href="https://tigger.dev" />
    </Head>
  )
}
