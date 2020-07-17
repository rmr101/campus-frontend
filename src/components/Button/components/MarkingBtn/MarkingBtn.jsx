import React from 'react';
import styles from "../../Button.module.scss";

const MarkingBtn = ({onClick }) => (
  <button onClick={onClick} className={`${styles.btn} + ${styles.themeBtn}`}>
    Mark
  </button>
);  

export default MarkingBtn;