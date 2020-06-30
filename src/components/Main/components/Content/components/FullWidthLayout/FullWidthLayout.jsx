import React from "react";
import styles from "./FullWidthLayout.module.scss";
import CourseDetail from './components/CourseDetail';
import SubjectCourse from './../SubjectCourse';

const FullWidthLayout = (props) => {
  const renderBlock = (blockName) => {
    switch (blockName) {
      case "SubjectCourse":
        console.log(props);
        return <SubjectCourse {...props} />;
      default:
        return <CourseDetail />;
    }
  };
  return (
    <div className={styles.wrapper}>
     {renderBlock(props.type)}
    </div>
  );
}

export default FullWidthLayout;
