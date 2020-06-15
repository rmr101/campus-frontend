import React from "react";
import styles from "./Content.module.scss";
import Context from './components/Context';

const Content = () => {
  return (
    <div className={styles.wrapper}>
      <Context/>
    </div>
  );
}

export default Content;
