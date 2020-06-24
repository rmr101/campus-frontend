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
                <form className={styles.form} onSubmit={this.props.onSubmit}>
                  <h3 className={styles.title}>login</h3>
                  <div className={styles.control}>
                    <label >UserID</label>
                    <input type="text" placeholder="Enter UserID" maxLength={30} required/>
                  </div>
                  <div className={styles.control}>
                    <label className={styles.label}>Password</label>
                    <input className={styles.input} type="password" placeholder="Enter Password" maxLength={30} required/>
                  </div>
                  <button className={styles.button} type="submit" onClick={this.props.toggle}>Submit</button>
                </form>
            </div>
            <div className={styles.mask}></div>
          </div>
        );
      }
    }

export default LoginForm;