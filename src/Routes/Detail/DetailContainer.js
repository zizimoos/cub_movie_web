import React, { useEffect, useState } from "react";
import { movieApi, tvApi } from "../../api";
import DetailPresenter from "./DetailPresenter";

const DetailContainer = (props) => {
  const {
    match: {
      params: { id },
    },
    history: { push },
    location: { pathname },
  } = props;

  const [state, setState] = useState({
    result: null,
    isMovie: pathname.includes("/movie/"),
    loading: true,
    error: null,
  });

  const getData = async () => {
    const parsedId = parseInt(id);
    if (isNaN(parsedId)) {
      return push("/");
    }

    const { isMovie } = state;
    try {
      if (isMovie) {
        const { data: result } = await movieApi.movieDetail(parsedId);
        setState({ ...state, result, loading: false });
      } else {
        const { data: result } = await tvApi.tvDetail(parsedId);
        setState({ ...state, result, loading: false });
      }
    } catch {
      setState({ error: "Can't find anything" });
    } finally {
    }
  };

  useEffect(() => {
    getData();
  }, []);

  console.log(state);
  const { result, isMovie, loading, error } = state;
  console.log(result);
  return (
    <DetailPresenter
      result={result}
      loading={loading}
      error={error}
      isMovie={isMovie}
    ></DetailPresenter>
  );
};

export default DetailContainer;
