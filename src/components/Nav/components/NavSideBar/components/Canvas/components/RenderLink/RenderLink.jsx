import React from "react";
import styles from "./RenderLink.module.scss";

export default ({ RenderArray, onClick, CurrentNavItem }) =>
  RenderArray.map((obj) => (
    <div
      onClick={(e) => onClick(e, obj.name, obj.id, CurrentNavItem)}
      className={styles.links}
      key={"id" + Math.random()}
    >
      {obj.name}
    </div>
  ));
