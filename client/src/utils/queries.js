import { gql } from "@apollo/client";
// There should be one query for query me from typeDefs.js
export const GET_ME = gql`
  query me {
    _id
    username
    email
    bookCount
    savedBooks {
      _id
      bookId
      authors
      description
      title
      image
      link
    }
  }
`;
