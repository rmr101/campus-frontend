import React from "react";
import styles from "./UserChangePassword.module.scss";
import changePassword from '../../../../apis/changePassword';
import  Loader from '../../../Loader';
// Post object would need a name

class UserChangePassword extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading:false,
      oldPassword: "",
      newPassword: "",
      confirmPassword: "",
      successful: false,
      incorrectPassword: false,
      missMatchPassword: false,
    };
  }

  async changeUserPassword() {
    let oldPassword = this.state.oldPassword;
    let newPassword = this.state.newPassword;
    this.setState({ loading :true});
    await changePassword(oldPassword, newPassword)
      .then(() =>
        this.setState(
          {
            successful: true,
            loading:false,
          },
          () => setTimeout(() => this.setState({ successful: false }), 3000)
        )
      )
      .catch((err) => {
        //TODO:之后要特别一些
        this.setState({ incorrectPassword: true, loading: false });
        console.log(err);
      });
  }
  onSubmit() {
    if (this.state.missMatchPassword) {
    } else {
      this.changeUserPassword();
    }
  }
  noMissMatch() {
    if (this.state.confirmPassword === this.state.newPassword) {
      this.setState({
        missMatchPassword: false,
      });
      return true;
    } else {
      this.setState({
        missMatchPassword: true,
      });
      return false;
    }
  }
  handleValueChange(name) {
    this.setState({
      successful:false,
      incorrectPassword: false,
    });
    return (event) => {
      const { value } = event.target;
      this.setState({
        [name]: value,
      },
      () => {
        return name === "confirmPassword" ? this.noMissMatch() : null
      });
    };
  }
  renderFormClassName(){
    let missMatchError = this.state.missMatchPassword ? styles.missMatch : ""
    let incorrectPassError =  this.state.incorrectPassword ? styles.incorrect : ""
    let successful = this.state.successful ? styles.successful + " " : "" 
    return (styles.form + " " + missMatchError + " " + incorrectPassError + " " + successful).trim();
  }

  render() {
    return (
      <form
        className={this.renderFormClassName()}
        onSubmit={(e) => {
          e.preventDefault();
          this.onSubmit();
        }}
      >
        {this.state.loading ? (
          <div className={styles.loaderContainer}>
            <Loader color={"update"} />
          </div>
        ) : null}
        <div className={styles.control}>
          <label>Current password</label>
          <input
            className={styles.oldPass}
            type="password"
            placeholder="Enter Current Password"
            autoComplete="on"
            maxLength={30}
            required
            onChange={(event) => this.handleValueChange("oldPassword")(event)}
          />
        </div>
        <div className={styles.control}>
          <label className={styles.label}>New password</label>
          <input
            className={styles.newPass}
            type="password"
            placeholder="Enter New Password"
            maxLength={30}
            autoComplete="on"
            onChange={(event) => this.handleValueChange("newPassword")(event)}
            required
          />
        </div>
        <div className={styles.control}>
          <label className={styles.label}>Confirm password</label>
          <input
            className={styles.confirmPass}
            type="password"
            placeholder="Confirm New Password"
            maxLength={30}
            autoComplete="on"
            required
            onChange={(event) => {
              this.handleValueChange("confirmPassword")(event);
            }}
          />
        </div>
        {this.state.incorrectPassword ? (
          <small> Incorrect password. </small>
        ) : null}
        {this.state.missMatchPassword ? (
          <small> Confirm password miss match. </small>
        ) : null}
        {this.state.successful? (
          <small className={styles.successfulText}> Successful. </small>
        ) : null}
        <button className={styles.button} type="submit">
          Confirm
        </button>
        {/* TODO: will have to implement later */}
        <div className={styles.forget}> Forget password ?</div>
      </form>
    );
  }
}
export default UserChangePassword;
