import React from 'react';
import styles from './TableLayout.module.scss';

export const IndexItem = ({ children }) => (
         <div className={styles.indexItem}>{children}</div>
       );

export const TableItem = ({ children, ...props }) => (
         <div data-testid="table-item" className={styles.item} {...props}>
           {children}
         </div>
       );

export const Row = ({ children, disable, ...props }) => (
         <div
           data-testid="row"
           className={`${styles.row} ${disable ? null : styles.links}`}
           {...props}
         >
           {children}
         </div>
       );
export const HeaderRow = ({ children }) => <div className={styles.headerRow}>{children}</div>;
export const TableLayout = ({children}) => (<div className={styles.table}>{children}</div>);