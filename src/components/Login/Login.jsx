import React from "react";
import styles from "./Login.module.scss";
import {connect} from 'react-redux';
import { withRouter } from "react-router-dom";
import storeAuthToState from "../../store/authentication/actions/storeAuthToState";
import {login} from '../../apis/authentication';
import Greeting from './Greeting';
import Loader from '../Loader';

// user id : admin   password: admin 
// user id : S95778487   password: S95778487 Student. 
// user id : T54346913   password: T54346913 Teacher.

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      failLogin:false,
      username: "",
      password: "",
    };
  }
  handleValueChange(name){
    this.setState({
      failLogin: false,
    });
    return (event) => {
      const { value } = event.target;
      this.setState(
        {
          [name]: value,
        });
    };
  }

  async loginToSever(username, password) {
    this.setState({
      loading: true,
    });

    await login(username, password)
      .then((res) => {
        this.props.storeAuthToState(res.data);
        this.setState(
          {
            loading: false,
          },
          () => this.props.history.push("/")
        );
      })
      .catch((err) => {
        //TODO: now its all considered as wrong password or username
        this.setState({
          failLogin: true,
          loading: false,
        });
        
      });
       console.log("I have finish uploading it to the store");

    //TODO: need a better handler.
  }
  render() {
    return (
      <div className={styles.wrapper}>
        <div className={styles.modal}>
          <Greeting />
          <form
            className={styles.form}
            onSubmit={(e) => {
              e.preventDefault();
              this.loginToSever(this.state.username, this.state.password);
            }}
          >
            {this.state.loading ? (
              <div className={styles.loaderContainer}>
                <Loader />
              </div>
            ) : null}
            <div className={styles.control}>
              <label>User ID</label>
              <input
                className={this.state.failLogin ? styles.failLogin : null}
                type="text"
                placeholder="Enter User ID"
                maxLength={30}
                required
                onChange={(event) => this.handleValueChange("username")(event)}
              />
            </div>
            <div className={styles.control}>
              <label className={styles.label}>Password</label>
              <input
                className={this.state.failLogin ? styles.failLogin : null}
                type="password"
                placeholder="Enter Password"
                maxLength={30}
                autoComplete="on"
                onChange={(event) => this.handleValueChange("password")(event)}
                required
              />
            </div>
            {this.state.failLogin ? (
              <small> Incorrect username or password. </small>
            ) : null}
            <button className={styles.button} type="submit">
              Log in
            </button>
            {/* TODO: will have to implement later */}
            <div className={styles.forget}> Forget password ?</div>
          </form>
        </div>
      </div>
    );
  }
}


const mapDispatchToProps = (dispatch) => ({
    storeAuthToState:(data) => dispatch(storeAuthToState(data))
  });

const LoginContainer = connect(null, mapDispatchToProps)(Login);
export default withRouter(LoginContainer);