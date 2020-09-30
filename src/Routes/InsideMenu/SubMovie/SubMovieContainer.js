import React, { useEffect, useState } from "react";
import { movieApi } from "../../../api";
import SubMoviePresenter from "./SubMoviePresenter";

const SubMovieContainer = (props) => {
  const {
    location: { pathname },
    match: {
      params: { id },
    },
    history: { push },
  } = props;

  const [state, setState] = useState({
    result: null,
    carouselIndex: 0,
    error: null,
    loading: true,
    isMovie: pathname.includes("/movie/"),
  });

  const onClick = (event) => {
    console.log(event.target.id);
    const {
      target: { id },
    } = event;
    console.log(id);
    const parsedIndex = parseInt(id);
    setState({ ...state, carouselIndex: parsedIndex });
  };

  const getData = async () => {
    const { isMovie } = state;
    const parsedId = parseInt(id);
    if (isNaN(parsedId)) {
      return push("/");
    }
    let result = null;
    try {
      if (isMovie) {
        ({ data: result } = await movieApi.movieDetail(parsedId));
      }
      setState({ loading: false, result, carouselIndex });
    } catch (error) {
      setState({ error: "Can't find anything." });
    } finally {
    }
  };

  useEffect(() => {
    getData();
  }, []);
  const { result, carouselIndex, error, loading } = state;
  console.log(result);
  return (
    <SubMoviePresenter
      result={result}
      error={error}
      carouselIndex={carouselIndex}
      loading={loading}
      onClick={onClick}
    />
  );
};

export default SubMovieContainer;
