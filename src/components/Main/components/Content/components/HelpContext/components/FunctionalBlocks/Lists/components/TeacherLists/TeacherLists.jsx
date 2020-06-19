import React from "react";
import styles from "./TeacherLists.module.scss";

const teacherLists = ["Teacher ID 1001", "Teacher ID 1002", "Teacher ID 1003"];

let templateOne = {
  title: teacherLists[0],
  content: [{ type: "Context", title: "Teacher 1001" }],
};
let templateTwo = {
  title: teacherLists[1],
  content: [{ type: "Context", title: "Teacher 1002" }],
};
let templateThree = {
  title: teacherLists[2],
  content: [{ type: "Context", title: "Teacher 1003" }],
};


const TeacherLists = ({onClick}) => {
  
  return (
    <div className={styles.wrapper}>
      <a
        className={styles.teacher}
        onClick={(e) => onClick(e, { ...templateOne })}
      >
        {teacherLists[0]}
      </a>
      <a
        className={styles.teacher}
        onClick={(e) => onClick(e, { ...templateTwo })}
      >
        {teacherLists[1]}
      </a>
      <a
        className={styles.teacher}
        onClick={(e) => onClick(e, { ...templateThree })}
      >
        {teacherLists[2]}
      </a>
    </div>
  );
};

export default TeacherLists;
