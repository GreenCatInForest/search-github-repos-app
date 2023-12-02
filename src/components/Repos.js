export const Repos = ({ repos }) => {
  return (
    <div>
      {repos.forEach((repo) => {
        console.log(repo);
      })}
    </div>
  );
};
