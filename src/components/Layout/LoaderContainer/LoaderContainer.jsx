import React from 'react';
import styles from './LoaderContainer.module.scss';

export default ({ children }) => (
  <div className={styles.container}>{children}</div>
);