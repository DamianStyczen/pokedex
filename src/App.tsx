import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// @ts-ignore
import { Provider } from 'react-redux';

import GlobalStylesProvider from './components/global-styles-provider';
import theme from './styles/theme';
import HomePage from './containers/home';
import DetailsPage from './containers/details';
import store from './store';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <GlobalStylesProvider />
        <ThemeProvider theme={theme}>
          <Switch>
            <Route path='/' exact component={HomePage} />
            <Route path='/details/:id' component={DetailsPage} />
          </Switch>
        </ThemeProvider>
      </Router>
    </Provider>
  );
}

export default App;
