import React from "react";
import styles from "./Main.module.scss";
import Header from "./components/Header";
import Content from "./components/Content";
import { connect } from "react-redux";

const Main = ({pageID,title,role}) => {
  const roleBackground = () =>{
    switch(role){
      case "TEACHER":
        return styles.teacherBackground;
      case "STUDENT":
        return styles.studentBackground;
      case "ADMIN":
        return styles.adminBackground;
      default:
        return styles.adminBackground;
    }
  }

  const renderComponent = () => {
    return (
      <div className={`${styles.wrapper} ${roleBackground()}`}>
        <div data-testid="header" className={styles.header}>
          <Header title={title} />
        </div>
        <div
          data-testid="content"
          className={`${styles.content}`}
        >
          <Content pageID={pageID} />
        </div>
      </div>
    );
  }
  return renderComponent();
}

const mapStateToProps = (state) => ({
  pageID: state.headerHistory.content.pageID,
  title: state.headerHistory.title,
  role: state.Authentication.role,
});
const MainContainer = connect(mapStateToProps)(Main);
export default MainContainer;

