import React from "react";
import styles from "./Detail.module.scss";




const Detail = ({title,type}) => {
  console.log(type);
  return (
    <div className={styles.wrapper}>
      <h3>{title}</h3>
      {//之后要每一个detail 一个component
      type === "Context" ?
      <p>
        You can Keep playing with this loops.
      </p> : null }
    </div>
  );
}

export default Detail;
