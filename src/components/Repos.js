import Stack from "react-bootstrap/Stack";

import { RepoCard } from "./RepoCard";

export const Repos = ({ repos }) => {
  return (
    <Stack className="gap-3 flex-lg-wrap flex-lg-row justify-content-center">
      {repos.map((repo) => {
        return <RepoCard key={repo.id} repo={repo} />;
      })}
    </Stack>
  );
};
