import React from "react";
import styles from "./Nav.module.scss";
import Sidebar from "./components/SideBar";


const Nav = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.sideBar}>
        < Sidebar/>       
      </div>
  
    </div>
  );
}

export default Nav;
