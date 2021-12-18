import fs from 'fs'
import path from 'path'
import glob from 'glob'
import matter from 'gray-matter'
import memoize from 'memoizee'

const POST_PATH = path.join(process.cwd(), 'posts')

async function retreiveAllPosts() {
  const files = glob.sync(`${POST_PATH}/**/**/*.md`)
  const posts = []

  for await (const f of files) {
    const file = await fs.promises.readFile(f, { encoding: 'utf-8' })
    const post = matter(file)

    if (post.data.published) {
      posts.push(post)
    }
  }

  return posts.sort((a, b) => {
    if (a.data.date < b.data.date) {
      return 1
    } else {
      return -1
    }
  })
}

export const getAllPosts = memoize(retreiveAllPosts)
