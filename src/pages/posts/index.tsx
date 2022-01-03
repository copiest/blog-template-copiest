import { useEffect } from 'react'
import { GetStaticProps } from 'next'
import Link from 'next/link'
import { InView } from 'react-intersection-observer'
import { useSetRecoilState, useRecoilValue } from 'recoil'

import { hasNextPostsPageState, allPostsState, pageState, currentPostsState } from '#store/posts'
import { Post } from '#types/post'
import { getAllPosts } from '#utils/posts'

function PostsPage({ allPosts }: { allPosts: Post[] }) {
  const setPosts = useSetRecoilState(allPostsState)
  const setPage = useSetRecoilState(pageState)
  const currentPosts = useRecoilValue(currentPostsState)
  const hasNextPostsPage = useRecoilValue(hasNextPostsPageState)

  const handleChangeInview = (inView: boolean, index: number): void => {
    if (inView && index === currentPosts.length - 3 && hasNextPostsPage) {
      setPage((page) => page + 1)
    }
  }

  useEffect((): void => setPosts(allPosts), [])

  return (
    <>
      {currentPosts.map((post, index) => (
        <InView onChange={(InView) => handleChangeInview(InView, index)} key={index}>
          <div style={{ height: 200 }}>
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
  const allPosts = await getAllPosts()

  return {
    props: {
      allPosts,
    },
  }
}
