import React from 'react';
import styles from "../../Button.module.scss";

const ViewReportBtn = ({ onClick }) => (
  <button
    data-testid="btn"
    onClick={onClick}
    className={`${styles.btn} + ${styles.themeBtn}`}
  >
    View
  </button>
);  

export default ViewReportBtn;