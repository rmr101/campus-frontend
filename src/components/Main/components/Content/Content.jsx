import React from "react";
import styles from "./Content.module.scss";
import SubjectCourse from './components/SubjectCourse';
import StudentList from "./components/StudentList";
import TeacherCourseAssignment from "./components/TeacherCourseAssignment";
import Profile from "./components/Profile";
import CourseDetail from "./components/CourseDetail";
import {connect} from "react-redux"
import Dashboard from "./components/Dashboard";


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
      case "UserInfo":
        return <Profile />;
      default:
        return <CourseDetail />;
    }
  }
  
  return <div className={styles.wrapper}>{renderComponent()}</div>;
}

const mapStateToProps = (state) => ({
  id: state.headerHistory.content.id,
});
const ContentContainer = connect(mapStateToProps)(Content);
export default ContentContainer;
