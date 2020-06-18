import React from "react";
import styles from "./StudentLists.module.scss";

const studentLists = ["Student ID 1001", "Student ID 1002", "Student ID 1003"];

let templateOne = {
  title: studentLists[0],
  content: [{ type: "Context", title: "Student 1001" }],
};
let templateTwo = {
  title: studentLists[1],
  content: [{ type: "Context", title: "Student 1002" }],
};
let templateThree = {
  title: studentLists[2],
  content: [{ type: "Context", title: "Student 1003" }],
};


const StudentLists = ({onClick}) => {
  
  return (
    <div className={styles.wrapper}>
      <a
        className={styles.student}
        href="#"
        onClick={(e) => onClick(e, { ...templateOne })}
      >
        {studentLists[0]}
      </a>
      <a
        className={styles.student}
        href="#"
        onClick={(e) => onClick(e, { ...templateTwo })}
      >
        {studentLists[1]}
      </a>
      <a
        className={styles.student}
        href="#"
        onClick={(e) => onClick(e, { ...templateThree })}
      >
        {studentLists[2]}
      </a>
    </div>
  );
};

export default StudentLists;
