import React from 'react';
import styles from './Profile.module.scss';
import getUserInfo from "../../../../../../apis/getUserInfo";
import Loading from '../Loading';
import {connect} from 'react-redux';
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
      const userInfo = resp ? resp : [];
      this.setState({
        userInfo: userInfo,
        loading: false,
      });
      console.log(userInfo);
    } else if (this.props.userRole === "teacher") {
      const userInfo = resp ? resp: [];
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
            <div className={styles.container}>hello</div>
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
