import React from "react";
import styles from "./RenderContentLink.module.scss";

//TODO: To be merged with nav bar RenderLink after refactored.
// Refactor to be less depended on the RenderArray.
const RenderContentLink = ({ onClick, RenderArray, CurrentItem }) => {
  return RenderArray.map((obj) => (
    <div key={"name_" + Math.random()} className={styles.container}>
      <div
        onClick={(e) => onClick(e, obj.name, obj.id, CurrentItem)}
        className={`${styles.links} ${styles.heading}`}
      >
        {obj.name}
      </div>
      <div className={styles.heading}>
        {obj.id}
      </div>
      <div className={styles.heading}>
        {obj.introduction}
      </div>
    </div>
  ));
};

export default RenderContentLink;
