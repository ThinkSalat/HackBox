import { GraphQLServer } from 'graphql-yoga';
import mongoose from 'mongoose';
// mongoose.connect('mongodb://localhost/test');
mongoose.connect('mongodb://hackbox:hackbox2018@ds117701.mlab.com:17701/hackbox');

import typeDefs from './typedefs';
import resolvers from './resolvers';

const options = {
  port: 4000,
  endpoint: '/graphql',
  subscriptions: '/graphql',
  playground: '/playground',
}

const server = new GraphQLServer({ typeDefs, resolvers });
mongoose.connection.once('open', function() {
  server.start(options,() => console.log('Server is running on localhost:4000'));
});