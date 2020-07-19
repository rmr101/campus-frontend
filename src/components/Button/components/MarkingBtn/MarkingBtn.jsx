import React from 'react';
import styles from "../../Button.module.scss";

const MarkingBtn = ({ onClick }) => (
  <button
    data-testid="btn"
    onClick={onClick}
    className={`${styles.btn} + ${styles.themeBtn}`}
  >
    Mark
  </button>
);  

export default MarkingBtn;