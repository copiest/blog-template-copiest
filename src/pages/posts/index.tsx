import { useState, useMemo } from 'react'
import { GetStaticProps } from 'next'
import Link from 'next/link'
import { InView } from 'react-intersection-observer'

import { Post } from '#types/post'
import { getAllPosts } from '#utils/posts'
import { DEFAULT_POSTS_PAGE_SIZE } from '#constants'

function PostsPage({ posts }: { posts: Post[] }) {
  const [page, setPage] = useState<number>(1)

  const postsSize = useMemo(() => page * DEFAULT_POSTS_PAGE_SIZE, [page])
  const hasNextPage = useMemo(
    () => Math.ceil(posts.length / DEFAULT_POSTS_PAGE_SIZE) !== page,
    [page],
  )

  const handleChangeInview = (inView: boolean, index: number) => {
    if (inView && hasNextPage && index === postsSize - 1) {
      setPage((page) => page + 1)
    }
  }

  return (
    <>
      {posts.slice(0, postsSize).map((post, index) => (
        <InView onChange={(InView) => handleChangeInview(InView, index)} key={index}>
          <div style={{ height: 300 }}>
            <Link href={`/${post.slug.year}/${post.slug.subject}/${post.slug.title}`}>
              {post.frontMatter.title}
            </Link>
          </div>
        </InView>
      ))}
    </>
  )
}

export default PostsPage

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getAllPosts()

  return {
    props: {
      posts,
    },
  }
}
