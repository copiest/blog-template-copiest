import { AppProps } from 'next/app'
import { Global } from '@emotion/react'
import globalStyles from '@components/shared/globalStyles'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Global styles={globalStyles} />
      <Component {...pageProps} />
    </>
  )
}

export default App
