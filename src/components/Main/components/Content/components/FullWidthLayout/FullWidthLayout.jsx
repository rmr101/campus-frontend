import React from "react";
import styles from "./FullWidthLayout.module.scss";
import CourseDetail from './components/CourseDetail';
import StudentDetail from './components/StudentDetail';

const FullWidthLayout = (props) => {
  const fullWidthdetails = (detail) => {
    switch (detail) {
      case "course":
        return <CourseDetail {...props} />;
      case "student":
        return <StudentDetail {...props} />;
      default:
        return null;
    }
  };
  return (
    <div className={styles.wrapper}>
        {fullWidthdetails(props.type)}
    </div>
  );
}


export default FullWidthLayout;
