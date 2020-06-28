import React from 'react';
import styles from './Canvas.module.scss';
import CourseMarket from "./components/CourseMarket";
import Course from "./components/Course";


const Canvas= ({current,onClick}) => {

  // //目前先用student
  // switch (role) {
  //   case "student":
  //     return renderRoleSelection(renderMap.StudentRenderMap[current]);
  //   case "teacher":
  //     return renderRoleSelection(renderMap.TeacherRenderMap[current]);
  //   case "admin":
  //     return renderRoleSelection(renderMap.AdminRenderMap[current]);
  //     default:
  //       return null}
const renderCanvas = (current) =>{
  switch (current) {
    // case "Dashboard" :
    //   return <DashboardCanvas/>
    // case "TeachingCourse" :
    //   return <TeachingCourse/>
    // case "MarkSystem" :
    //   return <MarkSystem/>
    case "CourseMarket":
      return <CourseMarket onClick={onClick} />;
    case "Courses":
      return <Course onClick={onClick}/>;
    // case "Help" :
    //   return <Help/>
    // case "Setting" :
    //   return <Setting/>
    // case "Payment" :
    //   return <Payment/>
  }
}
  return (
    <div className={styles.wrapper}>
      {renderCanvas(current)}
    </div>
  );
}
export default Canvas;
