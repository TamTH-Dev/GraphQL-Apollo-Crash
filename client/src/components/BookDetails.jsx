import { useQuery } from "@apollo/client";
import { Card } from "react-bootstrap";

import { getBook } from "../graphql/queries";

const BookDetails = ({ bookId }) => {
  const { error, loading, data } = useQuery(getBook, {
    variables: {
      id: bookId,
    },
    skip: bookId === null,
  });

  if (loading) return <p>Loading book...</p>;
  if (error) return <p>Loading book failed...</p>;

  const book = bookId ? data?.book : null;
  return (
    <Card bg="info" text="white" className="shadow">
      <Card.Body>
        {!book ? (
          <Card.Text>Please select a book</Card.Text>
        ) : (
          <>
            <Card.Title>{book.name}</Card.Title>
            <Card.Subtitle className="mb-2">{book.genre}</Card.Subtitle>
            <p>{book.author.name}</p>
            <p>Age: {book.author.age}</p>
            <p>All books by this author</p>
            <ul>
              {book.author.books.map((book) => (
                <li key={book.id}>{book.name}</li>
              ))}
            </ul>
          </>
        )}
      </Card.Body>
    </Card>
  );
};

export default BookDetails;
