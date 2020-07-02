import React from 'react';
import styles from './App.module.scss';
import Nav from './components/Nav';
import Main from "./components/Main";
import Login from './components/Login';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import {connect} from 'react-redux';

//Dashboard content ID 0,
//role: student 
//目前是以一个render content ID 来实现
//TODO:
const App = ({ 
  loginState,
}) => {
  return (
    <div className={styles.wrapper}>
      <Router>
        {!loginState ? (
          <Route path="/login">
            <Login />
          </Route>
        ) : (
          <Redirect to="/" />
        )}
        {loginState ? (
          <Route path="/" exact>
            <div className={styles.nav}>
              <Nav/>
            </div>
            <div className={styles.main}>
              <Main/>
            </div>
          </Route>
        ) : (
          <Redirect to="/login" />
        )}
      </Router>
    </div>
  );
};


const mapStateToProps = (state) =>({
  loginState: state.loginState,
})

const AppContainer = connect(mapStateToProps, null)(App);

export default AppContainer;
