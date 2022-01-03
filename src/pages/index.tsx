import { GetStaticProps } from 'next'
import Link from 'next/link'
import config from 'config'

import PageSEO from '#components/shared/SEO/PageSEO'
import { className } from '#components/shared/styles.css'
import { Post } from '#types/post'
import { getAllPosts } from '#utils/posts'

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
