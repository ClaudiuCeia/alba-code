import React from 'react';
import ReactDOM from 'react-dom';

import { makeMainRoutes } from './routes';
import registerServiceWorker from './registerServiceWorker';

import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';

import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

import indigo from 'material-ui/colors/indigo';

import './index.css';

const theme = createMuiTheme({
    "palette": {
      "type": "light",
      "primary": indigo,
    },
    "typography": {
      "headline": {
        "fontSize": "1.5rem",
        "fontWeight": 700,
        "fontFamily": "\"Merriweather\", \"Georgia\", serif",
        "lineHeight": "1.35417em",
        "color": "#3A3B41"
      },
      "title": {
        "fontSize": "1.3125rem",
        "fontWeight": 500,
        "fontFamily": "\"Merriweather\", \"Georgia\", serif",
        "lineHeight": "1.16667em",
        "color": "#3A3B41"
      },
    }
});

const httpLink = new HttpLink({
  uri: 'https://api.graph.cool/simple/v1/cjbcvpotq1fk401528vwqiz3n'
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
})

const routes = makeMainRoutes();

const WrappedApp = (
  <ApolloProvider client={client}>
    <MuiThemeProvider theme={theme}>
      {routes}
    </MuiThemeProvider>
  </ApolloProvider>
);

ReactDOM.render(
  WrappedApp,
  document.getElementById('root')
);

registerServiceWorker();
