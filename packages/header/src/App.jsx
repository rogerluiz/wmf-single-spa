import React from  'react';
import styled, { ThemeProvider } from 'styled-components';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from "react-router-dom";

import GlobalStyle from './theme/GlobalStyle';
import theme from './theme';

const Container = styled.header`
  width: 100%;
  height: 80px;
  background: ${props => props.theme.colors.gray700};
`;
const Content = styled.div`
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
const Nav = styled.nav`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
const NavItem = styled(NavLink)`
  font-size: 18px;
  color: ${props => props.theme.colors.white};
  text-transform: uppercase;
  margin-right: 15px;
  text-decoration: none;

  &.active,
  &:hover {
    color: ${props => props.theme.colors.secondary};
  }
`;
const Figure = styled.figure`
  width: 100%;
  max-width: 60px;

  img {
    width: 100%;
    display: block;
  }
`;

function App() {
  return (
    <Container>
      <Content>
        <Figure>
          <img src="./logo-icon-white.svg" alt="" />
        </Figure>
        <Nav>
          <NavItem exact to="/">Painel</NavItem>
          <NavItem to="/sobre">Sobre</NavItem>
        </Nav>
      </Content>
    </Container>
  )
}

export default (props) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App {...props} />
    </ThemeProvider>
  )
};
