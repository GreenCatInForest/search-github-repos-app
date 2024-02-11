import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import RepoCardImg from "../assets/images/leaf-256.png";

export const RepoCard = ({ repo }) => {
  console.log(repo);
  let handleRepoLink = () => {
    console.log(repo.html_url);
    window.open(`${repo.html_url}`, "_blank");
  };
  return (
    <Card
      style={{
        width: "18rem",
        textAlign: "center",
        verticalAlign: "bottom",
      }}
    >
      <Card.Img variant="top" src={RepoCardImg} className="w-50 m-auto p-2" />
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
