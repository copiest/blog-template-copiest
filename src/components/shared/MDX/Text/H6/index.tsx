import { strongText } from './styles.css'

const H6 = ({
  children,
}: React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>) => {
  return <h6 className={strongText}>{children}</h6>
}

export default H6
