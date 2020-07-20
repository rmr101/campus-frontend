import React from "react";
import styles from "./NavHeader.module.scss";
import NavLogo from "./../NavLogo";

const NavHeader = () => {
  return (
    <div className={styles.wrapper}>
      <NavLogo />
    </div>
  );
}

export default NavHeader;