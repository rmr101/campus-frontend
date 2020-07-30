import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import Login from "../../components/Login";
import User from "./../User";

//For docker build basename needed to be changed to <Router basename="/">
//For github page deploy use <Router basename="/campus-frontend/">

 // Uncomment this for normal build instead of github page deploy at package json.
// "homepage": "./",

export default () => (
  <Router basename="/campus-frontend/">
    <Switch>
      <Route path={"/login"} exact>
        <Login />
      </Route>
      <User />
    </Switch>
  </Router>
);