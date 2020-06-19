import React from "react";
import styles from "./StudentGroup.module.scss";

const studentGroup = [
  "Student lists by Name",
  "Student lists by ID",
  "Student lists by Courses",
  "ABC",
];

let templateOne = {
  title: studentGroup[0],
  content: [
    { type: "Lists", range: "Half", title: "Student ID", listType: "student" },
  ],
};
let templateTwo = {
  title: studentGroup[1],
  content: [{ type: "Lists",range:"Half", title: "Student ID", listType: "student" }],
};
let templateThree = {
  title: studentGroup[2],
  content: [
    { type: "Lists", range: "Half", title: "Student ID", listType: "student" },
  ],
};
let templateFour = {
  title: studentGroup[3],
  content: [
    { type: "Lists", range: "Half", title: "Student ID", listType: "student" },
  ],
};

const StudentGroup = ({onClick}) => {
  console.log(onClick);
  return (
    <div className={styles.wrapper}>
      <a
        className={styles.student}

        onClick={(e) => onClick(e, { ...templateOne })}
      >
        {studentGroup[0]}
      </a>
      <a
        className={styles.student}

        onClick={(e) => onClick(e, { ...templateTwo })}
      >
        {studentGroup[1]}
      </a>
      <a
        className={styles.student}

        onClick={(e) => onClick(e, { ...templateThree })}
      >
        {studentGroup[2]}
      </a>
      <a
      className={styles.student}

      onClick={(e) => onClick(e, { ...templateFour })}
    >
      {studentGroup[3]}
    </a>
    </div>
  );
};

export default StudentGroup;
