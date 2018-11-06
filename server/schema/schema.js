const graphql = require('graphql');

const { GraphQLObjectType, GraphQLString } = graphql; //destructurized on the graphql object

const BookType = new GraphQLObjectType({
  name: 'Book',
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    genre: { type: GraphQLString }
  })
}); // needed for defining a graph and how it will look.
