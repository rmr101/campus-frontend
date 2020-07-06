
import React from 'react';
import styles from "./CanvasTitleWrap.module.scss";

export default ({ children,title }) => (
  <div className={styles.wrapper}>
    <div className={styles.title}>
      {title}
    </div>
    {children}
  </div>
);