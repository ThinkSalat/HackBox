# HackBox

A multiplayer party game by Shawn Salat, Carey Johnson, Matt Wojick and Qui Huang.

### Backend Setup

Backend

Set up Apollo server on top of express/node server
Set up GraphQL typeDefs (configure querys and models)
Set up graphQL resolvers (configure what graphql query returns)
Configure websockets or graphql subscriptions 

NPM packages:
npm init
npm install —save babel-cli babel-preset-env babel-watch express  graphql graphql-tools apollo-server-express

files: 

server.js - apollo/express/node
schema.js - typeDefs
resolver.js - configure what gets returned


.babelrc = 
      `{
        "presets": ["env"]
      }`

package.json add
 "scripts": {
    "dev": "babel-watch server.js"
  }

server.js = 
import express from 'express';
import bodyParser from 'body-parser';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import schema from './schema';

const app = express();
app.use('/graphiql', graphiqlExpress({
    endpointURL: '/graphql'
}));
app.use('/graphql', bodyParser.json(), graphqlExpress({schema}));
app.listen(4000, () => console.log(`Express server running on port 4000`));

