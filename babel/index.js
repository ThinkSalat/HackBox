'use strict';

var _graphqlYoga = require('graphql-yoga');

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _typedefs = require('./typedefs');

var _typedefs2 = _interopRequireDefault(_typedefs);

var _resolvers = require('./resolvers');

var _resolvers2 = _interopRequireDefault(_resolvers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var express = require("express");

_mongoose2.default.connect('mongodb://hackbox:hackbox2018@ds117701.mlab.com:17701/hackbox');

var options = {
  port: process.env.PORT || 4000,
  endpoint: '/graphql',
  subscriptions: '/subscriptions',
  playground: '/playground'
};

var server = new _graphqlYoga.GraphQLServer({ typeDefs: _typedefs2.default, resolvers: _resolvers2.default });

if (process.env.NODE_ENV === 'production') {
  server.express.use(express.static("frontend/build"));
}

_mongoose2.default.connection.once('open', function () {
  server.start(options, function () {
    return console.log('Server is running on localhost:' + options.port);
  });
});