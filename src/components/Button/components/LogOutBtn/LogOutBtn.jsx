import React from 'react';
import {connect} from 'react-redux';
import styles from'./LogOutBtn.module.scss';
import LogOut from './../../../../store/authentication/actions/LogOut.js';
import { withRouter } from "react-router-dom";

//TODO: 所有的button 都应该是独立的 component
//TODO: 目前logout 不会清空jwt。
const LogOutBtn = ({ logOut,history}) => (
  <button 
    className={`${styles.btn} + ${styles.logOutBtn}`} onClick={logOut}
    to = '/login'
  >
    Log Out
  </button>
);  

const mapDispatchToProps = (dispatch) => ({
  logOut: () => dispatch(
    LogOut()
    ),
});

const LogOutBtnContainer = connect(null, mapDispatchToProps)(LogOutBtn);
export default withRouter(LogOutBtnContainer);