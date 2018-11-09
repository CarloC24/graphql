const graphql = require('graphql');
const _ = require('lodash');
const Authors = require('../models/author');
const Books = require('../models/book');

//
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID,
  GraphQLInt,
  GraphQLList
} = graphql; //destructurized on the graphql object

let books = [
  {
    name: 'Book 1',
    genre: 'the genre',
    id: '1'
  },
  {
    name: 'Book 2',
    genre: 'the genre 2',
    id: '2'
  }
];

let authors = [
  {
    name: 'Carlo Clamucha',
    age: 21,
    id: '1',
    authorId: '1'
  },
  { name: 'Kevin Brack', age: 22, id: '2', authorId: '2' }
];

const BookType = new GraphQLObjectType({
  name: 'Book',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    genre: { type: GraphQLString },
    author: {
      type: AuthorType,
      resolve(parent, args) {
        return _.find(authors, { authorId: parent.id });
      }
    }
  })
}); // needed for defining a graph and how it will look.

const AuthorType = new GraphQLObjectType({
  name: 'Author',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    age: { type: GraphQLInt },
    authorId: { type: GraphQLID },
    books: {
      type: new GraphQLList(BookType), //list of book types
      resolve(parent, args) {
        console.log(_.filter(books, { id: parent.authorId }));
        return _.filter(books, { id: parent.authorId });
      }
    }
  })
}); // needed for defining a graph and how it will look.

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: () => ({
    book: {
      type: BookType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        //args.id
        //code to get data
        return _.find(books, { id: args.id });
      }
    },
    author: {
      type: AuthorType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return _.find(authors, { id: args.id });
      }
    },
    books: {
      type: new GraphQLList(BookType),
      resolve(parent, args) {
        return books;
      }
    },
    authors: {
      type: new GraphQLList(AuthorType),
      resolve(parent, args) {
        return authors;
      }
    }
  })
});

module.exports = new GraphQLSchema({
  query: RootQuery
});
