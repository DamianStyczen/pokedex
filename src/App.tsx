import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import GlobalStylesProvider from './components/global-styles-provider';
import theme from './styles/theme';
import HomePage from './containers/home';
import DetailsPage from './containers/details';
import store from './store';

const StyledBody = styled.div`
  width: 100%;
  height: 100%;
  background: ${({ theme }: any) => theme.colors.secondary};
`;

const Layout = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <GlobalStylesProvider />
        <ThemeProvider theme={theme}>
          <StyledBody>
            <Layout>
              <Switch>
                <Route path='/' exact component={HomePage} />
                <Route path='/details/:id' component={DetailsPage} />
                <Route path='/search/:query' component={DetailsPage} />
              </Switch>
            </Layout>
          </StyledBody>
        </ThemeProvider>
      </Router>
    </Provider>
  );
}

export default App;
