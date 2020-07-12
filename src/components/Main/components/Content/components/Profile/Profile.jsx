import React from 'react';
import styles from './Profile.module.scss';
import getUserInfo from "../../../../../../apis/getUserInfo";
import Loading from '../Loading';
import {connect} from 'react-redux';
import HalfWidthLayout from '../../../../../Layout/HalfWidthLayout/HalfWidthLayout';
import Button from "../../../../../Button";

//TODO: 把名字写到redux里。
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
      const userInfo = resp ? resp : {name:"Loading ..."};
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
    }

  }
  componentDidMount() {
    this.getUserInfo();
  }

  render() {
    return (
      <div className={styles.wrapper}>
        {this.state.loading ? (
          <Loading />
        ) : (
          <React.Fragment>
            {/* for title display */}
            {this.state.userInfo.hasOwnProperty("title") ? (
              <HalfWidthLayout title={"Title"} background>
                <div className={styles.container}>
                  {this.state.userInfo.title !== null ? (
                    this.state.userInfo.title
                  ) : (
                    <span className={styles.noText}>No Title.</span>
                  )}
                </div>
              </HalfWidthLayout>
            ) : null}
            {/* for intro display */}
            {this.state.userInfo.hasOwnProperty("introduction") ? (
              <HalfWidthLayout title={"Intro"} description={"Intro"} background>
                <div className={styles.container}>
                  {this.state.userInfo.title !== null ? (
                    this.state.userInfo.introduction
                  ) : (
                    <span className={styles.noText}>No Introduction.</span>
                  )}
                </div>
              </HalfWidthLayout>
            ) : null}
            <HalfWidthLayout title={"Name"} description={"Intro"} background >
              <div className={styles.container}>{this.state.userInfo.name}</div>
            </HalfWidthLayout>
            <HalfWidthLayout title={"Change Password"}>
              <div className={styles.BtnContainer + " " + styles.container}>
                <Button type={"CHANGE_PASSWORD"} />
              </div>
            </HalfWidthLayout>
          </React.Fragment>
        )}
      </div>
    );
  }
};
const mapStateToProps = (state) => ({
  userRole: state.Authentication.role.toLowerCase(),
  userID: state.Authentication.uuid,
});
const ProfileContainer = connect(mapStateToProps, null)(Profile);
export default ProfileContainer;
