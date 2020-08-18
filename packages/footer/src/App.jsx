import React from 'react'
import styled from 'styled-components';

import AppProvider from './providers/AppProvider'

const Container = styled.footer`
  width: 100%;
  height: 250px;
  background: ${props => props.theme.colors.gray200};
`;
const Content = styled.div`
  width: 100%;
  max-width: 1100px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function App() {
  return (
    <Container>
      <Content>
        <img src="/logo.svg" alt="logo" />
      </Content>
    </Container>
  )
}

export default (props) => {
  return (
    <AppProvider>
      <App {...props} />
    </AppProvider>
  )
};

