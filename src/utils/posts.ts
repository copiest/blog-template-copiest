import fs from 'fs'
import path from 'path'

import glob from 'glob'
import matter from 'gray-matter'
import memoize from 'memoizee'
import { bundleMDX } from 'mdx-bundler'

import { Post, Slug } from '@common/types'

const POST_DIRECTORY = path.join(process.cwd(), 'posts')

function retreiveAllPosts(): Post[] {
  const files: string[] = glob.sync(`${POST_DIRECTORY}/**/**/*.mdx`)
  const publishedPosts: Post[] = []

  files.forEach((file) => {
    const source = fs.readFileSync(path.join(file))
    const slugs = file
      .replace(`${POST_DIRECTORY}/`, '')
      .replace(/\.mdx?$/, '')
      .split('/')
    const { data, content } = matter(source)

    if (data.published) {
      publishedPosts.push({
        frontMatter: {
          title: data.title,
          tags: data.tags,
          published: data.published,
          date: data.date,
          description: data.description,
          thumbnailImg: data.thumbnailImg,
          content,
        },
        slug: {
          year: slugs[0],
          subject: slugs[1],
          title: slugs[2],
        } as Slug,
        path: file,
      })
    }
  })

  return publishedPosts.sort((a, b) => {
    if (a.frontMatter.date < b.frontMatter.date) {
      return 1
    } else {
      return -1
    }
  })
}

export const getAllPosts: () => Post[] = memoize(retreiveAllPosts)

export async function getPost(slug: Slug): Promise<{ post: Post; code: string }> {
  const { year, subject, title } = slug
  const POST_PATH = `${POST_DIRECTORY}/${year}/${subject}/${title}`

  const source = fs.readFileSync(path.join(`${POST_PATH}.mdx`), { encoding: 'utf-8' })

  const {
    matter: { data, content },
    code,
  } = await bundleMDX({
    source,
    cwd: POST_PATH,
  })

  return {
    post: {
      frontMatter: {
        title: data.title,
        tags: data.tags,
        published: data.published,
        date: data.date,
        description: data.description,
        thumbnailImg: data.thumbnailImg,
        content,
      },
      slug,
      path: POST_PATH,
    },
    code,
  }
}
