import React from 'react';
import ReactDOM from 'react-dom';
import './css/Master.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import {ApolloProvider} from "react-apollo";

import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';

import { split } from 'apollo-client-preset';
import { WebSocketLink } from 'apollo-link-ws';
import { getMainDefinition } from 'apollo-utilities';


  
//send graphQL requests to this location
const httpLink = new HttpLink({ 
  uri: `http://localhost:4000/graphql`,
  credentials: 'same-origin' 
})

//subscriptions get sent through websocket connection (ws)
const wsLink = new WebSocketLink({
  uri: `ws://localhost:4000/graphql`,
  options: {
    reconnect: true
  }
})

//split the link depending on the type of operation
const link = split(
  ({ query }) => {
    const { kind, operation } = getMainDefinition(query)
    return kind === 'OperationDefinition' && operation === 'subscription'
  },
  wsLink,
  httpLink,
)

//create apollo client for frontend
const client = new ApolloClient({
  link,
  cache: new InMemoryCache()
})

//make requests throughout our app through ApolloProvider
ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);

registerServiceWorker();
