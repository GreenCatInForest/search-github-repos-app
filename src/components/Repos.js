import Stack from "react-bootstrap/Stack";

import { RepoCard } from "./RepoCard";

export const Repos = ({ repos }) => {
  return (
    <Stack className="gap-3 mb-5 flex-wrap flex-lg-row flex-md-row flex-sm-row justify-content-center">
      {repos.map((repo) => {
        return <RepoCard key={repo.id} repo={repo} />;
      })}
    </Stack>
  );
};
