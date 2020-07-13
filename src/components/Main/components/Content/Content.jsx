import React from "react";
import styles from "./Content.module.scss";
import SubjectCourse from "./components/SubjectCourse";
import TeacherCourseAssignment from "./components/TeacherCourseAssignment";
import UserManagement from "./components/UserManagement";
import Profile from "./components/Profile";
import CourseDetail from "./components/CourseDetail";
import Dashboard from "./components/Dashboard";
import Assignment from './components/Assignment';
import StudentAssignment from './components/StudentAssignment';
import TeacherMarkingSystem from './components/TeacherMarkingSystem';
import MarkingAssignment from "./components/MarkingAssignment";

const Content = ({pageID}) => {

  const renderComponent = ()=> {
    switch (pageID) {
      case "Dashboard":
        return <Dashboard />;
      case "SubjectCourse":
        return <SubjectCourse />;
      case "Users":
        return <UserManagement />;
      case "TeacherCourseAssignment":
        return <TeacherCourseAssignment />;
      case "TeacherMarkingSystem":
        return <TeacherMarkingSystem />;
      case "MarkingAssignment":
        return <MarkingAssignment/>;
      case "StudentAssignment":
        return <StudentAssignment />;
      case "UserInfo":
        return <Profile />;
      case "Assignment":
        return <Assignment />;
      default:
        return <CourseDetail />;
    }
  };
  return <div className={styles.wrapper}>{renderComponent()}</div>;
};
export default Content;
