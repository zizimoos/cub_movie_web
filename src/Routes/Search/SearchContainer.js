import React, { useEffect, useState } from "react";
import { movieApi, tvApi } from "../../api";
import SearchPresenter from "./SearchPresenter";

export const SearchContainer = () => {
  const [state, setState] = useState({
    movieResults: null,
    tvResults: null,
    searchTerm: "",
    loading: false,
    error: null,
  });

  const getData = async (searchTerm) => {
    try {
      const {
        data: { results: tvResults },
      } = await tvApi.tvSearch(searchTerm);
      const {
        data: { results: movieResults },
      } = await movieApi.movieSearch(searchTerm);

      setState({
        movieResults,
        tvResults,
        searchTerm,
        loading: true,
        error,
      });
    } catch (error) {
      setState({ error: "Can't get the data" });
    } finally {
      setState({ loading: false });
    }
  };

  useEffect(() => {
    getData();
  }, []);

  console.log(state);
  const { movieResults, tvResults, searchTerm, loading, error } = state;
  return (
    <SearchPresenter
      movieResults={movieResults}
      tvResults={tvResults}
      searchTerm={searchTerm}
      loading={loading}
      error={error}
    ></SearchPresenter>
  );
};

export default SearchPresenter;
