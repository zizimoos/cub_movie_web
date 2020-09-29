import React from "react";
import { movieApi } from "../../../api";
import ProductionPresenter from "./ProductionPresenter";

export default class extends React.Component {
  constructor(props) {
    super(props);
    const {
      location: { pathname },
    } = props;
    this.state = {
      result: null,
      error: null,
      loading: true,
      isMovie: pathname.includes("/movie/"),
    };
  }

  async componentDidMount() {
    const {
      match: {
        params: { id },
      },
      history: { push },
    } = this.props;
    const { isMovie } = this.state;
    const parsedId = parseInt(id);
    if (isNaN(parsedId)) {
      return push("/");
    }
    let subresult = null;
    try {
      if (isMovie) {
        ({ data: subresult } = await movieApi.movieDetail(parsedId));
      }
    } catch (error) {
      this.setState({ error: "Can't find anything." });
    } finally {
      this.setState({ loading: false, subresult });
    }
  }

  render() {
    const { subresult, error, loading } = this.state;
    console.log("production", subresult);
    return (
      <ProductionPresenter
        subresult={subresult}
        error={error}
        loading={loading}
      />
    );
  }
}
