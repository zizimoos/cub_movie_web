import React, { useEffect, useState } from "react";
import { tvApi } from "../../api";
import TvPresenter from "./TvPresenter";

export const TvContainer = () => {
  const [state, setState] = useState({
    topRated: null,
    popular: null,
    airingToday: null,
    loading: true,
    error: null,
  });

  const getData = async () => {
    try {
      const {
        data: { results: topRated },
      } = await tvApi.topRated();
      const {
        data: { results: popular },
      } = await tvApi.popular();
      const {
        data: { results: airingToday },
      } = await tvApi.airingToday();

      setState({
        topRated,
        popular,
        airingToday,
        loading: false,
        error: null,
      });
    } catch (error) {
      setState({ error: "Can't get the data" });
    } finally {
    }
  };

  useEffect(() => {
    getData();
  }, []);

  console.log(state);
  const { topRated, popular, airingToday, loading, error } = state;
  return (
    <TvPresenter
      topRated={topRated}
      popular={popular}
      airingToday={airingToday}
      loading={loading}
      error={error}
    ></TvPresenter>
  );
};

export default TvContainer;
