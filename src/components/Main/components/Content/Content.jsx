import React from "react";
import styles from "./Content.module.scss";
import SubjectCourse from './components/SubjectCourse';
import StudentList from "./components/StudentList";
import TeacherCourseAssignment from "./components/TeacherCourseAssignment";
import Profile from "./components/Profile";
import CourseDetail from "./components/CourseDetail";
import Dashboard from "./components/Dashboard";
import Assignment from './components/Assignment';
import StudentAssignment from './components/StudentAssignment';

const Content = ({pageID}) => {

  const renderComponent = ()=> {
    switch (pageID) {
      case "Dashboard":
        return <Dashboard />;
      case "SubjectCourse":
        return <SubjectCourse />;
      case "StudentList":
        return <StudentList />;
      case "TeacherCourseAssignment":
        return <TeacherCourseAssignment />;
      case "StudentAssignment":
        return <StudentAssignment />;
      case "UserInfo":
        return <Profile />;
      case "Assignment":
        return <Assignment />;
      default:
        return <CourseDetail />;
    }
  }
  return <div className={styles.wrapper}>{renderComponent()}</div>;
}
export default Content;
