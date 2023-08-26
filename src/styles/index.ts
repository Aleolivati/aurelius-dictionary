import { createGlobalStyle } from 'styled-components'
import * as T from '../themes'

export const colors = {
  lightGray: `rgba(153, 153, 153, 0.60)`,
  gray: '#999',
  purple: '#A745EC',
  switchButtonPrimary: '#747474',
  switchButtonSecondary: '#fff'
}

export const breakpoints = {
  mobile: '426px'
}

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .container {
    max-width: 690px;
    width: 100%;
    height: 100%;
    margin: 0 auto;

    @media (max-width: ${breakpoints.mobile}) {
      width: 90%;
    }
  }

  body, html {
    background-color: ${T.backgroundColor};
    min-height: 100vh;
  }
`
