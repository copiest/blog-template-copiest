import { GetStaticProps } from 'next'
import Link from 'next/link'
import config from 'config'

import { cardContainer } from './styles.css'

import PageSEO from '#components/shared/SEO/PageSEO'
import Card from '#components/card'
import { Post } from '#types/post'
import { getAllPosts } from '#utils/posts'
import { DEFAULT_POSTS_SIZE } from '#constants'

function IndexPage({ posts }: { posts: Post[] }) {
  return (
    <>
      <PageSEO title="Home" url={config.url} />
      <ul>
        {posts.map(({ frontMatter, slug }, index) => (
          <li key={index} className={cardContainer}>
            <Link href={`/${slug.year}/${slug.subject}/${slug.title}`}>
              <a>
                <Card frontMatter={frontMatter} />
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}

export default IndexPage

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getAllPosts()

  return {
    props: {
      posts: posts.slice(0, DEFAULT_POSTS_SIZE),
    },
  }
}
