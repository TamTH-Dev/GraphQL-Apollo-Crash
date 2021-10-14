import { gql } from "@apollo/client";

export const getBooks = gql`
  query getBooks {
    books {
      id
      name
    }
  }
`;

export const getBook = gql`
  query getBook($id: ID!) {
    book(id: $id) {
      id
      name
      genre
      author {
        id
        name
        age
        books {
          id
          name
        }
      }
    }
  }
`;

export const getAuthors = gql`
  query getAuthors {
    authors {
      id
      name
    }
  }
`
