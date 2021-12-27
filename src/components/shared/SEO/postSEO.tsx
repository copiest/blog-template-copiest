import Head from 'next/head'

import { PostSeo } from '#types/post'
import config from 'config'

export default function PostSEO({ seo }: { seo: PostSeo }) {
  return (
    <Head>
      <title>{`${seo.title} – ${config.title}`}</title>
      <meta name="title" content={seo.title} />
      <meta name="subject" content={seo.title} />
      <meta name="keywords" content={seo.title} />
      <meta name="description" content={seo.description} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:type" content="article" />
      <meta property="og:description" content={seo.description} />
      {seo.tags.map((tag) => (
        <meta key={tag} property="article:tag" content={tag} />
      ))}
    </Head>
  )
}
