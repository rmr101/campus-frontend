import React from 'react';
import styles from './RadioLayout.module.scss';

export const RadioTitle = ({ children }) => (
  <div>
    {children}
  </div>
);
export const RadioItem = ({ children }) => (
         <div className={styles.radio}>
           {children}
         </div>
       );


export const RadioLayout = ({ children }) => (
         <div className={styles.wrapper}>{children}</div>
       );