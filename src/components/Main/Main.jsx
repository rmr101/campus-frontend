import React from "react";
import styles from "./Main.module.scss";
import Header from "./components/Header";
import Content from "./components/Content";
import { connect } from "react-redux";

const Main =({
  history,
})=> {

  const renderHeader = () => {
    let renderArray = history.map((obj) => (
      <Header
        headingID={obj.headingID}
        key={"header_id" + Math.random()}
        title={obj.title}
      />
    ));
    return renderArray;
  }

  const renderComponent=()=> {
    const lastHistory = history[history.length - 1];
    const contentArray = lastHistory.content;
    //update to the newest component

    let renderArray = contentArray.map((obj) => (
      <Content key={"content_id" + Math.random()} 
      {...obj} />
    ));
    return renderArray;
  }
    return (
      <div className={styles.wrapper}>
        <div className={styles.header}>
          {renderHeader()}
          </div>
        <div className={styles.content}>
          {renderComponent()}
          </div>
      </div>
    );
  }



const mapStateToProps = state => ({
  history:state.headerHistory,
});

const MainContainer =connect(mapStateToProps,null)(Main);
export default MainContainer;
