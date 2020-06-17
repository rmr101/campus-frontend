import React from "react";
import styles from "./NavHeader.module.scss";

const NavHeader = ({
  title,
  onClick
  }) => {
  return (
    <a className={styles.wrapper} href="#" onClick = {onClick}>
      <h2 className={styles.title}>{title}</h2>
    </a>
  );
}

export default NavHeader;