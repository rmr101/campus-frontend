import React from "react";
import styles from "./NavHeader.module.scss";


const NavHeader = ({
  title,
  }) => {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>{title}</h2>
    </div>
  );
}

export default NavHeader;