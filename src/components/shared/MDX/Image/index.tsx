import NextImage from 'next/image'

import { imageContainer, image } from './styles.css'

const Image = ({
  src,
  alt,
}: React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>) => {
  return (
    <div className={imageContainer}>
      <NextImage className={image} src={src!} alt={alt} layout="fill" />
    </div>
  )
}

export default Image
