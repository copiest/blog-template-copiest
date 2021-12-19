import Link from 'next/link'
import { GetStaticProps } from 'next'

import { getAllPosts } from '@utils/posts'

import { className } from '@components/shared/styles.css'

function IndexPage(props: any) {
  return (
    <div className={className}>
      {props.posts.map((post: any, index: number) => (
        <Link href={`/${post.slug.year}/${post.slug.subject}/${post.slug.title}`} key={index}>
          {post.frontMatter.title}
        </Link>
      ))}
    </div>
  )
}

export default IndexPage

export const getStaticProps: GetStaticProps = () => {
  const posts = getAllPosts()

  return {
    props: {
      posts,
    },
  }
}
