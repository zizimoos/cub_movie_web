import React, { useState } from "react";
import { movieApi, tvApi } from "../../api";
import SearchPresenter from "./SearchPresenter";
import { Helmet } from "react-helmet";

export const SearchContainer = () => {
  const [state, setState] = useState({
    movieResults: null,
    tvResults: null,
    searchTerm: "",
    loading: false,
    error: null,
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const { searchTerm } = state;
    if (searchTerm !== "") {
      searchByTerm(searchTerm);
    }
  };
  const updateTerm = (event) => {
    event.preventDefault();
    const {
      target: { value },
    } = event;
    setState({ searchTerm: value });
  };
  const searchByTerm = async (searchTerm) => {
    setState({ loading: true });
    try {
      const {
        data: { results: tvResults },
      } = await tvApi.tvSearch(searchTerm);
      const {
        data: { results: movieResults },
      } = await movieApi.movieSearch(searchTerm);
      // throw Error();
      setState({
        movieResults,
        tvResults,
        searchTerm,
        loading: false,
        error,
      });
    } catch {
      setState({ error: "Sorry Can't find results" });
    } finally {
    }
  };

  console.log(state);
  const { movieResults, tvResults, searchTerm, loading, error } = state;
  return (
    <>
      <Helmet>
        <title>CubsMovie | Search</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
      <SearchPresenter
        movieResults={movieResults}
        tvResults={tvResults}
        loading={loading}
        searchTerm={searchTerm}
        error={error}
        handleSubmit={handleSubmit}
        updateTerm={updateTerm}
      ></SearchPresenter>
    </>
  );
};

export default SearchContainer;
