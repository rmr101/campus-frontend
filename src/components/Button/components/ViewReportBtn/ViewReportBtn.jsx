import React from 'react';
import styles from "../../Button.module.scss";

const ViewReportBtn = ({ onClick }) => (
  <button onClick={onClick} className={`${styles.btn} + ${styles.themeBtn}`}>
    View
  </button>
);  

export default ViewReportBtn;