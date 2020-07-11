import React from 'react';
import styles from "./MarkingBtn.module.scss";

const MarkingBtn = ({onClick }) => (
  <button onClick={onClick} className={`${styles.btn} + ${styles.markBtn}`}>
    Mark
  </button>
);  

export default MarkingBtn;