import { GetStaticPaths, GetStaticProps } from 'next'

import { Post } from '#types/post'
import { getAllPosts } from '#utils/posts'
import { DEFAULT_POSTS_PAGE_SIZE } from '#constants'

function PostsPage({ posts }: { posts: Post[] }) {
  return <div>Posts</div>
}

export default PostsPage

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getAllPosts()
  const totalPageSize = Math.ceil(posts.length / DEFAULT_POSTS_PAGE_SIZE)
  const paths: Array<{ params: { id: string } }> = []

  for (let i = 0; i < totalPageSize; i += 1) {
    paths.push({ params: { id: `${i + 1}` } })
  }

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const posts = await getAllPosts()

  return {
    props: {
      posts,
    },
  }
}
