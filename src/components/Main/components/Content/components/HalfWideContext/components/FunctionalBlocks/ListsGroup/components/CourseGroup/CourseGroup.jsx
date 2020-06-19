import React from "react";
import styles from "./CourseGroup.module.scss";

const courseGroup = [
  "Course lists by Name",
  "Course lists by ID",
  "Course lists by Level",
  "Course lists by Teacher",
];

let templateOne = {
  title: courseGroup[0],
  content: [
    { type: "Lists", range: "Half", title: "Course ID", listType: "course" },
  ],
};
let templateTwo = {
  title: courseGroup[1],
  content: [
    { type: "Lists", range: "Half", title: "Course ID", listType: "course" },
  ],
};
let templateThree = {
  title: courseGroup[2],
  content: [
    { type: "Lists", range: "Half", title: "Course ID", listType: "course" },
  ],
};
let templateFour = {
  title: courseGroup[3],
  content: [
    { type: "Lists", range: "Half", title: "Course ID", listType: "course" },
  ],
};

const CourseGroup = ({onClick}) => {
  return (
    <div className={styles.wrapper}>
      <a
        className={styles.course}
        href="#"
        onClick={(e) => onClick(e, { ...templateOne })}
      >
        {courseGroup[0]}
      </a>
      <a
        className={styles.course}
        href="#"
        onClick={(e) => onClick(e, { ...templateTwo })}
      >
        {courseGroup[1]}
      </a>
      <a
        className={styles.course}
        href="#"
        onClick={(e) => onClick(e, { ...templateThree })}
      >
        {courseGroup[2]}
      </a>
      <a
        className={styles.course}
        href="#"
        onClick={(e) => onClick(e, { ...templateFour })}
      >
        {courseGroup[3]}
      </a>
    </div>
  );
};

export default CourseGroup;
