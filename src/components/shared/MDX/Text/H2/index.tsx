import { strongText } from './styles.css'

const H2 = ({
  children,
}: React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>) => {
  return <h2 className={strongText}>{children}</h2>
}

export default H2
