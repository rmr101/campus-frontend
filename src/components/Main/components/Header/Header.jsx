import React from "react";
import styles from "./Header.module.scss";
import Button from "../../../Button";

const Header = ({
  title,
  }) => {
    console.log(styles);
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>{title}</h2>
        <Button type={"LOGOUT"} />
    </div>
  );
}


export default Header;
