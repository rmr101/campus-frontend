import React from "react";
import styles from "./Main.module.scss";
import Header from "./components/Header";
import Content from "./components/Content";

const Main = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <Header/>
      </div>
      <div className={styles.content}>
        <Content/>
      </div>
    </div>
  );
}

export default Main;
