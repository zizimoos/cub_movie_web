import React from "react";
import { tvApi } from "../../../api";
import PcompanyPresenter from "./PcompanyPresenter";

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: null,
      error: null,
      loading: true,
    };
  }

  async componentDidMount() {
    const {
      match: {
        params: { id },
      },
      history: { push },
    } = this.props;
    const parsedId = parseInt(id);
    if (isNaN(parsedId)) {
      return push("/");
    }
    let result;
    try {
      ({ data: result } = await tvApi.tvDetail(parsedId));
      console.log("PRODUCTION :", result);
    } catch (error) {
      this.setState({ error: "Can't find anything." });
    } finally {
      this.setState({ loading: false, result });
      console.log("PRODUCTION :", result);
    }
  }

  render() {
    const { result, error, loading } = this.state;
    return (
      <PcompanyPresenter result={result} error={error} loading={loading} />
    );
  }
}
