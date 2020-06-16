import React from "react";
import styles from "./Content.module.scss";
import Context from './components/Context';

const Content = (props) => {
  return (
    //以后说不定会塞东西进去
    <div className={styles.wrapper}>
      <Context {...props} />
    </div>
  );
}

export default Content;
