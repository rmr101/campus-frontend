import React from "react";
import styles from "./Main.module.scss";
import Header from "./components/Header";
import Content from "./components/Content";
import { connect } from "react-redux";

const Main = ({pageID,title}) => {
  const renderComponent = () => {
    return (<div className={styles.wrapper}>
      <div className={styles.header}>
        <Header title={title} />
      </div>
      <div className={styles.content}>
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
});
const MainContainer = connect(mapStateToProps)(Main);
export default MainContainer;

