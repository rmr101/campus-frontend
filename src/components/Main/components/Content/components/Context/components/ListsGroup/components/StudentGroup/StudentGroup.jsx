import React from "react";
import styles from "./StudentGroup.module.scss";

const studentGroup = [
  "Student lists by Name",
  "Student lists by ID",
  "Student lists by Courses",
];

let templateOne = {
  title: studentGroup[0],
  content: [{ type: "Lists", title: "Student ID", listType: "student" }],
};
let templateTwo = {
  title: studentGroup[1],
  content: [{ type: "Lists", title: "Student ID", listType: "student" }],
};
let templateThree = {
  title: studentGroup[2],
  content: [{ type: "Lists", title: "Student ID", listType: "student" }],
};

const StudentGroup = ({onClick}) => {
  return (
    <div className={styles.wrapper}>
      <a
        className={styles.student}
        href="#"
        onClick={(e) => onClick(e, { ...templateOne })}
      >
        {studentGroup[0]}
      </a>
      <a
        className={styles.student}
        href="#"
        onClick={(e) => onClick(e, { ...templateTwo })}
      >
        {studentGroup[1]}
      </a>
      <a
        className={styles.student}
        href="#"
        onClick={(e) => onClick(e, { ...templateThree })}
      >
        {studentGroup[2]}
      </a>
    </div>
  );
};

export default StudentGroup;
