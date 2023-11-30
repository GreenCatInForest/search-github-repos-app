import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export const SearchForm = () => {
  return (
    <Form className="mx-auto">
      <Form.Group className=" mx-auto mb-3" controlId="formBasicEmail">
        <Form.Label>GitHub name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter the name of the GitHub profile"
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};
