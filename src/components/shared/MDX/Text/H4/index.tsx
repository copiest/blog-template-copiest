import { strongText } from './styles.css'

const H4 = ({
  children,
}: React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>) => {
  return <h4 className={strongText}>{children}</h4>
}

export default H4
