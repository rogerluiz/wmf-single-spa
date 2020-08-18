import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *:before, *:after {
    -webkit-box-sizing: inherit;
    -moz-box-sizing: inherit;
    box-sizing: inherit;
  }

  :root {
    --gray: #333333;
    --gold: '#988044';
    --warning: '#ee8040';
    --info: '#303363';
    --cancel: '#e65181';
    --white: '#ffffff';
    --negative: '#cc2137';
    --black: '#000000';
    --red: '#A52A2A';
    --yellow: '#FFB800';
    --danger: '#E32525';
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
    background-color: var(--warning);
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
    font-family: ${({ theme }) => theme.fonts.family.roboto};
    min-height: 100%;
    overflow: hidden;
  }
`;

export default GlobalStyle;
