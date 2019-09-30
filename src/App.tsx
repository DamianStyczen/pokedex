import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import GlobalStylesProvider from './global-styles-provider/global-styles-provider';
import theme from './styles/theme';

const StyledHeader = styled.h1`
  color: red;
`;

const App: React.FC = () => {
  return (
    <>
      <GlobalStylesProvider />
      <ThemeProvider theme={theme}>
        <StyledHeader>Hello</StyledHeader>
      </ThemeProvider>
    </>
  );
}

export default App;
