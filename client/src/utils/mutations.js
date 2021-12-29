import { gql } from "@apollo/client";
import { login } from "../../../server/controllers/user-controller";
// There should be four mutations from typeDefs.js
// One for addUser, login, saveBook, and removeBook.

// ADD_USER will execute the addUser mutation.
export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String) {
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
// export const LOGIN_USER = gql`
// mutation login()

// `;

// SAVE_BOOK will execute the saveBook mutation.

// REMOVE_BOOK will execute the removeBook mutation
