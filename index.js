import { GraphQLServer } from 'graphql-yoga';
import mongoose from 'mongoose';
// mongoose.connect('mongodb://localhost/test');
mongoose.connect('mongodb://hackbox:hackbox2018@ds117701.mlab.com:17701/hackbox');

import typeDefs from './schema';
import resolvers from './resolvers';


const server = new GraphQLServer({ typeDefs, resolvers });
mongoose.connection.once('open', function() {
  server.start(() => console.log('Server is running on localhost:4000'));
});