import React from "react";
import styles from "./LoginForm.module.scss";

class LoginForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {};
  }
  render(){
        return (
          <div>
            <div className={styles.modal}>
                <form className={styles.form}>
                  <h3 className={styles.title}>login</h3>
                  <div className={styles.control}>
                    <label >UserID</label>
                    <input type="text" placeholder="Enter UserID"/>
                  </div>
                  <div className={styles.control}>
                    <label className={styles.label}>Password</label>
                    <input className={styles.input} type="text" placeholder="Enter Password"/>
                  </div>
                  <button className={styles.button} onClick={this.props.toggle}>Submit</button>
                </form>
            </div>
            <div className={styles.mask}></div>
          </div>
        );
      }
    }

export default LoginForm;