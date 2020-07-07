import React from "react";
import styles from "./NothingDisplay.module.scss";

export default ({name}) =>
{
  console.log("I got run");
  return <div className={styles.wrapper}>You have no {name}.</div>;
}