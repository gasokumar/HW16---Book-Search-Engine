import { gql } from "@apollo/client";
import { login } from "../../../server/controllers/user-controller";
// There should be four mutations from typeDefs.js
// One for login, addUser, saveBook, and removeBook.

// LOGIN_USER will execute the loginUser mutation set up using Apollo Server.

// login(email: String!, password: String!): Auth

// ^ From typeDefs.js
export const LOGIN_USER = gql`
mutation login {

}
`;

// ADD_USER will execute the addUser mutation.

// SAVE_BOOK will execute the saveBook mutation.

// REMOVE_BOOK will execute the removeBook mutation
