import { GraphQLServer } from 'graphql-yoga';
import mongoose from 'mongoose';
mongoose.connect('mongodb://localhost/test');

import typeDefs from './schema';
import resolvers from './resolvers';


const server = new GraphQLServer({ typeDefs, resolvers, mocks: true });
mongoose.connection.once('open', function() {
  server.start(() => console.log('Server is running on localhost:4000'));
});