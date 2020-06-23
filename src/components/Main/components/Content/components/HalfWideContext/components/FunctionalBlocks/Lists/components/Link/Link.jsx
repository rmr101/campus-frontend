import React from "react";
import styles from "./Link.module.scss";

const Link = ({ onClick, name, content}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.linkContainer}>
        <div
          className={styles.student}
          onClick={(e) => onClick(e, name, content)}
        >
          {name}
        </div>
      </div>
    </div>
  );
};

export default Link;
