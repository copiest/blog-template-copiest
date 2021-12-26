import { AppProps } from 'next/app'

import DefaultSEO from '#components/shared/SEO/defaultSEO'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSEO />
      <Component {...pageProps} />
    </>
  )
}

export default App
