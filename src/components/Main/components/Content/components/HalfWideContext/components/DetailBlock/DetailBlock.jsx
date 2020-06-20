import React from "react";
import styles from "./DetailBlock.module.scss";



const DetailBlock = ({ title, description }) => {
  return (
    <div className={styles.wrapper}>
      <h3>{title}</h3>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default DetailBlock;
