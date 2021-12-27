import PageSEO from '#components/shared/SEO/pageSEO'
import config from 'config'

function About() {
  return (
    <>
      <PageSEO title="About" description={config.subtitle} url={config.url} />
      <div>About</div>
    </>
  )
}

export default About
