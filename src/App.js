import { useState, useEffect } from "react";

import Container from "react-bootstrap/Container";
import Stack from "react-bootstrap/Stack";
import axios from "axios";

import { Banner } from "./components/Banner";
import { SearchForm } from "./components/SearchForm";
import { Repos } from "./components/Repos";
import { ErrorBanner } from "./components/ErrorBanner";
import { LoadingSpinner } from "./components/LoadingSpinner";

import CloudBannerImg from "./assets/images/clouds.jpg";

export const App = () => {
  const [url, setUrl] = useState("");
  const [repos, setRepos] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (url) {
      const fetchData = async () => {
        try {
          setRepos();
          setIsLoading(true);
          const { data } = await axios.get(url);
          setIsLoading(false);
          setRepos(data);
          // console.log(url);
        } catch (error) {
          console.log(`here is an error: ${error.message}`);
          setIsLoading(false);
          setError("Ooops something went wrong");
        }
      };
      fetchData();
    }
  }, [url]);
  return (
    <Container
      className="bg-dark text-light"
      style={{
        backgroundImage: `url(${CloudBannerImg}`,
        backgroundSize: "contain",
        opacity: "80%",
      }}
    >
      <Stack>
        <Banner />
        <SearchForm setUrl={setUrl} />
        {isLoading && <LoadingSpinner />}
        {error && <ErrorBanner message={error} />}
        {repos && !error && <Repos repos={repos} />}
      </Stack>
    </Container>
  );
};
