import React from 'react';
import styles from './Loader.module.scss';

export default ({ color }) => (
  <div className={`${styles.circle} ${styles[color]}`}>
    <div className={styles.circleDot}></div>
    <div className={styles.circleDot}></div>
    <div className={styles.circleDot}></div>
    <div className={styles.circleDot}></div>
    <div className={styles.circleDot}></div>
    <div className={styles.circleDot}></div>
    <div className={styles.circleDot}></div>
    <div className={styles.circleDot}></div>
    <div className={styles.circleDot}></div>
    <div className={styles.circleDot}></div>
    <div className={styles.circleDot}></div>
    <div className={styles.circleDot}></div>
  </div>
);