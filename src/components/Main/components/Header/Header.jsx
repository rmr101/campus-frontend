import React from "react";
import styles from "./Header.module.scss";

const Header = ({
  title,
  onClick
  }) => {
    console.log(styles);
  return (
    <div className={styles.wrapper} onClick={onClick}>
      <h2 className={styles.title}>
        {title === "Dashboard" ? (
          title
        ) : (
          <span className={styles.navigator}>&#160;{title} </span>
        )}
        &#160;
      </h2>
    </div>
  );
}

export default Header;
