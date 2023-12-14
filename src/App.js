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
  const [error, setError] = useState("");

  useEffect(() => {
    if (url) {
      const fetchData = async () => {
        try {
          const { data } = await axios.get(url + "/foo");
          setRepos(data);
          // console.log(url);
        } catch (error) {
          console.log(`error ${error.message}`);
          setError("Ooops something went wrong");
        }
      };
      fetchData();
    }
  }, [url]);
  console.log(error);
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
        <h3>{error}</h3>
        {repos && <Repos repos={repos} />}
      </Stack>
    </Container>
  );
};
