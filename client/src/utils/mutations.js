import { gql } from "@apollo/client";
// There should be four mutations from typeDefs.js
// One for addUser, login, saveBook, and removeBook.

// ADD_USER will execute the addUser mutation.
export const ADD_USER = gql`
  # Specifying the data types used in the mutation
  mutation addUser($username: String!, $email: String!, $password: String) {
    #   this next part follows the structure of the actual typeDef
    addUser(username: $username, email: $email, password: $password) {
      user {
        _id
        username
        email
        bookCount
        savedBooks {
          bookId
          authors
          description
          title
          image
          link
        }
      }
      token
    }
  }
`;

// LOGIN_USER will execute the loginUser mutation set up using Apollo Server.

// login(email: String!, password: String!): Auth

// ^ From typeDefs.js
export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

// SAVE_BOOK will execute the saveBook mutation.

export const SAVE_BOOK = gql`
  mutation saveBook($input: savedBook!) {
    saveBook(input: $input) {
      _id
      username
      email
      bookCount
      savedBooks {
        bookId
        authors
        description
        title
        image
        link
      }
    }
  }
`;

// REMOVE_BOOK will execute the removeBook mutation

export const REMOVE_BOOK = gql`
  mutation removeBook($bookID: ID!) {
    removeBook(bookID: $bookID) {
      _id
      username
      email
      bookCount
      savedBooks {
        bookId
        authors
        description
        title
        image
        link
      }
    }
  }
`;
