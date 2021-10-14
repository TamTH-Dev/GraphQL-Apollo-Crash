import { Form, Button } from "react-bootstrap";
import { useMutation, useQuery } from "@apollo/client";
import { useState } from "react";

import { getAuthors, getBooks } from "../graphql/queries";
import { addBook } from "../graphql/mutations";

const initBook = {
  name: "",
  genre: "",
  authorId: "",
};

const BookForm = () => {
  const { loading, data, error } = useQuery(getAuthors);
  const [createBook] = useMutation(addBook);
  const [book, setBook] = useState(initBook);

  if (error) return <p>Loading authors failed</p>;

  const onInputChange = (e) => {
    setBook({
      ...book,
      [e.target.name]: e.target.value,
    });
  };

  const handleBookAdding = (e) => {
    e.preventDefault();
    if (!book.name || !book.authorId) return;
    createBook({
      variables: { ...book },
      refetchQueries: [{ query: getBooks }],
    });
    setBook(initBook);
  };

  return (
    <Form onSubmit={handleBookAdding}>
      <Form.Group className="mb-3">
        <Form.Control
          type="text"
          placeholder="Book name"
          name="name"
          onChange={onInputChange}
          value={book.name}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Control
          type="text"
          placeholder="Book genre"
          name="genre"
          onChange={onInputChange}
          value={book.genre}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        {loading ? (
          <p>Loading authors...</p>
        ) : (
          <Form.Control
            as="select"
            name="authorId"
            onChange={onInputChange}
            value={book.authorId}
          >
            <option value="" disabled>
              Select author
            </option>
            {data.authors.map((author) => (
              <option value={author.id} key={author.id}>
                {author.name}
              </option>
            ))}
          </Form.Control>
        )}
      </Form.Group>
      <Button className="float-right" variant="info" type="submit">
        Add Book
      </Button>
    </Form>
  );
};

export default BookForm;
