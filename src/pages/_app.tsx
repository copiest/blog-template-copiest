import { useEffect } from 'react'
import { AppProps } from 'next/app'
import { useRouter } from 'next/dist/client/router'
import { RecoilRoot } from 'recoil'

function App({ Component, pageProps }: AppProps) {
  const Router = useRouter()

  useEffect(() => {
    window.history.scrollRestoration = 'auto'

    const cachedScrollPositions: Array<[number, number]> = []
    let shouldScrollRestore: null | { x: number; y: number }

    Router.events.on('routeChangeStart', () => {
      cachedScrollPositions.push([window.scrollX, window.scrollY])
    })

    Router.events.on('routeChangeComplete', () => {
      if (shouldScrollRestore) {
        const { x, y } = shouldScrollRestore
        window.scrollTo(x, y)
        shouldScrollRestore = null
      }
      window.history.scrollRestoration = 'auto'
    })

    Router.beforePopState(() => {
      if (cachedScrollPositions.length > 0) {
        const scrolledPosition = cachedScrollPositions.pop()
        if (scrolledPosition) {
          shouldScrollRestore = {
            x: scrolledPosition[0],
            y: scrolledPosition[1],
          }
        }
      }
      window.history.scrollRestoration = 'manual'
      return true
    })
  }, [])

  return (
    <RecoilRoot>
      <Component {...pageProps} />
    </RecoilRoot>
  )
}

export default App
