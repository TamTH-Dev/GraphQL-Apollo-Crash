import { useQuery } from "@apollo/client";
import { Card, Row, Col } from "react-bootstrap";

import BookDetails from "./BookDetails";
import { getBooks } from "../graphql/queries";
import { useEffect, useState } from "react";

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);
  const { loading, error, data } = useQuery(getBooks);

  useEffect(() => {
    if (error) {
      console.log(error);
      return;
    }
    if (data?.books) {
      setBooks(data.books);
    }
  }, [loading, error, data]);

  if (loading) return <div>Loading books...</div>;
  return (
    <Row>
      <Col
        style={{
          display: "flex",
          flexFlow: "row wrap",
          rowGap: "1rem",
          justifyContent: "space-between",
        }}
        xs={8}
      >
        {books.map((book) => (
          <Card
            key={book.id}
            style={{ width: "30%", height: "60px" }}
            border="info"
            text="info"
            className="text-center shadow"
            onClick={() => setSelectedBook(book.id)}
          >
            <Card.Body>{book.name}</Card.Body>
          </Card>
        ))}
      </Col>
      <Col xs={4}>
        <BookDetails bookId={selectedBook} />
      </Col>
    </Row>
  );
};

export default BookList;
