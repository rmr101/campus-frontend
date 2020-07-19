import React from "react";
import DeleteUser from "../../../../apis/DeleteUser";
import LoaderContainer from "../../../Layout/LoaderContainer";
import Loader from "../../../Loader";
import {
  FormLayout,
  Button,
} from "../../../Layout/FormLayout/FormLayout";

class DeleteUserInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
    };
  }

  async DeleteUser() {
    console.log(this.props);
    const { uuid, toggle } = this.props;
    this.setState({ loading: true });
    await DeleteUser(uuid)
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
    this.DeleteUser();
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
        <h4>&nbsp;&nbsp;&nbsp;Are your sure to delete?</h4>
        <Button type="submit">Delete Confirm</Button>
      </FormLayout>
    );
  }
}
export default DeleteUserInfo;
