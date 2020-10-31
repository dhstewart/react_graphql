import React from 'react';
import { ApolloClient } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { ThemeProvider } from 'styled-components';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

import theme from './styles/theme';
import Dashboard from './modules/dashboard';
import StyledAppWrapper from './styles/StyledPageWrapper';

const link = createHttpLink({
  uri: 'http://localhost:3000/graphql',
});

const client = new ApolloClient({
  link: link,
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <StyledAppWrapper>
          <Dashboard />
        </StyledAppWrapper>
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default App;
