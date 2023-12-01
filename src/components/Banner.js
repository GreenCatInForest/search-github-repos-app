import Stack from "react-bootstrap/Stack";

export const Banner = () => {
  return (
    <Stack>
      <h1 className="mx-auto mt-4 fs-1">GitHub Explorer</h1>
      <h2 className="mx-auto fs-5">
        A tool to wiev public GitHub repositories by Organisation or User name
      </h2>
      <hr />
    </Stack>
  );
};
