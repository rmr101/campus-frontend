import React from "react";
import resetPassword from "../../../../apis/resetPassword";
import LoaderContainer from "../../../Layout/LoaderContainer";
import Loader from "../../../Loader";
import {
  FormLayout,
  Button,
} from "../../../Layout/FormLayout/FormLayout";

class ResetPassword extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
    };
  }

  async resetPassword() {
    console.log(this.props);
    const { uuid, toggle } = this.props;
    this.setState({ loading: true });
    await resetPassword(uuid)
      .then(() =>
        this.setState(
          {
            loading: false,
          },
          () => {
            toggle();
          }
        )
      )
      .catch((err) => {
        console.log(err);
      });
  }
  onSubmit() {
    this.resetPassword();
  }

  render() {
    return (
      <FormLayout
        onSubmit={(e) => {
          e.preventDefault();
          this.onSubmit();
        }}
      >
        {this.state.loading ? (
          <LoaderContainer>
            <Loader />
          </LoaderContainer>
        ) : null}
        <h4>&nbsp;&nbsp;&nbsp;&nbsp;Are your sure to reset?</h4>
        <Button type="submit">Reset Confirm</Button>
      </FormLayout>
    );
  }
}
export default ResetPassword;
