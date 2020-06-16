import React from "react";
import styles from "./Header.module.scss";

const Header = ({
  title,
  onClick
  }) => {
    console.log(styles);
  return (
    <a className={styles.wrapper} href="#" onClick = {onClick}>
      <h2 className={styles.title}>{title}</h2>
    </a>
  );
}

export default Header;
