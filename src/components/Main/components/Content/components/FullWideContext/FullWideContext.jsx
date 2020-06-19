import React from "react";
import styles from "./FullWideContext.module.scss";
import ArticleDetail from './components/ArticleDetail';

const FullWideContext = () => (
  <div className={styles.wrapper}>
    <ArticleDetail />
  </div>
);

export default FullWideContext;
