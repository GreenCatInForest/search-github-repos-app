import Container from "react-bootstrap/Container";
import Stack from "react-bootstrap/Stack";

import { Banner } from "./components/Banner";
import CloudBannerImg from "./assets/images/clouds.jpg";

export const App = () => {
  return (
    <Container
      className="bg-dark vh-100 text-light"
      style={{
        backgroundImage: `url(${CloudBannerImg}`,
        backgroundSize: "cover",
        opacity: "80%",
      }}
    >
      <Banner />
      <Stack>
        <div className="p-2">First item</div>
        <div className="p-2">Second item</div>
        <div className="p-2">Third item</div>
      </Stack>
    </Container>
  );
};
