import React from 'react';
import ReactDOM from 'react-dom';
import './css/Master.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import ApolloClient from "apollo-boost";
import {ApolloProvider} from "react-apollo";

//send graphQL requests to this location
const client = new ApolloClient({
  uri: "http://localhost:4000/graphql"
});

//make requests throughout our app through ApolloProvider
ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);

registerServiceWorker();
