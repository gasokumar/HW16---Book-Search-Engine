// typeDefs are the definitions of the data, as well as the commands they can use to manipulate the data.
const { gql } = require("apollo-server-express");

const typeDefs = gql`
  # You need this when storing books so that when you pull up a user, an array of books linked to that user will come up.
  type Book {
    _id: ID!
    bookId: String!
    authors: String
    description: String!
    title: String!
    image: String
    link: String
  }
  # Defining a User.
  type User {
    _id: ID
    username: String!
    email: String!
    bookCount: Int!
    savedBooks: [Book]
  }
  # Auth type that has token and user.
  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
  }

  # input for saveBook mutation.
  input savedBook {
    description: String
    title: String
    bookId: String
    image: String
    link: String
    authors: [String]
  }

  # Will need to create mutations for this app.
  type Mutation {
    #   login takes email and password as parameters, returns an Auth type
    login(email: String!, password: String!): Auth
    # addUser takes in a username, email, and password, returns an Auth type
    addUser(username: String!, email: String!, password: String!): Auth
    # saveBook takes in an input, returns a User type.
    saveBook(input: savedBook!): User
    # Accepts a book's bookId as a parameter, returns a User type.
    removeBook(bookId: ID!): User
  }
`;
module.exports = typeDefs;
