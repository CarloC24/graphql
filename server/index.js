const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema'); //allows the express package to understand graphql and will act as a middleware
const cors = require('cors');
const mongoose = require('mongoose');

const server = express();

mongoose.connect(
  'mongodb://carloc24:Danzakuduro9@ds157223.mlab.com:57223/graphql-practice'
);

mongoose.connection.once('open', () => {
  console.log('connected to database');
});

server.use(cors());
server.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true
  })
); //put a schema on the graphqlHTTP middleware!!

server.listen(8000, () => {
  console.log('\n === API on port 9K === \n');
});
