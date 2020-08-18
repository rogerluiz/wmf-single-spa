import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *:before, *:after {
    -webkit-box-sizing: inherit;
    -moz-box-sizing: inherit;
    box-sizing: inherit;
  }

  * {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }

  html {
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 0;
    font-weight: 400;
    font-size: 14px;

    overflow-x: hidden;
    height: 100%;
  }

  button, button:focus, button:hover, button:active {
    outline: none !important;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type=number] {
    -moz-appearance: textfield;
  }

  #root {
    color: ${({ theme }) => theme.colors.gray400};
    font-family: ${({ theme }) => theme.fonts.family.roboto};
    min-height: 100%;
    overflow: hidden;
  }
`;

export default GlobalStyle;
