import React from "react";
import styles from "./ViewComment.module.scss";
// Post object would need a name

export default ({ comment }) => (
  <div className={styles.wrapper}>
    <div className={styles.title}>Comment</div>
    <p className={styles.text}>{comment}</p>
  </div>
);