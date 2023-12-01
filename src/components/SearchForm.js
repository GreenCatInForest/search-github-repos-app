import { useState } from "react";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Stack from "react-bootstrap/Stack";
import ButtonGroup from "react-bootstrap/ButtonGroup";

export const SearchForm = () => {
  const [searchMode, setSearchMode] = useState("organisation");
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <Form className="p-3">
      <Stack gap={3}>
        <ButtonGroup aria-label="Basic example">
          <Button variant="secondary active">Search by Organisation</Button>
          <Button variant="secondary">Search by Username</Button>
        </ButtonGroup>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="text" placeholder={`Enter the {searchMode}`} />
          <Form.Text className="text-danger">
            Please enter a valid organisation
          </Form.Text>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Stack>
    </Form>
  );
};
