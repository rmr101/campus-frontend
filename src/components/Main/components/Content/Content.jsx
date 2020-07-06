import React from "react";
import styles from "./Content.module.scss";
import SubjectCourse from './components/SubjectCourse';
import StudentList from "./components/StudentList";
import TeacherCourseAssignment from "./components/TeacherCourseAssignment";
import Profile from "./components/Profile";
import CourseDetail from "./components/CourseDetail";


const Content = ({pageID}) => {
  const renderComponent=(pageID)=>{
    switch (pageID) {
      case "SubjectCourse":
        return <SubjectCourse />;
      case "StudentList":
        return <StudentList />;
      case "TeacherCourseAssignment":
        return <TeacherCourseAssignment />;
      case "Profile":
        return <Profile />;
      default:
        return <CourseDetail />;
    }
  }
  return (
    <div className={styles.wrapper}>
      {renderComponent(pageID)}
    </div>
  );
}

export default Content;
