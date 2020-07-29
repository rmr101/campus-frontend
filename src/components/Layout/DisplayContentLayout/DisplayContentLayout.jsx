import React from 'react';
import styles from './DisplayContentLayout.module.scss';


export const DisplayTitle = ({ children }) => (
         <div className={styles.title}>{children}</div>
       );



export const DisplaySubHeading = ({ children }) => (
         <div className={styles.subHeading}>{children}</div>
       );



export const DisplayContent = ({ children }) => (
         <div className={styles.content}>{children}</div>
       );


export const DisplayLayout = ({children}) => (
        <div className={styles.wrapper}>{children}</div>);  


