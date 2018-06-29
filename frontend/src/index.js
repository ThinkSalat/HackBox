import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';

import './css/Master.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import {ApolloProvider} from "react-apollo";

import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';

import { split } from 'apollo-link';
import { WebSocketLink } from 'apollo-link-ws';
import { getMainDefinition } from 'apollo-utilities';


let httpUri = "https://hackboxapi.herokuapp.com/graphql";
let wsUri = "wss://hackboxapi.herokuapp.com/subscriptions";


//send graphQL requests to this location
const httpLink = new HttpLink({ 
  uri: httpUri,
  credentials: 'same-origin'
})

//subscriptions get sent through websocket connection (ws)
const wsLink = new WebSocketLink({
  uri: wsUri,
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
    <HashRouter>
      <App />
    </HashRouter>
  </ApolloProvider>,
  document.getElementById('root')
);

registerServiceWorker();
