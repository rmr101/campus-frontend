import React from "react";
import styles from "./Main.module.scss";
import Header from "./components/Header";
import Content from "./components/Content";
import { connect } from "react-redux";

const Main =({
  content,
})=> {
  const renderComponent=()=> {
    //update to the newest component
    let renderArray = content.map((obj) => (
      <Content key={"content_id" + Math.random()} 
      {...obj} />
    ));
    return renderArray;
  }
    return (
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <Header/>
          </div>
        <div className={styles.content}>
          {renderComponent()}
          </div>
      </div>
    );
  }



const mapStateToProps = state => ({
  content:state.headerHistory.content,
});

const MainContainer =connect(mapStateToProps,null)(Main);
export default MainContainer;
