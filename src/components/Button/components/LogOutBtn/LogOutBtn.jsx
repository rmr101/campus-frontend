import React from 'react';
import {connect} from 'react-redux';
import styles from'./LogOutBtn.module.scss';
import LogOut from './../../../../store/authentication/actions/LogOut.js';
import AddHeader from "./../../../../store/campus/actions/AddHeader";
import { withRouter } from "react-router-dom";

//TODO: 所有的button 都应该是独立的 component
const LogOutBtn = ({logOut}) => (
  <button 
    className={`${styles.btn} + ${styles.logOutBtn}`} onClick={logOut}
    to = '/login'
  >
    Log Out
  </button>
);  

const mapDispatchToProps = (dispatch) => ({
  logOut: () => {
    dispatch(LogOut());
    dispatch(AddHeader("Dashboard", "Dashboard"));
  }
});

const LogOutBtnContainer = connect(null, mapDispatchToProps)(LogOutBtn);
export default withRouter(LogOutBtnContainer);