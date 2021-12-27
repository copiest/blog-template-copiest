import React from 'react'
import { getMDXComponent } from 'mdx-bundler/client'

import PostSEO from '#components/shared/SEO/PostSEO'
import { Post, Slug } from '#types/post'
import { getAllPosts, getPost } from '#utils/posts'

function PostDetail({ post, code }: { post: Post; code: string }) {
  const { title, description, tags } = post.frontMatter
  const Component = React.useMemo(() => getMDXComponent(code), [code])

  return (
    <>
      <PostSEO
        seo={{
          title,
          description,
          tags,
        }}
      />
      <div>{title}</div>
      <Component />
    </>
  )
}

export default PostDetail

export const getStaticPaths = async () => {
  const allPosts = await getAllPosts()
  const paths: Array<{ params: { year: string; slugs: string[] } }> = []

  for (const post of allPosts) {
    const { year, subject, title } = post.slug

    paths.push({ params: { year, slugs: [subject, title] } })
  }

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async ({ params }: { params: { year: string; slugs: string[] } }) => {
  const { post, code } = await getPost({
    year: params.year,
    subject: params.slugs[0],
    title: params.slugs[1],
  } as Slug)

  return {
    props: {
      post,
      code,
    },
  }
}
