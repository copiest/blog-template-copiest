import { GetStaticProps } from 'next'

import { getAllPosts } from '@utils/posts'

import Message from '@shared/Message'

import { className } from '@components/shared/styles.css'

function IndexPage(props: any) {
  console.log('posts', props)
  return (
    <div className={className}>
      <Message />
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
