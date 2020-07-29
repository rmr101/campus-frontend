import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from 'prop-types';
const PrivateRoute = ({ children, authenticated, ...props}) => {
  
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

PrivateRoute.propTypes = {
  children: PropTypes.element.isRequired,
  authenticated:PropTypes.bool.isRequired
};

const mapStateToProps = (state) => ({
  authenticated: !! state.Authentication.jwt,
});

const PrivateRouterContainer = connect(
  mapStateToProps,null
)(PrivateRoute);
export default PrivateRouterContainer;
