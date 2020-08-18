import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../theme/GlobalStyle';
import theme from '../theme';

function AppProvider({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      { children }
    </ThemeProvider>
  )
}

export default AppProvider;
