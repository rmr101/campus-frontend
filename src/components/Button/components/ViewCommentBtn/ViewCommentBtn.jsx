import React from 'react';
import styles from "../../Button.module.scss";

const ViewCommentBtn = ({ onClick }) => (
  <button onClick={onClick} className={`${styles.btn} + ${styles.themeBtn}`}>
    View
  </button>
);  

export default ViewCommentBtn;