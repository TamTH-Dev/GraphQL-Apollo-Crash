import { Form, Button } from "react-bootstrap";
import { useMutation } from "@apollo/client";
import { useState } from "react";

import { getAuthors } from "../graphql/queries";
import { addAuthor } from "../graphql/mutations";

const initAuthor = {
  name: "",
  age: "",
};

const BookForm = () => {
  const [createAuthor] = useMutation(addAuthor);
  const [author, setAuthor] = useState(initAuthor);

  const onInputChange = (e) => {
    setAuthor({
      ...author,
      [e.target.name]: e.target.value,
    });
  };

  const handleAuthorAdding = (e) => {
    e.preventDefault();
    if (!author.name) return;
    if (isNaN(author.age)) return;
    createAuthor({
      variables: { ...author, age: Number(author.age) },
      refetchQueries: [{ query: getAuthors }],
    });
    setAuthor(initAuthor);
  };

  return (
    <Form onSubmit={handleAuthorAdding}>
      <Form.Group className="invisible mb-3">
        <Form.Control />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Control
          type="text"
          placeholder="Author name"
          name="name"
          onChange={onInputChange}
          value={author.name}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Control
          type="number"
          placeholder="Author age"
          name="age"
          onChange={onInputChange}
          value={author.age}
        />
      </Form.Group>
      <Button className="float-right" variant="info" type="submit">
        Add Author
      </Button>
    </Form>
  );
};

export default BookForm;
