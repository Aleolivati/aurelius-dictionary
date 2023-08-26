import { useEffect, useState } from 'react'
import { Provider } from 'react-redux'
import type { AppProps } from 'next/app'
import store from 'store'
import DarkThemeProvider from 'themes/provider'
import { GlobalStyle } from 'styles'
import './global.css'

export default function App({ Component, pageProps }: AppProps) {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <Provider store={store}>
      <DarkThemeProvider>
        <GlobalStyle />
        <Component {...pageProps} />
      </DarkThemeProvider>
    </Provider>
  )
}
