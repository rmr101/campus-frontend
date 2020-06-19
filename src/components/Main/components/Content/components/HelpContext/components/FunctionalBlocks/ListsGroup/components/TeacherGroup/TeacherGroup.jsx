import React from "react";
import styles from './TeacherGroup.module.scss';

const teacherGroup= [
  "Teacher lists by Name",
  "Teacher lists by Teached Courses",
];

//现在 故意设计成loop的
let templateOne = {
  title: teacherGroup[0],
  content: [
    {
      type: "ListsGroup",
      range: "Half",
      title: "Teacher ID",
      listType: "teacher",
    },
  ],
};
let templateTwo = {
  title: teacherGroup[1],
  content: [
    {
      type: "ListsGroup",
      range: "Half",
      title: "Teacher ID",
      listType: "teacher",
    },
  ],
};


const TeacherGroup = ({onClick}) => {
  return (
    <div className={styles.wrapper}>
      <a
        className={styles.teacher}
        onClick={(e) => onClick(e, { ...templateOne })}
      >
        {teacherGroup[0]}
      </a>
      <a
        className={styles.teacher}
        onClick={(e) => onClick(e, { ...templateTwo })}
      >
        {teacherGroup[1]}
      </a>

    </div>
  );
};

export default TeacherGroup;
