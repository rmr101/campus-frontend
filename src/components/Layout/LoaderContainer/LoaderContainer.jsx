import React from 'react';
import styles from './LoaderContainer.module.scss';

export default ({ children, background }) => (
  <div className={`${styles.container} ${background?styles.background:null}`}>{children}</div>
);