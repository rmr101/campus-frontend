import React from "react";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Information</h2>
    </div>
  );
}

export default Header;
