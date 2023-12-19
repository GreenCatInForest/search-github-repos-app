import Stack from "react-bootstrap/Stack";

import { RepoCard } from "./RepoCard";

export const Repos = ({ repos }) => {
  return (
    <Stack>
      {repos.map((repo) => {
        return <RepoCard repos={repos} />;
      })}
    </Stack>
  );
};
