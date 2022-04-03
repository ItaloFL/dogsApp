import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

  * {
    box-sizing: border-box;
  }

  body {
    padding-top: 4rem;
    margin: 0px;
    color: #333333;

    --type-frist: Helvetica, Arial, sans-serif;
    --type-second: 'Spectral', georgia;

    font-family: var(--type-frist);
  }

  ::-webkit-scrollbar {
    width: 1rem;
    background-color: #1b1919;
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
  }

  h1, h2, h3, h4, p {
    margin: 0px;
  }

  ul, li {
    list-style: none;
    margin: 0px;
    padding: 0px;
  }

  img {
    display: block;
    max-width: 100%;
  }

  button, input {
    display: block;
    font-size: 1rem;
    font-family: var(--type-frist);
    color: #333333;
  }

  a {
    text-decoration: none;
    color: inherit;
  }


  .container {
    max-width: 60rem;
    padding: 0 1rem;
    margin: 0 auto;
  }
`
