import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Header from "Components/Header";
import Home from "../Routes/Home";
import Search from "../Routes/Search";
import Tv from "../Routes/Tv";

export default () => {
  return (
    <Router>
      <>
        <Header></Header>
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/tv" component={Tv}></Route>
          <Route path="/search" component={Search}></Route>
          <Redirect from="*" to="/"></Redirect>
        </Switch>
      </>
    </Router>
  );
};
