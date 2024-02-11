import Stack from "react-bootstrap/Stack";
import githubLogo from "../assets/images/icons8-github-480.png";

export const Banner = () => {
  return (
    <Stack className="flex flex-wrap flex-col text-center mt-5 gap-2 justify-center">
      <img src={githubLogo} alt="Github Logo" className="w-25 mx-auto" />
      <h1 className="mx-auto mt-4 fs-1">GitHub Explorer --&gt;</h1>
      <h2 className="w-75 mt-3 mx-auto fs-5 py-2 px-3 rounded-2">
        A tool to SEARCH public GitHub repositories by Organisation or User name
      </h2>
      <hr className="mt-5" />
    </Stack>
  );
};
