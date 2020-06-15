import React from "react";
import styles from "./StudentList.module.scss";



const studentLists = ["Student ID : 001 ","Student ID : 002 ", "Student ID : 002 "];

const StudentList = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <h3>Student Lists</h3>
      </div>
      <a className={styles.student}>{studentLists[0]}</a>
      <a className={styles.student}>{studentLists[1]}</a>
      <a className={styles.student}>{studentLists[2]}</a>
    </div>
  );
}

export default StudentList;
