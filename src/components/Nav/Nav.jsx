import React from "react";
import NavHeader from "./components/NavHeader";
import NavSidebar from "./components/NavSideBar";
import styles from "./Nav.module.scss";
import {connect} from "react-redux";
import NavAvatar from './components/NavAvatar';

const NavFooter = ({ userRole }) => <h3> {userRole + " version"}</h3>;

const Nav = ({ userRole }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <NavHeader />
      </div>
        <NavAvatar />
      <div className={styles.sideBar}>
        <NavSidebar />
      </div>
      <div className={styles.footer}>
        <NavFooter userRole={userRole} />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  userRole: state.Authentication.role.toLowerCase(),
});
const NavContainer = connect(mapStateToProps ,null)(Nav);
export default NavContainer;
