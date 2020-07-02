import React from 'react';
import {connect} from 'react-redux';
import styles from'./LogOutBtn.module.scss';
import LogOut from './../../../../store/authentication/actions/LogOut.js';

//TODO: 所有的button 都应该是独立的 component
const LogOutBtn = ({ logOut }) => (
  <button className={`${styles.btn} + ${styles.logOutBtn}`} onClick={logOut}>
    Log Out
  </button>
);  

const mapDispatchToProps = (dispatch) => ({
  logOut: () => dispatch(LogOut()),
});

const LogOutBtnContainer = connect(null, mapDispatchToProps)(LogOutBtn);
export default LogOutBtnContainer;