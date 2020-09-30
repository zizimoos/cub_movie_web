import React, { useEffect, useState } from "react";
import { movieApi } from "../../../api";
import CastPresenter from "./CastPresenter";

const CastContainer = (props) => {
  const {
    match: {
      params: { id },
    },
  } = props;
  const [state, setState] = useState({
    cast: null,
    loading: true,
  });
  const getData = async () => {
    const {
      data: { cast },
    } = await movieApi.movieCredit(id);
    setState({ cast, loading: false });
    console.log(cast);
  };

  useEffect(() => {
    getData();
  }, []);
  const { cast, loading } = state;
  return <CastPresenter cast={cast} loading={loading}></CastPresenter>;
};

export default CastContainer;
