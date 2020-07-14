
import React from 'react';
import styles from "./CanvasTitleWrap.module.scss";

export default ({ children, title }) => (
  <React.Fragment>
    <div className={styles.title}>{title}</div>
    {children}
  </React.Fragment>
);