import React from "react";
import styles from "./NavSideBar.module.scss";

const NavSideBar = ({title}) => {
  return (

    <div className={styles.wrapper}>
      <h3 className={styles.title}>{title}</h3>
    </div>
  );
}

export default NavSideBar;
