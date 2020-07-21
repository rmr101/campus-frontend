import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import Login from "../../components/Login";
import User from "./../User";

//TODO: handling jwt expire and redirect to login. need info about expiration.

export default () => (
  <Router>
    <Switch>
      <Route path={"/login"} exact>
        <Login />
      </Route>
      <User />
    </Switch>
  </Router>
);