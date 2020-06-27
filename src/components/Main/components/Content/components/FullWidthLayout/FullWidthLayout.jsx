import React from "react";
import styles from "./FullWidthLayout.module.scss";
import CourseDetail from './components/CourseDetail';

const FullWidthLayout = () => (
  <div className={styles.wrapper}>
    <CourseDetail />
  </div>
);

export default FullWidthLayout;
