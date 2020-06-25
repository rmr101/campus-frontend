import React from "react";
import styles from "./HalfContext.module.scss";



const HalfContext = (props)=> {
    return (
      <div className={styles.wrapper}>
        <p>{props.context}</p>
      </div>
    );
  };

export default HalfContext;
