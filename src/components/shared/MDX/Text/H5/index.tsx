import { strongText } from './styles.css'

const H5 = ({
  children,
}: React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>) => {
  return <h5 className={strongText}>{children}</h5>
}

export default H5
