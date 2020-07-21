import React from "react";
import PrivateRoute from "./../../components/PrivateRoute";
import Layout from "../../components/Layout";

export default () => (
  <PrivateRoute path={process.env.PUBLIC_URL+"/"}>
    <Layout/>
  </PrivateRoute>
);