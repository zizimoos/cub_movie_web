import React, { useEffect, useState } from "react";
import { movieApi } from "../../api";
import HomePresenter from "./HomePresenter";
import { Helmet } from "react-helmet";

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
      // throw Error();
      setState({
        nowPlaying,
        upcoming,
        popular,
        loading: false,
        error: null,
      });
    } catch (error) {
      setState({ error: "Sorry Can't get the data" });
    } finally {
      // setState({ loading: false });
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const { nowPlaying, upcoming, popular, loading, error } = state;
  return (
    <>
      <Helmet>
        <title>CubsMovie | Movies</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
      <HomePresenter
        nowPlaying={nowPlaying}
        upcoming={upcoming}
        popular={popular}
        loading={loading}
        error={error}
      ></HomePresenter>
    </>
  );
};

export default HomeContainer;
