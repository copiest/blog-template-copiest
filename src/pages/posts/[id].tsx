import { GetStaticPaths, GetStaticProps } from 'next'

import { Post } from '#types/post'
import { getAllPosts, getPagingInfo } from '#utils/posts'
import { DEFAULT_POSTS_PAGE_SIZE } from '#constants'

function PostsPage({ posts }: { posts: Post[] }) {
  console.log('posts', posts)
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

interface Params extends NodeJS.Dict<string> {
  id: string
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as Params
  const allPosts = await getAllPosts()
  const page = Number(id)

  const { startPost, endPost, hasNextPage } = getPagingInfo(page, allPosts.length)

  return {
    props: {
      posts: allPosts.slice(startPost, endPost),
      page,
      hasNextPage,
    },
  }
}
