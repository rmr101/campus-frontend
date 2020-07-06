import React from "react";
import NavHeader from "./components/NavHeader";
import NavSidebar from "./components/NavSideBar";
import styles from "./Nav.module.scss";
import {connect} from "react-redux";
import NavAvatar from './components/NavAvatar';
import getUserInfo from "../../apis/getUserInfo";

const Loading = () => (
  <div className={styles.loading}>
    <div>Loading...</div>
  </div>
);
class UserName extends React.Component{
  constructor(props){
    super(props);
    this.state={
      loading:true,
      name:null,
    }
  }
  async getUserName(){
    console.log(this.props.userRole);
    const resp = await getUserInfo(this.props.userRole, this.props.userID);
    const name = resp ? resp.name : "something wrong";
    this.setState({
      loading:false,
      name:name,
    })
    console.log(name);
  }
  componentDidMount(){
    this.getUserName();
  }
  render(){ 
    return (
      <div className={styles.nameWrapper}>
        {this.state.loading ? (
          <Loading />
        ) : (
          <div className={styles.name}>
            {this.state.name ? this.state.name : capitalize(this.props.userRole)}
          </div>
        )}
      </div>
    );
  }
}


const NavFooter = ({ userRole }) => (
  <h3> {capitalize(userRole) + " Version"}</h3>
);

const Nav = ({ userRole, userID }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <NavHeader />
      </div>
      <NavAvatar />
      <UserName userRole={userRole} userID={userID} />
      <div className={styles.sideBar}>
        <NavSidebar />
      </div>
      <div className={styles.footer}>
        <NavFooter userRole={userRole} />
      </div>
    </div>
  );
};
const capitalize=(name)=>(name[0].toUpperCase() + name.slice(1,name.length))


const mapStateToProps = (state) => ({
  userRole: state.Authentication.role.toLowerCase(),
  userID: state.Authentication.uuid,
});
const NavContainer = connect(mapStateToProps ,null)(Nav);
export default NavContainer;
