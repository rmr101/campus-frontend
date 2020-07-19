import React from "react";
import styles from "./Profile.module.scss";
import getUserInfo from "../../../../../../apis/getUserInfo";
import Loading from "../Loading";
import { connect } from "react-redux";
import HalfWidthLayout from "../../../../../Layout/HalfWidthLayout/HalfWidthLayout";
import Button from "../../../../../Button";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: null,
      loading: true,
    };
  }
  async getUserInfo() {
    const resp = await getUserInfo(this.props.userRole, this.props.userID);
    if (this.props.userRole === "student") {
      const userInfo = resp ? resp : { name: "Loading ..." };
      this.setState({
        userInfo: userInfo,
        loading: false,
      });
      console.log(userInfo);
    } else if (this.props.userRole === "teacher") {
      const userInfo = resp ? resp : { name: "Loading ..." };
      this.setState({
        userInfo: userInfo,
        loading: false,
      });
      console.log(userInfo);
    } else {
      const resp = await getUserInfo(this.props.secondID, this.props.id);
      const userInfo = resp ? resp : { name: "Loading ..." };
      this.setState({
        userInfo: userInfo,
        loading: false,
      });
      console.log(userInfo);
    }
  }
  componentDidMount() {
    this.getUserInfo();
  }

  render() {
    console.log(this.props.id);
    return (
      <div className={styles.wrapper}>
        {this.state.loading ? (
          <Loading />
        ) : (
          <React.Fragment>
            {/* for title display */}
            {this.state.userInfo.hasOwnProperty("title") ? (
              <HalfWidthLayout title={"Title"} background>
                {this.state.userInfo.title !== null ? (
                  this.state.userInfo.title
                ) : (
                  <span className={styles.noText}>No Title.</span>
                )}
              </HalfWidthLayout>
            ) : null}
            {/* for intro display */}
            {this.state.userInfo.hasOwnProperty("introduction") ? (
              <HalfWidthLayout title={"Introduction"} background>
                {this.state.userInfo.title !== null ? (
                  this.state.userInfo.introduction
                ) : (
                  <span className={styles.noText}>No Introduction.</span>
                )}
              </HalfWidthLayout>
            ) : null}
            <HalfWidthLayout title={"Name"} background>
              {this.state.userInfo.name}
            </HalfWidthLayout>
            {this.props.userRole === "admin" ? (
              <HalfWidthLayout title={"Reset Password"}>
                <Button type={"RESET_PASSWORD"} uuid={this.props.id} />
              </HalfWidthLayout>
            ) : (
              <HalfWidthLayout title={"Change Password"}>
                <Button type={"CHANGE_PASSWORD"} />
              </HalfWidthLayout>
            )}
            {this.props.userRole === "admin" ? (
              <HalfWidthLayout title={"Delete User"}>
                <Button type={"DELETE_USER"} />
              </HalfWidthLayout>
            ) : null}
          </React.Fragment>
        )}
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  id: state.headerHistory.content.id,
  secondID: state.headerHistory.content.secondID,
  userRole: state.Authentication.role.toLowerCase(),
  userID: state.Authentication.uuid,
});
const ProfileContainer = connect(mapStateToProps, null)(Profile);
export default ProfileContainer;
