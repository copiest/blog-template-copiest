import fs from 'fs'
import path from 'path'
import glob from 'glob'
import matter from 'gray-matter'
import memoize from 'memoizee'

const POST_DIRECTORY = path.join(process.cwd(), 'posts')

interface Slug {
  year: string
  subject: string
  title: string
}

interface FrontMatter {
  title: string
  tags: string[]
  published: boolean
  date: string
  thumbnailImg?: string
  content: string
}

interface Post {
  frontMatter: FrontMatter
  slug: Slug
  path: string
}

function retreiveAllPosts(): Post[] {
  const files: string[] = glob.sync(`${POST_DIRECTORY}/**/**/*.md`)
  const publishedPosts: Post[] = []

  files.forEach((file) => {
    const source = fs.readFileSync(path.join(file))
    const slugs = file
      .replace(`${POST_DIRECTORY}/`, '')
      .replace(/\.md?$/, '')
      .split('/')
    const { data, content } = matter(source)

    if (data.published) {
      publishedPosts.push({
        frontMatter: {
          title: data.title,
          tags: data.tags,
          published: data.published,
          date: data.date,
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

export const getAllPosts = memoize(retreiveAllPosts)
