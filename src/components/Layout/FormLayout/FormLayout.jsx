import React from 'react';
import styles from './FormLayout.module.scss';

export const FormTitle = ({ children }) => (
  <div className={styles.title}>
    {children}
  </div>
);
export const FormItem = ({ children }) => (
         <div className={styles.item}>
           {children}
         </div>
       );

export const HorizontalRow = ({ children }) => (
         <div className={styles.horizontalRow}>
           {children}
         </div>
       );
export const DummyButtonBlock = ({children}) =>(
  <div className={styles.inactiveBlock}>{children}</div>
)
export const Button = ({ children, className, ...props }) => (
         <button
           className={styles.btn + " " + styles[className]}
           {...props}
           data-testid="btn"
         >
           {children}
         </button>
       );
export const FormLayout = ({ children, className, ...props }) => (
         <form
           className={styles[className] + " " + styles.form}
           {...props}
           data-testid="form"
         >
           {children}
         </form>
       );

export const SmallText = ({ children, className }) => (
         <small className={styles[className] }>{children}</small>
       )

