import React from "react";
import styles from "./FullWidthLayout.module.scss";
import CourseDetail from './components/CourseDetail';
import SubjectCourse from './../SubjectCourse';
import UserManagement from './../UserManagement';


//TODO: To be refactored.
const FullWidthLayout = (props) => {
  const renderBlock = (blockName) => {
    switch (blockName) {
      case "SubjectCourse":
        return <SubjectCourse {...props} />;
      case "StudentList":
        return <UserManagement />;
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
