import React from "react";
import styles from "./Header.module.scss";

const TeachersList = ({
  title,
  }) => {
  return (
    <a className={styles.wrapper} href="#" >
      <h2 className={styles.title}>{title}</h2>
    </a>
  );
}

export default TeachersList;
