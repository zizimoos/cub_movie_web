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
import Detail from "../Routes/Detail";

export default () => {
  return (
    <Router>
      <>
        <Header></Header>
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/tv" exact component={Tv}></Route>
          <Route path="/search" component={Search}></Route>
          <Route path="/movie/:id" component={Detail}></Route>
          <Route path="/tv/:id" component={Detail}></Route>
          <Redirect from="*" to="/"></Redirect>
        </Switch>
      </>
    </Router>
  );
};
