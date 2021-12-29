// typeDefs are what data the user can request, as well as the queries they can make.
const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Book {
    _id: ID!
    bookId: String!
    authors: String
    description: String!
    title: String!
    image: String
    link: String
  }

  type User {
    _id: ID
    username: String!
    email: String!
    password: String!
    savedBooks: [Book]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
  }

  # Will need to create mutations for this app.
  type Mutation {
    #   login takes email and password as parameters, returns an Auth type
    login(email: String!, password: String!): Auth
    # addUser takes in a username, email, and password, returns an Auth type
    addUser(username: String!, email: String!, password: String!): Auth
    # saveBook takes in an input, returns a User type.
    saveBook(input: savedBook!): User
    removeBook(bookId: ID!): User
  }
`;
module.exports = typeDefs;
