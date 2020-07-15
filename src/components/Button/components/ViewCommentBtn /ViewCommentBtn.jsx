import React from 'react';
import styles from "./ViewCommentBtn.module.scss";

const ViewCommentBtn = ({ onClick }) => (
  <button onClick={onClick} className={`${styles.btn} + ${styles.viewBtn}`}>
    View
  </button>
);  

export default ViewCommentBtn;