import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import GlobalStylesProvider from './components/global-styles-provider/global-styles-provider';
import theme from './styles/theme';
import HomePage from './pages/home/home';
import { createStore, applyMiddleware } from 'redux';

const store = createStore(() => [], {}, applyMiddleware());

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <GlobalStylesProvider />
        <ThemeProvider theme={theme}>
          <>
            <h1>Hello</h1>
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
