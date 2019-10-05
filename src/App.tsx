import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// @ts-ignore
import { Provider } from 'react-redux';

import GlobalStylesProvider from './components/global-styles-provider';
import theme from './styles/theme';
import HomePage from './containers/home';
import store from './store';

const StyledHero = styled.header`
  display: flex;
  align-items: center;
  height: 200px;
`;

const StyledHeader = styled.h1`
  text-align: center;
  width: 100%;
`;

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <GlobalStylesProvider />
        <ThemeProvider theme={theme}>
          <>
            <StyledHero>
              <StyledHeader>Pokedex</StyledHeader>
            </StyledHero>
            <Switch>
              <Route path='/' exact>
                <HomePage />
              </Route>
              <Route path='/details' >
                <h2>Details</h2>
              </Route>
            </Switch>
          </>
        </ThemeProvider>
      </Router>
    </Provider>
  );
}

export default App;
