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

  .title {
    font-family: var(--type-second);
    line-height: 1;
    font-size: 3rem;
    margin: 1rem 0;
    position: relative;
    z-index: 1;

    &::after {
      content: '';
      display: block;
      width: 1.5rem;
      height: 1.5rem;
      background: #fb1;
      position: absolute;
      bottom: 5px;
      left: -5px;
      border-radius: .2rem;
      z-index: -1;
    }
  }

  .container {
    max-width: 50rem;
    padding: 0 1rem;
    margin: 0 auto;
  }

  .mainContainer {
    margin-top: 4rem;
  }

  .forgot {
    display: inline-block;
    color: #666;
    padding: .5rem 0;
    line-height: 1;
  }

  .forgot::after {
    content: '';
    height: 2px;
    width: 100%;
    background: currentColor;
    display: block;
  }

  .animeLeft {
    opacity: 0;
    transform: translateX(-20px);
    animation: animeLeft 0.3s forwards;
  }


  @keyframes animeLeft {
    to {
      opacity: 1;
      transform: initial;
    }
  }
  
`
