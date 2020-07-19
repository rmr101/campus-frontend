import React from 'react';
import styles from "../../Button.module.scss";

export default ({ onClick }) => (
  <button data-testid="btn" onClick={onClick} className={`${styles.btn} + ${styles.themeBtn}`}>
    Enrol
  </button>
);  
