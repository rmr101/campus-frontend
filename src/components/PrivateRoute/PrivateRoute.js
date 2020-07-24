import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const PrivateRoute = ({ children, authenticated,storeAuthToState, ...props}) => {
  
  return(
    <Route
      {...props}
      render={
        () => {
        if (!authenticated) {
          console.log("I am redirecting");
          return <Redirect to={"/login"} />;
        }
        return children;
      }}/>)
};

const mapStateToProps = (state) => ({
  authenticated: !! state.Authentication.jwt,
});

const PrivateRouterContainer = connect(
  mapStateToProps,null
)(PrivateRoute);
export default PrivateRouterContainer;
