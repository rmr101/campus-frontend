import React from "react";
import styles from "./Login.module.scss";
import {connect} from 'react-redux';
import { withRouter } from "react-router-dom";
import ChangeRole from "../../store/authentication/actions/ChangeRole";
import SetLogin from "../../store/authentication/actions/SetLogin";

const Login = ({
  onClick,
  history
}) => {
  return (
    <div>
      <div className={styles.modal}>
        <form className={styles.form}>
          <h3 className={styles.title}>login</h3>
          {/* <div className={styles.control}>
            <label>UserID</label>
            <input
              type="text"
              placeholder="Enter UserID"
              maxLength={30}
              required
            />
          </div>
          <div className={styles.control}>
            <label className={styles.label}>Password</label>
            <input
              className={styles.input}
              type="password"
              placeholder="Enter Password"
              maxLength={30}
              required
            />
          </div> */}
          <button
            className={styles.button}
            to="/"
            onClick={(e) => {
              history.push("/");
              onClick("student");
            }}
          >
            Log in as Student
          </button>
          <button
            className={styles.button}
            to="/"
            onClick={(e) => {
              history.push("/");
              onClick("teacher");
            }}
          >
            Log in as Teacher
          </button>
          <button
            className={styles.button}
            onClick={(e) => {
              history.push("/");
              onClick("admin");
            }}
            to="/"
          >
            Log in as Admin
          </button>
        </form>
      </div>
      <div className={styles.mask}></div>
    </div>
  );
}


const mapDispatchToProps = (dispatch) => ({
    onClick:(text) => {
    dispatch(SetLogin());
    dispatch(ChangeRole(text));
  } 
})

const LoginContainer = connect(null, mapDispatchToProps)(Login);
export default withRouter(LoginContainer);