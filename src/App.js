import { useState, useEffect } from "react";

import Container from "react-bootstrap/Container";
import Stack from "react-bootstrap/Stack";
import axios from "axios";

import { Banner } from "./components/Banner";
import { SearchForm } from "./components/SearchForm";
import { Repos } from "./components/Repos";

import CloudBannerImg from "./assets/images/clouds.jpg";

export const App = () => {
  const [url, setUrl] = useState("");
  const [repos, setRepos] = useState("");

  useEffect(() => {
    if (url) {
      const fetchData = async () => {
        const { data } = await axios.get(url);
        setRepos(data);
      };
      fetchData();
    }
  }, [url]);

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
        {repos && <Repos repos={repos} />}
      </Stack>
    </Container>
  );
};
