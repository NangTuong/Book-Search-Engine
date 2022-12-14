// import the gql tagged template function
const { gql } = require('apollo-server-express');

// create our typeDefs
// under book types, authors will get an array of strings, as there may be more than one author.
const typeDefs = gql`
type User {
    _id: ID
    username: String
    email: String
    bookCount: Int
    savedBooks: [Book]
  }

  type Book {
    bookId: ID!
    authors: [String]
    description: String
    title: String
    image: String
    link: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    users: [User]
    user(username: String!): User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(newBook: ID!): User
    removeBook(bookId: ID!): User
  }
  `;

// export the typeDefs
module.exports = typeDefs;