import { strongText } from './styles.css'

const H1 = ({
  children,
}: React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>) => {
  return <h1 className={strongText}>{children}</h1>
}

export default H1
