import React from "react";
import styles from "../../Button.module.scss";

export default ({ onClick, name }) => (
  <button
    data-testid="btn"
    onClick={onClick}
    className={`${styles.btn} + ${styles.themeBtn}`}
  >
    {name ? name: "Add"} Teacher
  </button>
);
