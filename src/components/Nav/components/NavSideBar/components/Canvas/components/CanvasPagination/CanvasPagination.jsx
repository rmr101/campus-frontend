import React from 'react';
import styles from "./CanvasPagination.module.scss";

export default ({ currentPage, handlePageChange, totalPage }) => {
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
          &lt;
        </div>
      )}
      <div className={styles.number}>{currentPage} / {totalPage}</div>
      {currentPage === totalPage ? (
        <div></div>
      ) : (
        <div
          data-testid="next"
          className={styles.clickable}
          onClick={() => handlePageChange(currentPage + 1)}
        >
          &gt;
        </div>
      )}
    </div>
  );
};
