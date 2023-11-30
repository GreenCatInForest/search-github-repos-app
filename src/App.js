import Container from "react-bootstrap/Container";
import Stack from "react-bootstrap/Stack";

export const App = () => {
  return (
    <Container>
      <Stack>
        <div className="p-2">First item</div>
        <div className="p-2">Second item</div>
        <div className="p-2">Third item</div>
      </Stack>
    </Container>
  );
};
