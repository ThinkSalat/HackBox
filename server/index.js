import { GraphQLServer } from 'graphql-yoga';
const express = require("express");
import mongoose from 'mongoose';
mongoose.connect('mongodb://hackbox:hackbox2018@ds117701.mlab.com:17701/hackbox');

import typeDefs from './typedefs';
import resolvers from './resolvers';

const options = {
  port: process.env.PORT || 4000,
  endpoint: '/graphql',
  subscriptions: '/subscriptions',
  playground: '/playground',
};

const server = new GraphQLServer({ typeDefs, resolvers });

if (process.env.NODE_ENV === 'production') {
  server.express.use(express.static("frontend/build"));
}

mongoose.connection.once('open', function() {
  server.start(options,() => console.log(`Server is running on localhost:${options.port}`));
});