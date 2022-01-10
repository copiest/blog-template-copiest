import { strongText } from './styles.css'

const H3 = ({
  children,
}: React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>) => {
  return <h3 className={strongText}>{children}</h3>
}

export default H3
