import React from 'react';
import styles from "./EnrolBtn.module.scss";

export default ({ onClick }) => (
  <button onClick={onClick} className={`${styles.btn} + ${styles.enrolBtn}`}>
    Enrol
  </button>
);  
