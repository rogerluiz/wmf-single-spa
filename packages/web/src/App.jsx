import React from  'react'
import styled from 'styled-components'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import loadComponent from './hooks/loadComponent';
import Box from './components/Box';
import About from './components/About';
// const Footer = React.lazy(() => import("footer/Footer"))

const Container = styled.section`
  width: 100%;
`;
const Content = styled.div`
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  padding: 30px 12px;
  justify-content: flex-start;
  align-items: center;
`;

// const header = {
  //   url: "http://localhost:4001/remoteEntry.js",
  //   scope: "header",
  //   module: "./Header",
  // };

  // const footer = {
  //   url: "http://localhost:4002/remoteEntry.js",
  //   scope: "footer",
  //   module: "./Footer",
  // };

const Footer = React.lazy(loadComponent('footer', './Footer'));
const Header = React.lazy(loadComponent('header', './Header'));

function App(props) {
  return (
    <Container>
      <Router>
        <React.Suspense fallback="Loading...">
          <Header />
        </React.Suspense>

        <Switch>
          <Content>
            <Route exact path="/">
              <Box />
            </Route>
            <Route path="/sobre">
              <About />
            </Route>
          </Content>
        </Switch>

        <React.Suspense fallback="Loading...">
          <Footer {...props} />
        </React.Suspense>
      </Router>
    </Container>
  )
}

export default App
