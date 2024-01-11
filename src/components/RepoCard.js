import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export const RepoCard = ({ repo }) => {
  console.log(repo);
  let handleRepoLink = () => {
    console.log(repo.html_url);
    window.open(`${repo.html_url}`, "_blank");
  };
  return (
    <Card
      style={{ width: "18rem", textAlign: "center", verticalAlign: "bottom" }}
    >
      <Card.Body>
        <Card.Title>{repo.name}</Card.Title>
        <Card.Text>{repo.description}</Card.Text>
        <Button variant="primary" onClick={handleRepoLink}>
          Go to repository {repo.name}
        </Button>
      </Card.Body>
    </Card>
  );
};
