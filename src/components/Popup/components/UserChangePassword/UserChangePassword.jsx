import React from "react";
import changePassword from '../../../../apis/changePassword';
import Loader from '../../../Loader';
import {FormLayout,FormItem,Button,SmallText} from '../../../Layout/FormLayout/FormLayout'
import LoaderContainer from "../../../Layout/LoaderContainer";
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
        if (err.response.status === 400) {
          this.setState({ incorrectPassword: true, loading: false });
        } else{
          // this.setState({ incorrectPassword: true, loading: false });
        }
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

  render() {
    return (
      <FormLayout
        className={this.state.successful ? "successful" : null}
        onSubmit={(e) => {
          e.preventDefault();
          this.onSubmit();
        }}
      >
        {this.state.loading ? (
          <LoaderContainer >
            <Loader />
          </LoaderContainer>
        ) : null}
        <FormItem>
          <label>Current password</label>
          <input
            type="password"
            placeholder="Enter Current Password"
            autoComplete="on"
            maxLength={30}
            required
            onChange={(event) => this.handleValueChange("oldPassword")(event)}
          />
        </FormItem>
        <FormItem>
          <label>New password</label>
          <input
            type="password"
            placeholder="Enter New Password"
            maxLength={30}
            autoComplete="on"
            onChange={(event) => this.handleValueChange("newPassword")(event)}
            required
          />
        </FormItem>
        <FormItem>
          <label>Confirm password</label>
          <input
            type="password"
            placeholder="Confirm New Password"
            maxLength={30}
            autoComplete="on"
            required
            onChange={(event) => {
              this.handleValueChange("confirmPassword")(event);
            }}
          />
        </FormItem>
        {this.state.incorrectPassword ? (
          <SmallText className={"error"}> Incorrect password. </SmallText>
        ) : null}
        {this.state.missMatchPassword ? (
          <SmallText className={"error"}> Confirm password miss match. </SmallText>
        ) : null}
        {this.state.successful ? (
          <SmallText> Successful. </SmallText>
        ) : null}
        <Button type="submit">Confirm</Button>
        {/* TODO: will have to implement later */}
      </FormLayout>
    );
  }
}
export default UserChangePassword;
