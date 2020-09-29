import React from "react";
import { movieApi, tvApi } from "../../../api";
import SeasonsPresenter from "../Seasons/SeasonsPresenter";

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
    console.log(".....");
    if (isNaN(parsedId)) {
      return push("/");
    }
    let subresult = null;
    try {
      if (isMovie) {
        ({ data: subresult } = await movieApi.movieDetail(parsedId));
      } else {
        ({ data: subresult } = await tvApi.tvDetail(parsedId));
      }
    } catch (error) {
      this.setState({ error: "Can't find anything." });
    } finally {
      this.setState({ loading: false, subresult });
      console.log("SEASONS", subresult);
    }
  }

  render() {
    const { subresult, error, loading } = this.state;
    return (
      <SeasonsPresenter subresult={subresult} error={error} loading={loading} />
    );
  }
}
