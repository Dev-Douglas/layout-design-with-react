import { createGlobalStyle } from 'styled-components'

import theme from './Theme'

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    box-sizing: border-box;
  }

  body,
  input,
  textarea,
  button {
    font-family: ${theme.font.fontFamily};
  }

  button:hover {
    cursor: pointer;
  }


  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  .container {
    width: 100%;
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 1rem;
  }
`
