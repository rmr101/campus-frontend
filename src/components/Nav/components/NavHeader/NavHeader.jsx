import React from "react";
import styles from "./NavHeader.module.scss";

const NavHeader = ({
  title,
  onClick
  }) => {
  return (
    <div className={styles.wrapper} href="#" onClick = {onClick}>
      <h2 className={styles.title}>{title}</h2>
    </div>
  );
}

export default NavHeader;