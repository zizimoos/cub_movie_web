import React, { useState } from "react";
import DetailPresenter from "./DetailPresenter";

const DetailContainer = () => {
  const [state, setState] = useState({
    result: null,
    loading: true,
    error: null,
  });

  const { result, loading, error } = state;
  return (
    <DetailPresenter
      result={result}
      loading={loading}
      error={error}
    ></DetailPresenter>
  );
};

export default DetailContainer;
