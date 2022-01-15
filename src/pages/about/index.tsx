import * as styles from './styles.css'

import PageSEO from '#components/shared/SEO/PageSEO'

function About() {
  return (
    <>
      <PageSEO title="About" url="https://tigger.dev/about" />
      <section className={styles.container}>About</section>
    </>
  )
}

export default About
