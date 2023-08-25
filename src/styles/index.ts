import { createGlobalStyle } from 'styled-components'
import { Inter } from 'next/font/google'

export const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700']
})

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: var(inter);
  }

  .container {
    max-width: 690px;
    width: 100%;
    margin: 0 auto;
  }

  body, html {
    background-color: #fff;
  }
`
