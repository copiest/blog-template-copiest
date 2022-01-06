import Image from 'next/image'

import {
  container,
  imageContainer,
  textContainer,
  titleText,
  descriptionText,
  dateText,
} from './styles.css'

import { FrontMatter } from '#types/post'

export default function Card({ frontMatter }: { frontMatter: FrontMatter }) {
  const { thumbnailImg, title: postTitle, description, date } = frontMatter

  return (
    <article className={container}>
      <div className={imageContainer}>
        <Image src={thumbnailImg || ''} width="192px" height="144px" />
      </div>
      <div className={textContainer}>
        <h3 className={titleText}>{postTitle}</h3>
        <span className={descriptionText}>{description}</span>
        <span className={dateText}>{date}</span>
      </div>
    </article>
  )
}
