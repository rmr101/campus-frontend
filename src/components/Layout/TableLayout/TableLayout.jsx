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
export const Page = ({ currentPage, handlePageChange, totalPage }) => {
  return (
    <div className={styles.pagination}>
      {currentPage === 1 ? (
        <div></div>
      ) : (
        <div
          data-testid="prev"
          className={styles.clickable}
          onClick={() => handlePageChange(currentPage - 1)}
        >
          Prev
        </div>
      )}
      <div className={styles.number}>- {currentPage} -</div>
      {currentPage === totalPage ? (
        <div></div>
      ) : (
        <div
          data-testid="next"
          className={styles.clickable}
          onClick={() => handlePageChange(currentPage + 1)}
        >
          Next
        </div>
      )}
      <div className={styles.total} data-testid="totalPage">
        Total Page of {totalPage}
      </div>
    </div>
  );
};