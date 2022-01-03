import Link from 'next/link'
import { GetStaticProps } from 'next'

import PageSEO from '#components/shared/SEO/PageSEO'
import { className } from '#components/shared/styles.css'
import { Post } from '#types/post'
import { getAllPosts } from '#utils/posts'

import config from 'config'

function IndexPage({ posts }: { posts: Post[] }) {
  return (
    <>
      <PageSEO title="Home" url={config.url} />
      <div className={className}>
        {posts.map((post, index) => (
          <Link href={`/${post.slug.year}/${post.slug.subject}/${post.slug.title}`} key={index}>
            {post.frontMatter.title}
          </Link>
        ))}
      </div>
    </>
  )
}

export default IndexPage

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getAllPosts()

  return {
    props: {
      posts,
    },
  }
}
