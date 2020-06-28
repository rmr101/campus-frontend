import React from "react";
import styles from "./RenderLink.module.scss";

export default ({RenderArray,onClick}) =>
  RenderArray.map((obj) => (
    <div
      onClick={(e) => onClick(e, obj.name, obj.id, "DisplayFull")}
      className={styles.links}
      key={"id" + Math.random()}
    >
      {obj.name}
    </div>
  ));
