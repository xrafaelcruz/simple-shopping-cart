import { createGlobalStyle, keyframes } from 'styled-components';

const show = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    outline: 0;
    padding: 0;
  }

  .fade-in,
  [data-page],
  [data-component] {
    animation: ${show} .8s;
  }

  [data-page] {
    position: relative;
    z-index: 1;
  }

  html,
  body,
  #root {
    height: 100%;
  }

  body,
  input,
  button {
    font-family: Arial, Arial, Helvetica, sans-serif;
  }

  .enable {
    pointer-events: initial !important;
    opacity: 1 !important;
  }

  .disable {
    pointer-events: none !important;
    opacity: 0 !important;
  }

  strong {
    color: #333;
    font-size: 18px;
    text-transform: capitalize;
  }

  p {
    color: #999;
    font-size: 18px;
    line-height: 20px;
    text-transform: capitalize;
  }

  span {
    font-size: 18px;
    line-height: 20px;
  }

  strong, p, span {
    font-family: 'Open Sans Condensed', sans-serif;
  }
`;

export default GlobalStyle;
