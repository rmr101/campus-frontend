import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const PrivateRoute = ({ children, authenticated, ...props }) => (
  <Route
    {...props}
    render={
      () => {
      if (!authenticated) {
        return <Redirect to="/login" />;
      }
      return children;
    }}
  />
);

const mapStateToProps = (state) => ({
  authenticated: state.loginState,
});

const PrivateRouterContainer = connect(mapStateToProps,null)(PrivateRoute);
export default PrivateRouterContainer;
