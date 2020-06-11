import React from "react";
import styles from "./Content.module.scss";

const Content = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.titleBlock}>
        {/*目前我把他写死了，应该属于一个component */}
        <h3>Publish</h3>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae, magnam?</p>
      </div>
      <div className={styles.functionBlock}>
        {/*目前我把他写死了，应该属于一个component */}
      </div>
    </div>
  );
}

export default Content;
