import { useState } from "react";
import classNames from "classnames";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Stack from "react-bootstrap/Stack";
import ButtonGroup from "react-bootstrap/ButtonGroup";

export const SearchForm = ({ setUrl }) => {
  const [searchMode, setSearchMode] = useState("organisation");
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchMode = ({ currentTarget }) => {
    setSearchTerm("");
    setSearchMode(currentTarget.name);
  };

  const handleSearchTerm = ({ currentTarget }) => {
    setSearchTerm(currentTarget.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const url =
      searchMode === "organisation"
        ? `https://api.github.com/orgs/${searchTerm}/repos`
        : `https://api.github.com/users/${searchTerm}/repos`;
    setUrl(url);
  };

  return (
    <Form className="p-3" onSubmit={handleSubmit}>
      <Stack gap={3}>
        <ButtonGroup>
          <Button
            variant={classNames("secondary", {
              active: searchMode === "organisation",
            })}
            name="organisation"
            onClick={handleSearchMode}
          >
            Search by Organisation
          </Button>
          <Button
            variant={classNames("secondary", {
              active: searchMode === "username",
            })}
            name="username"
            onClick={handleSearchMode}
          >
            Search by Username
          </Button>
        </ButtonGroup>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="text"
            placeholder={`Enter the ${searchMode}`}
            value={searchTerm}
            onChange={handleSearchTerm}
          />
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
