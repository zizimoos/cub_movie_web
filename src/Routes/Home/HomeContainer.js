import React, { useEffect, useState } from "react";
import { movieApi } from "../../api";
import HomePresenter from "./HomePresenter";

export const HomeContainer = () => {
  const [state, setState] = useState({
    nowPlaying: null,
    upcoming: null,
    popular: null,
    loading: true,
    error: null,
  });

  const getData = async () => {
    try {
      const {
        data: { results: nowPlaying },
      } = await movieApi.nowPlaying();
      const {
        data: { results: upcoming },
      } = await movieApi.upcoming();
      const {
        data: { results: popular },
      } = await movieApi.popular();

      setState({
        nowPlaying,
        upcoming,
        popular,
        loading: false,
        error: null,
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
  const { nowPlaying, upcoming, popular, loading, error } = state;
  return (
    <HomePresenter
      nowPlaying={nowPlaying}
      upcoming={upcoming}
      popular={popular}
      loading={loading}
      error={error}
    ></HomePresenter>
  );
};

export default HomeContainer;
