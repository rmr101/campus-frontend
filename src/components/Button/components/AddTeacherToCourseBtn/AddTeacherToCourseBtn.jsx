import React from 'react';
import styles from "../../Button.module.scss";

export default ({ onClick }) => (
  <button
    data-testid="btn"
    onClick={(e) => {
      e.preventDefault();
      onClick();
    }}
    className={`${styles.btn} + ${styles.themeBtn}`}
  >
    Add Teacher
  </button>
);  
