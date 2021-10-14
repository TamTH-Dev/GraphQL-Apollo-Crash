const { gql } = require("@apollo/client");

export const addBook = gql`
  mutation addBook($name: String!, $genre: String, $authorId: ID!) {
    createBook(name: $name, genre: $genre, authorId: $authorId) {
      id
      name
    }
  }
`;

export const addAuthor = gql`
  mutation addAuthor($name: String!, $age: Int) {
    createAuthor(name: $name, age: $age) {
      id
      name
    }
  }
`;
