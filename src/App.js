import Container from "react-bootstrap/Container";
import Stack from "react-bootstrap/Stack";

import { Banner } from "./components/Banner";
import { SearchForm } from "./components/SearchForm";
import { Repos } from "./components/Repos";

import CloudBannerImg from "./assets/images/clouds.jpg";
import { useState } from "react";

export const App = () => {
  const [url, setUrl] = useState("");
  console.log(url);

  return (
    <Container
      className="bg-dark vh-100 text-light"
      style={{
        backgroundImage: `url(${CloudBannerImg}`,
        backgroundSize: "cover",
        opacity: "80%",
      }}
    >
      <Stack>
        <Banner />
        <SearchForm setUrl={setUrl} />
        <Repos />
      </Stack>
    </Container>
  );
};
