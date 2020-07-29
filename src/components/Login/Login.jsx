import React from "react";
import styles from "./Login.module.scss";
import {connect} from 'react-redux';
import { withRouter } from "react-router-dom";
import storeAuthToState from "../../store/authentication/actions/storeAuthToState";
import {login} from '../../apis/authentication';
import Greeting from './Greeting';
import Loader from '../Loader';
import Particles from "react-tsparticles";
import ParticleStyles from "../../components/Login/components/Particle/Particle.module.scss";
import { params } from "../../components/Login/components/Particle/params";
import PropTypes from "prop-types";


class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      failLogin: false,
      InactiveUser: false,
      username: "",
      password: "",
    };
  }
  handleValueChange(name){
    this.setState({
      failLogin: false,
      InactiveUser: false,
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
        switch (err.response.status) {
          case 401:
            this.setState({
              failLogin: true,
              loading: false,
            });
            console.log(err.response);
            break;
          case 403:
            this.setState({
              InactiveUser: true,
              loading: false,
            });
            console.log(err.response);
            break;
          default:
            this.setState({
              loading: false,
            });
            console.log(err.response);
            break;
        }});
  }
  render() {
    return (
      <div className={styles.wrapper}>
        <Particles className={ParticleStyles.particle} params={{ ...params }} />
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
                className={
                  this.state.failLogin || this.state.InactiveUser
                    ? styles.failLogin
                    : null
                }
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
            {this.state.InactiveUser ? (
              <small> Inactive user. Please contact admin. </small>
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

Login.propTypes = {
  storeAuthToState:PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
    storeAuthToState:(data) => dispatch(storeAuthToState(data))
  });

const LoginContainer = connect(null, mapDispatchToProps)(Login);
export default withRouter(LoginContainer);