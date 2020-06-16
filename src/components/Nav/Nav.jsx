import React from "react";
import styles from "./Nav.module.scss";
import Siderbar from "./components/SiderBar"

const Nav = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.sideBar}>
        < Siderbar/>
      </div>
    </div>
  );
}

export default Nav;
