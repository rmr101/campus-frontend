import React from 'react';
import styles from './Loading.module.scss';

export default () => (
  <div data-testid="loading" className={styles.loading}>
    <h4>Loading...</h4>
  </div>
);