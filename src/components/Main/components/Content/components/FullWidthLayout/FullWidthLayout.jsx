import React from "react";
import styles from "./FullWidthLayout.module.scss";
import CourseDetail from './components/CourseDetail';
import SubjectCourse from './../SubjectCourse';


//TODO: To be refactored.
const FullWidthLayout = (props) => {
  const renderBlock = (blockName) => {
    switch (blockName) {
      case "SubjectCourse":
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
