import React from 'react';
import styles from './Loader.module.scss';
import PropTypes from "prop-types";


const Loader = ({ color }) => (
  <div data-testid="loader" className={`${styles.circle} ${styles[color]}`}>
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
Loader.propTypes = {
  color: PropTypes.string,
};
export default Loader;
