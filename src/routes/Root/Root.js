import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Login from "../../components/Login";
import User from "./../User";

export default () => (
  <Router basename="/">
    <Switch>
      <Route path="/login" exact>
        <Login />
      </Route>
      <User />
    </Switch>
  </Router>
);

// export default Root;
// <Router>
//   {!loginState ? (
//     <Route path="/login">
//       <Login />
//     </Route>
//   ) : (
//     <Redirect to="/" />
//   )}
//   {loginState ? (
//     <Route path="/" exact>
//       <div className={styles.nav}>
//         <Nav />
//       </div>
//       <div className={styles.main}>
//         <Main />
//       </div>
//     </Route>
//   ) : (
//     <Redirect to="/login" />
//   )}
// </Router>;