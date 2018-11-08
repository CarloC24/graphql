const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema'); //allows the express package to understand graphql and will act as a middleware

const server = express();

server.use('/graphql', graphqlHTTP({ schema })); //put a schema on the graphqlHTTP middleware!!

server.listen(9000, () => {
  console.log('\n === API on port 9K === \n');
});
