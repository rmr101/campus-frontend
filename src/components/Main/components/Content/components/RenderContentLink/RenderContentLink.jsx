import React from "react";
import styles from "./RenderContentLink.module.scss";

//TODO: To be merged with nav bar RenderLink after refactored.
const RenderContentLink = ({ onClick, RenderArray, CurrentItem }) => {
  return RenderArray.map((obj) => (
    <div className={styles.container}>
      <div
        onClick={(e) => onClick(e, obj.name, obj.id, CurrentItem)}
        className={`${styles.links} ${styles.heading}`}
        key={"name_" + Math.random()}
      >
        {obj.name}
      </div>
      <div className={styles.heading} key={"id_" + Math.random()}>
        {obj.id}
      </div>
      <div className={styles.heading} key={"intro_" + Math.random()}>
        {obj.introduction}
      </div>
    </div>
  ));
};

export default RenderContentLink;
