import React from "react";
import styles from "./Login.module.scss";
import {connect} from 'react-redux';
import { withRouter } from "react-router-dom";
import ChangeRole from "../../store/authentication/actions/ChangeRole";
import SetLogin from "../../store/authentication/actions/SetLogin";

// user id : admin   password: admin 
// user id : S95778487   password: S95778487 Student. 
// user id : T54346913   password: T54346913 Teacher.div


const Greeting = () => {
const Day = [ "Sun","Mon","Tue","Wed","Thu","Fri","Sat"]
const Month = ["Jan","Feb","Mar","Apr","May","Jun","July","Aug","Sep","Oct","Nov","Dec"]
const date = new Date();
return (
  <div className={styles.greeting}>
    <h3 className={styles.date}>{`${Day[date.getDay()].toUpperCase()}`}</h3>
    <h3 className={styles.date}>{`${date.getDate()}, ${Month[
      date.getMonth()
    ].toUpperCase()}`}</h3>
    <h1 className={styles.title}>Hello Friend!</h1>
    <p>A management system which only makes room for things that matter.</p>
  </div>
);
}

const Login = ({
  onClick,
  history
}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.modal}>
        <Greeting />
        <form className={styles.form}>
          <div className={styles.control}>
            <label>User ID</label>
            <input
              type="text"
              placeholder="Enter User ID"
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
          </div>
          <button
            className={styles.button}
            to="/"
            onClick={(e) => {
              history.push("/");
              onClick("student");
            }}
          >
            Log in
          </button>
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