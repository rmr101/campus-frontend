import React from 'react';
import styles from './Canvas.module.scss';
import CourseMarket from "./components/CourseMarket";
import TeachingCourse from './components/TeachingCourse';
import MarkingAssignment from './components/MarkingAssignment/MarkingAssignment';
import StudentEnrollment from './components/StudentEnrollment';
const Canvas= ({current}) => {
const renderCanvas = (current) =>{
  switch (current) {
    case "TeachingCourse":
      return <TeachingCourse />;
    case "CourseMarket":
      return <CourseMarket />;
    case "Enrollment":
      return <StudentEnrollment />;
    case "MarkSystem":
      return <MarkingAssignment />;
    // case "Setting" :
    //   return <Setting/>
    // case "Payment" :
    //   return <Payment/>
    default:
      return null;
  }
}
  return (
    <div className={styles.wrapper}>
      {renderCanvas(current)}
    </div>
  );
}

export default Canvas;
