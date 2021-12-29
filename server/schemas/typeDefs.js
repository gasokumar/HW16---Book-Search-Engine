// typeDefs are what data the user can request.
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

  #   type Mutation {
  #     createMatchup(tech1: String!, tech2: String!): Matchup
  #     createVote(_id: String!, techNum: Int!): Matchup
  #   }
`;
module.exports = typeDefs;
