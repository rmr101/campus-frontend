import React from 'react';
import styles from './LoaderContainer.module.scss';


const LoaderContainer = ({ children, background }) => (
  <div className={`${styles.container} ${background?styles.background:null}`}>{children}</div>
);
export default LoaderContainer;

