import React from "react";
import styles from "./Link.module.scss";

const Link = ({ onClick, name, content}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.linkContainer}>
        <a
          className={styles.student}
          onClick={(e) => onClick(e, name, content)}
        >
          {name}
        </a>
      </div>
    </div>
  );
};

export default Link;
