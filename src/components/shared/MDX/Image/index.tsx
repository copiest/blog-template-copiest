import * as styles from './styles.css'

const Image = ({
  src,
  alt,
  width,
  height,
}: React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>) => (
  <img className={styles.image} src={src || ''} alt={alt} width={width} height={height} />
)

export default Image
