const graphql = require('graphql');

const { GraphQLObjectType, GraphQLString, GraphQLSchema } = graphql; //destructurized on the graphql object

let books = [
  {
    name: 'Name',
    genre: 'the genre',
    id: '1'
  }
];

const BookType = new GraphQLObjectType({
  name: 'Book',
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    genre: { type: GraphQLString }
  })
}); // needed for defining a graph and how it will look.

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    book: {
      type: BookType,
      args: { id: { type: GraphQLString } },
      resolve(parent, args) {
        //args.id
        //code to get data
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
});
