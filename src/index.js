import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';


import {
  BrowserRouter as Router,
} from 'react-router-dom';

import Theme from './components/Theme';
import AuthProvider from './components/providers/AuthProvider';

import './index.css';


import App from './App';
import * as serviceWorker from './serviceWorker';


//require('dotenv').config();
//const apiKEY = process.env.API_KEY;

// API 
const httpLinkFilms = createHttpLink({
  uri: 'https://graphql-tmdb.herokuapp.com/graphql',
  headers: {
    authorization: `f1be4bafe6f7cb0cb84f5948c5b75497`,
  }
});
const clientFilms = new ApolloClient({
  link: httpLinkFilms,
  cache: new InMemoryCache()
});


// Api Graphql de connexion
const httpLink = createHttpLink({
  uri: 'https://tweb-2019-api-jerem.herokuapp.com/graphql',
});
const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <ApolloProvider client={clientFilms}>
      <Router>
        <MuiThemeProvider theme={Theme}>
          <AuthProvider>
            <App />
          </AuthProvider>
        </MuiThemeProvider>
      </Router>
    </ApolloProvider>
  </ApolloProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
