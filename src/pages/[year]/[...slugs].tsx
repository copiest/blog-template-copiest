import React from 'react'
import { getMDXExport } from 'mdx-bundler/client'

import PostSEO from '#components/shared/SEO/postSEO'
import { Post, PostSeo, Slug } from '#types/post'
import { getAllPosts, getPost } from '#utils/posts'

function PostDetail({ post, code }: { post: Post; code: string }) {
  const mdxExport = React.useMemo(() => getMDXExport<{ seo: PostSeo }, {}>(code), [code])
  const Component = React.useMemo(() => mdxExport.default, [code])

  return (
    <>
      <PostSEO seo={mdxExport.seo} />
      <div>{post.frontMatter.title}</div>
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
